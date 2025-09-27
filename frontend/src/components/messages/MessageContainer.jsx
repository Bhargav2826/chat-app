import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="d-flex flex-column" style={{ minWidth: "450px" }}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-secondary px-3 py-2 mb-2">
						<span className="form-label">To:</span>{" "}
						<span className="text-dark fw-bold">
							{selectedConversation.fullName}
						</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className="d-flex align-items-center justify-content-center w-100 h-100">
			<div className="px-3 text-center fw-semibold d-flex flex-column align-items-center gap-2">
				<p className="text-light">Welcome 👋 {authUser.fullname} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="fs-1 text-center" />
			</div>
		</div>
	);
};
