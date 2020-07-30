export default function Sound(beeps: number = 1, delay: number = 100) {
  while (beeps-- > 0) {
    if (delay * beeps === 0) beepNow()
  }
}

function beepNow() {
  process.stdout.write('\x07')
}