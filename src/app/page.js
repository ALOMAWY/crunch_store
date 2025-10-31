import Hero from "@/components/Hero";
import ProductsPage from "@/components/ProductsPage";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0 bg-gray-900">
        <ProductsPage />
      </main>
    </>
  );
}
