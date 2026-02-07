import { connectDB } from '@/lib/db';
import Booking from '@/models/Booking';
import { sendEmail } from '@/lib/mail';
import { sendWhatsApp } from '@/lib/whatsapp';

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const meetLink = 'https://meet.google.com/demo-link';

  await Booking.create({...data, meetLink, paymentStatus:'PAID'});

  const msg = `Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
Meet: ${meetLink}`;

  await sendEmail({to:data.email,subject:'Booking Confirmed',html:`<pre>${msg}</pre>`});
  await sendWhatsApp(data.phone, msg);

  return Response.json({success:true});
}