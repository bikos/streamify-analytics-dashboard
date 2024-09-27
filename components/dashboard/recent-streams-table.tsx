"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentStreams } from "@/lib/dummy-data";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@/styles/ag-grid-custom.css";
import { useCallback, useMemo, useState } from "react";
import { ColDef, GridOptions } from "ag-grid-community";

type RowDataType = {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
};

export function RecentStreamsTable() {
  const [rowData] = useState(recentStreams);

  const columnDefs: ColDef<RowDataType>[] = [
    { field: "songName", headerName: "Song Name" },
    { field: "artist", headerName: "Artist" },
    { field: "dateStreamed", headerName: "Date Streamed" },
    { field: "streamCount", headerName: "Stream Count" },
    { field: "userId", headerName: "User ID" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  const gridOptions = useMemo(
    () => ({
      domLayout: "autoHeight",
      suppressHorizontalScroll: true,
    }),
    []
  );

  const onGridReady = useCallback(
    (params: { api: { sizeColumnsToFit: () => void } }) => {
      params.api.sizeColumnsToFit();
    },
    []
  );

  return (
    <Card
      className="col-span-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md 
                 bg-indigo-500 dark:bg-indigo-700
                 hover:bg-indigo-600 dark:hover:bg-indigo-800
                 text-white dark:text-gray-100 border-none
                 shadow-sm"
    >
      <CardHeader>
        <CardTitle className="text-white dark:text-gray-100">
          Recent Streams
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-scroll">
        <div className="ag-theme-alpine-dark h-full w-full">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions as GridOptions<RowDataType>}
            onGridReady={onGridReady}
          />
        </div>
      </CardContent>
    </Card>
  );
}
