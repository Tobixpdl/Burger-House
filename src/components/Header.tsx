import { Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type Props = { count: number; onCart: () => void; onOrder: () => void }

export function Header({ count, onCart, onOrder }: Props) {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return <header className={scrolled ? 'header header-scrolled' : 'header'}>
    <a className="brand" href="#inicio" onClick={() => go('inicio')} aria-label="Burger House, inicio"><span>BH</span><b>Burger House</b></a>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}><button onClick={() => go('inicio')}>Inicio</button><button onClick={() => go('menu')}>Menú</button><button onClick={() => go('nosotros')}>Nosotros</button><button onClick={() => go('contacto')}>Contacto</button></nav>
    <div className="header-actions"><button className="text-button" onClick={onOrder}>Hacer pedido</button><button className="cart-button" onClick={onCart} aria-label={`Abrir carrito, ${count} productos`}><ShoppingBag aria-hidden="true" /><span>{count}</span></button></div>
  </header>
}
