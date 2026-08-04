import { MessageCircle } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Benefits } from './components/Benefits'
import { CartDrawer } from './components/CartDrawer'
import { CategoryFilters } from './components/CategoryFilters'
import { CategoryRail } from './components/CategoryRail'
import { CheckoutForm } from './components/CheckoutForm'
import { DeliveryBanner } from './components/DeliveryBanner'
import { FAQ } from './components/FAQ'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { KitchenSection } from './components/KitchenSection'
import { LocationSection } from './components/LocationSection'
import { ProductGrid } from './components/ProductGrid'
import { products } from './data/products'
import { useCart } from './hooks/useCart'
import { useSiteAnimations } from './hooks/useSiteAnimations'
import type { Category, Product } from './types'

function App() {
  const [category, setCategory] = useState<Category | 'Todos'>('Todos')
  const [query, setQuery] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const root = useRef<HTMLElement>(null)
  const cart = useCart()

  useSiteAnimations(root)

  const filtered = useMemo(
    () =>
      products.filter(
        product =>
          (category === 'Todos' || product.category === category) &&
          `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase())
      ),
    [category, query]
  )

  const featured = products.filter(product =>
    ['clasica', 'doble-cheddar', 'bacon-house', 'papas-cheddar'].includes(product.id)
  )

  const menu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const order = () => {
    setCheckout(true)
    setTimeout(() => document.getElementById('pedido')?.scrollIntoView({ behavior: 'smooth' }), 20)
  }

  const add = (product: Product, ids: string[], note: string) => {
    cart.addItem(product, product.extras?.filter(extra => ids.includes(extra.id)) || [], note)
    setCartOpen(true)
  }

  const chooseCategory = (next: Category) => {
    setCategory(next)
    setQuery('')
    setTimeout(menu, 0)
  }

  return (
    <>
      <Header count={cart.count} onCart={() => setCartOpen(true)} onOrder={order} />

      <main ref={root}>
        <Hero onMenu={menu} onOrder={order} />
        <Benefits />
        <CategoryRail onChoose={chooseCategory} />
        <FeaturedProducts products={featured} onAdd={product => add(product, [], '')} onMenu={menu} />
        <DeliveryBanner onOrder={order} />

        <section id="menu" className="menu section" data-reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">CARTA COMPLETA</p>
              <h2>
                Todo lo que sale
                <br />
                de nuestra cocina.
              </h2>
            </div>
            <p>
              Elegí por categoría, buscá algo puntual o personalizá cada producto antes de sumarlo
              al pedido.
            </p>
          </div>

          <CategoryFilters
            active={category}
            onChange={setCategory}
            query={query}
            onQuery={setQuery}
          />
          <ProductGrid products={filtered} onAdd={add} />
        </section>

        <KitchenSection />

        <section id="nosotros" className="about section" data-reveal>
          <div>
            <h2>Una cocina de barrio, sin demasiada vuelta.</h2>
            <p>
              Burger House es una cocina de barrio enfocada en hamburguesas smash, acompañamientos
              simples y pedidos preparados al momento.
            </p>
            <p>
              La idea es clara: hacer buena comida para pedir fácil, retirar cerca o recibir en
              casa.
            </p>
          </div>

          <aside>
            <span className="about-label">DESDE LA COCINA</span>
            <h3>Carne, pan y plancha.</h3>
            <p>Una combinación simple que trabajamos en cada pedido antes de que salga.</p>
            <div className="about-stats">
              <span>
                <b>SMASH</b>
                al momento
              </span>
              <span>
                <b>RETIRO</b>o envío
              </span>
            </div>
          </aside>
        </section>

        <LocationSection />
        {checkout && (
          <CheckoutForm
            items={cart.items}
            subtotal={cart.subtotal}
            onClose={() => setCheckout(false)}
          />
        )}
        <FAQ />
      </main>

      <Footer />

      <button className="whatsapp-float" onClick={order} aria-label="Hacer pedido por WhatsApp">
        <MessageCircle size={17} aria-hidden="true" />
        <span>Pedido</span>
      </button>

      <CartDrawer
        open={cartOpen}
        items={cart.items}
        subtotal={cart.subtotal}
        onClose={() => setCartOpen(false)}
        onChange={cart.changeQuantity}
        onRemove={cart.removeItem}
        onClear={cart.clearCart}
        onCheckout={() => {
          setCartOpen(false)
          order()
        }}
      />
    </>
  )
}

export default App
