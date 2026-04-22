import { motion } from 'framer-motion'
import { Building2, Bell, Palette, CreditCard, Shield, Globe } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

const settingSections = [
  {
    icon: Building2,
    title: 'Business Profile',
    description: 'Manage your business name, address, and contact information',
    fields: [
      { label: 'Business Name', value: 'PawPalace Pet Resort', placeholder: '' },
      { label: 'Email', value: 'contact@pawpalace.com', placeholder: '' },
      { label: 'Phone', value: '+1 (555) 123-4567', placeholder: '' },
      { label: 'Address', value: '123 Pet Street, Portland, OR 97201', placeholder: '' },
    ],
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure how you receive alerts and updates',
    toggles: [
      { label: 'Email notifications for new bookings', enabled: true },
      { label: 'SMS alerts for check-in/check-out', enabled: true },
      { label: 'Weekly summary reports', enabled: false },
      { label: 'Payment confirmation alerts', enabled: true },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-display font-bold text-stone-900">Settings</h1>
        <p className="text-sm text-stone-400 mt-1">Manage your account and business preferences</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Building2, label: 'Profile', color: 'bg-amber-50 text-amber-600' },
          { icon: CreditCard, label: 'Billing', color: 'bg-blue-50 text-blue-600' },
          { icon: Shield, label: 'Security', color: 'bg-emerald-50 text-emerald-600' },
          { icon: Globe, label: 'Integrations', color: 'bg-purple-50 text-purple-600' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="flex items-center gap-3 cursor-pointer">
              <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
                <item.icon size={18} />
              </div>
              <span className="text-sm font-medium text-stone-700">{item.label}</span>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Business Profile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Building2 size={20} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-stone-800">{settingSections[0].title}</h3>
              <p className="text-xs text-stone-400">{settingSections[0].description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {settingSections[0].fields!.map((field) => (
              <Input
                key={field.label}
                label={field.label}
                defaultValue={field.value}
              />
            ))}
          </div>

          <div className="flex justify-end">
            <Button size="sm">Save Changes</Button>
          </div>
        </Card>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Bell size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-stone-800">{settingSections[1].title}</h3>
              <p className="text-xs text-stone-400">{settingSections[1].description}</p>
            </div>
          </div>

          <div className="space-y-4">
            {settingSections[1].toggles!.map((toggle) => (
              <div key={toggle.label} className="flex items-center justify-between py-2">
                <span className="text-sm text-stone-600">{toggle.label}</span>
                <button
                  className={`relative w-10 h-5.5 rounded-full transition-colors cursor-pointer ${
                    toggle.enabled ? 'bg-amber-500' : 'bg-stone-200'
                  }`}
                >
                  <span
                    className={`absolute top-0.75 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                      toggle.enabled ? 'translate-x-5' : 'translate-x-0.75'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <Palette size={20} className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-stone-800">Appearance</h3>
              <p className="text-xs text-stone-400">Customize the look and feel of your dashboard</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-stone-600 mb-3">Brand Color</p>
              <div className="flex gap-3">
                {['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EF4444', '#EC4899'].map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                      color === '#F59E0B' ? 'ring-2 ring-offset-2 ring-amber-400' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <p className="text-sm font-medium text-stone-600 mb-3">Theme</p>
              <div className="flex gap-3">
                {[
                  { label: 'Light', active: true },
                  { label: 'Dark', active: false },
                  { label: 'System', active: false },
                ].map((theme) => (
                  <button
                    key={theme.label}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      theme.active
                        ? 'bg-amber-100 text-amber-700 shadow-sm'
                        : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                    }`}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
