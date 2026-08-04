export type Category = 'Hamburguesas' | 'Combos' | 'Papas y acompañamientos' | 'Bebidas' | 'Postres'
export type Extra = { id: string; name: string; price: number }
export type Product = { id: string; name: string; description: string; price: number; category: Category; image: string; available: boolean; extras?: Extra[] }
export type CartItem = { key: string; product: Product; quantity: number; selectedExtras: Extra[]; note: string }
export type DeliveryType = '' | 'Retiro en el local' | 'Envío a domicilio'
export type PaymentMethod = '' | 'Efectivo' | 'Transferencia' | 'Mercado Pago al recibir' | 'Tarjeta al recibir'
export type OrderForm = { name: string; phone: string; delivery: DeliveryType; address: string; locality: string; reference: string; payment: PaymentMethod; cashAmount: string; generalNotes: string }
