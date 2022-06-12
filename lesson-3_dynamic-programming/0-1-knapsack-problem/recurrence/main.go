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
    fav := make([]int, balance+1)
    for i := 0; i < n; i++ {
        fmt.Scan(&values[i], &like[i])
    }
    for i := 1; i <= balance; i++ {
        if values[0] <= i {
            fav[i] = like[0]
        }
    }
    for i := 1; i < n; i++ {
        for j := balance; j >= 1; j-- {
            if values[i] <= j {
                fav[j] = int(math.Max(float64(fav[j]), float64(fav[j-values[i]]+like[i])))
            }
        }
    }
    fmt.Println(fav[balance])
}
