import { motion } from 'framer-motion'
import { Calendar, PawPrint, CreditCard, BarChart3, Bell, Shield, Smartphone, Users } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Smart Booking Calendar',
    description: 'Drag-and-drop scheduling with automatic conflict detection and availability management.',
    color: 'from-amber-400 to-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: PawPrint,
    title: 'Pet Health Profiles',
    description: 'Complete digital records including vaccination history, dietary needs, and temperament notes.',
    color: 'from-sage-400 to-sage-500',
    bgColor: 'bg-sage-50',
  },
  {
    icon: CreditCard,
    title: 'Online Payments',
    description: 'Accept deposits, process payments, and send automatic invoices with Stripe integration.',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Track customer history, preferences, and loyalty tiers for personalized service.',
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated reminders for check-in/out, vaccination expiry, and payment due dates.',
    color: 'from-coral-400 to-coral-500',
    bgColor: 'bg-coral-50',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Revenue tracking, occupancy rates, and business insights at a glance.',
    color: 'from-teal-400 to-teal-500',
    bgColor: 'bg-teal-50',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Manage your business from anywhere. Works beautifully on phones and tablets.',
    color: 'from-indigo-400 to-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Enterprise-grade security with encrypted data storage and GDPR compliance.',
    color: 'from-emerald-400 to-emerald-500',
    bgColor: 'bg-emerald-50',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Run Your Business</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            From booking management to financial insights, PawPalace gives you all the tools to deliver exceptional pet care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={22} className="text-stone-600" />
              </div>
              <h3 className="text-base font-semibold text-stone-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{feature.description}</p>

              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
