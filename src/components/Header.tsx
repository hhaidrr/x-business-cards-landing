import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/assets/branding/logo_black.svg" 
            alt="SocialCard Logo" 
            className="h-10 w-auto"
          />
          <img 
            src="/assets/branding/name_logo_white.svg" 
            alt="SocialCard" 
            className="h-8 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#how-it-works" 
            className="text-sm hover:text-white transition-colors text-white/70"
          >
            How it Works
          </a>
          <a 
            href="#examples" 
            className="text-sm hover:text-white transition-colors text-white/70"
          >
            Examples
          </a>
          <a 
            href="#pricing" 
            className="text-sm hover:text-white transition-colors text-white/70"
          >
            Pricing
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="relative overflow-hidden group">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
