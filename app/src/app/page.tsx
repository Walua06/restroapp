'use client'

import { useState } from 'react'

export default function Home() {
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([])

  return (
    <main className="flex min-h-screen">
      {/* Left Sidebar - Menu Categories */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <nav className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">All Items</button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">Main Course</button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">Appetizers</button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">Desserts</button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100">Beverages</button>
          </nav>
        </div>
      </aside>

      {/* Main Content - Menu Items */}
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Menu Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Menu items will be mapped here */}
        </div>
      </section>

      {/* Right Sidebar - Cart */}
      <aside className="w-80 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {/* Cart items will be mapped here */}
            </div>
          )}
        </div>
      </aside>
    </main>
  )
}
