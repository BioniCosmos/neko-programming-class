fun main() {
    val n = readLine()!!.toInt()

    val t = Array(n) { emptyArray<Int>() }
    for (i in t.indices) {
        t[i] = Array(i + 1) { 0 }
        val tmp = readLine()!!.split(' ')
        for (j in t[i].indices) {
            t[i][j] = tmp[j].toInt()
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

fun max(x: Int, y: Int) = if (x < y) y else x
