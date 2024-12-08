// app/page.tsx

import React from 'react';

import { Settings } from '@/components/component/settings';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Settings />
    </main>
  );
};

export default Page;
