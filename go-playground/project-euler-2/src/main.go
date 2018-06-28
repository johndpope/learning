package main

import (
    "log"
)

func main() {
    log.Println(fibEvenSum(4e6))
}

func isEven(num int) bool {
    if num & 1 == 0 {
        return true
    }
    return false
}

func fibEvenSum(limit int) int {
    a, b := 1, 1
    sum, i := 0, 0
    for i < limit {
        i = a + b
        a = b
        b = i
        if isEven(i) {
            sum += i
        }
    }
    return sum
}