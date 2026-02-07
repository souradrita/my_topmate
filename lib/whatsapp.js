import axios from 'axios';
export async function sendWhatsApp(to,message){
 await axios.post(`https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_ID}/messages`,{
   messaging_product:'whatsapp',to,type:'text',text:{body:message}
 },{headers:{Authorization:`Bearer ${process.env.WHATSAPP_TOKEN}`}});
}