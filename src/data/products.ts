import type { Product, Extra } from '../types'
import { publicAsset } from '../utils/publicAsset'
const burgerExtras: Extra[] = [{ id: 'patty', name: 'Medallón adicional', price: 3000 }, { id: 'cheddar', name: 'Cheddar adicional', price: 1000 }, { id: 'bacon', name: 'Bacon', price: 1500 }, { id: 'egg', name: 'Huevo', price: 900 }, { id: 'onion', name: 'Cebolla caramelizada', price: 800 }]
const friesExtras: Extra[] = [{ id: 'large-fries', name: 'Papas grandes', price: 1200 }, { id: 'extra-cheddar', name: 'Cheddar adicional', price: 900 }, { id: 'extra-bacon', name: 'Bacon', price: 1200 }]
const img = (name: string) => publicAsset(`products/${name}.png`)
export const products: Product[] = [
 {id:'clasica',name:'Clásica',description:'Doble carne smash, cheddar, lechuga, tomate y salsa House.',price:9500,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'doble-cheddar',name:'Doble Cheddar',description:'Dos medallones, cheddar fundido, pepinos y salsa especial.',price:12500,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'bacon-house',name:'Bacon House',description:'Carne smash, cheddar, bacon crocante y alioli ahumado.',price:13200,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'crispy-onion',name:'Crispy Onion',description:'Doble carne, cheddar, cebolla crispy y barbacoa.',price:12800,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'bbq-doble',name:'BBQ Doble',description:'Doble carne, cheddar, bacon y salsa BBQ casera.',price:13600,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'triple-smash',name:'Triple Smash',description:'Tres medallones finitos, triple cheddar y pepinos.',price:15800,category:'Hamburguesas',image:img('smash-burger'),available:true,extras:burgerExtras},
 {id:'pollo-crispy',name:'Pollo Crispy',description:'Pollo crocante, coleslaw fresco y mayonesa de limón.',price:11000,category:'Hamburguesas',image:img('chicken-burger'),available:true,extras:burgerExtras},
 {id:'veggie',name:'Veggie Burger',description:'Medallón de garbanzos, palta, rúcula y queso.',price:9800,category:'Hamburguesas',image:img('veggie-burger'),available:true,extras:burgerExtras},
 {id:'combo-clasico',name:'Combo Clásico',description:'Clásica + papas clásicas + gaseosa en lata.',price:14500,category:'Combos',image:img('burger-combo'),available:true,extras:burgerExtras},
 {id:'combo-doble',name:'Combo Doble',description:'Doble Cheddar + papas clásicas + gaseosa en lata.',price:17200,category:'Combos',image:img('burger-combo'),available:true,extras:burgerExtras},
 {id:'combo-bacon',name:'Combo Bacon',description:'Bacon House + papas con cheddar + gaseosa en lata.',price:19500,category:'Combos',image:img('burger-combo'),available:true,extras:burgerExtras},
 {id:'combo-familiar',name:'Combo Familiar',description:'4 Clásicas, 2 papas grandes y gaseosa 1,5 L.',price:42000,category:'Combos',image:img('burger-combo'),available:true,extras:burgerExtras},
 {id:'papas-clasicas',name:'Papas clásicas',description:'Papas doradas, crocantes y con sal marina.',price:4800,category:'Papas y acompañamientos',image:img('loaded-fries'),available:true,extras:friesExtras},
 {id:'papas-cheddar',name:'Papas con cheddar',description:'Papas crocantes con abundante cheddar cremoso.',price:6500,category:'Papas y acompañamientos',image:img('loaded-fries'),available:true,extras:friesExtras},
 {id:'papas-bacon',name:'Papas con cheddar y bacon',description:'Papas, cheddar cremoso y bacon crocante.',price:7800,category:'Papas y acompañamientos',image:img('loaded-fries'),available:true,extras:friesExtras},
 {id:'aros-cebolla',name:'Aros de cebolla',description:'Aros de cebolla rebozados, dorados y crocantes.',price:5200,category:'Papas y acompañamientos',image:img('loaded-fries'),available:false},
 {id:'lata',name:'Gaseosa en lata',description:'Coca-Cola, Coca Zero, Sprite o Fanta.',price:2800,category:'Bebidas',image:img('drinks'),available:true},
 {id:'gaseosa-15',name:'Gaseosa de 1,5 litros',description:'Coca-Cola, Coca Zero, Sprite o Fanta.',price:4800,category:'Bebidas',image:img('drinks'),available:true},
 {id:'brownie',name:'Brownie con dulce de leche',description:'Brownie tibio, dulce de leche y nueces.',price:5400,category:'Postres',image:img('desserts'),available:true},
 {id:'chocotorta',name:'Chocotorta individual',description:'Clásica chocotorta con crema y dulce de leche.',price:4800,category:'Postres',image:img('desserts'),available:true}
]
