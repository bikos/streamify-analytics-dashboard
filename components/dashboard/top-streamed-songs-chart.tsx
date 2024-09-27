"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topStreamedSongs } from "@/lib/dummy-data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function TopStreamedSongsChart() {
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
          Top 5 Streamed Songs
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topStreamedSongs}
            layout="vertical"
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
            <XAxis type="number" tick={{ fill: "white" }} />
            <YAxis dataKey="name" type="category" tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                border: "none",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="streams" fill="#00f2fe" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
