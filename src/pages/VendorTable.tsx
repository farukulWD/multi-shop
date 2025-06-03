import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function VendorTable() {
  const vendors = [
    { name: "BeautyHub", revenue: "$12,234", products: 45, rating: 4.8 },
    { name: "TechStore", revenue: "$9,876", products: 78, rating: 4.6 },
    { name: "FashionSpot", revenue: "$8,543", products: 32, rating: 4.7 },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vendor</TableHead>
          <TableHead className="text-right">Revenue</TableHead>
          <TableHead className="text-right">Products</TableHead>
          <TableHead className="text-right">Rating</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vendors.map((vendor, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${vendor.name.charAt(0)}`} />
                  <AvatarFallback className="bg-green-700 text-white">{vendor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {vendor.name}
              </div>
            </TableCell>
            <TableCell className="text-right">{vendor.revenue}</TableCell>
            <TableCell className="text-right">{vendor.products}</TableCell>
            <TableCell className="text-right">{vendor.rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
