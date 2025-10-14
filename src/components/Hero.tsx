import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Twitter, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6 bg-white/5 border-white/10 hover:bg-white/10">
              <Sparkles className="w-3 h-3 mr-1" />
              Transform Your Twitter Profile
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 tracking-tight font-sans font-medium"
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif', 
              fontWeight: '500', 
              fontSize: '88px',
              fontDisplay: 'swap',
              letterSpacing: '-0.02em'
            }}
          >
            X Profile Business Cards
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed font-sans"
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}
          >
            Create stunning, professional business cards directly from your X profile. 
            Perfect for networking events, conferences, and building your personal brand.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button size="lg" className="text-base px-8 py-6 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Create Your Card
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 bg-transparent border-white/10 hover:bg-white/5"
            >
              See Examples
            </Button>
          </motion.div>
          
          {/* Card showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-6 p-1 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              {/* Twitter profile card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">Your Name</h4>
                      <Twitter className="w-4 h-4 text-white/40" />
                    </div>
                    <p className="text-sm text-white/40">@yourhandle</p>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Your Twitter bio and profile information displayed here.
                </p>
              </motion.div>
              
              {/* Business card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>Your Name</h4>
                      <p className="text-sm text-white/60" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>Your Title</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                  </div>
                  
                  <div className="space-y-2 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      <span style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>@yourhandle</span>
                    </div>
                    <div className="h-px bg-white/10 my-3" />
                    <p className="text-xs italic" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>
                      "Your professional tagline here"
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
