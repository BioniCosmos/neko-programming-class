fun main() {
    val n = readLine()!!.toInt()
    println(fibonacci(n))
}

fun fibonacci(n: Int): Int {
    if (n < 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
