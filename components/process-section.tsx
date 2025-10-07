"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [activeBiomassStep, setActiveBiomassStep] = useState(0)
  const [isBiomassAutoPlaying, setIsBiomassAutoPlaying] = useState(true)

  const riceSteps = [
    {
      id: 1,
      title: "Intake of Paddy",
      image: "/images/Process/Intake of Paddy.jpg",
      description: "Fresh paddy is carefully received and inspected for quality. Our rigorous selection process ensures only the finest grains proceed to the next stage, maintaining our commitment to excellence from the very beginning."
    },
    {
      id: 2,
      title: "Cleaning of Paddy",
      image: "/images/Process/Cleaning.jpg",
      description: "Advanced cleaning machinery removes impurities, stones, and damaged grains. This critical step uses multi-stage separation technology to ensure only pure, high-quality paddy moves forward in the process."
    },
    {
      id: 3,
      title: "Parboiling & Drying",
      image: "/images/Process/Parboiling & Drying.jpg",
      description: "Paddy is soaked, steamed, and dried to enhance its nutritional profile and improve milling yields. This process also helps in reducing breakage during milling."
    },
    {
      id: 4,
      title: "Milling",
      image: "/images/Process/Milling.png",
      description: "The outer husk is carefully removed using precision hulling machines. This delicate process preserves the grain's integrity while efficiently separating the rice from its protective shell."
    },
    {
      id: 5,
      title: "Whitening & Polishing",
      image: "/images/Process/Whitening & Polishing.jpg",
      description: "Rice grains undergo controlled whitening and polishing to achieve the desired finish. Our state-of-the-art equipment ensures uniform processing while maintaining nutritional value and grain structure."
    },
    {
      id: 6,
      title: "Grading & Sorting",
      image: "/images/Process/Grading & Sorting.jpg",
      description: "Final quality control through advanced optical sorting and grading systems. Each grain is meticulously categorized by size, color, and quality to meet our strict standards before packaging."
    }
  ]

  const biomassSteps = [
    {
      id: 1,
      title: "Raw Material Collection",
      image: "/images/Biomass/Raw Material Collection.png",
      description: "We collect agricultural residues like rice husk, straw, and other crop waste directly from farmers and local sources, ensuring steady supply and supporting rural income."
    },
    {
      id: 2,
      title: "Drying",
      image: "/images/Biomass/Drying.png",
      description: "The biomass is dried to bring down the moisture content to below 10%, which is essential for consistent pellet quality and efficient combustion."
    },
    {
      id: 3,
      title: "Grinding",
      image: "/images/Biomass/Grinding.png",
      description: "The dried materials are finely ground in hammer mills to achieve uniform particle size, allowing smooth and compact pellet formation."
    },
    {
      id: 4,
      title: "Pelletizing",
      image: "/images/Biomass/Pelletizing.png",
      description: "Using advanced ring-die pellet machines, the conditioned biomass is compressed under high pressure to form dense, cylindrical pellets — without any chemical binders."
    },
    {
      id: 5,
      title: "Cooling",
      image: "/images/Biomass/Cooling.png",
      description: "Hot pellets from the press are cooled to stabilize their shape and hardness, preventing moisture absorption during storage."
    },
    {
      id: 6,
      title: "Packaging & Storage",
      image: "/images/Biomass/Packaginh & Storage.png",
      description: "The finished pellets are packed in bulk or customized packaging as per client requirements and stored in moisture-free conditions before dispatch."
    }
  ]

  // Auto-rotation for rice process
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % riceSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [riceSteps.length, isAutoPlaying])

  // Auto-rotation for biomass process
  useEffect(() => {
    if (!isBiomassAutoPlaying) return

    const interval = setInterval(() => {
      setActiveBiomassStep((prevStep) => (prevStep + 1) % biomassSteps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [biomassSteps.length, isBiomassAutoPlaying])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const handleBiomassStepClick = (index: number) => {
    setActiveBiomassStep(index)
    setIsBiomassAutoPlaying(false)
    setTimeout(() => setIsBiomassAutoPlaying(true), 10000)
  }

  return (
    <section id="process" className="py-16 md:py-24 scroll-mt-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Rice Milling Process */}
        <header className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-2 animate-fade-in">
              RICE MILLING PROCESS
            </h2>
            <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transform scale-x-0 animate-scale-x"></div>
          </div>
          <p className="mt-4 text-slate-600 text-lg animate-fade-in-delay">
            The journey from Paddy to Premium Rice
          </p>
        </header>

        <div className="relative mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px]">
              <div className="relative overflow-hidden bg-slate-100 h-64 md:h-auto order-1 md:order-none">
                <div className="absolute inset-0">
                  <Image
                    key={activeStep}
                    src={riceSteps[activeStep].image}
                    alt={riceSteps[activeStep].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover animate-fade-in-image"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </div>

              <div className="p-6 md:p-12 flex flex-col justify-center order-2 md:order-none">
                <h3 
                  key={`title-${activeStep}`}
                  className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 mb-3 md:mb-4 animate-slide-in-right"
                >
                  {riceSteps[activeStep].title}
                </h3>
                
                <p 
                  key={`desc-${activeStep}`}
                  className="text-slate-600 text-sm md:text-base leading-relaxed animate-slide-in-right-delay"
                >
                  {riceSteps[activeStep].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {riceSteps.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`relative w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-amber-500 transform scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to step ${index + 1}`}
              >
                {index === activeStep && isAutoPlaying && (
                  <div className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Biomass Pellet Manufacturing Process */}
        <header className="mb-12 text-center">
          <div className="inline-block">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-slate-800 mb-2 animate-fade-in">
              BIOMASS PELLET MANUFACTURING PROCESS
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 animate-scale-x"></div>
          </div>
          <p className="mt-4 text-slate-600 text-lg animate-fade-in-delay">
            Transforming Agricultural Waste into Sustainable Energy
          </p>
        </header>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="flex flex-col md:grid md:grid-cols-2 min-h-[500px]">
              {/* Content on Left (Desktop) / Bottom (Mobile) */}
              <div className="p-6 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 
                  key={`biomass-title-${activeBiomassStep}`}
                  className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 mb-3 md:mb-4 animate-slide-in-left"
                >
                  {biomassSteps[activeBiomassStep].title}
                </h3>
                
                <p 
                  key={`biomass-desc-${activeBiomassStep}`}
                  className="text-slate-600 text-sm md:text-base leading-relaxed animate-slide-in-left-delay"
                >
                  {biomassSteps[activeBiomassStep].description}
                </p>
              </div>

              {/* Image on Right (Desktop) / Top (Mobile) */}
              <div className="relative overflow-hidden bg-slate-100 h-64 md:h-auto order-1 md:order-2">
                <div className="absolute inset-0">
                  <Image
                    key={activeBiomassStep}
                    src={biomassSteps[activeBiomassStep].image}
                    alt={biomassSteps[activeBiomassStep].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover animate-fade-in-image"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            {biomassSteps.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleBiomassStepClick(index)}
                className={`relative w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === activeBiomassStep 
                    ? 'bg-green-500 transform scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to biomass step ${index + 1}`}
              >
                {index === activeBiomassStep && isBiomassAutoPlaying && (
                  <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-image {
          from {
            opacity: 0;
            transform: scale(1.05) rotateY(5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-right-delay {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-left-delay {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out 0.5s both;
        }

        .animate-fade-in-image {
          animation: fade-in-image 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-slide-in-right-delay {
          animation: slide-in-right-delay 0.6s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-left-delay {
          animation: slide-in-left-delay 0.6s ease-out 0.2s both;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}