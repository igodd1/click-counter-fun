import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <Button onClick={() => setCount((prev) => prev + 1)}>clique aqui</Button>
      <span className="text-2xl font-bold">{count}</span>
    </div>
  );
}
