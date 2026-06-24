import { products } from "../data/products";

const featured = [products[0], products[4]];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
      {featured.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl flex flex-col overflow-hidden border border-border/50"
        >
          <div className="aspect-square bg-muted flex items-center justify-center p-6">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col flex-grow p-5 text-center items-center">
            <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2">
              {product.category}
            </span>
            <h4 className="font-serif text-lg text-foreground leading-snug mb-2 line-clamp-2">
              {product.name}
            </h4>
            <span className="text-sm font-medium text-foreground mb-4">{product.price}</span>
            <div className="mt-auto">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-bold tracking-widest uppercase hover:bg-foreground/90 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
