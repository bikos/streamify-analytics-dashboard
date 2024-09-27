import { addDays, subDays, subMonths, format } from "date-fns";

export const keyMetrics = {
  totalUsers: 1000000,
  activeUsers: 750000,
  totalStreams: 5000000,
  revenue: 10000000,
  topArtist: "The Weeknd",
};

export const userGrowthData = Array.from({ length: 12 }, (_, i) => ({
  date: format(subMonths(new Date(), 11 - i), "MMM yyyy"),
  totalUsers: Math.floor(Math.random() * 100000) + 900000,
  activeUsers: Math.floor(Math.random() * 75000) + 675000,
}));

export const revenueDistribution = [
  { name: "Subscriptions", value: 7500000 },
  { name: "Advertisements", value: 2000000 },
  { name: "Other", value: 500000 },
];

export const topStreamedSongs = [
  { name: "Blinding Lights", streams: 1000000 },
  { name: "Shape of You", streams: 900000 },
  { name: "Dance Monkey", streams: 800000 },
  { name: "Rockstar", streams: 700000 },
  { name: "Someone You Loved", streams: 600000 },
];

export const recentStreams = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  songName: `Song ${i + 1}`,
  artist: `Artist ${Math.floor(i / 5) + 1}`,
  dateStreamed: format(subDays(new Date(), i), "yyyy-MM-dd"),
  streamCount: Math.floor(Math.random() * 1000) + 1,
  userId: `user_${Math.floor(Math.random() * 1000) + 1}`,
}));
