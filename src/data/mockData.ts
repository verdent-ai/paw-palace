export interface Pet {
  id: string
  name: string
  species: 'dog' | 'cat' | 'rabbit' | 'bird' | 'other'
  breed: string
  age: number
  weight: number
  avatar: string
  ownerId: string
  ownerName: string
  notes: string
  vaccinated: boolean
  neutered: boolean
  temperament: string
  lastVisit: string
  status: 'boarding' | 'checked-out' | 'reserved'
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  address: string
  pets: string[]
  totalVisits: number
  totalSpent: number
  memberSince: string
  vipLevel: 'bronze' | 'silver' | 'gold' | 'platinum'
}

export interface Booking {
  id: string
  petName: string
  petAvatar: string
  petSpecies: string
  ownerName: string
  checkIn: string
  checkOut: string
  status: 'confirmed' | 'checked-in' | 'checked-out' | 'cancelled' | 'pending'
  roomType: string
  totalPrice: number
  specialRequests: string
  addons: string[]
}

export interface DashboardStats {
  totalPets: number
  activeBookings: number
  monthlyRevenue: number
  occupancyRate: number
  petsTrend: number
  bookingsTrend: number
  revenueTrend: number
  occupancyTrend: number
}

export const dashboardStats: DashboardStats = {
  totalPets: 156,
  activeBookings: 23,
  monthlyRevenue: 18450,
  occupancyRate: 87,
  petsTrend: 12.5,
  bookingsTrend: 8.3,
  revenueTrend: 15.2,
  occupancyTrend: -2.1,
}

export const revenueData = [
  { month: 'Jan', revenue: 12400, bookings: 45 },
  { month: 'Feb', revenue: 13200, bookings: 52 },
  { month: 'Mar', revenue: 14800, bookings: 58 },
  { month: 'Apr', revenue: 13900, bookings: 51 },
  { month: 'May', revenue: 16200, bookings: 63 },
  { month: 'Jun', revenue: 17800, bookings: 71 },
  { month: 'Jul', revenue: 19200, bookings: 78 },
  { month: 'Aug', revenue: 18450, bookings: 73 },
  { month: 'Sep', revenue: 17100, bookings: 68 },
  { month: 'Oct', revenue: 15900, bookings: 61 },
  { month: 'Nov', revenue: 16800, bookings: 65 },
  { month: 'Dec', revenue: 18900, bookings: 74 },
]

export const weeklyOccupancy = [
  { day: 'Mon', rate: 72 },
  { day: 'Tue', rate: 78 },
  { day: 'Wed', rate: 85 },
  { day: 'Thu', rate: 82 },
  { day: 'Fri', rate: 91 },
  { day: 'Sat', rate: 95 },
  { day: 'Sun', rate: 88 },
]

const petAvatars = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=200&h=200&fit=crop&crop=face',
]

const customerAvatars = [
  'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
]

