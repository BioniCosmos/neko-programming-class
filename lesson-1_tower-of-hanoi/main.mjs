import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
const a = 'A', b = 'B', c = 'C'
hanoi(n, a, b, c)
rl.close()

function hanoi(n, a, b, c) {
    if (!n) {
        return
    }

    hanoi(n - 1, a, c, b)
    console.log(a, '->', c)
    hanoi(n - 1, b, a, c)
}
