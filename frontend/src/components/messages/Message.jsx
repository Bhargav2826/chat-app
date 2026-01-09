import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import "./Message.css"; // Import the new CSS file

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const senderRaw = message?.senderID ?? message?.senderId ?? message?.sender?._id;
	const myIdRaw = authUser?._id;
	const sender = senderRaw != null ? String(senderRaw) : undefined;
	const myId = myIdRaw != null ? String(myIdRaw) : undefined;
	const fromMe = Boolean(sender && myId && sender === myId);
	const formattedTime = message?.createdAt ? extractTime(message.createdAt) : "";
	
	// Debug alignment
	console.log("Message align debug:", { authId: myId, senderID: message?.senderID, senderId: message?.senderId, computedSender: sender, fromMe });
	
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const messageBubbleClass = fromMe ? "my-message-bubble" : "other-message-bubble";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className="w-100" style={{ display: 'flex', justifyContent: fromMe ? 'flex-end' : 'flex-start' }}>
			{/* Avatar for others' messages */}
			{!fromMe && (
				<div className="me-2"> 
					<img
						alt="profile"
						src={profilePic}
						className="rounded-circle"
						style={{ width: "40px", height: "40px", objectFit: "cover" }}
					/>
				</div>
			)}

			{/* Message bubble */}
			<div>
				<div className={`${messageBubbleClass} ${shakeClass}`} style={{ maxWidth: "300px", wordBreak: 'break-all' }}>
					{message.message}
				</div>
				
				<div className={`text-small mt-1 ${fromMe ? 'text-end' : 'text-start'}`}>{formattedTime}</div>
			</div>

			{/* Avatar for my messages */}
			{fromMe && (
				<div className="ms-2"> 
					<img
						alt="profile"
						src={profilePic}
						className="rounded-circle"
						style={{ width: "40px", height: "40px", objectFit: "cover" }}
					/>
				</div>
			)}
		</div>
	);
};

export default Message;
