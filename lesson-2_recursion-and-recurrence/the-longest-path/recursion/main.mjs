import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
const t = Array.from({ length: n }, () => [])
for (let i = 0; i < n; i++) {
    const tmp = (await rl.question('')).split(' ')
    for (const [j, v] of tmp.entries()) {
        t[i][j] = Number(v)
    }
}
console.log(getTheLongest(0, 0))
rl.close()

function getTheLongest(i, j) {
    if (i === n - 1) {
        return t[i][j]
    }
    return Math.max(getTheLongest(i + 1, j), getTheLongest(i + 1, j + 1)) + t[i][j]
}
