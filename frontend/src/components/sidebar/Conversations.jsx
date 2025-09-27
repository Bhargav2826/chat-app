import React from 'react';
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {

  const {loading, conversations} = useGetConversations();
  console.log("CONVERSATIONS:",conversations);
  return (
    <div className="py-2 d-flex flex-column overflow-auto">
      {conversations.map((conversation, idx) => {
        console.log("Individual conversation:", conversation);
        return (
        <Conversation
         key={conversation._id}
         conversation={conversation}
         emoji={getRandomEmoji()}
         lastIdx={idx === conversations.length - 1}
        />
      )})}
        {loading ? <span className="spinner-border d-block mx-auto"></span> : null}
    </div>
  );
};

export default Conversations;
