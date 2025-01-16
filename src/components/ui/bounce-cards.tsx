"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface BounceCardsProps {
  images: string[]
  containerWidth?: number
  containerHeight?: number
  animationDelay?: number
  animationStagger?: number
  easeType?: string
  transformStyles?: string[]
  className?: string
}

export function BounceCards({
  images,
  containerWidth = 500,
  containerHeight = 500,
  animationDelay = 1,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.5)",
  transformStyles,
  className = "",
}: BounceCardsProps) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null)

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: easeType,
        stagger: animationStagger,
        delay: animationDelay,
      }
    )
  }, [animationDelay, animationStagger, easeType])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((image, index) => (
        <div
          key={image}
          ref={(el) => (cardsRef.current[index] = el)}
          className="absolute inset-0 rounded-2xl bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:-translate-y-2"
          style={{
            backgroundImage: `url(${image})`,
            transform: transformStyles?.[index],
          }}
        />
      ))}
    </div>
  )
}