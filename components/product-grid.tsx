"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
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

const PRODUCT_OPTIONS = [
  "Parboiled Rice IR 64",
  "Raw Rice",
  "Rice Husk Powder",
  "Ferro Silicon",
  "Fortified Rice Kernals",
  "Whole Gram",
  "Rice Bran",
  "Other"
]

const WHO_ARE_YOU_OPTIONS = [
  "Retailer/Wholesaler",
  "Exporter",
  "Manufacturer",
  "Consumer"
]

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwPlvsV2gmZVMuAsw34j0mOWfa62QgCJ0rv5SHs-ah0-KbkaS-yEctDSU15wu96hZgd/exec"

export function ProductGrid() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" })
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    lookingFor: [],
    quantity: "",
    whoAreYou: [],
    remarks: ""
  })

  const handleProductClick = (productName) => {
    setSelectedProduct(productName)
    setFormData(prev => ({ ...prev, lookingFor: [productName] }))
    setIsFormOpen(true)
    setSubmitStatus({ type: "", message: "" })
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setFormData({
      name: "",
      contact: "",
      lookingFor: [],
      quantity: "",
      whoAreYou: [],
      remarks: ""
    })
    setSubmitStatus({ type: "", message: "" })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProductSelect = (product) => {
    setFormData(prev => {
      const currentProducts = prev.lookingFor
      if (currentProducts.includes(product)) {
        return { ...prev, lookingFor: currentProducts.filter(p => p !== product) }
      } else {
        return { ...prev, lookingFor: [...currentProducts, product] }
      }
    })
  }

  const handleWhoAreYouSelect = (option) => {
    setFormData(prev => {
      const currentOptions = prev.whoAreYou
      if (currentOptions.includes(option)) {
        return { ...prev, whoAreYou: currentOptions.filter(o => o !== option) }
      } else {
        return { ...prev, whoAreYou: [...currentOptions, option] }
      }
    })
  }

  const formatDateTime = () => {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.contact || formData.lookingFor.length === 0 || 
        !formData.quantity || formData.whoAreYou.length === 0) {
      setSubmitStatus({ 
        type: "error", 
        message: "Please fill all required fields" 
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: "", message: "" })

    try {
      const timestamp = formatDateTime()
      const rowData = [
        timestamp,
        "",
        formData.name,
        formData.contact,
        formData.lookingFor.join(", "),
        formData.quantity,
        formData.whoAreYou.join(", "),
        formData.remarks
      ]

      const formDataToSend = new FormData()
      formDataToSend.append('action', 'insert')
      formDataToSend.append('sheetName', 'Products')
      formDataToSend.append('rowData', JSON.stringify(rowData))

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ 
          type: "success", 
          message: `Thank you! Your inquiry has been submitted successfully.` 
        })
        setTimeout(() => {
          handleCloseForm()
        }, 2000)
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: `Failed to submit: ${result.error}` 
        })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: "error", 
        message: `Error: ${error.message}` 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx global>{`
        @supports (backdrop-filter: blur(10px)) or (-webkit-backdrop-filter: blur(10px)) {
          .backdrop-blur-effect {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        }
        
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {PRODUCTS.map((product, idx) => (
          <Card 
            key={product.name} 
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            onClick={() => handleProductClick(product.name)}
          >
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
                    e.currentTarget.style.display = 'none'
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

      {isFormOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseForm()
          }}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col relative"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
            }}
          >
            <button
              onClick={handleCloseForm}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="px-8 pt-8 pb-4">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">
                Send Enquiry
              </h2>
              <p className="text-gray-500 text-center text-sm">
                Answer few questions so that we can help you better
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-8 hide-scrollbar">
              <div className="space-y-6 pb-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 bg-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Mobile Number *
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-xl focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white">
                    <span className="px-3 py-3 text-gray-500 border-r border-gray-200">🇮🇳 +91</span>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      maxLength={10}
                      className="flex-1 px-3 py-3 outline-none text-gray-800 rounded-r-xl"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCT_OPTIONS.map((product) => (
                      <label
                        key={product}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          formData.lookingFor.includes(product)
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="lookingFor"
                          value={product}
                          checked={formData.lookingFor.includes(product)}
                          onChange={() => handleProductSelect(product)}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.lookingFor.includes(product)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {formData.lookingFor.includes(product) && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-sm leading-tight">
                          {product}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Tell us the required quantity (in kgs)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 bg-white"
                    placeholder="Enter quantity"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-3">
                    Who are you?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {WHO_ARE_YOU_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          formData.whoAreYou.includes(option)
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="whoAreYou"
                          value={option}
                          checked={formData.whoAreYou.includes(option)}
                          onChange={() => handleWhoAreYouSelect(option)}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.whoAreYou.includes(option)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {formData.whoAreYou.includes(option) && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-sm leading-tight">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Remarks (Optional)
                  </label>
                  <textarea
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-gray-800 resize-none bg-white"
                    placeholder="Any additional information..."
                  />
                </div>

                {submitStatus.message && (
                  <div className={`p-4 rounded-xl text-center font-medium ${
                    submitStatus.type === "success" 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>

            <div className="px-8 pb-8 pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}