import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '../types'
import { formatCurrency } from '../utils/currency'

export function ProductCard({ product, onAdd }: { product: Product; onAdd: (p: Product, extraIds: string[], note: string) => void }) {
  const [custom, setCustom] = useState(false); const [extras, setExtras] = useState<string[]>([]); const [note, setNote] = useState('')
  const toggle = (id: string) => setExtras(x => x.includes(id) ? x.filter(i => i !== id) : [...x, id])
  const add = () => { onAdd(product, extras, note); setExtras([]); setNote(''); setCustom(false) }
  return <article className={`product-card ${!product.available ? 'sold-out' : ''}`}>
    <div className="product-image"><img src={product.image} alt={product.name} loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} /><span>{product.category}</span>{!product.available && <em>Agotado</em>}</div>
    <div className="product-content"><div className="product-heading"><h3>{product.name}</h3><strong>{formatCurrency(product.price)}</strong></div><p>{product.description}</p>{product.available && <>{product.extras?.length ? <button className="customize" onClick={() => setCustom(!custom)} aria-expanded={custom}>{custom ? 'Cerrar opciones' : 'Personalizar'}</button> : null}{custom && <div className="customization">{product.extras?.map(x => <label key={x.id}><input type="checkbox" checked={extras.includes(x.id)} onChange={() => toggle(x.id)} /><span>{x.name}</span><b>+{formatCurrency(x.price)}</b></label>)}<input value={note} onChange={e => setNote(e.target.value)} placeholder="Alguna indicación para cocina" aria-label={`Observación para ${product.name}`} /></div>}<button className="add-button" onClick={add}><span>Agregar al pedido</span><Plus size={17} aria-hidden="true" /></button></>}</div>
  </article>
}
