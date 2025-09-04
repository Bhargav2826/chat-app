import Conversation from "../models/conversation.model.js";  // ✅ import Conversation
import Message from "../models/message.model.js";  // ✅ if you use Message


export const sendMessage = async(req, res) => {
   try{
      const {message} = req.body;
      const {id:receiverID} = req.params;
      const senderID= req.user._id;

      let conversation = await Conversation.findOne({
         participants:{$all:[senderID, receiverID]}, 
      });

      if(!conversation){
         conversation = await Conversation.create({
            participants: [senderID, receiverID],
         });
      }

      const newMessage = new Message({
         senderID: senderID,
         receiverID: receiverID,
         message,
      });

      if(newMessage){
         conversation.messages.push(newMessage._id);
      } 

      // SOCKET IO FUNCTIONALITY WILL GO HERE

      // await conversation.save();
     // await newMessage.save();

      await Promise.all([conversation.save(), newMessage.save()]);

      res.status(201).json({newMessage  });

   } catch (error) {
      console.log("Error in sendmessage controller: ",  error.message)
      res.status(500).json({error:"Internal server error"});
   }
};

export const getMessage = async (req, res) => {

   try{

      const {id:userToChatId}= req.params;
      const senderID = req.user._id;

      const conversation = await Conversation.findOne({
         participants: { $all: [senderID, userToChatId]}
      }).populate("messages");

      if (!conversation) return res.status(200).json([]);

      const messages = conversation.messages;

      res.status(200).json(messages);
   }catch (error){
      console.log("error in sendmessage controller:", error.message);
      res.status(500).json({error: "internal server error"});
   }
};