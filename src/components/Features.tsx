import { motion } from "motion/react";
import { Sparkles, Smartphone, Zap, Shield, Palette, Download } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Professional Templates",
      description: "Choose from dozens of beautifully designed templates that make your Twitter profile shine."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Your business cards look perfect on any device, from phones to tablets to desktop."
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Get your business cards in seconds, not hours. Our AI processes your profile instantly."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "We only use public Twitter information and never store your personal data."
    },
    {
      icon: Palette,
      title: "Full Customization",
      description: "Adjust colors, fonts, layout, and content to match your personal brand perfectly."
    },
    {
      icon: Download,
      title: "Print Ready",
      description: "High-resolution files ready for professional printing, plus digital sharing options."
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Powerful features to create business cards that truly represent your professional brand.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 border border-white/10">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
