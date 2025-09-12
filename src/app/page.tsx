'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Home, TrendingUp, Users, Globe, Shield, Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold">مرشدك العقاري</h1>
                <p className="text-xs text-muted-foreground">Real Estate Guide</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/properties" className="text-sm hover:text-primary transition-colors">
                Properties
              </Link>
              <Link href="/analytics" className="text-sm hover:text-primary transition-colors">
                AI Analytics
              </Link>
              <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="secondary">
              🚀 AI-Powered Real Estate Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Your Comprehensive Real Estate Guide
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover, analyze, and invest in properties across Arab countries, Turkey, and Iraq with advanced AI-powered insights and comprehensive market analytics.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search properties by location, type, or price range..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg"
                />
                <Button className="absolute right-2 top-2 h-10">
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/analytics">AI Analytics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Real Estate Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful property transactions and investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Advanced Property Search</CardTitle>
                <CardDescription>
                  Multi-level location filtering, comprehensive property types, and real-time search results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hierarchical location search</li>
                  <li>• 15+ property type classifications</li>
                  <li>• Interactive map integration</li>
                  <li>• Advanced filtering options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>AI-Powered Analytics</CardTitle>
                <CardDescription>
                  Property valuation, market forecasting, and investment analysis with confidence scoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated property valuation</li>
                  <li>• Market trend predictions</li>
                  <li>• ROI calculations</li>
                  <li>• Risk assessment tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Multi-User Platform</CardTitle>
                <CardDescription>
                  Dedicated interfaces for buyers, sellers, agents, investors, and developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Role-based dashboards</li>
                  <li>• Professional tools for agents</li>
                  <li>• Developer project management</li>
                  <li>• Investor portfolio tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Multilingual Support</CardTitle>
                <CardDescription>
                  Full support for Arabic (RTL), English, Kurdish Sorani, and Turkish languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Right-to-left (RTL) layouts</li>
                  <li>• Cultural adaptations</li>
                  <li>• Localized content</li>
                  <li>• Regional currency support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>Secure & Compliant</CardTitle>
                <CardDescription>
                  Enterprise-grade security with GDPR, PDPL, and regional compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• End-to-end encryption</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Audit logging</li>
                  <li>• Regional compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle>Premium Services</CardTitle>
                <CardDescription>
                  Comprehensive admin panel, white-label solutions, and enterprise features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced admin controls</li>
                  <li>• White-label options</li>
                  <li>• API access</li>
                  <li>• Custom integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Coverage Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Regional Market Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across key markets in the Middle East and Turkey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: 'Saudi Arabia', flag: '🇸🇦', properties: '25,000+' },
              { country: 'UAE', flag: '🇦🇪', properties: '18,000+' },
              { country: 'Turkey', flag: '🇹🇷', properties: '12,000+' },
              { country: 'Iraq', flag: '🇮🇶', properties: '8,000+' },
            ].map((market, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{market.flag}</div>
                  <CardTitle className="text-lg">{market.country}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {market.properties} Properties
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Real Estate Experience?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are already benefiting from our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/register">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/analytics">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-bold">مرشدك العقاري</h3>
                  <p className="text-xs text-muted-foreground">Real Estate Guide</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your comprehensive AI-powered real estate platform for the Middle East and beyond.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/properties" className="hover:text-primary">Properties</Link></li>
                <li><Link href="/analytics" className="hover:text-primary">AI Analytics</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
                <li><Link href="/admin" className="hover:text-primary">Admin</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link href="/news" className="hover:text-primary">News</Link></li>
                <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                <li><Link href="/partners" className="hover:text-primary">Partners</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 مرشدك العقاري الشامل - Your Comprehensive Real Estate Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}