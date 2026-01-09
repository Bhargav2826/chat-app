import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const messagesEndRef = useRef(null);

  const safeMessages = Array.isArray(messages) ? messages : [];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [safeMessages]);

  console.log("Current messages state:", messages);

  return (
    <div className="px-3 d-flex flex-column flex-fill overflow-auto">
      {/* Messages */}
      {!loading && safeMessages.length > 0 && (
        <>
          {safeMessages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </>
      )}

      {/* Skeletons */}
      {loading && (
        <>
          {[...Array(3)].map((_, idx) => (
            <MessageSkeleton key={idx} />
          ))}
        </>
      )}

      {/* Empty State */}
      {!loading && safeMessages.length === 0 && (
        <p className="text-center">Send a message to start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
