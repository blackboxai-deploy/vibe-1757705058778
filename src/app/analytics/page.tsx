'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Home, 
  TrendingUp, 
  BarChart3,

  Calculator,
  FileText,
  Download,
  Sparkles,
  Target,

  MapPin,

  CheckCircle,
  ArrowUp,

  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

export default function AnalyticsPage() {
  const [selectedProperty, setSelectedProperty] = useState('')
  const [analysisType, setAnalysisType] = useState('valuation')
  const [isGeneratingReport, setIsGeneratingReport] = useState(false)

  // Mock property data for analysis
  const sampleProperties = [
    {
      id: 1,
      title: 'Luxury Villa Dubai Marina',
      location: 'Dubai Marina, UAE',
      price: 3500000,
      currency: 'AED'
    },
    {
      id: 2,
      title: 'Modern Apartment Riyadh',
      location: 'Riyadh, Saudi Arabia',
      price: 850000,
      currency: 'SAR'
    }
  ]

  // Mock AI analysis data
  const aiAnalysis = {
    valuation: {
      currentValue: 3450000,
      confidence: 92,
      range: {
        min: 3200000,
        max: 3700000
      },
      pricePerSqft: 1078,
      lastUpdated: '2024-01-20',
      factors: [
        { name: 'Location Score', impact: '+15%', value: 95 },
        { name: 'Property Condition', impact: '+8%', value: 88 },
        { name: 'Market Trends', impact: '+5%', value: 82 },
        { name: 'Neighborhood Growth', impact: '+12%', value: 91 }
      ]
    },
    marketTrends: {
      priceGrowth: 8.5,
      demandIndex: 87,
      supplyIndex: 45,
      averageDaysOnMarket: 32,
      competitorCount: 18,
      forecast: {
        sixMonths: 3625000,
        oneYear: 3780000,
        twoYears: 4100000
      }
    },
    investment: {
      expectedROI: 12.8,
      paybackPeriod: 7.2,
      rentalYield: 6.5,
      appreciationRate: 8.5,
      riskScore: 'Low',
      cashFlow: 15600,
      recommendations: [
        'Strong rental demand in area',
        'Property value trending upward',
        'Low maintenance costs expected',
        'Excellent resale potential'
      ]
    }
  }

  const handleGenerateReport = () => {
    setIsGeneratingReport(true)
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGeneratingReport(false)
    }, 3000)
  }

  const formatCurrency = (amount: number, currency: string = 'AED') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

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
              <Link href="/analytics" className="text-sm font-medium text-primary">
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
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI Analytics Hub</h1>
              <p className="text-muted-foreground">
                Advanced property analysis powered by artificial intelligence
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Reports Generated</p>
                    <p className="text-2xl font-bold text-primary">1,247</p>
                  </div>
                  <FileText className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Accuracy</p>
                    <p className="text-2xl font-bold text-green-600">94.2%</p>
                  </div>
                  <Target className="h-8 w-8 text-green-600/60" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Properties Analyzed</p>
                    <p className="text-2xl font-bold text-blue-600">63,891</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-blue-600/60" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Market Coverage</p>
                    <p className="text-2xl font-bold text-purple-600">12 Cities</p>
                  </div>
                  <MapPin className="h-8 w-8 text-purple-600/60" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Analysis Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Generate Analysis
                </CardTitle>
                <CardDescription>
                  Select a property and analysis type to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Property Selection */}
                <div className="space-y-2">
                  <Label htmlFor="property">Select Property</Label>
                  <Select onValueChange={setSelectedProperty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a property" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">🏠 Demo Property (Try Now)</SelectItem>
                      {sampleProperties.map((property) => (
                        <SelectItem key={property.id} value={property.id.toString()}>
                          {property.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Analysis Type */}
                <div className="space-y-2">
                  <Label htmlFor="analysis-type">Analysis Type</Label>
                  <Select value={analysisType} onValueChange={setAnalysisType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="valuation">Property Valuation</SelectItem>
                      <SelectItem value="investment">Investment Analysis</SelectItem>
                      <SelectItem value="market">Market Trends</SelectItem>
                      <SelectItem value="forecast">Price Forecast</SelectItem>
                      <SelectItem value="comparison">Comparative Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Parameters */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Forecast Timeline</Label>
                    <Select defaultValue="1year">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confidence">Confidence Level</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative (80%)</SelectItem>
                        <SelectItem value="standard">Standard (90%)</SelectItem>
                        <SelectItem value="aggressive">Aggressive (95%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handleGenerateReport}
                  disabled={isGeneratingReport || !selectedProperty}
                >
                  {isGeneratingReport ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Report
                    </>
                  )}
                </Button>

                {selectedProperty && (
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      Analysis will be completed in 10-15 seconds using our advanced AI models
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            {selectedProperty ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Analysis Results
                      </CardTitle>
                      <CardDescription>
                        AI-powered insights for Luxury Villa Dubai Marina
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Save Report
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs value={analysisType} onValueChange={setAnalysisType} className="w-full">
                    <TabsList className="grid grid-cols-3 lg:grid-cols-5 mb-6">
                      <TabsTrigger value="valuation">Valuation</TabsTrigger>
                      <TabsTrigger value="investment">Investment</TabsTrigger>
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="forecast">Forecast</TabsTrigger>
                      <TabsTrigger value="comparison">Compare</TabsTrigger>
                    </TabsList>

                    {/* Property Valuation Tab */}
                    <TabsContent value="valuation" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">AI Valuation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div>
                                <p className="text-3xl font-bold text-primary">
                                  {formatCurrency(aiAnalysis.valuation.currentValue)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Current Market Value
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-green-600">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  {aiAnalysis.valuation.confidence}% Confidence
                                </Badge>
                              </div>

                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Value Range</span>
                                  <span>{aiAnalysis.valuation.confidence}%</span>
                                </div>
                                <Progress value={aiAnalysis.valuation.confidence} className="h-2" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>{formatCurrency(aiAnalysis.valuation.range.min)}</span>
                                  <span>{formatCurrency(aiAnalysis.valuation.range.max)}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">Value Factors</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {aiAnalysis.valuation.factors.map((factor, index) => (
                                <div key={index} className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span>{factor.name}</span>
                                    <div className="flex items-center gap-2">
                                      <span className="text-green-600 text-xs font-medium">
                                        {factor.impact}
                                      </span>
                                      <Badge variant="outline" className="text-xs">
                                        {factor.value}
                                      </Badge>
                                    </div>
                                  </div>
                                  <Progress value={factor.value} className="h-1" />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Key Insights */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-500" />
                            Key Insights
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                              <ArrowUp className="h-5 w-5 text-green-600" />
                              <div>
                                <p className="font-medium text-sm">Above Market Value</p>
                                <p className="text-xs text-muted-foreground">Property valued 8% above area average</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                              <TrendingUp className="h-5 w-5 text-blue-600" />
                              <div>
                                <p className="font-medium text-sm">Strong Appreciation</p>
                                <p className="text-xs text-muted-foreground">15% growth projected over 2 years</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Investment Analysis Tab */}
                    <TabsContent value="investment" className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                          <CardContent className="p-6">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-green-600">{aiAnalysis.investment.expectedROI}%</p>
                              <p className="text-sm text-muted-foreground">Expected ROI</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-blue-600">{aiAnalysis.investment.rentalYield}%</p>
                              <p className="text-sm text-muted-foreground">Rental Yield</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardContent className="p-6">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-purple-600">{aiAnalysis.investment.paybackPeriod}</p>
                              <p className="text-sm text-muted-foreground">Years to Payback</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <Card>
                        <CardHeader>
                          <CardTitle>Investment Recommendations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {aiAnalysis.investment.recommendations.map((rec, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm">{rec}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Market Trends Tab */}
                    <TabsContent value="market" className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Market Indicators</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Demand Index</span>
                                <span className="font-medium">{aiAnalysis.marketTrends.demandIndex}</span>
                              </div>
                              <Progress value={aiAnalysis.marketTrends.demandIndex} className="h-2" />
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">Supply Index</span>
                                <span className="font-medium">{aiAnalysis.marketTrends.supplyIndex}</span>
                              </div>
                              <Progress value={aiAnalysis.marketTrends.supplyIndex} className="h-2" />
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-lg">Price Forecast</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm">6 Months</span>
                                <div className="text-right">
                                  <p className="font-medium">{formatCurrency(aiAnalysis.marketTrends.forecast.sixMonths)}</p>
                                  <p className="text-xs text-green-600">+5.2%</p>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm">1 Year</span>
                                <div className="text-right">
                                  <p className="font-medium">{formatCurrency(aiAnalysis.marketTrends.forecast.oneYear)}</p>
                                  <p className="text-xs text-green-600">+9.6%</p>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm">2 Years</span>
                                <div className="text-right">
                                  <p className="font-medium">{formatCurrency(aiAnalysis.marketTrends.forecast.twoYears)}</p>
                                  <p className="text-xs text-green-600">+18.8%</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* Forecast Tab */}
                    <TabsContent value="forecast" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Price Projection Chart</CardTitle>
                          <CardDescription>
                            Historical data and AI-powered forecasting
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground">Interactive chart visualization</p>
                              <p className="text-sm text-muted-foreground">Shows price trends and predictions</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* Comparison Tab */}
                    <TabsContent value="comparison" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Comparative Market Analysis</CardTitle>
                          <CardDescription>
                            How this property compares to similar properties
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="p-4 border rounded-lg">
                                <p className="text-2xl font-bold text-blue-600">18</p>
                                <p className="text-xs text-muted-foreground">Similar Properties</p>
                              </div>
                              <div className="p-4 border rounded-lg">
                                <p className="text-2xl font-bold text-green-600">+8.5%</p>
                                <p className="text-xs text-muted-foreground">Above Average</p>
                              </div>
                              <div className="p-4 border rounded-lg">
                                <p className="text-2xl font-bold text-purple-600">Top 25%</p>
                                <p className="text-xs text-muted-foreground">Market Position</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select a Property to Begin</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose a property from the panel to generate AI-powered analysis and insights
                  </p>
                  <Button variant="outline" onClick={() => setSelectedProperty('demo')}>
                    Try Demo Analysis
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* AI Features Showcase */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI-Powered Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced machine learning algorithms provide accurate predictions and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Precision Valuation</CardTitle>
                <CardDescription>
                  Advanced algorithms analyze 100+ factors for accurate property valuation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <CardTitle>Market Forecasting</CardTitle>
                <CardDescription>
                  Predictive models forecast price trends and market movements
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-6 w-6 text-purple-500" />
                </div>
                <CardTitle>Investment Analysis</CardTitle>
                <CardDescription>
                  Comprehensive ROI calculations and investment risk assessment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}