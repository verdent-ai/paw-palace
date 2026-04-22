import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero grain overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-amber-200/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-sage-200/30"
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-amber-300"
          animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-sage-300"
          animate={{ y: [10, -10, 10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-4 h-4 rounded-full bg-amber-200/50"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-xs font-medium text-amber-700">Trusted by 500+ Pet Businesses</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-stone-900 mb-6">
              Where Every
              <br />
              <span className="text-gradient">Paw Gets</span>
              <br />
              Royal Care
            </h1>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg mb-10">
              The complete pet boarding management platform that transforms how you care for furry guests. Effortless booking, smart scheduling, and delightful experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/app">
                <Button size="lg" className="group">
                  Start Free Trial
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg" className="group">
                <Play size={18} className="text-amber-600" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-400">4.9/5 from 200+ reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/30 via-amber-100/20 to-sage-200/30 rounded-3xl blur-2xl" />

              {/* Main Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-warm-xl border border-stone-100 overflow-hidden">
                {/* Mini Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-stone-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-stone-400 border border-stone-100 text-center">
                      app.pawpalace.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-stone-400">Good morning, Alex</p>
                      <p className="text-sm font-semibold text-stone-800">Today's Overview</p>
                    </div>
                    <div className="px-2 py-1 bg-amber-50 rounded-md text-xs font-medium text-amber-700">Live</div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'Active Stays', value: '23', icon: '🏠', color: 'bg-amber-50 text-amber-700' },
                      { label: 'Check-ins Today', value: '5', icon: '📋', color: 'bg-sage-50 text-sage-700' },
                      { label: 'Revenue', value: '$2.4k', icon: '💰', color: 'bg-blue-50 text-blue-700' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-stone-50 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-sm">{stat.icon}</span>
                          <span className="text-[10px] text-stone-400">{stat.label}</span>
                        </div>
                        <p className={`text-lg font-bold ${stat.color.split(' ')[1]}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mini Booking List */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-stone-500 mb-2">Recent Bookings</p>
                    {[
                      { pet: '🐕', name: 'Max', owner: 'Sarah C.', status: 'Checked In', statusColor: 'text-emerald-600 bg-emerald-50' },
                      { pet: '🐈', name: 'Luna', owner: 'James W.', status: 'Confirmed', statusColor: 'text-blue-600 bg-blue-50' },
                      { pet: '🐕', name: 'Buddy', owner: 'Emily P.', status: 'Pending', statusColor: 'text-amber-600 bg-amber-50' },
                    ].map((booking) => (
                      <div key={booking.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-stone-50/50 hover:bg-stone-50 transition-colors">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">{booking.pet}</span>
                          <div>
                            <p className="text-xs font-medium text-stone-700">{booking.name}</p>
                            <p className="text-[10px] text-stone-400">{booking.owner}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${booking.statusColor}`}>
                          {booking.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-8 top-16 bg-white rounded-xl shadow-warm-lg border border-stone-100 p-3 w-44"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-sage-50 flex items-center justify-center">
                    <Shield size={14} className="text-sage-500" />
                  </div>
                  <span className="text-xs font-medium text-stone-700">100% Secure</span>
                </div>
                <p className="text-[10px] text-stone-400">Pet data encrypted & protected</p>
              </motion.div>

              <motion.div
                className="absolute -right-6 bottom-24 bg-white rounded-xl shadow-warm-lg border border-stone-100 p-3 w-40"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Zap size={14} className="text-amber-500" />
                  </div>
                  <span className="text-xs font-medium text-stone-700">Instant Alerts</span>
                </div>
                <p className="text-[10px] text-stone-400">Real-time notifications</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
