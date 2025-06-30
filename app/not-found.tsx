import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <Link href="/">
          <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  )
} 