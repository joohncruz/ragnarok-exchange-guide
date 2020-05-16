import PoringWorldService from '../services/PoringWorldService'
import { ItemExchange } from '../interfaces/ItemExchange'

import Title from '../view/title'
import DescribeItem from '../view/DescribeItem'
import Subtitle from '../view/Subtitle'
import { Store } from '../interfaces/Store'

const poringWorldService = new PoringWorldService()

const init = async (
  name: string,
  filter: string[] = [],
  store: Store,
): Promise<void> => {
  const items: ItemExchange[] = await poringWorldService.getListItem(name)

  Title('Poring World')
  Subtitle(`${name} - ${items.length} - ${new Date()}`)

  items.forEach((item: ItemExchange) => {
    item.isNew = !store.items.some((arr) => item.id === arr.id)

    if (item.isNew) {
      store.items = [...store.items, item]
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

export default {
  init,
}
