export default function ShopDashboard({ shop }: { shop?: string }) {
    
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">This is {shop} shop</h1>
    </div>
  );
}
