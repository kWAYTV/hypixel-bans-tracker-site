'use client';

import { ActivityChart } from '@/components/core/dashboard/activity-chart/chart';
import { ActivityLog } from '@/components/core/dashboard/activity-log/log';
import { DashboardHeader } from '@/components/core/dashboard/header';
import { DashboardToolbar } from '@/components/core/dashboard/interval/toolbar';
import { StatsOverview } from '@/components/core/dashboard/stats/overview';
import { useBanStats } from '@/hooks/use-ban-stats';

interface DashboardProps {
  isModal?: boolean;
}

export function Dashboard({ isModal = false }: DashboardProps) {
  const { timeLeft, isFetching, currentStats, history } = useBanStats();

  return (
    <div className={isModal ? '' : 'flex flex-1 flex-col'}>
      {!isModal && <DashboardHeader />}
      <main className={isModal ? '' : 'container mx-auto flex-1'}>
        <DashboardToolbar isUpdating={isFetching} timeLeft={timeLeft} />
        <div className='space-y-4 px-4 md:space-y-6 md:p-6'>
          <StatsOverview stats={currentStats} loading={isFetching} />
          <div className='grid gap-4 md:grid-cols-[1fr,300px] lg:grid-cols-[1fr,400px]'>
            <ActivityChart data={history} />
            <ActivityLog data={history} />
          </div>
        </div>
      </main>
    </div>
  );
}
