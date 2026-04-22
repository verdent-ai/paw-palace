import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Plus, Calendar, MapPin, DollarSign, MoreHorizontal, ChevronDown } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { bookings } from '@/data/mockData'

const statusColors: Record<string, 'success' | 'info' | 'warning' | 'error' | 'default'> = {
  'checked-in': 'success',
  'confirmed': 'info',
  'pending': 'warning',
  'checked-out': 'default',
  'cancelled': 'error',
}

const statusLabels: Record<string, string> = {
  'checked-in': 'Checked In',
  'confirmed': 'Confirmed',
  'pending': 'Pending',
  'checked-out': 'Checked Out',
  'cancelled': 'Cancelled',
}

const filterOptions = ['All', 'Checked In', 'Confirmed', 'Pending', 'Checked Out']

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter =
      activeFilter === 'All' || statusLabels[booking.status] === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-stone-900">Bookings</h1>
          <p className="text-sm text-stone-400 mt-1">Manage all pet boarding reservations</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          New Booking
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by pet name, owner, or booking ID..."
              icon={<Search size={16} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" className="gap-2">
              <Filter size={14} />
              Filter
              <ChevronDown size={14} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-amber-100 text-amber-700 shadow-sm'
                  : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Card>

      {/* Bookings Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredBookings.map((booking, index) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card hover className="group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={booking.petAvatar}
                    alt={booking.petName}
                    className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-stone-800">{booking.petName}</h3>
                      <span className="text-xs text-stone-300">{booking.petSpecies === 'dog' ? '🐕' : '🐈'}</span>
                    </div>
                    <p className="text-xs text-stone-400">{booking.ownerName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={statusColors[booking.status] as 'success' | 'info' | 'warning' | 'error'}>
                    {statusLabels[booking.status]}
                  </Badge>
                  <button className="p-1 text-stone-300 hover:text-stone-500 transition-colors cursor-pointer">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
              </div>

              <div className="space-y-2.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Calendar size={14} className="text-stone-300 flex-shrink-0" />
                  <span>{booking.checkIn} &rarr; {booking.checkOut}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <MapPin size={14} className="text-stone-300 flex-shrink-0" />
                  <span>{booking.roomType}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <DollarSign size={14} className="text-stone-300 flex-shrink-0" />
                  <span className="font-semibold text-stone-700">${booking.totalPrice}</span>
                </div>
              </div>

              {booking.addons.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {booking.addons.map((addon) => (
                    <span
                      key={addon}
                      className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium"
                    >
                      {addon}
                    </span>
                  ))}
                </div>
              )}

              {booking.specialRequests && (
                <div className="pt-3 border-t border-stone-50">
                  <p className="text-[11px] text-stone-400 italic leading-relaxed">
                    "{booking.specialRequests}"
                  </p>
                </div>
              )}

              <p className="text-[10px] text-stone-300 mt-3 font-mono">{booking.id}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mx-auto mb-4">
            <Calendar size={28} className="text-stone-300" />
          </div>
          <p className="text-sm font-medium text-stone-600 mb-1">No bookings found</p>
          <p className="text-xs text-stone-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
