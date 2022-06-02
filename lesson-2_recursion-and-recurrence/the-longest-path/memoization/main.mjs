import { stdin as input, stdout as output } from 'node:process'
import * as readline from 'node:readline/promises'

const rl = readline.createInterface({ input, output })

const n = await rl.question('')
const t = Array.from({ length: n }, () => []),
    rec = Array.from({ length: n }, () => [])
for (let i = 0; i < n; i++) {
    const tmp = (await rl.question('')).split(' ')
    rec[i] = Array.from({ length: n }, () => -1)
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

    if (rec[i][j] === -1) {
        rec[i][j] = Math.max(getTheLongest(i + 1, j, rec), getTheLongest(i + 1, j + 1, rec)) + t[i][j]
    }
    return rec[i][j]
}
