'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import { Toaster } from 'sonner';

import { TooltipProvider } from '@/components/ui/tooltip';

// !! We could perfectly not have a setter here and forget about this linter line but it's supposedly a code smell
export function Providers({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryClient, _setQueryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster richColors theme='system' />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
