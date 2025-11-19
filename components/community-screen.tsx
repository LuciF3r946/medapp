'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Search, MessageSquare, ThumbsUp, Share2, CheckCircle2 } from 'lucide-react'

export default function CommunityScreen({ onBack }: { onBack: () => void }) {
  const topics = ['Diabetes', 'Pregnancy', 'Mental Health', 'Fitness', 'Nutrition']
  const posts = [
    {
      id: 1,
      author: 'Dr. Emily Chen',
      role: 'Cardiologist',
      verified: true,
      title: 'Tips for managing blood pressure during winter',
      content: 'Cold weather can cause blood vessels to narrow, which increases blood pressure. Here are 5 tips to stay safe...',
      likes: 245,
      comments: 42,
      tag: 'Heart Health',
      time: '2h ago'
    },
    {
      id: 2,
      author: 'Mark Wilson',
      role: 'Patient',
      verified: false,
      title: 'My journey with Type 2 Diabetes reversal',
      content: 'After 6 months of strict diet and exercise, I finally got my HbA1c down to 5.8! It wasn\'t easy but...',
      likes: 892,
      comments: 156,
      tag: 'Diabetes',
      time: '5h ago'
    }
  ]

  return (
    <div className="h-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-4 bg-card sticky top-0 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-bold text-lg">Health Community</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search topics, discussions..." className="pl-10 rounded-full bg-muted/50 border-0" />
        </div>

        {/* Topics */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {topics.map((topic) => (
            <Badge key={topic} variant="secondary" className="px-4 py-2 rounded-full whitespace-nowrap hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              {topic}
            </Badge>
          ))}
        </div>

        {/* Discussions */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Trending Discussions</h3>
          {posts.map((post) => (
            <Card key={post.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm">{post.author}</span>
                      {post.verified && <CheckCircle2 className="w-3 h-3 text-blue-500" />}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.role} • {post.time}</span>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs font-normal">{post.tag}</Badge>
              </div>
              
              <div>
                <h4 className="font-bold text-base mb-1">{post.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t">
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" /> {post.comments}
                </button>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors ml-auto">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
