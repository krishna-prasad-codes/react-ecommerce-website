import {it ,expect,describe} from 'vitest'
import { formatMoney } from './money'
describe('fromatMoney',()=>{
it('is 1099 equal to $10.99',()=>{
    expect(formatMoney(1099)).toBe('$10.99')
})

it('is 1099 equal to $10.90(display 2 decimals)',()=>{
    expect(formatMoney(1090)).toBe('$10.90')
    expect(formatMoney(100)).toBe('$1.00')
})
})
