import { ArrowDownRight, Flame } from 'lucide-react'

type Props = { onMenu: () => void; onOrder: () => void }

export function Hero({ onMenu, onOrder }: Props) {
  return <section id="inicio" className="hero">
    <div className="hero-copy" data-hero>
      <p className="eyebrow">Burger House · cocina de barrio</p>
      <h1>Smash burgers<br /><strong>hechas al momento.</strong></h1>
      <p className="hero-lead">Carne, cheddar y plancha caliente. Elegí tus burgers, agregá extras y mandanos el pedido completo por WhatsApp.</p>
      <div className="hero-buttons"><button className="primary" onClick={onMenu}>Ver la carta <ArrowDownRight size={18} /></button><button className="secondary" onClick={onOrder}>Armar pedido</button></div>
      <div className="hero-note"><Flame size={16} aria-hidden="true" /><span>Plancha caliente de martes a domingo.</span></div>
    </div>
    <div className="hero-art">
      <img src="/products/smash-burger.png" alt="Hamburguesa smash doble con papas fritas" fetchPriority="high" />
      <div className="hero-caption"><span>01</span><p>Doble smash<br />con papas</p></div>
      <div className="sticker">HECHO<br />AL MOMENTO</div>
    </div>
  </section>
}
