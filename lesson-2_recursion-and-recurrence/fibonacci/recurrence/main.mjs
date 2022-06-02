import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
const fibonacci = [1, 1]
for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(fibonacci[n])
rl.close()
