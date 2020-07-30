import { Store } from '../models/Store'
import PoringWorldDomain from '../domains/PoringWorldDomain'
import { Item } from '../models/Item'

const init = async (
  items: Item[] = [],
  store: Store,
): Promise<void> => {
  const tasks = items.map(item => {
    return PoringWorldDomain.execute(item.name, item.filters, store)
  })

  await Promise.all(tasks)
}

export default {
  init,
}
