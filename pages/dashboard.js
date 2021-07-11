import SiteTableSkeleton from "@/components/table/SiteTableSkeleton";
import EmptyState from "@/components/EmptyState";
import SiteTable from "@/components/table/SiteTable";
import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import useSWR from 'swr';
import fetcher from "@/utils/fetcher";

export default function Dashboard() {
  const auth = useAuth();

  const { error, data } = useSWR('/api/sites', fetcher);

  console.log(data);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {
        data.sites ?
          <SiteTable sites={data.sites} /> :
          <EmptyState />}
    </DashboardShell>
  );
}
