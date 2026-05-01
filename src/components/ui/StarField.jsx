import { useMemo, useEffect, useRef } from 'react'

/**
 * Canvas-based star field with twinkling, shooting stars, and depth layers
 */
export default function StarField({ count = 200 }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  const stars = useMemo(() => {
    return Array.from({ length: count }, () => {
      const layer = Math.random()
      return {
        x: Math.random(),
        y: Math.random(),
        size: layer < 0.6 ? Math.random() * 1.2 + 0.3 : layer < 0.9 ? Math.random() * 1.8 + 0.8 : Math.random() * 2.5 + 1.2,
        baseOpacity: layer < 0.6 ? Math.random() * 0.3 + 0.1 : layer < 0.9 ? Math.random() * 0.4 + 0.2 : Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.7 ? (Math.random() > 0.5 ? 220 : 180) : 0,
      }
    })
  }, [count])

  const shootingStars = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let time = 0

    function spawnShootingStar() {
      if (shootingStars.current.length < 2 && Math.random() < 0.003) {
        shootingStars.current.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * canvas.height * 0.3,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          life: 0,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      // Draw stars
      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset)
        const opacity = star.baseOpacity + twinkle * star.baseOpacity * 0.5

        if (star.hue > 0) {
          ctx.fillStyle = `hsla(${star.hue}, 70%, 75%, ${opacity})`
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        }

        ctx.beginPath()
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Glow for larger stars
        if (star.size > 1.5) {
          ctx.fillStyle = star.hue > 0
            ? `hsla(${star.hue}, 70%, 75%, ${opacity * 0.15})`
            : `rgba(255, 255, 255, ${opacity * 0.15})`
          ctx.beginPath()
          ctx.arc(star.x * canvas.width, star.y * canvas.height, star.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Shooting stars
      spawnShootingStar()
      shootingStars.current = shootingStars.current.filter((s) => {
        s.life += 0.02
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.opacity = Math.max(0, 1 - s.life)

        if (s.opacity <= 0) return false

        const tailX = s.x - Math.cos(s.angle) * s.length
        const tailY = s.y - Math.sin(s.angle) * s.length

        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y)
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity * 0.8})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()

        // Head glow
        ctx.fillStyle = `rgba(200, 220, 255, ${s.opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [stars])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
