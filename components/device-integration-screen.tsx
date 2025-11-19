'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { ArrowLeft, Watch, Smartphone, Activity, CheckCircle2, XCircle, RefreshCw } from 'lucide-react'

export default function DeviceIntegrationScreen({ onBack }: { onBack: () => void }) {
  const [devices, setDevices] = useState([
    { id: 'apple', name: 'Apple Health', icon: Activity, connected: true, lastSync: 'Just now' },
    { id: 'fitbit', name: 'Fitbit', icon: Watch, connected: false, lastSync: null },
    { id: 'samsung', name: 'Samsung Health', icon: Smartphone, connected: false, lastSync: null },
    { id: 'oura', name: 'Oura Ring', icon: CircleIcon, connected: true, lastSync: '2 hours ago' },
  ])

  const toggleDevice = (id: string) => {
    setDevices(devices.map(d => 
      d.id === id ? { ...d, connected: !d.connected } : d
    ))
  }

  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Connected Devices</h1>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
          <h2 className="font-bold text-lg mb-2">Sync Your Health Data</h2>
          <p className="text-sm text-muted-foreground">
            Connect your wearables and apps to get a comprehensive view of your health metrics in one place.
          </p>
        </div>

        <div className="space-y-4">
          {devices.map((device) => (
            <Card key={device.id} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  device.connected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <device.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">{device.name}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    {device.connected ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Synced: {device.lastSync}
                      </>
                    ) : (
                      'Not connected'
                    )}
                  </p>
                </div>
              </div>
              <Switch 
                checked={device.connected}
                onCheckedChange={() => toggleDevice(device.id)}
              />
            </Card>
          ))}
        </div>

        {/* Manual Sync */}
        <Button variant="outline" className="w-full gap-2 h-12">
          <RefreshCw className="w-4 h-4" />
          Sync All Devices Now
        </Button>
      </div>
    </div>
  )
}

function CircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
