fun main() {
    val n = readLine()!!.toInt()
    val a = 'A'
    val b = 'B'
    val c = 'C'
    hanoi(n, a, b, c)
}

fun hanoi(n: Int, a: Char, b: Char, c: Char) {
    if (n == 0) {
        return
    }
    hanoi(n - 1, a, c, b)
    println("$a -> $c")
    hanoi(n - 1, b, a, c)
}
