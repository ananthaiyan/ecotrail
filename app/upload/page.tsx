// app/page.tsx

import React from 'react';
import Upload from '@/components/upload';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Upload />
    </main>
  );
};

export default Page;
