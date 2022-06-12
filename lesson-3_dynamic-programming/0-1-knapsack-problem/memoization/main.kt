import kotlin.math.max

fun main() {
    var tmp = readLine()!!.split(' ')
    val n = tmp[0].toInt()
    val balance = tmp[1].toInt()
    val values = Array(n) { 0 }
    val like = Array(n) { 0 }
    val rec = Array(n) { Array(balance + 1) { 0 } }
    for (i in 0 until n) {
        tmp = readLine()!!.split(' ')
        values[i] = tmp[0].toInt()
        like[i] = tmp[1].toInt()
    }
    println(getFav(n - 1, balance, values, like, rec))
}

fun getFav(i: Int, balance: Int, values: Array<Int>, like: Array<Int>, rec: Array<Array<Int>>): Int {
    if (i == -1 || balance <= 0) {
        return 0
    }
    if (rec[i][balance] == 0) {
        if (values[i] > balance) {
            rec[i][balance] = getFav(i - 1, balance, values, like, rec)
        } else {
            rec[i][balance] = max(
                getFav(i - 1, balance, values, like, rec),
                getFav(i - 1, balance - values[i], values, like, rec) + like[i],
            )
        }
    }
    return rec[i][balance]
}
