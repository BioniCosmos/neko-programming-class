import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
console.log(fibonacci(n))
rl.close()

function fibonacci(n) {
    if (n < 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
