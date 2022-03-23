package main

import "fmt"

func main() {
    var n int
    fmt.Scan(&n)

    t := make([][]int, n)
    rec := make([][]int, n)
    for i := range t {
        t[i] = make([]int, i+1)
        rec[i] = make([]int, i+1)
        for j := range t[i] {
            fmt.Scan(&t[i][j])
            rec[i][j] = -1
        }
    }
    fmt.Println(getTheLongest(t, n, 0, 0, rec))
}

func getTheLongest(t [][]int, n, i, j int, rec [][]int) int {
    if i == n-1 {
        return t[i][j]
    }
    if rec[i][j] == -1 {
        rec[i][j] = max(getTheLongest(t, n, i+1, j, rec), getTheLongest(t, n, i+1, j+1, rec)) + t[i][j]
    }
    return rec[i][j]
}

func max(x, y int) int {
    if x < y {
        return y
    }
    return x
}
