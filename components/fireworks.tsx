"use client"

import { useEffect, useRef } from "react"

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create a light pink background
    ctx.fillStyle = "rgba(253, 242, 248, 1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Simplified firework class with fewer particles
    class Firework {
      x: number
      y: number
      color: string
      particles: Particle[]

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`
        this.particles = []

        // Reduced particle count significantly
        const particleCount = 20
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.PI * 2 * (i / particleCount)
          const speed = 2 + Math.random()

          this.particles.push(
            new Particle(this.x, this.y, Math.cos(angle) * speed, Math.sin(angle) * speed, this.color),
          )
        }
      }

      update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].update()
          if (this.particles[i].alpha <= 0) {
            this.particles.splice(i, 1)
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].draw(ctx)
        }
      }
    }

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      color: string
      alpha: number
      gravity: number

      constructor(x: number, y: number, vx: number, vy: number, color: string) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.color = color
        this.alpha = 1
        this.gravity = 0.05 // Increased gravity for faster animation
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.vy += this.gravity
        this.alpha -= 0.02 // Faster fade out
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const fireworks: Firework[] = []
    let animationFrameId: number

    // Create fewer fireworks
    const createFireworks = () => {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height * 0.5
      fireworks.push(new Firework(x, y))
    }

    const animate = () => {
      // Use a more opaque background for less redrawing
      ctx.fillStyle = "rgba(253, 242, 248, 0.4)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update()
        fireworks[i].draw(ctx)

        if (fireworks[i].particles.length === 0) {
          fireworks.splice(i, 1)
        }
      }

      // Create new fireworks less frequently
      if (Math.random() < 0.02 && fireworks.length < 5) {
        createFireworks()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start with fewer initial fireworks
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createFireworks(), i * 500)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.fillStyle = "rgba(253, 242, 248, 1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

