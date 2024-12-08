// app/page.tsx

import React from 'react';
import { EcoBot } from '@/components/component/eco-bot';
import { Chatbot } from '@/components/Chatbot';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Chatbot />
    </main>
  );
};

export default Page;
