export default function PromoBanner() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[380px]" style={{ background: "hsl(45 30% 93%)" }}>
        <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-12 md:py-16">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
            Limited Time
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-[1.1] mb-5">
            Upgrade Your<br />Morning Routine.
          </h2>
          <p className="text-base text-muted-foreground max-w-sm mb-8 leading-relaxed font-light">
            Our dentist-curated bundle covers every step — whitening, brushing, and flossing — with products proven to deliver results you'll notice within weeks.
          </p>
          <div>
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border-2 border-foreground text-foreground text-sm font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Discover More
            </a>
          </div>
        </div>
        <div className="flex-1 relative min-h-[260px] md:min-h-full">
          <img
            src="https://m.media-amazon.com/images/I/71u9iI7-lDL._AC_SL1500_.jpg"
            alt="Featured dental product"
            className="absolute inset-0 w-full h-full object-contain p-10"
          />
        </div>
      </div>
    </section>
  );
}
