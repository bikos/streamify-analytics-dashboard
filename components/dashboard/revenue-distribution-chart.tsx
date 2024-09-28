"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueDistribution } from "@/lib/dummy-data";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const COLORS = ["#D98594", "#6396D8", "#FECD71"];

export function RevenueDistributionChart() {
  const [activeDatasets] = useState(revenueDistribution.map(() => true));

  const chartData = {
    labels: revenueDistribution.map((item) => item.name),
    datasets: [
      {
        data: revenueDistribution.map((item, index) =>
          activeDatasets[index] ? item.value : 0
        ),
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
      },
    ],
  };

  const chartRef = useRef<ChartJS<"pie">>(null);

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        callbacks: {
          label: function (context: TooltipItem<"pie">) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
  };

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
          Revenue Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <Pie data={chartData} options={options} ref={chartRef} />
      </CardContent>
    </Card>
  );
}
