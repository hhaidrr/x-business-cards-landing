import { motion } from "motion/react";
import { Twitter, MapPin, Link as LinkIcon, ArrowDown } from "lucide-react";
import { Badge } from "./ui/badge";

export function Examples() {
  const examples = [
    {
      name: "Sarah Chen",
      handle: "@sarahdesigns",
      role: "UI/UX Designer",
      bio: "Creating beautiful digital experiences • Design systems enthusiast",
      followers: "12.5K",
      location: "San Francisco, CA",
      website: "sarahchen.design",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Marcus Johnson",
      handle: "@marcustech",
      role: "Full Stack Developer",
      bio: "Building the future one line of code at a time • React & Node.js",
      followers: "8.2K",
      location: "Austin, TX",
      website: "marcusjohnson.dev",
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="examples" className="py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            See TwitterCards in Action
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Real examples of how Twitter profiles transform into professional business cards.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-8"
            >
              {/* Twitter Profile Preview */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{example.name}</h4>
                      <Badge variant="secondary" className="text-xs bg-white/5 border-white/10">
                        <Twitter className="w-3 h-3 mr-1" />
                        {example.followers}
                      </Badge>
                    </div>
                    <p className="text-sm text-white/40 mb-3">{example.handle}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{example.bio}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {example.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <LinkIcon className="w-3 h-3" />
                        {example.website}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
                >
                  <ArrowDown className="w-5 h-5 text-white/40" />
                </motion.div>
              </div>
              
              {/* Business Card Preview */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateZ: 1 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${example.color} backdrop-blur-sm p-8 border border-white/20`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{example.name}</h4>
                      <p className="text-white/60">{example.role}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                  </div>
                  
                  <div className="space-y-3 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      <span>{example.handle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{example.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <span>{example.website}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-white/60 italic">
                      "{example.bio.split('•')[0].trim()}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
