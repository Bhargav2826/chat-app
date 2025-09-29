import {create} from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (next) => {
        // next can be an array or a function(prevMessages) => newMessages
        set((state) => {
            const resolved = typeof next === 'function' ? next(state.messages) : next;
            console.log("Setting messages in Zustand:", resolved);
            return { messages: resolved };
        });
    },
}))

export default useConversation;