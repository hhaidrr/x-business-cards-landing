import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out TwitterCards",
      features: [
        "1 business card design",
        "Basic templates",
        "Standard resolution",
        "Digital download only"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Professional",
      price: "$9",
      period: "one-time",
      description: "Everything you need for professional networking",
      features: [
        "Unlimited business cards",
        "All premium templates",
        "Print-ready high resolution",
        "Digital & print downloads",
        "Custom colors & fonts",
        "Priority support"
      ],
      popular: true,
      cta: "Create Your Cards"
    },
    {
      name: "Business",
      price: "$29",
      period: "one-time",
      description: "For teams and businesses",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Brand kit integration",
        "Bulk generation",
        "Analytics dashboard",
        "White-label options",
        "API access"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, no subscriptions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: plan.popular ? 0 : -8 }}
              className={`relative ${plan.popular ? 'md:scale-105' : ''}`}
            >
              <div className={`relative rounded-2xl backdrop-blur-sm overflow-hidden h-full ${
                plan.popular 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20' 
                  : 'bg-white/[0.02] border border-white/5'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                )}
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-white text-black border-0">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-white/40 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-white/60">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full group relative overflow-hidden ${
                      plan.popular 
                        ? 'bg-white text-black hover:bg-white/90' 
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    {!plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/60">
            All plans include a 30-day money-back guarantee. Need something custom?{" "}
            <a href="#" className="text-white hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
