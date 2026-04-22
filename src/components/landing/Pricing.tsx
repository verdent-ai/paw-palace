import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small pet boarding operations',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      'Up to 20 pet profiles',
      'Basic booking calendar',
      'Email notifications',
      'Customer management',
      '1 staff account',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    description: 'For growing boarding businesses',
    monthlyPrice: 59,
    yearlyPrice: 49,
    features: [
      'Unlimited pet profiles',
      'Advanced booking system',
      'SMS & email notifications',
      'Online payments (Stripe)',
      '5 staff accounts',
      'Analytics dashboard',
      'Pet photo updates',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'For multi-location pet care businesses',
    monthlyPrice: 129,
    yearlyPrice: 109,
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Custom branding',
      'API access',
      'Unlimited staff accounts',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
            Simple, Transparent
            <br />
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto mb-8">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-stone-50 rounded-full p-1 border border-stone-100">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                !yearly ? 'bg-white shadow-warm text-stone-800' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                yearly ? 'bg-white shadow-warm text-stone-800' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              Yearly
              <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-semibold">-17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-amber-50 to-white border-amber-200 shadow-warm-lg'
                  : 'bg-white border-stone-100 shadow-warm hover:shadow-warm-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-warm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-1">{plan.name}</h3>
                <p className="text-sm text-stone-400">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-stone-900">
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-stone-400">/month</span>
                </div>
                {yearly && (
                  <p className="text-xs text-amber-600 mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
              </div>

              <Link to="/app">
                <Button
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  size="md"
                  className="w-full mb-6"
                >
                  {plan.highlight ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'bg-amber-100' : 'bg-stone-100'
                    }`}>
                      <Check size={10} className={plan.highlight ? 'text-amber-600' : 'text-stone-500'} />
                    </div>
                    <span className="text-sm text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
