fun main() {
    val n = readLine()!!.toInt()

    val t = Array(n) { emptyArray<Int>() }
    val rec = Array(n) { emptyArray<Int>() }
    for (i in t.indices) {
        t[i] = Array(i + 1) { 0 }
        rec[i] = Array(i + 1) { -1 }
        val tmp = readLine()!!.split(' ')
        for (j in t[i].indices) {
            t[i][j] = tmp[j].toInt()
        }
    }
    println(getTheLongest(t, n, 0, 0, rec))
}

fun getTheLongest(t: Array<Array<Int>>, n: Int, i: Int, j: Int, rec: Array<Array<Int>>): Int {
    if (i == n - 1) {
        return t[i][j]
    }
    if (rec[i][j] == -1) {
        rec[i][j] = max(getTheLongest(t, n, i + 1, j, rec), getTheLongest(t, n, i + 1, j + 1, rec)) + t[i][j]
    }
    return rec[i][j]
}

fun max(x: Int, y: Int) = if (x < y) y else x
