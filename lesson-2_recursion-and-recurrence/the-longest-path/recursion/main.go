package main

import (
    "fmt"
    "math"
)

func main() {
    var n int
    fmt.Scan(&n)

    t := make([][]int, n)
    for i := 0; i < n; i++ {
        t[i] = make([]int, i+1)
        for j := range t[i] {
            fmt.Scan(&t[i][j])
        }
    }
    fmt.Println(getTheLongest(t, n, 0, 0))
}

func getTheLongest(t [][]int, n, i, j int) int {
    if i == n-1 {
        return t[i][j]
    }
    return int(math.Max(float64(getTheLongest(t, n, i+1, j)), float64(getTheLongest(t, n, i+1, j+1)))) + t[i][j]
}
