import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { addMessage } = useConversation();

	useEffect(() => {
		if (!socket) return;

		socket.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;

			// play notification sound
			const sound = new Audio(notificationSound);
			sound.play();

			// append message safely
			addMessage(newMessage);
		});

		return () => socket.off("newMessage");
	}, [socket, addMessage]);
};

export default useListenMessages;
