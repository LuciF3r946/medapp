'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowLeft, Send, Bot, User, AlertTriangle, ChevronRight, Activity } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  type?: 'text' | 'suggestion' | 'triage'
  suggestions?: string[]
  severity?: 'low' | 'medium' | 'high'
}

export default function SymptomCheckerScreen({ onBack, onNavigate }: { onBack: () => void, onNavigate: (screen: string) => void }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi Sarah, I'm your HealthEase AI assistant. I can help you check your symptoms. How are you feeling today?",
      type: 'text'
    }
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Simulate AI response
    setTimeout(() => {
      let response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I understand. Could you tell me how long you've been experiencing this?",
        type: 'text'
      }

      if (input.toLowerCase().includes('headache') || input.toLowerCase().includes('fever')) {
        response = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "Based on your symptoms, here are some possibilities. Please select one that matches best:",
          type: 'suggestion',
          suggestions: ['Migraine', 'Viral Fever', 'Sinusitis', 'Tension Headache']
        }
      }

      setMessages(prev => [...prev, response])
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: suggestion }
    setMessages(prev => [...prev, userMsg])

    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Based on your selection, this seems to be a medium severity issue. I recommend consulting a general physician.",
        type: 'triage',
        severity: 'medium'
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div>
          <h1 className="font-bold text-lg">AI Symptom Checker</h1>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Online
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4 pb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'assistant' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
              }`}>
                {msg.role === 'assistant' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
              </div>
              
              <div className={`max-w-[80%] space-y-2`}>
                <div className={`p-3 rounded-2xl text-sm ${
                  msg.role === 'assistant' 
                    ? 'bg-muted text-foreground rounded-tl-none' 
                    : 'bg-primary text-primary-foreground rounded-tr-none'
                }`}>
                  {msg.content}
                </div>

                {msg.type === 'suggestion' && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {msg.suggestions?.map((s) => (
                      <Button 
                        key={s} 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full text-xs border-primary/20 hover:bg-primary/5 hover:text-primary"
                        onClick={() => handleSuggestionClick(s)}
                      >
                        {s}
                      </Button>
                    ))}
                  </div>
                )}

                {msg.type === 'triage' && (
                  <Card className="p-4 mt-2 border-l-4 border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/10">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-yellow-800 dark:text-yellow-400">Medium Severity</h4>
                        <p className="text-xs text-yellow-700/80 dark:text-yellow-500/80 mt-1">
                          We recommend consulting a doctor within 24 hours.
                        </p>
                        <Button 
                          className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                          size="sm"
                          onClick={() => onNavigate('doctors')}
                        >
                          Find a Doctor
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 bg-card border-t">
        <div className="flex gap-2">
          <Input 
            placeholder="Describe your symptoms..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="rounded-full bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button size="icon" className="rounded-full shrink-0" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
