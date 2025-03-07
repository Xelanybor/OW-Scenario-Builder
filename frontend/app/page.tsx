import React from 'react';
import { SessionProvider, useSession } from 'next-auth/react';

import ScenarioEditor from '@/components/ScenarioEditor/ScenarioEditor';

export default function HomePage() {

  return (
    <SessionProvider>
      <ScenarioEditor />
    </SessionProvider>
  );
}
