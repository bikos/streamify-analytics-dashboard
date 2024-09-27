// "use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { userGrowthData } from "@/lib/dummy-data";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// export function UserGrowthChart() {
//   return (
//     <Card className="col-span-4">
//       <CardHeader>
//         <CardTitle>User Growth</CardTitle>
//       </CardHeader>
//       <CardContent className="h-[400px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart
//             data={userGrowthData}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="totalUsers"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//             />
//             <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
//           </LineChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userGrowthData } from "@/lib/dummy-data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function UserGrowthChart() {
  return (
    <Card
      className="col-span-4 transition-all duration-300 ease-in-out  hover:shadow-lg 
                     bg-gradient-to-br from-teal-400 to-blue-500 
                     dark:from-teal-800 dark:to-blue-900 
                     hover:from-teal-300 hover:to-blue-600 
                     dark:hover:from-teal-700 dark:hover:to-blue-800
                     text-white dark:text-gray-100
                     border-0"
    >
      <CardHeader>
        <CardTitle className="text-white dark:text-gray-100">
          User Growth
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={userGrowthData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255, 255, 255, 0.1)"
            />
            <XAxis dataKey="date" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "none",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <Legend wrapperStyle={{ color: "white" }} />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#00f2fe"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#ff00e0"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
