import { Search } from 'lucide-react'
import type { Category } from '../types'

const filters: [string, Category | 'Todos'][] = [['Todos', 'Todos'], ['Hamburguesas', 'Hamburguesas'], ['Combos', 'Combos'], ['Papas', 'Papas y acompañamientos'], ['Bebidas', 'Bebidas'], ['Postres', 'Postres']]

export function CategoryFilters({ active, onChange, query, onQuery }: { active: Category | 'Todos'; onChange: (x: Category | 'Todos') => void; query: string; onQuery: (x: string) => void }) {
  return <div className="menu-tools"><div className="filters" role="tablist">{filters.map(([label, value]) => <button key={label} className={active === value ? 'selected' : ''} onClick={() => onChange(value)} role="tab" aria-selected={active === value}>{label}</button>)}</div><label className="search"><Search size={18} aria-hidden="true" /><input value={query} onChange={e => onQuery(e.target.value)} placeholder="Buscar en el menú" aria-label="Buscar producto" /></label></div>
}
