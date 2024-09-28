import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyMetrics } from "@/lib/dummy-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserCheck,
  faPlayCircle,
  faDollarSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export function KeyMetrics() {
  const metrics = [
    {
      title: "Total Users",
      value: keyMetrics.totalUsers,
      icon: faUsers,
      color: "#00ffff",
    },
    {
      title: "Active Users",
      value: keyMetrics.activeUsers,
      icon: faUserCheck,
      color: "#ff00ff",
    },
    {
      title: "Total Streams",
      value: keyMetrics.totalStreams,
      icon: faPlayCircle,
      color: "#ffff00",
    },
    {
      title: "Revenue",
      value: `$${keyMetrics.revenue}`,
      icon: faDollarSign,
      color: "#00ff00",
    },
    {
      title: "Top Artist",
      value: keyMetrics.topArtist,
      icon: faStar,
      color: "#ff8c00",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric, index) => (
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
            <div className="top-0 right-2">
              <FontAwesomeIcon
                icon={metric.icon}
                className="w-6 h-6"
                style={{ color: metric.color }}
              />
            </div>
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
