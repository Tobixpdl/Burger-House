import { ArrowUpRight, Bike, MessageCircle, Store } from 'lucide-react'

type Props = { onOrder: () => void }

export function DeliveryBanner({ onOrder }: Props) { return <section className="delivery-banner" data-reveal><img src="/delivery-order.png" alt="Pedido de Burger House preparado para retirar o enviar" loading="lazy" /><div className="delivery-copy"><p className="eyebrow">PEDIR ES FÁCIL</p><h2>Lo armás acá.<br />Lo terminás por WhatsApp.</h2><p>Elegí, personalizá y mandanos el pedido completo. Podés retirar en el local o pedir envío dentro de nuestra zona.</p><div className="delivery-points"><span><Store size={17} />Retiro en el local</span><span><Bike size={17} />Envíos por la zona</span><span><MessageCircle size={17} />Pedido directo</span></div><button className="primary" onClick={onOrder}>Armar mi pedido <ArrowUpRight size={17} /></button></div></section> }
