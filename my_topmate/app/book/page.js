'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Book() {
  const router = useRouter();
  const [form, setForm] = useState({});

  function next() {
    localStorage.setItem('booking', JSON.stringify(form));
    router.push('/pay');
  }

  return (
    <div>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} />
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} />
      <input placeholder="WhatsApp Number" onChange={e=>setForm({...form,phone:e.target.value})} />
      <input type="date" onChange={e=>setForm({...form,date:e.target.value})} />
      <input type="time" onChange={e=>setForm({...form,time:e.target.value})} />
      <button onClick={next}>Proceed to Pay</button>
    </div>
  );
}