import { motion } from 'framer-motion'
import { UserPlus, CalendarCheck, PawPrint, Sparkles } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Set Up Your Profile',
    description: 'Create your business profile in minutes. Add your rooms, services, and pricing.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
  {
    step: '02',
    icon: PawPrint,
    title: 'Register Your Guests',
    description: 'Add pet profiles with health records, dietary needs, and emergency contacts.',
    color: 'text-sage-600',
    bg: 'bg-sage-50',
    borderColor: 'border-sage-200',
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Accept Bookings',
    description: 'Customers book online or you create bookings manually. Smart calendar handles conflicts.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'Deliver & Grow',
    description: 'Track stays, collect payments, and use analytics to grow your pet boarding business.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-cream-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3 block">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
            Up and Running in
            <br />
            <span className="text-gradient">Four Simple Steps</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto">
            From setup to your first booking in under 30 minutes. No technical knowledge required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-200 via-sage-200 to-purple-200" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className={`${step.bg} rounded-2xl p-6 border ${step.borderColor} h-full group hover:shadow-warm-lg transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={22} className={step.color} />
                  </div>
                  <span className="text-3xl font-display font-bold text-stone-200">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
