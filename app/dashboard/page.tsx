// app/page.tsx

import React from 'react';
import Dashboard from '@/components/Dashboard';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Dashboard />
    </main>
  );
};

export default Page;
