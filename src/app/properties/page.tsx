'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { 
  Home, 
  Search, 

  MapPin, 
  Eye, 
  Heart,
  MoreHorizontal,
  Grid3X3,
  List,
  SlidersHorizontal,
  Bed,
  Bath,
  Square,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function PropertiesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [showFilters, setShowFilters] = useState(false)

  // Mock properties data
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa with Pool',
      location: 'Dubai Marina, UAE',
      price: 3500000,
      currency: 'AED',
      type: 'Villa',
      status: 'For Sale',
      bedrooms: 4,
      bathrooms: 5,
      area: 3200,
      yearBuilt: 2020,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aa02e0e9-e3fc-4740-a7cf-ba63e86a7e99.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/998bd8ee-9843-4033-942d-2758052c75db.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5de94496-a8a8-41fa-bb48-c475cef6e84e.png'
      ],
      features: ['Swimming Pool', 'Garden', 'Parking', 'Security', 'Gym'],
      agent: {
        name: 'Sarah Abdullah',
        company: 'Premium Properties',
        rating: 4.9
      },
      aiValuation: {
        estimate: 3450000,
        confidence: 92,
        pricePerSqft: 1078
      },
      listedDate: '2024-01-15',
      views: 247,
      isFeatured: true,
      isLiked: false
    },
    {
      id: 2,
      title: 'Modern Apartment Downtown',
      location: 'Riyadh, Saudi Arabia',
      price: 850000,
      currency: 'SAR',
      type: 'Apartment',
      status: 'For Sale',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      yearBuilt: 2019,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f31b362-1b3a-48db-ba98-04aff60043d6.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/896bd6d0-7c24-4102-8bb2-26cfee4f9b54.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13fec5a1-5ca2-4ca5-a416-518955a79a14.png'
      ],
      features: ['Balcony', 'Parking', 'Elevator', 'Security'],
      agent: {
        name: 'Ahmed Al-Rashid',
        company: 'Capital Realty',
        rating: 4.7
      },
      aiValuation: {
        estimate: 825000,
        confidence: 88,
        pricePerSqft: 472
      },
      listedDate: '2024-01-10',
      views: 189,
      isFeatured: false,
      isLiked: true
    },
    {
      id: 3,
      title: 'Beachfront Condo',
      location: 'Antalya, Turkey',
      price: 450000,
      currency: 'EUR',
      type: 'Condo',
      status: 'For Sale',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      yearBuilt: 2021,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbaece44-0b76-41e3-b331-5104cdefa646.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd48107a-55ab-4798-b9db-87c413bdab78.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/adf8748a-d629-4027-8d0d-21e808f78381.png'
      ],
      features: ['Sea View', 'Balcony', 'Pool', 'Beach Access'],
      agent: {
        name: 'Mehmet Özkan',
        company: 'Coastal Properties',
        rating: 4.8
      },
      aiValuation: {
        estimate: 435000,
        confidence: 85,
        pricePerSqft: 375
      },
      listedDate: '2024-01-08',
      views: 156,
      isFeatured: true,
      isLiked: false
    },
    {
      id: 4,
      title: 'Family House with Garden',
      location: 'Baghdad, Iraq',
      price: 180000,
      currency: 'USD',
      type: 'House',
      status: 'For Sale',
      bedrooms: 5,
      bathrooms: 3,
      area: 2500,
      yearBuilt: 2018,
      images: [
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/efd4d58c-d649-42fa-8d21-431c1ed6d36a.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e1d8606-4adf-44a3-8e2e-7a45de5b6cf5.png',
        'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee2d8a73-3e26-4a86-92db-c094309c7ffc.png'
      ],
      features: ['Garden', 'Parking', 'Storage', 'Traditional Design'],
      agent: {
        name: 'Omar Hassan',
        company: 'Heritage Homes',
        rating: 4.6
      },
      aiValuation: {
        estimate: 175000,
        confidence: 79,
        pricePerSqft: 72
      },
      listedDate: '2024-01-05',
      views: 98,
      isFeatured: false,
      isLiked: false
    }
  ]

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const PropertyCard = ({ property, isListView = false }: { property: typeof properties[0], isListView?: boolean }) => (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${property.isFeatured ? 'ring-2 ring-primary/20' : ''}`}>
      <div className={`relative ${isListView ? 'flex' : ''}`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden ${isListView ? 'w-64 flex-shrink-0' : ''}`}>
          <img
            src={property.images[0]}
            alt={property.title}
            className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              isListView ? 'h-48' : 'h-64'
            }`}
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {property.isFeatured && (
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            <Badge variant="secondary" className="bg-background/90">
              {property.status}
            </Badge>
          </div>

          {/* Actions */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              size="sm" 
              variant="secondary" 
              className={`h-8 w-8 p-0 bg-background/90 ${property.isLiked ? 'text-red-500' : ''}`}
            >
              <Heart className="h-4 w-4" fill={property.isLiked ? 'currentColor' : 'none'} />
            </Button>
            <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-background/90">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Views */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-background/90 text-xs">
              <Eye className="h-3 w-3 mr-1" />
              {property.views} views
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                <Link href={`/properties/${property.id}`}>
                  {property.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {property.location}
              </p>
            </div>
            <Badge variant="outline">{property.type}</Badge>
          </div>

          {/* Price */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-primary">
              {formatPrice(property.price, property.currency)}
            </p>
            <p className="text-xs text-muted-foreground">
              AI Estimate: {formatPrice(property.aiValuation.estimate, property.currency)} 
              <span className="ml-1 text-green-600">
                ({property.aiValuation.confidence}% confidence)
              </span>
            </p>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              {property.bedrooms} bed
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              {property.bathrooms} bath
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              {property.area.toLocaleString()} sq ft
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {property.features.slice(0, 3).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {property.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{property.features.length - 3} more
              </Badge>
            )}
          </div>

          {/* Agent Info */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">
                  {property.agent.name.split(' ').map((n: string) => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{property.agent.name}</p>
                <p className="text-xs text-muted-foreground">{property.agent.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span className="text-xs">{property.agent.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">مرشدك العقاري</h1>
                <p className="text-xs text-muted-foreground">Real Estate Guide</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/properties" className="text-sm font-medium text-primary">
                Properties
              </Link>
              <Link href="/analytics" className="text-sm hover:text-primary transition-colors">
                AI Analytics
              </Link>
              <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/properties/list">List Property</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by location, property type, or price..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
            
            {/* Filter Toggle */}
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <Card className="p-6 mb-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="dubai">Dubai, UAE</SelectItem>
                      <SelectItem value="riyadh">Riyadh, Saudi Arabia</SelectItem>
                      <SelectItem value="istanbul">Istanbul, Turkey</SelectItem>
                      <SelectItem value="baghdad">Baghdad, Iraq</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Bedrooms</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={5000000}
                      min={0}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Properties for Sale</h2>
              <p className="text-muted-foreground">
                {properties.length} properties found
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
        }>
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              isListView={viewMode === 'list'} 
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  )
}