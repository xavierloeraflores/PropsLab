"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Label,
} from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "~/components/ui/chart";

const chartConfig = {
  tarik: {
    label: "Tarik Skubal",
    color: "hsl(var(--chart-1))",
  },
  michael: {
    label: "Michael King",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

// https://www.mlb.com/player/tarik-skubal-669373?stats=gamelogs-r-pitching-mlb&year=2024
// https://www.mlb.com/player/michael-king-650633?stats=gamelogs-r-pitching-mlb&year=2024
const chartData = [
  { game: "1", tarik: 7, michael: 3 },
  { game: "2", tarik: 7, michael: 7 },
  { game: "3", tarik: 6, michael: 6 },
  { game: "4", tarik: 7, michael: 8 },
  { game: "5", tarik: 8, michael: 3 },
  { game: "6", tarik: 8, michael: 7 },
  { game: "7", tarik: 5, michael: 6 },
];

export function Feature1() {
  return (
    <div className="h-fit max-h-fit w-full max-w-[50vw]">
      <ChartContainer
        config={chartConfig}
        className="flex h-fit min-h-[300px] w-full flex-col justify-center"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value) => `Game ${value}`}
              />
            }
          />
          <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
          <XAxis dataKey="game">
            <Label
              value="Strikeouts (Last 7 games)"
              offset={0}
              position="insideBottom"
            />
          </XAxis>
          <YAxis></YAxis>
          <Bar dataKey="tarik" fill="var(--color-tarik)" radius={4} />
          <Bar dataKey="michael" fill="var(--color-michael)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
