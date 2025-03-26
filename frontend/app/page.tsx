import React from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import { ModalsProvider } from '@mantine/modals';

import ScenarioEditor from '@/components/ScenarioEditor/ScenarioEditor';

export default function HomePage() {

  return (
    <SessionProvider>
      <ModalsProvider>
        <ScenarioEditor />
      </ModalsProvider>
    </SessionProvider>
  );
}
