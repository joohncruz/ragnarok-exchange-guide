import PoringWorld from './core/PoringWorldCore'
import { Store } from './models/Store';
import { Item } from './models/Item';

const CronJob = require('cron').CronJob
const data: Store = { items: [] };
const items: Item[] = [
  { name: 'Holy Dagger', filters: ['Morale'] },
  { name: 'Stalker', filters: ['Morale'] },
  { name: 'Thief', filters: ['+10', 'Morale'] },
  { name: 'Breath', filters: ['+10', 'Morale'] },

]

const init = async () => {
  await PoringWorld.init(items, data)
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
