import { BgCyan, Reset } from '../utils/consoleColors'

export default function Title(name: string): void {
  console.log('\n', BgCyan, name, Reset)
}
