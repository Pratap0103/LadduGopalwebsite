"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const ProductGrid = dynamic(() => import("@/components/product-grid").then(m => m.ProductGrid), {
  ssr: false,
  loading: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border bg-card animate-pulse"
        >
          <div className="p-4 pb-2">
            <div className="h-5 w-2/3 bg-muted rounded" />
          </div>
          <div className="px-4">
            <div className="aspect-[4/3] w-full bg-muted rounded-lg" />
            <div className="h-4 w-5/6 bg-muted rounded my-3" />
          </div>
        </div>
      ))}
    </div>
  ),
})

export default function ProductsSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <section id="products" aria-labelledby="products-heading" className="py-16 md:py-24 scroll-mt-24" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 id="products-heading" className="font-serif text-3xl md:text-4xl text-balance mb-8">
          Our Products
        </h2>
        {visible ? <ProductGrid /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-lg border bg-card animate-pulse">
                <div className="p-4 pb-2">
                  <div className="h-5 w-2/3 bg-muted rounded" />
                </div>
                <div className="px-4">
                  <div className="aspect-[4/3] w-full bg-muted rounded-lg" />
                  <div className="h-4 w-5/6 bg-muted rounded my-3" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
