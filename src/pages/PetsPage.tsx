import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Plus, Filter, Heart, Syringe, Scissors, Weight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { pets } from '@/data/mockData'

const speciesFilter = ['All', 'Dogs', 'Cats']

const statusBadge: Record<string, { variant: 'success' | 'info' | 'warning'; label: string }> = {
  boarding: { variant: 'success', label: 'Boarding' },
  reserved: { variant: 'info', label: 'Reserved' },
  'checked-out': { variant: 'warning', label: 'Checked Out' },
}

export default function PetsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSpecies, setActiveSpecies] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pet.ownerName.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSpecies =
      activeSpecies === 'All' ||
      (activeSpecies === 'Dogs' && pet.species === 'dog') ||
      (activeSpecies === 'Cats' && pet.species === 'cat')

    return matchesSearch && matchesSpecies
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-stone-900">Pet Profiles</h1>
          <p className="text-sm text-stone-400 mt-1">{pets.length} pets registered in the system</p>
        </div>
        <Button className="gap-2">
          <Plus size={16} />
          Add Pet
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by pet name, breed, or owner..."
              icon={<Search size={16} />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            {speciesFilter.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveSpecies(filter)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeSpecies === filter
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-stone-50 text-stone-500 hover:bg-stone-100'
                }`}
              >
                {filter === 'Dogs' ? '🐕 ' : filter === 'Cats' ? '🐈 ' : ''}{filter}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Pet Cards Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredPets.map((pet, index) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card hover padding="none" className="overflow-hidden group cursor-pointer">
              {/* Pet Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pet.avatar}
                  alt={pet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <Badge variant={statusBadge[pet.status].variant}>
                    {statusBadge[pet.status].label}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-lg font-semibold flex items-center gap-1.5">
                    {pet.name}
                    <span className="text-sm">{pet.species === 'dog' ? '🐕' : '🐈'}</span>
                  </h3>
                  <p className="text-xs text-white/80">{pet.breed}</p>
                </div>
              </div>

              {/* Pet Info */}
              <div className="p-4">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-xs text-stone-400 mb-0.5">Age</p>
                    <p className="text-sm font-semibold text-stone-700">{pet.age} yrs</p>
                  </div>
                  <div className="text-center border-x border-stone-100">
                    <p className="text-xs text-stone-400 mb-0.5">Weight</p>
                    <p className="text-sm font-semibold text-stone-700">{pet.weight} kg</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-stone-400 mb-0.5">Owner</p>
                    <p className="text-sm font-semibold text-stone-700 truncate">{pet.ownerName.split(' ')[0]}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full">
                    <Heart size={10} /> {pet.temperament.split(' ')[0]}
                  </span>
                  {pet.vaccinated && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                      <Syringe size={10} /> Vaccinated
                    </span>
                  )}
                  {pet.neutered && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                      <Scissors size={10} /> Neutered
                    </span>
                  )}
                </div>

                {pet.notes && (
                  <p className="text-[11px] text-stone-400 italic leading-relaxed border-t border-stone-50 pt-3">
                    "{pet.notes}"
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredPets.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 rounded-2xl bg-stone-50 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🐾</span>
          </div>
          <p className="text-sm font-medium text-stone-600 mb-1">No pets found</p>
          <p className="text-xs text-stone-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
