import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation";

import notificationSound from "../sounds/mixkit-positive-notification-951.wav";


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		console.log("useListenMessages: socket object", socket);
		console.log("Attaching newMessage listener...");
		socket?.on("newMessage", (newMessage) => {
			console.log("New message received via socket:", newMessage);
			// Only append if the message is for the currently open conversation
			const isForThisConversation =
				newMessage?.senderID?.toString() === selectedConversation?._id?.toString() ||
				newMessage?.receiverID?.toString() === selectedConversation?._id?.toString();

			if (!isForThisConversation) return;

			newMessage.shouldShake = true;
			const sounds = new Audio(notificationSound);
			sounds.play();
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, selectedConversation?._id, setMessages]);
};

export default useListenMessages;
