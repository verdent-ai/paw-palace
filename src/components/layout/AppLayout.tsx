import { useState } from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, Calendar, PawPrint, Users, Settings,
  Bell, Search, ChevronLeft, LogOut, Menu
} from 'lucide-react'
import Input from '@/components/ui/Input'

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
  { icon: Calendar, label: 'Bookings', path: '/app/bookings' },
  { icon: PawPrint, label: 'Pets', path: '/app/pets' },
  { icon: Users, label: 'Customers', path: '/app/customers' },
  { icon: Settings, label: 'Settings', path: '/app/settings' },
]

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen bg-cream-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 260 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden lg:flex flex-col bg-white border-r border-stone-100 shadow-warm z-30"
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-stone-50">
          <Link to="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">🐾</span>
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-lg font-semibold text-stone-800 whitespace-nowrap"
                >
                  Paw<span className="text-amber-600">Palace</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-stone-50 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/app'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-amber-50 text-amber-700 shadow-sm'
                    : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
                }`
              }
            >
              <link.icon size={20} className="flex-shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    {link.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-stone-50">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-400 hover:text-stone-600 hover:bg-stone-50 transition-colors"
          >
            <LogOut size={20} className="flex-shrink-0" />
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Back to Site
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[260px] bg-white border-r border-stone-100 shadow-xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-4 h-16 border-b border-stone-50">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-white text-sm">🐾</span>
                  </div>
                  <span className="text-lg font-semibold text-stone-800">
                    Paw<span className="text-amber-600">Palace</span>
                  </span>
                </Link>
              </div>
              <nav className="flex-1 py-4 px-3 space-y-1">
                {sidebarLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/app'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-50 text-amber-700 shadow-sm'
                          : 'text-stone-500 hover:bg-stone-50 hover:text-stone-700'
                      }`
                    }
                  >
                    <link.icon size={20} />
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-stone-100 flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 text-stone-500 hover:text-stone-700 cursor-pointer"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:block w-72">
              <Input
                placeholder="Search pets, bookings, customers..."
                icon={<Search size={16} />}
                className="bg-stone-50 border-stone-100"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-stone-400 hover:text-stone-600 transition-colors cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-coral-400 rounded-full" />
            </button>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Admin"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-amber-100"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-stone-800">Alex Rivera</p>
                <p className="text-xs text-stone-400">Owner</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
