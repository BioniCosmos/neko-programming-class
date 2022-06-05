#include <iostream>
#include <fmt/core.h>

void hanoi(int n, char a, char b, char c);

int main() {
    int n;
    std::cin >> n;

    char a = 'A', b = 'B', c = 'C';
    hanoi(n, a, b, c);
    return 0;
}

void hanoi(int n, char a, char b, char c) {
    if (!n) {
        return;
    }
    hanoi(n - 1, a, c, b);
    fmt::print("{} -> {}\n", a, c);
    hanoi(n - 1, b, a, c);
}
