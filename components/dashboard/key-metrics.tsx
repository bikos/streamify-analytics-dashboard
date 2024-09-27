// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { keyMetrics } from "@/lib/dummy-data";

// export function KeyMetrics() {
//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Total Users</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">
//             {keyMetrics.totalUsers.toLocaleString()}
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Active Users</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">
//             {keyMetrics.activeUsers.toLocaleString()}
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Total Streams</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">
//             {keyMetrics.totalStreams.toLocaleString()}
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Revenue</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">
//             ${keyMetrics.revenue.toLocaleString()}
//           </div>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Top Artist</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{keyMetrics.topArtist}</div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

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
          className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg 
                     bg-gradient-to-br from-teal-400 to-blue-500 
                     dark:from-teal-800 dark:to-blue-900 
                     hover:from-teal-300 hover:to-blue-600 
                     dark:hover:from-teal-700 dark:hover:to-blue-800
                     text-white dark:text-gray-100 border-none"
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
