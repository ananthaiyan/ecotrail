// app/page.tsx

import React from 'react';
import { Leaderbaord } from '@/components/component/leaderbaord';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Leaderbaord />
    </main>
  );
};

export default Page;
