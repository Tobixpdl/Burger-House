import { Beer, Cookie, CookingPot, Sandwich, UtensilsCrossed } from 'lucide-react'
import type { Category } from '../types'

const categories: [Category, string, typeof Sandwich][] = [
  ['Hamburguesas', 'Smash, pollo y veggie', Sandwich],
  ['Combos', 'Una mesa completa', CookingPot],
  ['Papas y acompañamientos', 'Para compartir', UtensilsCrossed],
  ['Bebidas', 'Algo bien frío', Beer],
  ['Postres', 'El cierre justo', Cookie],
]

export function CategoryRail({ onChoose }: { onChoose: (category: Category) => void }) {
  return <section className="category-rail" aria-label="Categorías de la carta" data-reveal><div className="category-rail-title"><p className="eyebrow">ELEGÍ POR ANTOJO</p><h2>La carta, a tu manera.</h2></div><div className="category-list">{categories.map(([category, detail, Icon], index) => <button key={category} onClick={() => onChoose(category)}><span>0{index + 1}</span><Icon size={22} aria-hidden="true" /><b>{category === 'Papas y acompañamientos' ? 'Papas' : category}</b><small>{detail}</small></button>)}</div></section>
}
