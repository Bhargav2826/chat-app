import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation";

import notificationSound from "../sounds/mixkit-positive-notification-951.wav";


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		console.log("useListenMessages: socket object", socket); // Add this line
		socket?.on("newMessage", (newMessage) => {
			console.log("New message received via socket:", newMessage); // ENSURE THIS IS PRESENT
			newMessage.shouldShake = true;
			const sounds = new Audio(notificationSound);
			sounds.play();
			// const sound = new Audio(notificationSound);
			// sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};

export default useListenMessages;
