'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, FileText, TestTube, Shield, Upload, Eye } from 'lucide-react'

const vaultCategories = [
  { icon: FileText, label: 'Prescriptions', count: 12, color: 'bg-blue-50 text-blue-600' },
  { icon: TestTube, label: 'Lab Reports', count: 8, color: 'bg-purple-50 text-purple-600' },
  { icon: FileText, label: 'Scans/X-rays', count: 5, color: 'bg-green-50 text-green-600' },
  { icon: Shield, label: 'Vaccination Records', count: 6, color: 'bg-orange-50 text-orange-600' },
  { icon: FileText, label: 'Bills', count: 15, color: 'bg-pink-50 text-pink-600' },
]

const recentRecords = [
  {
    id: 1,
    type: 'Lab Report',
    name: 'Complete Blood Count',
    date: 'Dec 15, 2024',
    doctor: 'Dr. Emily Chen',
  },
  {
    id: 2,
    type: 'Prescription',
    name: 'Cardiac Medications',
    date: 'Dec 10, 2024',
    doctor: 'Dr. Emily Chen',
  },
  {
    id: 3,
    type: 'X-ray',
    name: 'Chest X-Ray',
    date: 'Dec 5, 2024',
    doctor: 'Dr. Michael Roberts',
  },
]

export default function HealthVaultScreen({ onBack }: { onBack: () => void }) {
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
            <h1 className="text-xl font-bold">Health Vault</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Upload className="w-6 h-6" />
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/90">
          Your secure digital locker for all medical records
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Categories */}
        <div className="grid grid-cols-2 gap-4">
          {vaultCategories.map((category) => (
            <Card key={category.label} className="p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="space-y-3">
                <div className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-balance">{category.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{category.count} files</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Records */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg">Recent Records</h2>
          <div className="space-y-3">
            {recentRecords.map((record) => (
              <Card key={record.id} className="p-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <Badge variant="secondary" className="text-xs mb-1">
                      {record.type}
                    </Badge>
                    <h3 className="font-semibold text-sm">{record.name}</h3>
                    <p className="text-xs text-muted-foreground">{record.doctor}</p>
                    <p className="text-xs text-muted-foreground">{record.date}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline View Placeholder */}
        <Card className="p-4 bg-muted/50 border-dashed">
          <p className="text-sm text-muted-foreground text-center">
            View your complete medical timeline and track health events over time
          </p>
        </Card>
      </div>
    </div>
  )
}
