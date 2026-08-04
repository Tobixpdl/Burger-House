import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '../types'
import { formatCurrency } from '../utils/currency'

export function ProductCard({
  product,
  onAdd
}: {
  product: Product
  onAdd: (p: Product, extraIds: string[], note: string) => void
}) {
  const [custom, setCustom] = useState(false)
  const [extras, setExtras] = useState<string[]>([])
  const [note, setNote] = useState('')

  const toggle = (id: string) => {
    setExtras(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id]
    )
  }

  const add = () => {
    onAdd(product, extras, note)
    setExtras([])
    setNote('')
    setCustom(false)
  }

  return (
    <article className={`product-card ${!product.available ? 'sold-out' : ''}`}>
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={event => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <span>{product.category}</span>
        {!product.available && <em>Agotado</em>}
      </div>

      <div className="product-content">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <strong>{formatCurrency(product.price)}</strong>
        </div>

        <p>{product.description}</p>

        {product.available && (
          <div className="product-actions">
            {product.extras?.length ? (
              <button
                className="customize"
                onClick={() => setCustom(!custom)}
                aria-expanded={custom}
              >
                {custom ? 'Cerrar opciones' : 'Personalizar'}
              </button>
            ) : (
              <span className="customize-placeholder" aria-hidden="true" />
            )}

            {custom && (
              <div className="customization">
                {product.extras?.map(extra => (
                  <label key={extra.id}>
                    <input
                      type="checkbox"
                      checked={extras.includes(extra.id)}
                      onChange={() => toggle(extra.id)}
                    />
                    <span>{extra.name}</span>
                    <b>+{formatCurrency(extra.price)}</b>
                  </label>
                ))}
                <input
                  value={note}
                  onChange={event => setNote(event.target.value)}
                  placeholder="Alguna indicacion para cocina"
                  aria-label={`Observacion para ${product.name}`}
                />
              </div>
            )}

            <button className="add-button" onClick={add}>
              <span>Agregar al pedido</span>
              <Plus size={17} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
