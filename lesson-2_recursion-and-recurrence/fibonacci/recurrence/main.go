package main

import "fmt"

func main() {
    var n int
    fmt.Scan(&n)

    fibonacci := make([]int, n+1)
    fibonacci[0], fibonacci[1] = 1, 1
    for i := 2; i <= n; i++ {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
    }
    fmt.Println(fibonacci[n])
}
