// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { revenueDistribution } from "@/lib/dummy-data";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   Legend,
// } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// export function RevenueDistributionChart() {
//   return (
//     <Card className="col-span-2">
//       <CardHeader>
//         <CardTitle>Revenue Distribution</CardTitle>
//       </CardHeader>
//       <CardContent className="h-[400px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={revenueDistribution}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               outerRadius={80}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {revenueDistribution.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueDistribution } from "@/lib/dummy-data";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export function RevenueDistributionChart() {
  return (
    <Card
      className="col-span-2 transition-all duration-300 ease-in-out  hover:shadow-lg 
                     bg-gradient-to-br from-teal-400 to-blue-500 
                     dark:from-teal-800 dark:to-blue-900 
                     hover:from-teal-300 hover:to-blue-600 
                     dark:hover:from-teal-700 dark:hover:to-blue-800
                     text-white dark:text-gray-100
                     border-0"
    >
      <CardHeader>
        <CardTitle className="text-white dark:text-gray-100">
          Revenue Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={revenueDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {revenueDistribution.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                border: "none",
              }}
            />
            <Legend wrapperStyle={{ color: "#ffffff" }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
