import { useEffect, useRef } from 'react';

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update glow position
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
      
      // Add a subtle animation
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    glow.style.opacity = '0';

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-50 transition-opacity duration-300 ease-out"
      style={{
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        transform: 'translate(-50%, -50%)',
        willChange: 'transform, opacity',
      }}
    />
  );
}
