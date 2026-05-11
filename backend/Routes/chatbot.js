const express=require('express');

const router=express.Router();
const{askChatbot}=require('../Controller/chatbot')

router.post('/chat',askChatbot);

module.exports=router;