import React from 'react';
import { SessionProvider, useSession } from 'next-auth/react';
import { ModalsProvider } from '@mantine/modals';

import ScenarioEditor from '@/components/ScenarioEditor/ScenarioEditor';
import { ModalProvider } from '@mantine/core/lib/components/Modal/Modal.context';

export default function HomePage() {

  return (
    <SessionProvider>
      <ModalsProvider>
        <ScenarioEditor />
      </ModalsProvider>
    </SessionProvider>
  );
}
