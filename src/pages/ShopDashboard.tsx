import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  Eye,
  Plus,
  Download,
  Filter,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const salesData = [
  { month: "Jan", revenue: 4500, orders: 89 },
  { month: "Feb", revenue: 5200, orders: 102 },
  { month: "Mar", revenue: 4800, orders: 95 },
  { month: "Apr", revenue: 6100, orders: 118 },
  { month: "May", revenue: 5900, orders: 112 },
  { month: "Jun", revenue: 7200, orders: 135 },
];

const recentOrders = [
  {
    id: "#3210",
    customer: "Alice Johnson",
    product: "Wireless Headphones",
    amount: 129.99,
    status: "completed",
  },
  {
    id: "#3209",
    customer: "Bob Smith",
    product: "Smart Watch",
    amount: 299.99,
    status: "processing",
  },
  {
    id: "#3208",
    customer: "Carol Davis",
    product: "Bluetooth Speaker",
    amount: 79.99,
    status: "completed",
  },
  {
    id: "#3207",
    customer: "David Wilson",
    product: "Phone Case",
    amount: 24.99,
    status: "shipped",
  },
  {
    id: "#3206",
    customer: "Eva Brown",
    product: "Laptop Stand",
    amount: 89.99,
    status: "completed",
  },
];

const topProducts = [
  { name: "Wireless Headphones", sales: 145, revenue: 18850 },
  { name: "Smart Watch", sales: 89, revenue: 26699 },
  { name: "Bluetooth Speaker", sales: 67, revenue: 5359 },
  { name: "Phone Case", sales: 234, revenue: 5849 },
];

export default function ShopDashboard({ shop = "Demo" }: { shop?: string }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-green-500" style={{ textTransform: "capitalize" }}>{shop}</span>{" "}
                Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back! Here's what's happening with your store today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button className="bg-green-700 hover:bg-green-800 gap-2">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <strong className="text-red-500 font-semibold ">Everything is static data not functional</strong>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$33,700</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +12.5%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">651</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +8.2%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center gap-1">
                  <Plus className="h-3 w-3" />5 new this week
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,429</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +15.3%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-700" />
                Revenue Overview
              </CardTitle>
              <CardDescription>
                Monthly revenue for the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: {
                    label: "Revenue",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#15803d"
                      strokeWidth={3}
                      dot={{ fill: "#15803d", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-green-700" />
                Orders Overview
              </CardTitle>
              <CardDescription>
                Monthly orders for the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  orders: {
                    label: "Orders",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="orders"
                      fill="#15803d"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tables Section */}
        <Tabs defaultValue="orders" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="products">Top Products</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Latest orders from your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>${order.amount}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "completed"
                                ? "default"
                                : order.status === "processing"
                                ? "secondary"
                                : "outline"
                            }
                            className={
                              order.status === "completed"
                                ? "bg-green-700 hover:bg-green-800"
                                : ""
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Products</CardTitle>
                <CardDescription>
                  Your best-selling products this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Sales</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topProducts.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>
                        <TableCell>{product.sales} units</TableCell>
                        <TableCell>
                          ${product.revenue.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to manage your shop</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button className="h-20 bg-green-700 hover:bg-green-800 flex-col gap-2">
                <Plus className="h-6 w-6" />
                Add Product
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Package className="h-6 w-6" />
                Manage Inventory
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Users className="h-6 w-6" />
                View Customers
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2">
                <Download className="h-6 w-6" />
                Export Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
