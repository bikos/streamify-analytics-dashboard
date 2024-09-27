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
      className="col-span-2 transition-all duration-300 ease-in-out hover:shadow-md 
                 bg-gradient-to-br from-blue-400 to-purple-400 
                 dark:from-blue-600 dark:to-purple-600 
                 hover:from-blue-500 hover:to-purple-500 
"
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
              outerRadius="90%"
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
