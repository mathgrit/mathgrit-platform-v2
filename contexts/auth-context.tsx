"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { createClient, type User as SupabaseUser } from '@supabase/supabase-js'

// Definisikan tipe untuk user Anda, bisa digabung dengan tipe dari Supabase
interface User extends SupabaseUser {
  // Anda bisa menambahkan properti kustom di sini nanti
  // contoh: xp: number;
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoading: boolean
}

// Inisialisasi Supabase Client menggunakan Environment Variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect untuk memeriksa sesi pengguna saat aplikasi dimuat
  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user as User);
      }
      setIsLoading(false);
    };

    checkUserSession();

    // Listener untuk mendeteksi perubahan status login (SignIn, SignOut)
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user as User ?? null);
    });

    // Membersihkan listener saat komponen tidak lagi digunakan
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    isLoading,
    signIn: async (email: string, password: string) => {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error; // Melempar error jika login gagal
    },
    signUp: async (name: string, email: string, password: string) => {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            // Supabase menyimpan nama atau data lain di 'user_metadata'
            full_name: name,
          }
        }
      });
      if (error) throw error; // Melempar error jika registrasi gagal
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}