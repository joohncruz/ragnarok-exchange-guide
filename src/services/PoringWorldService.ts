import axios from 'axios'
import { ItemExchange } from '../interfaces/ItemExchange'

export default class PoringWorldService {
  getUrl(term: string): string {
    const decodeUriTerm = decodeURI(term)
    return `https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory=&q=${decodeUriTerm}`
  }

  async getListItem(term: string): Promise<ItemExchange[]> {
    const response = await axios.get(this.getUrl(term))
    return response.data
  }
}
