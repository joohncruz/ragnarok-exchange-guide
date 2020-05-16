import PoringWorld from './cores/poringWorld'
import { Store } from './interfaces/Store';

const CronJob = require('cron').CronJob
const data: Store = { items: [] };

const init = async () => {
  const name2 = 'Arch'
  const filter2 = ['Arch 3', 'Arch 4']
  await PoringWorld.init(name2, filter2, data)

  const name4 = "Watcher's Armor"
  const filter4: string[] = []
  await PoringWorld.init(name4, filter4, data)

  const name5 = "Legion Plate"
  const filter5: string[] = ['+8', '+9', '+10', '+11', '+12']
  await PoringWorld.init(name5, filter5, data)

  const name6 = "Blessings"
  const filter6: string[] = ['+10','+11', '+12']
  await PoringWorld.init(name6, filter6, data)

  const name7 = "Goibne's Armor"
  const filter7: string[] = ['+10','+11', '+12']
  await PoringWorld.init(name7, filter7, data)

  const name = 'Tenacity'
  const filter = ['Tenacity 2', 'Tenacity 3', 'Tenacity 4']
  await PoringWorld.init(name, filter, data)
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
