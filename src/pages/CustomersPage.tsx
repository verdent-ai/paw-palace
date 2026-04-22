import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Mail, Phone, MapPin, Star, Crown, PawPrint, DollarSign } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { customers } from '@/data/mockData'

const vipColors: Record<string, { bg: string; text: string; icon: string }> = {
  bronze: { bg: 'bg-orange-50', text: 'text-orange-600', icon: '🥉' },
  silver: { bg: 'bg-slate-50', text: 'text-slate-600', icon: '🥈' },
  gold: { bg: 'bg-amber-50', text: 'text-amber-600', icon: '🥇' },
  platinum: { bg: 'bg-purple-50', text: 'text-purple-600', icon: '💎' },
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery)
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-stone-900">Customers</h1>
          <p className="text-sm text-stone-400 mt-1">{customers.length} registered pet parents</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          Add Customer
        </Button>
      </div>

      {/* Search */}
      <Card>
        <Input
          placeholder="Search by name, email, or phone..."
          icon={<Search size={16} />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Card>

      {/* Customer Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filteredCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card hover className="group cursor-pointer relative overflow-hidden">
              {/* VIP Badge */}
              <div className="absolute top-4 right-4">
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${vipColors[customer.vipLevel].bg} ${vipColors[customer.vipLevel].text}`}>
                  {vipColors[customer.vipLevel].icon}
                  <span className="capitalize">{customer.vipLevel}</span>
                </div>
              </div>

              {/* Customer Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-14 h-14 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300 ring-2 ring-stone-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-800">{customer.name}</h3>
                  <p className="text-xs text-stone-400">Member since {new Date(customer.memberSince).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2.5 text-xs text-stone-500">
                  <Mail size={13} className="text-stone-300" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-500">
                  <Phone size={13} className="text-stone-300" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-stone-500">
                  <MapPin size={13} className="text-stone-300" />
                  <span>{customer.address}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-stone-50 rounded-xl mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <PawPrint size={12} className="text-amber-500" />
                  </div>
                  <p className="text-lg font-bold text-stone-800">{customer.pets.length}</p>
                  <p className="text-[10px] text-stone-400">Pets</p>
                </div>
                <div className="text-center border-x border-stone-100">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star size={12} className="text-amber-500" />
                  </div>
                  <p className="text-lg font-bold text-stone-800">{customer.totalVisits}</p>
                  <p className="text-[10px] text-stone-400">Visits</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <DollarSign size={12} className="text-amber-500" />
                  </div>
                  <p className="text-lg font-bold text-stone-800">${(customer.totalSpent / 1000).toFixed(1)}k</p>
                  <p className="text-[10px] text-stone-400">Spent</p>
                </div>
              </div>

              {/* Pets */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-400">Pets:</span>
                <div className="flex flex-wrap gap-1">
                  {customer.pets.map((pet) => (
                    <span
                      key={pet}
                      className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium"
                    >
                      {pet}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mx-auto mb-4">
            <Crown size={28} className="text-stone-300" />
          </div>
          <p className="text-sm font-medium text-stone-600 mb-1">No customers found</p>
          <p className="text-xs text-stone-400">Try adjusting your search</p>
        </div>
      )}
    </div>
  )
}
