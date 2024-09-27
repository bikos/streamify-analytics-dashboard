import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

// Mock the imported components
vi.mock("@/components/dashboard/key-metrics", () => ({
  KeyMetrics: () => <div data-testid="key-metrics">Key Metrics</div>,
}));

vi.mock("@/components/dashboard/user-growth-chart", () => ({
  UserGrowthChart: () => (
    <div data-testid="user-growth-chart">User Growth Chart</div>
  ),
}));

vi.mock("@/components/dashboard/revenue-distribution-chart", () => ({
  RevenueDistributionChart: () => (
    <div data-testid="revenue-distribution-chart">
      Revenue Distribution Chart
    </div>
  ),
}));

vi.mock("@/components/dashboard/top-streamed-songs-chart", () => ({
  TopStreamedSongsChart: () => (
    <div data-testid="top-streamed-songs-chart">Top Streamed Songs Chart</div>
  ),
}));

vi.mock("@/components/dashboard/recent-streams-table", () => ({
  RecentStreamsTable: () => (
    <div data-testid="recent-streams-table">Recent Streams Table</div>
  ),
}));

vi.mock("@/components/layout/header", () => ({
  default: () => <header data-testid="header">Header</header>,
}));

vi.mock("@/components/layout/footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock("@/components/ui/tracing-beam", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tracing-beam">{children}</div>
  ),
}));

describe("Home", () => {
  it("renders the dashboard overview", () => {
    render(<Home />);
    // Check for the main title
    expect(screen.getByText("Dashboard Overview")).toBeTruthy();

    // Check for the presence of all components
    expect(screen.getByTestId("header")).toBeTruthy();
    expect(screen.getByTestId("footer")).toBeTruthy();
    expect(screen.getByTestId("tracing-beam")).toBeTruthy();
    expect(screen.getByTestId("key-metrics")).toBeTruthy();
    expect(screen.getByTestId("user-growth-chart")).toBeTruthy();
    expect(screen.getByTestId("revenue-distribution-chart")).toBeTruthy();
    expect(screen.getByTestId("top-streamed-songs-chart")).toBeTruthy();
    expect(screen.getByTestId("recent-streams-table")).toBeTruthy();
  });

  it("has the correct layout structure", () => {
    render(<Home />);
    const mainElement = screen.getByRole("main");

    expect(mainElement.getAttribute("class")).toContain(
      "flex-grow container mx-auto px-6 py-8"
    );

    const userGrowthChartContainer =
      screen.getByTestId("user-growth-chart").parentElement;
    expect(userGrowthChartContainer?.getAttribute("class")).toContain(
      "lg:col-span-4"
    );
  });
});
