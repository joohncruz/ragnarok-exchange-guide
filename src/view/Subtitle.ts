import { Reset, BgMagenta } from '../utils/consoleColors'

export default function Subtitle(name: string): void {
  console.log('\n', BgMagenta, name, Reset, '\n')
}
