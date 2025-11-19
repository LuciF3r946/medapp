'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Heart } from 'lucide-react'

export default function LoginScreen({ onLogin, onSignup }: { onLogin: () => void; onSignup: () => void }) {
  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header with Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
        </div>
        <h1 className="text-2xl font-bold">HealthEase</h1>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-48 h-48 bg-primary/10 rounded-3xl flex items-center justify-center">
          <Heart className="w-20 h-20 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      {/* Form */}
      <div className="px-6 pb-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to access your health dashboard</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">Email or Phone</Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email or phone"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-base">Password</Label>
              <Button variant="link" className="text-primary p-0 h-auto text-sm">
                Forgot?
              </Button>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-12 text-base"
            />
          </div>
        </div>

        <Button onClick={onLogin} className="w-full h-12 text-base" size="lg">
          Sign In
        </Button>

        <div className="text-center">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Button variant="link" onClick={onSignup} className="text-primary p-0 h-auto font-semibold">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}
