package main

import (
    "fmt"
    "math"
)

func main() {
    var n int
    fmt.Scan(&n)

    t := make([][]int, n)
    theLongest := make([][]int, n)
    for i := 0; i < n; i++ {
        t[i] = make([]int, i+1)
        theLongest[i] = make([]int, i+1)
        for j := range t[i] {
            fmt.Scan(&t[i][j])
        }
    }
    for i := 0; i < n; i++ {
        theLongest[n-1][i] = t[n-1][i]
    }
    for i := n - 2; i >= 0; i-- {
        for j, v := range t[i] {
            theLongest[i][j] = int(math.Max(float64(theLongest[i+1][j]), float64(theLongest[i+1][j+1]))) + v
        }
    }
    fmt.Println(theLongest[0][0])
}
