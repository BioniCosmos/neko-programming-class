package main

import (
    "fmt"
    "math"
)

func main() {
    var n, balance int
    fmt.Scan(&n, &balance)

    values := make([]int, n)
    like := make([]int, n)
    for i := 0; i < n; i++ {
        fmt.Scan(&values[i], &like[i])
    }
    fmt.Println(getFav(n-1, balance, values, like))
}

func getFav(i, balance int, values, like []int) int {
    if i == -1 || balance <= 0 {
        return 0
    }
    if values[i] > balance {
        return getFav(i-1, balance, values, like)
    }
    return int(math.Max(
        float64(getFav(i-1, balance, values, like)),
        float64(getFav(i-1, balance-values[i], values, like)+like[i]),
    ))
}
