import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyMetrics } from "@/lib/dummy-data";

export function KeyMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {[
        { title: "Total Users", value: keyMetrics.totalUsers },
        { title: "Active Users", value: keyMetrics.activeUsers },
        { title: "Total Streams", value: keyMetrics.totalStreams },
        { title: "Revenue", value: `$${keyMetrics.revenue}` },
        { title: "Top Artist", value: keyMetrics.topArtist },
      ].map((metric, index) => (
        <Card
          key={index}
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md 
                     bg-gradient-to-br from-gray-600 to-gray-900 
                     dark:from-gray-600 dark:to-black 
                     hover:from-gray-700 hover:to-gray-900 
                     dark:hover:from-gray-700 dark:hover:to-black
                     text-white border-none
                     shadow-sm"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {typeof metric.value === "number"
                ? metric.value.toLocaleString()
                : metric.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
