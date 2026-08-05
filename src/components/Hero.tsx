import { ArrowDownRight, Flame } from 'lucide-react'
import { publicAsset } from '../utils/publicAsset'

type Props = { onMenu: () => void; onOrder: () => void }

export function Hero({ onMenu, onOrder }: Props) {
  return <section id="inicio" className="hero hero-restaurant">
    <div className="hero-copy" data-hero>
      <p className="eyebrow">Burger House · cocina de barrio</p>
      <h1>Smash burgers<br /><strong>hechas al momento.</strong></h1>
      <p className="hero-lead">Carne, cheddar y plancha. Elegí tus burgers, agregá extras y mandanos el pedido completo por WhatsApp.</p>
      <div className="hero-buttons"><button className="primary" onClick={onMenu}>Ver la carta <ArrowDownRight size={18} /></button><button className="secondary" onClick={onOrder}>Armar pedido</button></div>
      <div className="hero-note"><Flame size={16} aria-hidden="true" /><span>Abiertos de martes a domingo.</span></div>
    </div>
    <div className="hero-art">
      <img src={publicAsset('hero-restaurant.png')} alt="Hamburguesa smash preparada dentro de una cocina de hamburguesería" fetchPriority="high" />
      <div className="hero-caption"><span>01</span><p>Cocina de barrio<br />plancha caliente</p></div>
      <div className="sticker">COCINA<br />ABIERTA</div>
    </div>
  </section>
}
