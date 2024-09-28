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
      className="col-span-2 transition-all duration-300 ease-in-out hover:shadow-md 
                     bg-gradient-to-br from-gray-600 to-gray-900 
                     dark:from-gray-600 dark:to-black 
                     hover:from-gray-700 hover:to-gray-900 
                     dark:hover:from-gray-700 dark:hover:to-black
                     text-white border-none
                     shadow-sm"
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
              strokeDasharray="1 1"
              stroke="rgba(255, 255, 255, 0.1)"
            />
            <XAxis type="number" tick={{ fill: "white" }} />
            <YAxis dataKey="name" type="category" tick={{ fill: "white" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "none",
                borderRadius: "4px",
                color: "black",
              }}
            />
            <Legend wrapperStyle={{ color: "white" }} />
            <Bar dataKey="streams" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
