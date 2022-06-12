import kotlin.math.max

fun main() {
    val n = readLine()!!.toInt()
    val t = Array(n) { emptyArray<Int>() }
    val theLongest = Array(n) { emptyArray<Int>() }
    for (i in 0 until n) {
        t[i] = Array(i + 1) { 0 }
        theLongest[i] = Array(i + 1) { 0 }

        val tmp = readLine()!!.split(' ')
        for ((j, v) in tmp.withIndex()) {
            t[i][j] = v.toInt()
        }
    }
    for (i in 0 until n) {
        theLongest[n - 1][i] = t[n - 1][i]
    }
    for (i in n - 2 downTo 0) {
        for ((j, v) in t[i].withIndex()) {
            theLongest[i][j] = max(theLongest[i + 1][j], theLongest[i + 1][j + 1]) + v
        }
    }
    println(theLongest[0][0])
}
