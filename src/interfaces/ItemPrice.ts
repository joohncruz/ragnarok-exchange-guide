import { Continent } from './Continent'

export interface ItemPrice {
  name: string
  type: number
  global_sea_diff: number
  global: Continent
  sea: Continent
}
