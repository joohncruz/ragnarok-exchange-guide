import axios from 'axios'
import { ItemExchange } from '../models/ItemExchange'

export default class PoringWorldData {
  static getUrl(term: string): string {
    const decodeUriTerm = decodeURI(term)
    return `https://poring.world/api/search?order=popularity&rarity=&inStock=1&modified=&category=&endCategory=&q=${decodeUriTerm}`
  }

  static async getListItem(term: string): Promise<ItemExchange[] > {
    const response = await axios.get(this.getUrl(term))

    if (response.status === 403) {
      console.log('Erro ao solicitar o item')
      return []
    }

    return response.data
  }
}
