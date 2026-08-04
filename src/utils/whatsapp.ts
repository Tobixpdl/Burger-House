import type { CartItem, OrderForm } from '../types'
import { businessConfig } from '../config/business'
import { formatCurrency } from './currency'
export function makeWhatsAppUrl(items: CartItem[], form: OrderForm, subtotal: number, shipping: number) {
 const lines = ['Hola Burger House, quiero realizar el siguiente pedido:', '', 'PEDIDO', '']
 items.forEach((item, index) => { const extras = item.selectedExtras.reduce((sum, x) => sum + x.price, 0); const itemTotal = (item.product.price + extras) * item.quantity
  lines.push(`${index + 1}. ${item.quantity} x ${item.product.name}`, `   Precio unitario: ${formatCurrency(item.product.price)}`)
  if (item.selectedExtras.length) { lines.push('   Extras:'); item.selectedExtras.forEach(x => lines.push(`   - ${x.name}: ${formatCurrency(x.price)}`)) }
  if (item.note.trim()) lines.push(`   Observación: ${item.note.trim()}`)
  lines.push(`   Subtotal: ${formatCurrency(itemTotal)}`, '')
 })
 lines.push('DATOS DEL CLIENTE', '', `Nombre: ${form.name}`, `Teléfono: ${form.phone}`, `Entrega: ${form.delivery}`)
 if (form.delivery === 'Envío a domicilio') lines.push(`Dirección: ${form.address}`, `Localidad: ${form.locality || 'No especificada'}`, `Referencia: ${form.reference || 'Sin referencia'}`)
 lines.push(`Forma de pago: ${form.payment}`); if (form.payment === 'Efectivo' && form.cashAmount) lines.push(`Paga con: ${formatCurrency(Number(form.cashAmount))}`)
 lines.push('', 'RESUMEN', '', `Subtotal: ${formatCurrency(subtotal)}`, `Envío: ${shipping ? formatCurrency(shipping) : 'Sin cargo (retiro)'}`, `Total: ${formatCurrency(subtotal + shipping)}`)
 if (form.generalNotes.trim()) lines.push('', 'Observaciones generales:', form.generalNotes.trim())
 lines.push('', 'Muchas gracias.')
 return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
}
