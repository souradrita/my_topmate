'use client';
import { useRouter } from 'next/navigation';

export default function Pay() {
  const router = useRouter();

  async function confirm() {
    const booking = JSON.parse(localStorage.getItem('booking'));
    await fetch('/api/booking', {
      method: 'POST',
      body: JSON.stringify({...booking, service:'1:1 Career Call', price:999})
    });
    router.push('/success');
  }

  return (
    <div>
      <img src="/gpay-qr.png" />
      <button onClick={confirm}>I've Paid</button>
    </div>
  );
}