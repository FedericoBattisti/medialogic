import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    // Imposta dimensioni canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe Particella
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      ctx: CanvasRenderingContext2D;
      phase: number;
      phaseSpeed: number;
      constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.ctx = ctx;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2.8 + 1.7;
        // velocità ancora più alta e variabile
        // Impedisci che le particelle salgano verso l'alto
        let angle, speed, vy;
        do {
          angle = Math.random() * Math.PI * 2;
          speed = 1.2 + Math.random() * 2.8;
          vy = Math.sin(angle) * speed;
        } while (vy < 0.1); // solo verso il basso o orizzontale
        this.speedX = Math.cos(angle) * speed;
        this.speedY = vy;
        // Oscillazione naturale
        this.phase = Math.random() * Math.PI * 2;
        this.phaseSpeed = 0.018 + Math.random() * 0.025; // più veloce
        // Palette professionale: bianco, grigio chiaro, azzurro chiaro, blu notte trasparente
        const colors = [
          'rgba(255,255,255,0.85)',      // bianco
          'rgba(200,210,230,0.7)',      // grigio-azzurro chiaro
          'rgba(120,170,255,0.55)',     // azzurro chiaro
          'rgba(40,60,120,0.35)'        // blu notte trasparente
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update(mouse: { x: number; y: number }) {
        // Oscillazione sempre attiva rispetto alla posizione base
        this.phase += this.phaseSpeed;
        const oscX = this.baseX + Math.cos(this.phase) * 18;
        const oscY = this.baseY + Math.sin(this.phase) * 18;
        // Movimento base
        this.x += this.speedX;
        this.y += this.speedY;
        // Avvicinati all'oscillazione
        this.x += (oscX - this.x) * 0.12;
        this.y += (oscY - this.y) * 0.12;
        // Rimbalzo ai bordi
        if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;
        // Interazione con mouse più forte
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 220;
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 8.5;
          this.y -= Math.sin(angle) * force * 8.5;
        }
      }
      draw() {
        this.ctx.save();
        this.ctx.shadowColor = this.color;
        this.ctx.shadowBlur = 12;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    // Inizializza particelle
    const initParticles = () => {
      if (!canvas || !ctx) return;
      particlesRef.current = [];
      // Più particelle
      const numberOfParticles = (canvas.width * canvas.height) / 3500;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle(ctx, canvas.width, canvas.height));
      }
    };
    initParticles();

    // Connessioni tra particelle
    const connectParticles = () => {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = 0.25 + 0.75 * (1 - distance / 120);
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 1.1 - distance / 180;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    // Animazione
    const animate = () => {
      // Sfondo completamente nero
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current);
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
    />
  );
}
