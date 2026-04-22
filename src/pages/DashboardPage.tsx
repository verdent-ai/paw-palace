import { motion } from 'framer-motion'
import {
  PawPrint, Calendar, DollarSign, TrendingUp, TrendingDown,
  ArrowUpRight, Clock, Users
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { dashboardStats, revenueData, bookings, pets, weeklyOccupancy } from '@/data/mockData'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const statCards = [
  {
    label: 'Total Pets',
    value: dashboardStats.totalPets,
    trend: dashboardStats.petsTrend,
    icon: PawPrint,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    format: (v: number) => v.toString(),
  },
  {
    label: 'Active Bookings',
    value: dashboardStats.activeBookings,
    trend: dashboardStats.bookingsTrend,
    icon: Calendar,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    format: (v: number) => v.toString(),
  },
  {
    label: 'Monthly Revenue',
    value: dashboardStats.monthlyRevenue,
    trend: dashboardStats.revenueTrend,
    icon: DollarSign,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    format: (v: number) => `$${(v / 1000).toFixed(1)}k`,
  },
  {
    label: 'Occupancy Rate',
    value: dashboardStats.occupancyRate,
    trend: dashboardStats.occupancyTrend,
    icon: Users,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    format: (v: number) => `${v}%`,
  },
]

const statusColors: Record<string, 'success' | 'info' | 'warning' | 'error'> = {
  'checked-in': 'success',
  'confirmed': 'info',
  'pending': 'warning',
  'checked-out': 'default' as 'info',
  'cancelled': 'error',
}

const statusLabels: Record<string, string> = {
  'checked-in': 'Checked In',
  'confirmed': 'Confirmed',
  'pending': 'Pending',
  'checked-out': 'Checked Out',
  'cancelled': 'Cancelled',
}

export default function DashboardPage() {
  const activeBookings = bookings.filter(b => b.status === 'checked-in' || b.status === 'confirmed' || b.status === 'pending')
  const boardingPets = pets.filter(p => p.status === 'boarding')

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-stone-900">Good Morning, Alex</h1>
          <p className="text-sm text-stone-400 mt-1">Here's what's happening at PawPalace today</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-stone-400">
          <Clock size={16} />
          <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="relative overflow-hidden">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend >= 0 ? 'text-emerald-600' : 'text-red-500'
                }`}>
                  {stat.trend >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {Math.abs(stat.trend)}%
                </div>
              </div>
              <p className="text-2xl font-bold text-stone-900 mb-1">{stat.format(stat.value)}</p>
              <p className="text-xs text-stone-400">{stat.label}</p>
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${stat.bg} opacity-30`} />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-semibold text-stone-800">Revenue Overview</h3>
                <p className="text-xs text-stone-400 mt-0.5">Monthly revenue for the current year</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  Revenue
                </div>
              </div>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #f0f0f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      fontSize: '13px',
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#F59E0B"
                    strokeWidth={2.5}
                    fill="url(#revenueGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        {/* Occupancy Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <div className="mb-6">
              <h3 className="text-base font-semibold text-stone-800">Weekly Occupancy</h3>
              <p className="text-xs text-stone-400 mt-0.5">Room occupancy rate by day</p>
            </div>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyOccupancy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: '1px solid #f0f0f0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      fontSize: '13px',
                    }}
                    formatter={(value: number) => [`${value}%`, 'Occupancy']}
                  />
                  <Bar dataKey="rate" fill="#D97706" radius={[6, 6, 0, 0]} maxBarSize={36} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-stone-800">Recent Bookings</h3>
              <a href="/app/bookings" className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                View All <ArrowUpRight size={12} />
              </a>
            </div>
            <div className="space-y-3">
              {activeBookings.slice(0, 5).map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50/50 hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.petAvatar}
                      alt={booking.petName}
                      className="w-9 h-9 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-stone-800">{booking.petName}</p>
                      <p className="text-xs text-stone-400">{booking.ownerName}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="text-xs text-stone-500">{booking.roomType}</p>
                      <p className="text-xs text-stone-400">{booking.checkIn} - {booking.checkOut}</p>
                    </div>
                    <Badge variant={statusColors[booking.status]}>
                      {statusLabels[booking.status]}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Currently Boarding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-semibold text-stone-800">Currently Boarding</h3>
              <Badge variant="success">{boardingPets.length} pets</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {boardingPets.map((pet) => (
                <div
                  key={pet.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-100 hover:shadow-warm transition-all duration-200 group cursor-pointer"
                >
                  <img
                    src={pet.avatar}
                    alt={pet.name}
                    className="w-10 h-10 rounded-xl object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-stone-800 truncate">{pet.name}</p>
                    <p className="text-xs text-stone-400 truncate">{pet.breed}</p>
                    <p className="text-[10px] text-stone-300 truncate">{pet.ownerName}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
