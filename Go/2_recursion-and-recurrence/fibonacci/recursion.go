package main

import "fmt"

func main() {
    var n int
    fmt.Scan(&n)
    fmt.Println(fibonacci(n))
}

func fibonacci(n int) int {
    if n < 2 {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
