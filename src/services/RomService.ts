import axios from 'axios'
import { ItemPrice } from '../interfaces/ItemPrice'

export default class RomService {
  getUrl(term: string): string {
    return `https://www.romexchange.com/api?exact=false&item=${term}&type=0&page=1&sort=Change&sort_dir=Desc&sort_server=Both&range=Week`
  }

  info(item: ItemPrice) {
    console.log(`Item: ${item.name} - Global value: ${item.global.latest}`)
  }

  async getListItem(term: string): Promise<ItemPrice[]> {
    const response = await axios.get(this.getUrl(term))
    return response.data as ItemPrice[]
  }
}
