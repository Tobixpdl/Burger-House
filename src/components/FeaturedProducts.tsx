import { ArrowUpRight, Plus } from 'lucide-react'
import type { Product } from '../types'
import { formatCurrency } from '../utils/currency'

export function FeaturedProducts({ products, onAdd, onMenu }: { products: Product[]; onAdd: (product: Product) => void; onMenu: () => void }) {
  return <section className="featured section" data-reveal><div className="featured-heading"><div><p className="eyebrow">LAS QUE MÁS SALEN</p><h2>Para ir a lo seguro.</h2></div><button className="text-link" onClick={onMenu}>Ver carta completa <ArrowUpRight size={16} /></button></div><div className="featured-grid">{products.map((product, index) => <article className={`featured-card featured-${index + 1}`} key={product.id}><img src={product.image} alt={product.name} loading="lazy" /><div><span>{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><footer><b>{formatCurrency(product.price)}</b><button onClick={() => onAdd(product)} aria-label={`Agregar ${product.name}`}><Plus size={18} /></button></footer></div></article>)}</div></section>
}
