import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	// replace messages entirely
	setMessages: (messages) => set({ messages }),
	// append safely without losing state
	addMessage: (message) =>
  set((state) => {
    const exists = state.messages.some((m) => m._id === message._id);
    if (exists) return state; // skip duplicate
    return { messages: [...state.messages, message] };
  }),

}));

export default useConversation;
