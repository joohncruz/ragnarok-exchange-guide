import { Reset, BgMagenta } from '../utils/ColorsUtils'

export default function Subtitle(name: string): void {
  console.log('\n', BgMagenta, name, Reset, '\n')
}
