import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, DollarSign, Package, Store, Users } from "lucide-react"
import { VendorTable } from "./VendorTable"


export function DashboardContent() {
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  +20.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
              <Store className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  +12%
                </span>{" "}
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
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-700 flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  +8.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,429</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 flex items-center">
                  <ArrowDown className="mr-1 h-3 w-3" />
                  -3.1%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-5 p-3 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Customer</div>
                  <div>Vendor</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {[
                    {
                      id: "#4321",
                      customer: "Sarah Johnson",
                      vendor: "BeautyHub",
                      amount: "$129.99",
                      status: "Delivered",
                    },
                    {
                      id: "#4322",
                      customer: "Mike Smith",
                      vendor: "TechStore",
                      amount: "$89.50",
                      status: "Processing",
                    },
                    {
                      id: "#4323",
                      customer: "Emily Davis",
                      vendor: "FashionSpot",
                      amount: "$210.75",
                      status: "Shipped",
                    },
                    {
                      id: "#4324",
                      customer: "Alex Brown",
                      vendor: "TechStore",
                      amount: "$59.99",
                      status: "Pending",
                    },
                    {
                      id: "#4325",
                      customer: "Lisa Wilson",
                      vendor: "BeautyHub",
                      amount: "$45.25",
                      status: "Delivered",
                    },
                  ].map((order, i) => (
                    <div key={i} className="grid grid-cols-5 p-3 text-sm">
                      <div>{order.id}</div>
                      <div>{order.customer}</div>
                      <div>{order.vendor}</div>
                      <div>{order.amount}</div>
                      <div>
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Processing"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "Shipped"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-gray-100 text-gray-700",
                          )}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Top Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <VendorTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
