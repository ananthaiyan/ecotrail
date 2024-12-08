// app/page.tsx

import React from 'react';
import EcoTrailMapCard from '@/components/component/eco-map';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <EcoTrailMapCard />
    </main>
  );
};

export default Page;
