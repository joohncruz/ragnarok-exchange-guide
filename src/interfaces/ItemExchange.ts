import { SafeRefineMaterial } from './SafeRefineMaterial'
import { EquipEffect } from './EquipEffect'

export interface ItemExchange {
  id: number
  itemId: number
  name: string
  category: string
  description: string
  equipType: string
  equipEffect: EquipEffect
  equipUniqueEffect: string[]
  refineLv: number
  safeRefineCost: number
  safeRefineMaterials: SafeRefineMaterial[]
  rarity: number
  modified: boolean
  inStock: boolean
  priceChange1d: number
  priceChange3d: number
  priceChange7d: number
  lastRecord: {
    timestamp: number
    price: number
    stock: number
    snapBuyers: number
    snapEnd: number
  },
  isNew: boolean
}
