import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream-50 to-amber-50/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-sage-200/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-1.5 mb-8">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-xs font-medium text-amber-700">14-day free trial, no credit card required</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 mb-6 leading-tight">
            Ready to Give Every Pet
            <br />
            <span className="text-gradient">the Royal Treatment?</span>
          </h2>

          <p className="text-lg text-stone-500 max-w-2xl mx-auto mb-10">
            Join hundreds of pet boarding businesses that trust PawPalace to manage their operations, delight their clients, and grow their revenue.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/app">
              <Button size="lg" className="group text-base">
                Start Your Free Trial
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-base">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-stone-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              Free 14-day trial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              No credit card needed
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
