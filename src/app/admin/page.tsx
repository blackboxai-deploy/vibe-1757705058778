'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Building, 
  DollarSign, 
  TrendingUp,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Download
} from 'lucide-react'

export default function AdminDashboard() {
  // Mock admin statistics
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Properties',
      value: '3,421',
      change: '+12.5%',
      trend: 'up',
      icon: Building,
      color: 'text-green-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$89,247',
      change: '+15.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Platform Growth',
      value: '24.8%',
      change: '+3.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ]

  // Mock user activity data
  const recentUsers = [
    {
      id: 1,
      name: 'Ahmed Al-Mansoori',
      email: 'ahmed@example.com',
      type: 'Premium Investor',
      status: 'Active',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Abdullah',
      email: 'sarah@example.com',
      type: 'Real Estate Agent',
      status: 'Active',
      joinDate: '2024-01-12',
      lastActive: '5 hours ago'
    },
    {
      id: 3,
      name: 'Omar Hassan',
      email: 'omar@example.com',
      type: 'Individual Lister',
      status: 'Pending',
      joinDate: '2024-01-18',
      lastActive: '1 day ago'
    },
    {
      id: 4,
      name: 'Fatima Al-Zahrani',
      email: 'fatima@example.com',
      type: 'Developer',
      status: 'Active',
      joinDate: '2024-01-10',
      lastActive: '3 hours ago'
    }
  ]

  // Mock property listings data
  const recentProperties = [
    {
      id: 1,
      title: 'Luxury Villa Dubai Marina',
      location: 'Dubai Marina, UAE',
      price: 'AED 3,500,000',
      status: 'Published',
      views: 247,
      inquiries: 12,
      listedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Modern Apartment Riyadh',
      location: 'Riyadh, Saudi Arabia',
      price: 'SAR 850,000',
      status: 'Under Review',
      views: 89,
      inquiries: 5,
      listedDate: '2024-01-18'
    },
    {
      id: 3,
      title: 'Beachfront Condo Antalya',
      location: 'Antalya, Turkey',
      price: 'EUR 450,000',
      status: 'Published',
      views: 156,
      inquiries: 8,
      listedDate: '2024-01-16'
    }
  ]

  // Mock system alerts
  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Server Load',
      message: 'Server CPU usage is at 85%. Consider scaling resources.',
      time: '10 minutes ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Integration Available',
      message: 'New payment gateway integration is ready for deployment.',
      time: '2 hours ago'
    },
    {
      id: 3,
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily database backup completed successfully.',
      time: '6 hours ago'
    }
  ]

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'Active': { variant: 'default', className: 'bg-green-100 text-green-800' },
      'Pending': { variant: 'secondary', className: 'bg-yellow-100 text-yellow-800' },
      'Published': { variant: 'default', className: 'bg-green-100 text-green-800' },
      'Under Review': { variant: 'secondary', className: 'bg-blue-100 text-blue-800' }
    } as const

    const config = statusMap[status as keyof typeof statusMap] || { variant: 'outline', className: '' }
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    )
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-blue-600" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your real estate platform performance and activities
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === 'up' ? (
                  <ArrowUp className="h-3 w-3 text-green-600 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-600 mr-1" />
                )}
                <span className={stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Users */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>
                  Latest user registrations and activity
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All Users
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusBadge(user.status)}
                        <Badge variant="outline" className="text-xs">
                          {user.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{user.lastActive}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Alerts */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>
                Important system notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{alert.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {alert.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {alert.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Properties */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Properties</CardTitle>
            <CardDescription>
              Latest property listings and their performance
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              View All Properties
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Property</th>
                  <th className="text-left p-2 font-medium">Location</th>
                  <th className="text-left p-2 font-medium">Price</th>
                  <th className="text-left p-2 font-medium">Status</th>
                  <th className="text-left p-2 font-medium">Performance</th>
                  <th className="text-left p-2 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentProperties.map((property) => (
                  <tr key={property.id} className="border-b hover:bg-accent transition-colors">
                    <td className="p-2">
                      <div>
                        <p className="font-medium text-sm">{property.title}</p>
                        <p className="text-xs text-muted-foreground">ID: {property.id}</p>
                      </div>
                    </td>
                    <td className="p-2">
                      <p className="text-sm">{property.location}</p>
                    </td>
                    <td className="p-2">
                      <p className="font-medium text-sm">{property.price}</p>
                    </td>
                    <td className="p-2">
                      {getStatusBadge(property.status)}
                    </td>
                    <td className="p-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs">
                          <Eye className="h-3 w-3" />
                          <span>{property.views} views</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <span>💬 {property.inquiries} inquiries</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Activity Overview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Monthly user registration trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">User growth chart</p>
                <p className="text-sm text-muted-foreground">Shows monthly registration trends</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
            <CardDescription>
              Monthly revenue and subscription metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Subscription Revenue</span>
                  <span className="font-medium">$67,890 (76%)</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Transaction Fees</span>
                  <span className="font-medium">$15,680 (18%)</span>
                </div>
                <Progress value={18} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Premium Services</span>
                  <span className="font-medium">$5,677 (6%)</span>
                </div>
                <Progress value={6} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}