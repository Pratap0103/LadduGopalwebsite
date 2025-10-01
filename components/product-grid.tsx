"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const PRODUCTS = [
  { 
    name: "Swarna Parboiled Rice", 
    image: "/images/Rice/Swarna Parboiled Rice.jpg",
    description: "Premium Swarna variety with excellent aroma and taste, processed with advanced parboiling techniques."
  },
  { 
    name: "Common Parboiled Rice (Mota)", 
    image: "/images/Rice/Common Parboiled rice.jpg",
    description: "High-quality parboiled rice with enhanced nutritional value and extended shelf life."
  },
  { 
    name: "IR 64 Parboiled Rice", 
    image: "/images/Rice/ir 64 parboiled rice.jpg",
    description: "Long-grain IR 64 variety known for its superior cooking quality and non-sticky texture."
  },
  { 
    name: "Raw Rice", 
    image: "/images/Rice/Raw rice.jpg",
    description: "Pure, unprocessed rice grains maintaining natural nutrients and authentic flavor."
  },
  { 
    name: "100 Broken Raw Rice", 
    image: "/images/Rice/100 Broken Raw Rice.jpg",
    description: "Cost-effective broken rice ideal for various culinary applications and food processing."
  },
  { 
    name: "Puffed Rice (Muri Rice)", 
    image: "/images/Rice/Puffed Rice.jpg",
    description: "Light, crispy puffed rice perfect for snacks, cereals, and traditional preparations."
  },
  { 
    name: "Biomass Pellets", 
    image: "/images/Rice/Biomass Pellets.jpg",
    description: "Eco-friendly fuel pellets made from rice husks, providing sustainable energy solutions."
  },
  { 
    name: "Biomass Briquettes", 
    image: "/images/Rice/biomass-briquettes.jpg",
    description: "Compressed biomass briquettes offering clean burning and high calorific value."
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {PRODUCTS.map((product, idx) => (
        <Card key={product.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
              {product.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100 mb-3">
              <Image
                src={product.image}
                alt={`${product.name} - High quality rice processing`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                quality={70}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wCEAAkGBxISEhISEhIVFhUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAAEAAQMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAAABQYC/8QAGxAAAwEBAQEAAAAAAAAAAAAAAQIDABESIUH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEDITH/2gAMAwEAAhEDEQA/AJ9gKpT2y0vUu6y0Q0q0Yq0m9R0m0jQfYl8p7w5Yh5w2m1m0y9kYt3b0b0mQz7v3VgI9cM2V3j1QY0f//Z"
                loading={idx < 2 ? 'eager' : 'lazy'}
                priority={idx < 2}
                onError={(e) => {
                  console.log(`Failed to load image: ${product.image}`)
                  ;(e.currentTarget as any).style.display = 'none'
                }}
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


