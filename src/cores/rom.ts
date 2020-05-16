import RomService from '../services/RomService'
import { ItemPrice } from '../interfaces/ItemPrice'

const romService = new RomService()

const init = async (name: string): Promise<void> => {
  const items: ItemPrice[] = await romService.getListItem(name)

  items.forEach((item) => {
    romService.info(item)
  })
}

export default {
  init,
}
