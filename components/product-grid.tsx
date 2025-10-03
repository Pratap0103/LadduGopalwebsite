"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

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

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isFormOpen])

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
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @media (min-width: 640px) {
          .animate-slideUp {
            animation: fadeIn 0.3s ease-out;
          }
        }

        /* Prevent input zoom on iOS */
        input[type="text"],
        input[type="tel"],
        textarea {
          font-size: 16px !important;
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
                <img
                  src={product.image}
                  alt={`${product.name} - High quality rice processing`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading={idx < 2 ? 'eager' : 'lazy'}
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
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseForm()
          }}
        >
          <div 
            className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl shadow-2xl flex flex-col relative animate-slideUp"
            style={{
              height: '90vh',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <div className="flex-shrink-0 bg-white sm:rounded-t-2xl rounded-t-3xl border-b border-gray-100">
              <button
                onClick={handleCloseForm}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full z-20"
                type="button"
              >
                <X size={20} />
              </button>

              <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                  Send Enquiry
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Fill in the details below to get a quote
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 hide-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 bg-white"
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-stretch border border-gray-300 rounded-lg focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all bg-white overflow-hidden">
                    <span className="px-3 py-2.5 text-gray-600 border-r border-gray-300 bg-gray-50 flex items-center text-sm font-medium">
                      +91
                    </span>
                    <input
                      id="contact"
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      maxLength={10}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      className="flex-1 px-3 py-2.5 outline-none text-gray-800"
                      placeholder="10 digit mobile number"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are you looking for? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {PRODUCT_OPTIONS.map((product) => (
                      <label
                        key={product}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          formData.lookingFor.includes(product)
                            ? 'bg-blue-50 border-blue-400 shadow-sm'
                            : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="lookingFor"
                          value={product}
                          checked={formData.lookingFor.includes(product)}
                          onChange={() => handleProductSelect(product)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-200"
                        />
                        <span className={`text-sm font-medium ${
                          formData.lookingFor.includes(product) ? 'text-blue-700' : 'text-gray-700'
                        }`}>
                          {product}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Required Quantity (in kgs) <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 bg-white"
                    placeholder="e.g., 100, 500, 1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Who are you? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {WHO_ARE_YOU_OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-all ${
                          formData.whoAreYou.includes(option)
                            ? 'bg-blue-50 border-blue-400 shadow-sm'
                            : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="whoAreYou"
                          value={option}
                          checked={formData.whoAreYou.includes(option)}
                          onChange={() => handleWhoAreYouSelect(option)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-200"
                        />
                        <span className={`text-sm font-medium ${
                          formData.whoAreYou.includes(option) ? 'text-blue-700' : 'text-gray-700'
                        }`}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="remarks" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Remarks (Optional)
                  </label>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 resize-none bg-white"
                    placeholder="Any additional information..."
                  />
                </div>

                {submitStatus.message && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    submitStatus.type === "success" 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>

            {/* Footer - Fixed */}
            <div className="flex-shrink-0 bg-white px-5 sm:px-6 py-4 border-t border-gray-100 sm:rounded-b-2xl">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}