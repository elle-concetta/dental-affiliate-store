import TrustBadgePanel from "./TrustBadgePanel";
import FeaturedProducts from "./FeaturedProducts";

export default function FeaturedRow() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="md:col-span-1">
          <TrustBadgePanel />
        </div>
        <div className="md:col-span-2">
          <FeaturedProducts />
        </div>
      </div>
    </section>
  );
}