export const pets: Pet[] = [
  { id: '1', name: 'Max', species: 'dog', breed: 'Golden Retriever', age: 3, weight: 32, avatar: petAvatars[0], ownerId: '1', ownerName: 'Sarah Chen', notes: 'Loves belly rubs, needs evening walk', vaccinated: true, neutered: true, temperament: 'Friendly & Playful', lastVisit: '2024-12-15', status: 'boarding' },
  { id: '2', name: 'Luna', species: 'cat', breed: 'British Shorthair', age: 2, weight: 4.5, avatar: petAvatars[2], ownerId: '2', ownerName: 'James Wilson', notes: 'Shy with strangers, prefers quiet rooms', vaccinated: true, neutered: true, temperament: 'Calm & Independent', lastVisit: '2024-12-20', status: 'boarding' },
  { id: '3', name: 'Buddy', species: 'dog', breed: 'French Bulldog', age: 4, weight: 12, avatar: petAvatars[4], ownerId: '3', ownerName: 'Emily Parker', notes: 'Allergic to chicken', vaccinated: true, neutered: false, temperament: 'Energetic & Social', lastVisit: '2024-12-18', status: 'reserved' },
  { id: '4', name: 'Mochi', species: 'cat', breed: 'Ragdoll', age: 1, weight: 3.8, avatar: petAvatars[3], ownerId: '4', ownerName: 'David Kim', notes: 'First time boarding, may be anxious', vaccinated: true, neutered: true, temperament: 'Gentle & Curious', lastVisit: '2025-01-02', status: 'checked-out' },
  { id: '5', name: 'Cooper', species: 'dog', breed: 'Labrador', age: 5, weight: 29, avatar: petAvatars[1], ownerId: '5', ownerName: 'Lisa Johnson', notes: 'Takes daily medication at 8am', vaccinated: true, neutered: true, temperament: 'Loyal & Obedient', lastVisit: '2024-12-28', status: 'boarding' },
  { id: '6', name: 'Bella', species: 'dog', breed: 'Pomeranian', age: 2, weight: 3.2, avatar: petAvatars[6], ownerId: '1', ownerName: 'Sarah Chen', notes: 'Companion for Max, keep together', vaccinated: true, neutered: true, temperament: 'Playful & Alert', lastVisit: '2024-12-15', status: 'boarding' },
  { id: '7', name: 'Shadow', species: 'cat', breed: 'Maine Coon', age: 4, weight: 7.2, avatar: petAvatars[3], ownerId: '2', ownerName: 'James Wilson', notes: 'Needs large litter box', vaccinated: true, neutered: true, temperament: 'Majestic & Gentle', lastVisit: '2024-12-22', status: 'checked-out' },
  { id: '8', name: 'Rocky', species: 'dog', breed: 'German Shepherd', age: 3, weight: 35, avatar: petAvatars[7], ownerId: '4', ownerName: 'David Kim', notes: 'Trained, responds to hand signals', vaccinated: true, neutered: true, temperament: 'Protective & Smart', lastVisit: '2025-01-05', status: 'reserved' },
]

export const customers: Customer[] = [
  { id: '1', name: 'Sarah Chen', email: 'sarah@example.com', phone: '+1 (555) 123-4567', avatar: customerAvatars[0], address: '123 Oak Street, Portland, OR', pets: ['Max', 'Bella'], totalVisits: 12, totalSpent: 2840, memberSince: '2023-03-15', vipLevel: 'gold' },
  { id: '2', name: 'James Wilson', email: 'james@example.com', phone: '+1 (555) 234-5678', avatar: customerAvatars[1], address: '456 Maple Ave, Seattle, WA', pets: ['Luna', 'Shadow'], totalVisits: 8, totalSpent: 1920, memberSince: '2023-07-20', vipLevel: 'silver' },
  { id: '3', name: 'Emily Parker', email: 'emily@example.com', phone: '+1 (555) 345-6789', avatar: customerAvatars[2], address: '789 Pine Road, San Francisco, CA', pets: ['Buddy'], totalVisits: 15, totalSpent: 3650, memberSince: '2022-11-08', vipLevel: 'platinum' },
  { id: '4', name: 'David Kim', email: 'david@example.com', phone: '+1 (555) 456-7890', avatar: customerAvatars[3], address: '321 Cedar Lane, Austin, TX', pets: ['Mochi', 'Rocky'], totalVisits: 5, totalSpent: 1150, memberSince: '2024-01-12', vipLevel: 'bronze' },
  { id: '5', name: 'Lisa Johnson', email: 'lisa@example.com', phone: '+1 (555) 567-8901', avatar: customerAvatars[4], address: '654 Elm Street, Denver, CO', pets: ['Cooper'], totalVisits: 10, totalSpent: 2380, memberSince: '2023-05-03', vipLevel: 'gold' },
]

