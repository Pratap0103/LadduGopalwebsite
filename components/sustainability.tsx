export function Sustainability() {
  return (
    <section id="sustainability" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-balance">Sustainability & Responsibility</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold">Efficient Water Usage</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Optimized processes reduce waste and preserve resources.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold">Energy Conservation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Modern machinery and renewable energy initiatives.</p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <h3 className="font-semibold">Community & Farmers</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Employment opportunities and long-term farmer programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
