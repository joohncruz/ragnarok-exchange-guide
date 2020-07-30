import { Store } from "../models/Store"
import { ItemExchange } from "../models/ItemExchange"
import Subtitle from "../components/Subtitle"
import Sound from "../components/Sound"
import DescribeItem from "../components/DescribeItem"
import PoringWorldService from "../data/PoringWorldData"

export default class PoringWorldDomain {
  static async execute(name: string, filter: string[] = [], store: Store) {
    const data: ItemExchange[] = await PoringWorldService.getListItem(name)

    Subtitle(`${name} - ${data.length} - ${new Date()}`)

    data.forEach((item: ItemExchange) => {
      item.isNew = !store.items.some((arr) => item.id === arr.id)

      if (item.isNew) {
        store.items = [...store.items, item]
        Sound(1)
      }

      const filterExists = !!filter.length
      const exists = filter.find((itemfilter) => {
        return item.name.includes(itemfilter)
      })

      if (exists || !filterExists) {
        DescribeItem(item)
      }
    })
  }
}