export const bookings: Booking[] = [
  { id: 'BK-001', petName: 'Max', petAvatar: petAvatars[0], petSpecies: 'dog', ownerName: 'Sarah Chen', checkIn: '2025-01-10', checkOut: '2025-01-15', status: 'checked-in', roomType: 'Deluxe Suite', totalPrice: 375, specialRequests: 'Evening walks, extra blanket', addons: ['Grooming', 'Photo Updates'] },
  { id: 'BK-002', petName: 'Luna', petAvatar: petAvatars[2], petSpecies: 'cat', ownerName: 'James Wilson', checkIn: '2025-01-11', checkOut: '2025-01-14', status: 'checked-in', roomType: 'Cat Condo', totalPrice: 195, specialRequests: 'Quiet room, feather toy', addons: ['Nail Trimming'] },
  { id: 'BK-003', petName: 'Buddy', petAvatar: petAvatars[4], petSpecies: 'dog', ownerName: 'Emily Parker', checkIn: '2025-01-16', checkOut: '2025-01-20', status: 'confirmed', roomType: 'Standard Room', totalPrice: 280, specialRequests: 'No chicken treats', addons: ['Play Sessions', 'Bath'] },
  { id: 'BK-004', petName: 'Cooper', petAvatar: petAvatars[1], petSpecies: 'dog', ownerName: 'Lisa Johnson', checkIn: '2025-01-12', checkOut: '2025-01-18', status: 'checked-in', roomType: 'Luxury Suite', totalPrice: 540, specialRequests: 'Medication at 8am daily', addons: ['Grooming', 'Training Session', 'Photo Updates'] },
  { id: 'BK-005', petName: 'Bella', petAvatar: petAvatars[6], petSpecies: 'dog', ownerName: 'Sarah Chen', checkIn: '2025-01-10', checkOut: '2025-01-15', status: 'checked-in', roomType: 'Deluxe Suite', totalPrice: 375, specialRequests: 'Keep with Max', addons: ['Grooming'] },
  { id: 'BK-006', petName: 'Rocky', petAvatar: petAvatars[7], petSpecies: 'dog', ownerName: 'David Kim', checkIn: '2025-01-20', checkOut: '2025-01-25', status: 'pending', roomType: 'Premium Suite', totalPrice: 450, specialRequests: 'Large yard access', addons: ['Training Session', 'Photo Updates'] },
  { id: 'BK-007', petName: 'Mochi', petAvatar: petAvatars[3], petSpecies: 'cat', ownerName: 'David Kim', checkIn: '2025-01-05', checkOut: '2025-01-08', status: 'checked-out', roomType: 'Cat Condo', totalPrice: 195, specialRequests: 'First time, extra attention', addons: ['Nail Trimming', 'Photo Updates'] },
  { id: 'BK-008', petName: 'Shadow', petAvatar: petAvatars[3], petSpecies: 'cat', ownerName: 'James Wilson', checkIn: '2025-01-02', checkOut: '2025-01-06', status: 'checked-out', roomType: 'Premium Cat Suite', totalPrice: 320, specialRequests: 'Large litter box needed', addons: ['Grooming'] },
]

export const roomTypes = [
  { name: 'Standard Room', price: 45, description: 'Comfortable space with bed and toys', capacity: 'Small to Medium dogs' },
  { name: 'Deluxe Suite', price: 65, description: 'Spacious suite with premium bedding and webcam', capacity: 'All dog sizes' },
  { name: 'Luxury Suite', price: 85, description: 'Private suite with outdoor access and TV', capacity: 'All dog sizes' },
  { name: 'Premium Suite', price: 95, description: 'Our finest accommodation with personal attendant', capacity: 'All dog sizes' },
  { name: 'Cat Condo', price: 55, description: 'Multi-level cat paradise with climbing walls', capacity: 'All cats' },
  { name: 'Premium Cat Suite', price: 75, description: 'Luxury cat suite with window perch and fountain', capacity: 'All cats' },
]
