import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { recentStreams } from "@/lib/dummy-data";

export function RecentStreamsTable() {
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
          Recent Streams
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-black bg-opacity-20 hover:bg-opacity-30">
                <TableHead className="text-white font-semibold">
                  Song Name
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Artist
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Date Streamed
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Stream Count
                </TableHead>
                <TableHead className="text-white font-semibold">
                  User ID
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentStreams.map((stream) => (
                <TableRow
                  key={stream.id}
                  className="hover:bg-black hover:bg-opacity-10"
                >
                  <TableCell className="text-white">
                    {stream.songName}
                  </TableCell>
                  <TableCell className="text-white">{stream.artist}</TableCell>
                  <TableCell className="text-white">
                    {stream.dateStreamed}
                  </TableCell>
                  <TableCell className="text-white">
                    {stream.streamCount}
                  </TableCell>
                  <TableCell className="text-white">{stream.userId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
