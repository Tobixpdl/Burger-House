import { useEffect, useMemo, useState } from 'react'
import type { CartItem, Extra, Product } from '../types'
const KEY = 'burger-house-cart'
export function useCart() {
 const [items, setItems] = useState<CartItem[]>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] } })
 useEffect(() => localStorage.setItem(KEY, JSON.stringify(items)), [items])
 const addItem = (product: Product, extras: Extra[] = [], note = '') => setItems(old => { const key = `${product.id}-${extras.map(x => x.id).sort().join('-')}-${note.trim()}`; const found = old.find(x => x.key === key); return found ? old.map(x => x.key === key ? {...x, quantity:x.quantity+1} : x) : [...old, {key, product, quantity:1, selectedExtras:extras, note:note.trim()}] })
 const changeQuantity = (key: string, change: number) => setItems(old => old.flatMap(x => x.key === key ? (x.quantity + change > 0 ? [{...x, quantity:x.quantity+change}] : []) : [x]))
 const removeItem = (key: string) => setItems(old => old.filter(x => x.key !== key))
 const clearCart = () => setItems([])
 const subtotal = useMemo(() => items.reduce((sum, x) => sum + (x.product.price + x.selectedExtras.reduce((e, extra) => e + extra.price, 0)) * x.quantity, 0), [items])
 const count = useMemo(() => items.reduce((sum,x) => sum+x.quantity,0), [items])
 return { items, addItem, changeQuantity, removeItem, clearCart, subtotal, count }
}
