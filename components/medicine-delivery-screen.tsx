'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, Plus, ShoppingCart } from 'lucide-react'

const medicines = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    type: 'Tablet',
    price: 0,
    prescription: false,
    inStock: true,
  },
  {
    id: 2,
    name: 'Amoxicillin 250mg',
    type: 'Capsule',
    price: 0,
    prescription: true,
    inStock: true,
  },
  {
    id: 3,
    name: 'Vitamin D3 Supplement',
    type: 'Tablet',
    price: 0,
    prescription: false,
    inStock: true,
  },
  {
    id: 4,
    name: 'Insulin Glargine',
    type: 'Injection',
    price: 0,
    prescription: true,
    inStock: true,
  },
]

export default function MedicineDeliveryScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold">Medicine Delivery</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <ShoppingCart className="w-6 h-6" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search medicines..."
            className="pl-10 h-12 text-base bg-white"
          />
        </div>
      </div>

      {/* Upload Prescription Banner */}
      <div className="p-6 pb-0">
        <Card className="p-4 bg-primary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-semibold text-sm">Have a prescription?</p>
              <p className="text-xs text-muted-foreground mt-1">Upload to order medicines</p>
            </div>
            <Button size="sm" variant="outline">Upload</Button>
          </div>
        </Card>
      </div>

      {/* Medicines List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <h2 className="font-bold text-lg">Popular Medicines</h2>
        <div className="grid grid-cols-2 gap-4">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="p-4 shadow-sm">
              <div className="space-y-3">
                {/* Medicine Image Placeholder */}
                <div className="w-full aspect-square bg-muted rounded-xl flex items-center justify-center">
                  <span className="text-3xl">💊</span>
                </div>

                {/* Medicine Info */}
                <div className="space-y-2">
                  <div>
                    <h3 className="font-semibold text-sm leading-tight text-balance">{medicine.name}</h3>
                    <p className="text-xs text-muted-foreground">{medicine.type}</p>
                  </div>

                  {medicine.prescription && (
                    <Badge variant="secondary" className="text-xs">Rx Required</Badge>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">₹{medicine.price}</span>
                    <Button size="sm" className="h-8 w-8 p-0">
                      <Plus className="w-4 h-4" />
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
