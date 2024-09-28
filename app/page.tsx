import { KeyMetrics } from "@/components/dashboard/key-metrics";
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart";
import { RevenueDistributionChart } from "@/components/dashboard/revenue-distribution-chart";
import { TopStreamedSongsChart } from "@/components/dashboard/top-streamed-songs-chart";
import { RecentStreamsTable } from "@/components/dashboard/recent-streams-table";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TracingBeam from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen dotted-grid">
      <Header />
      <TracingBeam>
        <main className="flex-grow container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
          <div className="space-y-8">
            <KeyMetrics />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <RevenueDistributionChart />
              </div>
              <div className="lg:col-span-2">
                <TopStreamedSongsChart />
              </div>
            </div>
            <UserGrowthChart />
            <RecentStreamsTable />
          </div>
        </main>
      </TracingBeam>
      <Footer />
    </div>
  );
}
