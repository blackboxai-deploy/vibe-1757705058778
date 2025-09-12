'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Home, 

  Eye, 
  Heart, 
  MessageSquare, 
  BarChart3,

  MapPin,

  Settings,
  Bell,
  Search,

} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {


  // Mock user data
  const userData = {
    name: 'Ahmed Al-Mansoori',
    email: 'ahmed@example.com',
    userType: 'Premium Investor',
    avatar: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6052915d-4c37-489e-b48b-d5c1cf6c36bb.png',
    joinDate: 'March 2024',
    properties: 12,
    watchlist: 24,
    reports: 8
  }

  // Mock statistics
  const stats = [
    {
      title: 'Properties Viewed',
      value: '247',
      change: '+12%',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Saved Properties',
      value: '24',
      change: '+3',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Messages',
      value: '18',
      change: '+5',
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      title: 'AI Reports',
      value: '8',
      change: '+2',
      icon: BarChart3,
      color: 'text-purple-600'
    }
  ]

  // Mock recent activities
  const recentActivities = [
    {
      type: 'property_view',
      title: 'Viewed luxury villa in Dubai Marina',
      time: '2 hours ago',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      type: 'report_generated',
      title: 'AI valuation report generated',
      time: '1 day ago',
      icon: BarChart3,
      color: 'text-purple-600'
    },
    {
      type: 'property_saved',
      title: 'Saved apartment in Riyadh',
      time: '2 days ago',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      type: 'message_received',
      title: 'New message from agent',
      time: '3 days ago',
      icon: MessageSquare,
      color: 'text-green-600'
    }
  ]

  // Mock saved properties
  const savedProperties = [
    {
      id: 1,
      title: 'Luxury Villa with Pool',
      location: 'Dubai Marina, UAE',
      price: 'AED 3,500,000',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 5,
      area: '3,200 sq ft',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2145c8d-0733-4cbb-b9ca-4799bfdb712d.png',
      aiValuation: 'AED 3,450,000',
      confidence: 92
    },
    {
      id: 2,
      title: 'Modern Apartment',
      location: 'Riyadh, Saudi Arabia',
      price: 'SAR 850,000',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: '1,800 sq ft',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c3fdd962-8007-407a-991f-ec542a84b4fa.png',
      aiValuation: 'SAR 825,000',
      confidence: 88
    }
  ]

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
              <Link href="/properties" className="text-sm hover:text-primary transition-colors">
                Properties
              </Link>
              <Link href="/analytics" className="text-sm hover:text-primary transition-colors">
                AI Analytics
              </Link>
              <Link href="/dashboard" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="h-8 w-8 rounded-full"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{userData.name}</p>
                  <p className="text-xs text-muted-foreground">{userData.userType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Ahmed! 👋</h1>
          <p className="text-muted-foreground">
            Here&apos;s what&apos;s happening with your real estate portfolio today.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks to help you get things done faster
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col h-auto p-4" asChild>
                    <Link href="/properties/search">
                      <Search className="h-6 w-6 mb-2" />
                      Search Properties
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto p-4" asChild>
                    <Link href="/analytics">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      Generate Report
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto p-4" asChild>
                    <Link href="/properties/list">
                      <Home className="h-6 w-6 mb-2" />
                      List Property
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto p-4" asChild>
                    <Link href="/dashboard/messages">
                      <MessageSquare className="h-6 w-6 mb-2" />
                      Messages
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Saved Properties */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Saved Properties</CardTitle>
                  <CardDescription>
                    Properties you've saved for later review
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/saved">View All</Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {savedProperties.map((property) => (
                  <div key={property.id} className="flex space-x-4 p-4 border rounded-lg hover:shadow-md transition-all duration-300">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-sm">{property.title}</h3>
                          <p className="text-xs text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {property.location}
                          </p>
                        </div>
                        <Badge variant="secondary">{property.type}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex space-x-4">
                          <span>{property.bedrooms} beds</span>
                          <span>{property.bathrooms} baths</span>
                          <span>{property.area}</span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{property.price}</p>
                          <p className="text-muted-foreground">
                            AI: {property.aiValuation} ({property.confidence}%)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={userData.avatar}
                    alt={userData.name}
                    className="h-16 w-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{userData.name}</h3>
                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                    <Badge variant="outline">{userData.userType}</Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{userData.properties}</p>
                    <p className="text-xs text-muted-foreground">Properties</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{userData.watchlist}</p>
                    <p className="text-xs text-muted-foreground">Watchlist</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{userData.reports}</p>
                    <p className="text-xs text-muted-foreground">Reports</p>
                  </div>
                </div>

                <Button className="w-full" variant="outline" asChild>
                  <Link href="/dashboard/profile">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                      <activity.icon className="h-3 w-3" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/dashboard/activity">View All Activity</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upgrade Prompt */}
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock advanced AI analytics and unlimited reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4">
                  <li>✓ Unlimited AI reports</li>
                  <li>✓ Advanced market forecasting</li>
                  <li>✓ Priority support</li>
                  <li>✓ API access</li>
                </ul>
                <Button className="w-full">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}