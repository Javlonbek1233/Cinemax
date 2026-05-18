import React from 'react';
import { Check, Crown, Zap, Shield, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    description: 'Perfect for single viewers.',
    features: ['720p Resolution', '1 Device', 'Standard Audio', 'Unlimited Movies'],
    icon: Zap,
    color: 'bg-blue-500'
  },
  {
    name: 'Premium',
    price: '$15.99',
    description: 'Most popular cinematic experience.',
    features: ['4K + HDR Resolution', '4 Devices', 'Dolby Atmos', 'Ad-free Experience', 'Offline Downloads'],
    icon: Crown,
    color: 'bg-brand',
    featured: true
  },
  {
    name: 'Family',
    price: '$22.99',
    description: 'Ultimate freedom for everyone.',
    features: ['4K + HDR Resolution', '6 Devices', 'Dolby Atmos', 'Kids Mode', 'Priority Support'],
    icon: Star,
    color: 'bg-rating'
  }
];

const SubscriptionPlans = () => {
  return (
    <div className="p-8 container mx-auto min-h-screen space-y-16 py-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-black font-display tracking-tight">Choose your <span className="text-brand">plan</span></h1>
        <p className="text-xl text-white/60 font-medium">Join millions of movie lovers and get unlimited access to thousands of titles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "relative glass p-8 rounded-3xl flex flex-col space-y-8 border border-white/10 group transition-all duration-500 hover:scale-[1.02]",
              plan.featured && "bg-white/10 ring-2 ring-brand border-none shadow-2xl shadow-brand/20"
            )}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                Recommended
              </div>
            )}

            <div className="space-y-4">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", plan.color)}>
                <plan.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">{plan.name}</h3>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black font-display">{plan.price}</span>
              <span className="text-white/40 text-sm">/month</span>
            </div>

            <div className="flex-1 space-y-4 pt-4 border-t border-white/5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-white/70">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className={cn(
              "w-full py-4 rounded-2xl font-bold transition-all duration-300",
              plan.featured 
                ? "bg-brand text-white hover:bg-brand-hover shadow-lg shadow-brand/20" 
                : "bg-white/5 border border-white/10 hover:bg-white/10"
            )}>
              {plan.featured ? 'Get Started' : 'Select Plan'}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto glass p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
          <Shield size={32} />
        </div>
        <div className="flex-1 space-y-1 text-center md:text-left">
           <h4 className="text-xl font-bold font-display tracking-tight">30-Day Money Back Guarantee</h4>
           <p className="text-white/40 text-sm font-medium">Try any plan risk-free for 30 days. If you don't love it, we'll refund your payment in full, no questions asked.</p>
        </div>
        <button className="whitespace-nowrap font-bold text-sm text-white/60 hover:text-white transition-colors underline decoration-brand/50 underline-offset-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
