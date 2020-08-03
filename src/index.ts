import PoringWorld from './core/PoringWorldCore'
import { Store } from './models/Store';
import { Item } from './models/Item';

const CronJob = require('cron').CronJob
const data: Store = { items: [] };
const items: Item[] = [
  { name: 'Thief', filters: ['+10', 'Morale', 'Sharp Blade'] },
  { name: 'Breath', filters: ['+10', 'Morale', 'Sharp Blade'] },
  { name: 'Strength Ring', filters: ['+10', 'Morale', 'Sharp Blade'] },
  { name: 'Ancient Cape', filters: ['+12', '+10'] },
  { name: 'Rosa Bracelet', filters: ['+12'] },
  { name: 'Evil Bracer', filters: ['+10', '+11', '+12'] },
]

const init = async () => {
  console.log('===================== INICIO ===================');
  await PoringWorld.init(items, data)
  console.log('====================== FIM =====================');
}

const job = new CronJob(
  '0 */2 * * * *',
  function () {
    init()
  },
  null,
  true,
  'America/Sao_Paulo',
)

job.start()
