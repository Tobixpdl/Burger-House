import { Bike, Clock3, MapPinned } from 'lucide-react'

const notes = [
  [Clock3, 'Cocina en movimiento', 'Abrimos cuando cae la tarde.'],
  [Bike, 'Pedidos simples', 'Envío o retiro, sin vueltas.'],
  [MapPinned, 'Hechos cerca', 'Tigre, San Fernando y alrededores.'],
] as const

export function Benefits() {
  return <section className="service-strip" aria-label="Información del servicio"><p className="service-kicker">BUEN PRODUCTO, BUENA NOCHE</p><div>{notes.map(([Icon, title, text]) => <article key={title}><Icon size={18} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
}
