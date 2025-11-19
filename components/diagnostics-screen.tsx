'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, TestTube, Home } from 'lucide-react'

const testPackages = [
  {
    id: 1,
    name: 'Complete Blood Count',
    tests: 28,
    price: 25,
    homeCollection: true,
    turnaround: '24 hours',
  },
  {
    id: 2,
    name: 'Thyroid Profile',
    tests: 3,
    price: 35,
    homeCollection: true,
    turnaround: '48 hours',
  },
  {
    id: 3,
    name: 'Lipid Profile',
    tests: 8,
    price: 30,
    homeCollection: true,
    turnaround: '24 hours',
  },
  {
    id: 4,
    name: 'Diabetes Screening',
    tests: 5,
    price: 20,
    homeCollection: true,
    turnaround: '24 hours',
  },
  {
    id: 5,
    name: 'Vitamin D Test',
    tests: 1,
    price: 40,
    homeCollection: true,
    turnaround: '48 hours',
  },
  {
    id: 6,
    name: 'Liver Function Test',
    tests: 12,
    price: 28,
    homeCollection: true,
    turnaround: '24 hours',
  },
]

export default function DiagnosticsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 space-y-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Lab Tests</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search for tests..."
            className="pl-10 h-12 text-base bg-white"
          />
        </div>
      </div>

      {/* Test Packages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Popular Test Packages</h2>
          <Badge variant="secondary" className="gap-1">
            <Home className="w-3 h-3" />
            Home Collection
          </Badge>
        </div>

        <div className="space-y-3">
          {testPackages.map((test) => (
            <Card key={test.id} className="p-4 shadow-sm">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TestTube className="w-7 h-7 text-purple-600" />
                </div>

                {/* Test Info */}
                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="font-bold text-base">{test.name}</h3>
                    <p className="text-xs text-muted-foreground">{test.tests} tests included</p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>⏱️ {test.turnaround}</span>
                    {test.homeCollection && (
                      <Badge variant="secondary" className="text-xs">
                        Home Sample
                      </Badge>
                    )}
                  </div>  

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">₹2{test.price}</span>
                    <Button size="sm" className="h-9">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
