import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Rodriguez',
    role: 'Owner, Happy Tails Boarding',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    content: "PawPalace completely transformed how I run my boarding business. I went from juggling spreadsheets and paper forms to having everything in one beautiful dashboard. My clients love the online booking!",
    rating: 5,
  },
  {
    name: 'Thomas Chen',
    role: 'Founder, Furry Friends Resort',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content: "The pet health profiles feature alone is worth it. Having instant access to dietary restrictions, medication schedules, and vet contacts gives us and pet parents total peace of mind.",
    rating: 5,
  },
  {
    name: 'Jessica Park',
    role: 'Manager, Paws & Relax',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content: "We increased our bookings by 40% in the first month after switching to PawPalace. The automated reminders and online payment system eliminated so many administrative headaches.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sage-100/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-amber-600 tracking-wide uppercase mb-3 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
            Loved by Pet
            <br />
            <span className="text-gradient">Business Owners</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-xl mx-auto">
            Join hundreds of pet care professionals who trust PawPalace every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-7 border border-stone-100 shadow-warm hover:shadow-warm-lg transition-all duration-500 h-full flex flex-col relative">
                <Quote size={32} className="text-amber-100 absolute top-6 right-6" />

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-600 leading-relaxed flex-1 mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-100"
                  />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">{testimonial.name}</p>
                    <p className="text-xs text-stone-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
