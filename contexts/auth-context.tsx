"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  xp: number
  streak: number
  level: number
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name: "Alex Chen",
      email,
      xp: 2450,
      streak: 7,
      level: 12,
    })
    setIsLoading(false)
  }

  const signUp = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser({
      id: "1",
      name,
      email,
      xp: 0,
      streak: 0,
      level: 1,
    })
    setIsLoading(false)
  }

  const signOut = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
