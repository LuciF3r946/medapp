'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Heart } from 'lucide-react'

export default function SignupScreen({ onSignup, onLogin }: { onSignup: () => void; onLogin: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header with Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
        </div>
        <h1 className="text-2xl font-bold">HealthEase</h1>
      </div>

      {/* Form */}
      <div className="px-6 pb-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-muted-foreground">Join us to manage your health better</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullname" className="text-base">Full Name</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-base">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-base">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="h-12 text-base"
            />
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>

        <Button onClick={onSignup} className="w-full h-12 text-base" size="lg">
          Create Account
        </Button>

        <div className="text-center">
          <span className="text-muted-foreground">Already have an account? </span>
          <Button variant="link" onClick={onLogin} className="text-primary p-0 h-auto font-semibold">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  )
}
