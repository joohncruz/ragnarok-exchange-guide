import { ItemExchange } from '../interfaces/ItemExchange'
import { BgGreen, Reset, BgRed } from '../utils/consoleColors'

export default function DescribeItem(item: ItemExchange): void {
  const date = new Date()
  const isNew = item.isNew ? [BgGreen, '[NEW]', Reset] : []
  const isEnd =
    item.lastRecord.snapEnd >= date.getTime() ? [BgRed, '[END]', Reset] : []
  const describe = `#${item.lastRecord.timestamp} - ${item.name} - price: ${item.lastRecord.price}`

  console.log(describe, ...isNew, ...isEnd)
}
