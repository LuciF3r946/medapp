'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft, Plus, User, ChevronRight, Shield, Heart, Activity } from 'lucide-react'

export default function FamilyProfilesScreen({ onBack }: { onBack: () => void }) {
  const profiles = [
    { id: 1, name: 'Sarah Johnson', relation: 'Self', age: 32, image: '/placeholder.svg?height=100&width=100', active: true },
    { id: 2, name: 'Michael Johnson', relation: 'Spouse', age: 35, image: '/placeholder.svg?height=100&width=100', active: false },
    { id: 3, name: 'Emma Johnson', relation: 'Child', age: 6, image: '/placeholder.svg?height=100&width=100', active: false },
    { id: 4, name: 'Robert Smith', relation: 'Father', age: 68, image: '/placeholder.svg?height=100&width=100', active: false },
  ]

  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between bg-card sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="font-bold text-lg">Family Profiles</h1>
        </div>
        <Button size="icon" variant="ghost" className="text-primary">
          <Plus className="w-6 h-6" />
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Active Profile */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Avatar className="w-24 h-24 border-4 border-primary shadow-xl">
              <AvatarImage src={profiles[0].image || "/placeholder.svg"} />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-background" />
          </div>
          <h2 className="mt-4 text-xl font-bold">Sarah Johnson</h2>
          <p className="text-muted-foreground">Managing Family Account</p>
        </div>

        {/* Profile List */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Switch Profile</h3>
          {profiles.map((profile) => (
            <Card 
              key={profile.id} 
              className={`p-4 flex items-center justify-between transition-all hover:shadow-md cursor-pointer ${
                profile.active ? 'border-primary bg-primary/5' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={profile.image || "/placeholder.svg"} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-sm">{profile.name}</h4>
                  <p className="text-xs text-muted-foreground">{profile.relation} • {profile.age} yrs</p>
                </div>
              </div>
              {profile.active ? (
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">Active</span>
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              )}
            </Card>
          ))}
        </div>

        {/* Shared Access */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Shared Access</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 flex flex-col items-center gap-3 text-center hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">Health Vault</span>
            </Card>
            <Card className="p-4 flex flex-col items-center gap-3 text-center hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">Emergency Contacts</span>
            </Card>
            <Card className="p-4 flex flex-col items-center gap-3 text-center hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">Activity Reports</span>
            </Card>
            <Card className="p-4 flex flex-col items-center gap-3 text-center hover:bg-muted/50 cursor-pointer transition-colors">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm">Insurance</span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
