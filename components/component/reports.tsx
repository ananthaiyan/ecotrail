"use client";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveLine } from "@nivo/line"
import { UserButton } from "@clerk/nextjs";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

export function Reports() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="ml-auto flex items-center gap-2 px-5 py-5">
        <Button variant="custom" className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-green bg-[linear-gradient(110deg,#319e0d,45%,#d2fba4,55%,#319e0d)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-green-50">
  Generate Report
</Button>
       <UserButton />
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Carbon Footprint Reports</h1>
            <p className="text-muted-foreground">
              Understand your environmental impact and track your progress towards sustainability goals.<br></br>
              Use our AI Report Generator to generate monthly reports for your mine's emissions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Carbon Footprint</CardTitle>
                <CardDescription>Your overall environmental impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">12.5</span>
                  <span className="text-muted-foreground">tons CO2e</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Usage</CardTitle>
                <CardDescription>Breakdown of your energy consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <StackedbarChart className="aspect-[4/3]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emissions by Source</CardTitle>
                <CardDescription>Understand your main sources of emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart className="aspect-square" />
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Detailed Reports</h2>
            <p className="text-muted-foreground">Dive deeper into your carbon footprint with these detailed reports.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Historical Trends</CardTitle>
                  <CardDescription>Track your carbon footprint over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Emissions by Category</CardTitle>
                  <CardDescription>Breakdown of emissions by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Energy Efficiency</CardTitle>
                  <CardDescription>Analyze your energy efficiency over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Goals and Progress</h2>
            <p className="text-muted-foreground">Set sustainability goals and track your progress towards them.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Emissions Reduction Goal</CardTitle>
                  <CardDescription>Reduce emissions by 20% by 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">15%</span>
                      <span className="text-muted-foreground">progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-primary" />
                      <span className="text-muted-foreground">On track</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[15%] rounded-full bg-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Renewable Energy Goal</CardTitle>
                  <CardDescription>Reach 50% renewable energy by 2030</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">25%</span>
                      <span className="text-muted-foreground">progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">Needs improvement</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[25%] rounded-full bg-secondary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Waste Reduction Goal</CardTitle>
                  <CardDescription>Reduce waste by 30% by 2027</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">10%</span>
                      <span className="text-muted-foreground">progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-muted" />
                      <span className="text-muted-foreground">Behind schedule</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[10%] rounded-full bg-muted" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#7ed957"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#7ed957", "#319e0d"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function PieChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={["#319e0d"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function StackedbarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#7ed957", "#319e0d"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A stacked bar chart"
      />
    </div>
  )
}
