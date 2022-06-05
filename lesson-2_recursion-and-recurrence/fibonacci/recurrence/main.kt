fun main() {
    val n = readLine()!!.toInt()
    val fibonacci = Array(n + 1) { 0 }
    fibonacci[0] = 1
    fibonacci[1] = 1
    for (i in 2..n) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    println(fibonacci[n])
}
