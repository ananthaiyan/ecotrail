// app/page.tsx

import React from 'react';
import { Reports } from '@/components/component/reports';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Reports />
    </main>
  );
};

export default Page;
