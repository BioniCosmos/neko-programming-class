import kotlin.math.max

fun main() {
    val n = readLine()!!.toInt()
    val t = Array(n) { emptyArray<Int>() }
    for (i in 0 until n) {
        t[i] = Array(i + 1) { 0 }

        val tmp = readLine()!!.split(' ')
        for ((j, v) in tmp.withIndex()) {
            t[i][j] = v.toInt()
        }
    }
    println(getTheLongest(t, n, 0, 0))
}

fun getTheLongest(t: Array<Array<Int>>, n: Int, i: Int, j: Int): Int {
    if (i == n - 1) {
        return t[i][j]
    }
    return max(getTheLongest(t, n, i + 1, j), getTheLongest(t, n, i + 1, j + 1)) + t[i][j]
}
