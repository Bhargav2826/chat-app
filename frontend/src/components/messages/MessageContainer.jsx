import React from 'react'
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="d-flex flex-column" style={{ minWidth: "450px", height: "100%" }}>
      {noChatSelected ? <NoChatSelected /> : (
        <>
          <div className="bg-light px-3 py-2 mb-2 rounded">
            <span className="form-label text-dark fw-bold">To:</span>{" "}
            <span className="text-dark fw-bold">Bhargav</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <div className="px-4 text-center fw-semibold d-flex flex-column align-items-center gap-2">
        <p className="fs-5 text-light">Welcome Bhargav</p>
        <p className="fs-6 text-light">Select a chat to start messaging</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="Color-light" className="bi bi-chat-square-text" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
      </div>
    </div>
  )
}
