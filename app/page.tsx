'use client'

import { useState, useEffect } from 'react'
import OnboardingScreen from '@/components/onboarding-screen'
import LoginScreen from '@/components/login-screen'
import SignupScreen from '@/components/signup-screen'
import HomeScreen from '@/components/home-screen'
import DoctorDiscoveryScreen from '@/components/doctor-discovery-screen'
import AppointmentBookingScreen from '@/components/appointment-booking-screen'
import VideoConsultationScreen from '@/components/video-consultation-screen'
import MedicineDeliveryScreen from '@/components/medicine-delivery-screen'
import DiagnosticsScreen from '@/components/diagnostics-screen'
import MentalHealthScreen from '@/components/mental-health-screen'
import HealthVaultScreen from '@/components/health-vault-screen'
import UserProfileScreen from '@/components/user-profile-screen'
import SymptomCheckerScreen from '@/components/symptom-checker-screen'
import HealthInsightsScreen from '@/components/health-insights-screen'
import MedicationReminderScreen from '@/components/medication-reminder-screen'
import FamilyProfilesScreen from '@/components/family-profiles-screen'
import EmergencySOSScreen from '@/components/emergency-sos-screen'
import DeviceIntegrationScreen from '@/components/device-integration-screen'
import CommunityScreen from '@/components/community-screen'
import WellnessScreen from '@/components/wellness-screen'
import NotificationsScreen from '@/components/notifications-screen'
import { Button } from '@/components/ui/button'

export default function HealthEaseApp() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentScreen('login')} />
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} onSignup={() => setCurrentScreen('signup')} />
      case 'signup':
        return <SignupScreen onSignup={() => setCurrentScreen('home')} onLogin={() => setCurrentScreen('login')} />
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />
      case 'doctors':
        return <DoctorDiscoveryScreen onBack={() => setCurrentScreen('home')} onNavigate={setCurrentScreen} />
      case 'booking':
        return <AppointmentBookingScreen onBack={() => setCurrentScreen('doctors')} onComplete={() => setCurrentScreen('home')} />
      case 'video':
        return <VideoConsultationScreen onEnd={() => setCurrentScreen('home')} />
      case 'medicine':
        return <MedicineDeliveryScreen onBack={() => setCurrentScreen('home')} />
      case 'diagnostics':
        return <DiagnosticsScreen onBack={() => setCurrentScreen('home')} />
      case 'mental-health':
        return <MentalHealthScreen onBack={() => setCurrentScreen('home')} onNavigate={setCurrentScreen} />
      case 'vault':
        return <HealthVaultScreen onBack={() => setCurrentScreen('home')} />
      case 'profile':
        return <UserProfileScreen onBack={() => setCurrentScreen('home')} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      case 'symptom-checker':
        return <SymptomCheckerScreen onBack={() => setCurrentScreen('home')} onNavigate={setCurrentScreen} />
      case 'health-insights':
        return <HealthInsightsScreen onBack={() => setCurrentScreen('home')} />
      case 'medications':
        return <MedicationReminderScreen onBack={() => setCurrentScreen('home')} />
      case 'family':
        return <FamilyProfilesScreen onBack={() => setCurrentScreen('home')} />
      case 'sos':
        return <EmergencySOSScreen onBack={() => setCurrentScreen('home')} />
      case 'devices':
        return <DeviceIntegrationScreen onBack={() => setCurrentScreen('home')} />
      case 'community':
        return <CommunityScreen onBack={() => setCurrentScreen('home')} />
      case 'notifications':
        return <NotificationsScreen onBack={() => setCurrentScreen('home')} />
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Screen Navigation for Demo */}
      <div className="fixed top-4 left-4 z-50 bg-card/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-border max-w-xs max-h-[90vh] overflow-y-auto hidden md:block">
        <p className="text-xs font-semibold mb-2 text-muted-foreground">Demo Navigation:</p>
        <div className="flex flex-wrap gap-1">
          {['onboarding', 'login', 'signup', 'home', 'doctors', 'booking', 'video', 'medicine', 'diagnostics', 'mental-health', 'vault', 'profile', 'symptom-checker', 'health-insights', 'medications', 'family', 'sos', 'devices', 'community', 'notifications'].map((screen) => (
            <Button
              key={screen}
              variant={currentScreen === screen ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentScreen(screen)}
              className="text-xs px-2 py-1 h-auto"
            >
              {screen}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Frame */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-md mx-auto bg-background rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-gray-800 dark:border-gray-700 transition-colors duration-300">
          <div className="relative bg-background h-full" style={{ aspectRatio: '9/19.5' }}>
            {renderScreen()}
          </div>
        </div>
      </div>
    </div>
  )
}
