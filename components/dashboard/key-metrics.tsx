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
                     bg-gradient-to-br from-blue-400 to-purple-400 
                     dark:from-blue-600 dark:to-purple-600 
                     hover:from-blue-500 hover:to-purple-500 
                     dark:hover:from-blue-700 dark:hover:to-purple-700
                     text-white dark:text-gray-100 border-none
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
