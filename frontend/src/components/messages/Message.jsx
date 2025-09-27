import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import "./Message.css"; // Import the new CSS file

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderID === authUser._id;
	const formattedTime = message?.createdAt ? extractTime(message.createdAt) : "";
	
	const chatClassName = fromMe 
  ? "d-flex justify-content-end" 
  : "d-flex justify-content-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const messageBubbleClass = fromMe ? "my-message-bubble" : "other-message-bubble";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={chatClassName}>
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
