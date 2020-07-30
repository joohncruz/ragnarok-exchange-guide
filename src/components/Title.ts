import { BgCyan, Reset } from '../utils/ColorsUtils'

export default function Title(name: string): void {
  console.log('\n', BgCyan, name, Reset)
}
