import nodemailer from 'nodemailer';
export async function sendEmail({to,subject,html}){
 const t=nodemailer.createTransport({service:'gmail',auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}});
 await t.sendMail({from:process.env.EMAIL_USER,to,subject,html});
}