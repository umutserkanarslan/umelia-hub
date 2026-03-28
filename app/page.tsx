import HeroBrand from "@/components/HeroBrand";
import ProductCards from "@/components/ProductCards";
import CustomCTA from "@/components/CustomCTA";
import FooterMinimal from "@/components/FooterMinimal";

export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col w-full bg-navy">
      <HeroBrand />
      <ProductCards />
      <CustomCTA />
      <FooterMinimal />
    </main>
  );
}
