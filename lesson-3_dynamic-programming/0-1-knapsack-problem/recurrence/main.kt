import kotlin.math.max

fun main() {
    var tmp = readLine()!!.split(' ')
    val n = tmp[0].toInt()
    val balance = tmp[1].toInt()
    val values = Array(n) { 0 }
    val like = Array(n) { 0 }
    val fav = Array(balance + 1) { 0 }
    for (i in 0 until n) {
        tmp = readLine()!!.split(' ')
        values[i] = tmp[0].toInt()
        like[i] = tmp[1].toInt()
    }
    for (i in 1..balance) {
        if (values[0] <= i) {
            fav[i] = like[0]
        }
    }
    for (i in 1 until n) {
        for (j in balance downTo 1) {
            if (values[i] <= j) {
                fav[j] = max(fav[j], fav[j - values[i]] + like[i])
            }
        }
    }
    println(fav[balance])
}
