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
    rec := make([][]int, n)
    for i := 0; i < n; i++ {
        fmt.Scan(&values[i], &like[i])
        rec[i] = make([]int, balance+1)
    }
    fmt.Println(getFav(n-1, balance, values, like, rec))
}

func getFav(i, balance int, values, like []int, rec [][]int) int {
    if i == -1 || balance <= 0 {
        return 0
    }
    if rec[i][balance] == 0 {
        if values[i] > balance {
            rec[i][balance] = getFav(i-1, balance, values, like, rec)
        } else {
            rec[i][balance] = int(math.Max(
                float64(getFav(i-1, balance, values, like, rec)),
                float64(getFav(i-1, balance-values[i], values, like, rec)+like[i]),
            ))
        }
    }
    return rec[i][balance]
}
