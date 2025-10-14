import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  layer: number;
}

interface ParticleBackgroundProps {
  zIndex?: number;
}

export function ParticleBackground({ zIndex = -1 }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Create particles with different layers and speeds
    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = 80;

      for (let i = 0; i < particleCount; i++) {
        const layer = Math.floor(Math.random() * 3) + 1; // 3 layers
        const speed = layer === 1 ? 0.2 : layer === 2 ? 0.4 : 0.6; // Back layer slower
        const size = layer === 1 ? 1 : layer === 2 ? 1.5 : 2; // Back layer smaller
        const opacity = layer === 1 ? 0.1 : layer === 2 ? 0.2 : 0.3; // Back layer more transparent

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speed,
          opacity,
          layer
        });
      }

      particlesRef.current = particles;
    };

    // Draw particles
    const drawParticles = () => {
      // Clear canvas with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
    };

    // Update particle positions
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speed;
        
        // Reset particle position when it goes off screen
        if (particle.x > canvas.width + particle.size) {
          particle.x = -particle.size;
          particle.y = Math.random() * canvas.height;
        }
      });
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize particles and start animation
    createParticles();
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex }}
    />
  );
}
