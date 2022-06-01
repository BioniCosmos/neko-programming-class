package main

import "fmt"

func main() {
    var n int
    fmt.Scan(&n)
    var a, b, c byte = 'A', 'B', 'C'
    hanoi(n, a, b, c)
}

func hanoi(n int, a, b, c byte) {
    if n == 0 {
        return
    }
    hanoi(n-1, a, c, b)
    fmt.Printf("%c -> %c\n", a, c)
    hanoi(n-1, b, a, c)
}
