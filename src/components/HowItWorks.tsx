import { motion } from "motion/react";
import { Twitter, Palette, Download } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function HowItWorks() {
  const steps = [
    {
      icon: Twitter,
      title: "Connect Your Twitter",
      description: "Simply enter your Twitter username and we'll pull your profile information, bio, and latest activity.",
      step: "01"
    },
    {
      icon: Palette,
      title: "Customize Your Design",
      description: "Choose from our professional templates and customize colors, layout, and which information to include.",
      step: "02"
    },
    {
      icon: Download,
      title: "Download & Print",
      description: "Get your high-resolution business cards ready for print, or use the digital version for networking.",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Transform your Twitter presence into professional business cards in just three simple steps.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.02] group-hover:text-white/[0.04] transition-all duration-300">
                  {step.step}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/10">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl mb-4 font-semibold">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
