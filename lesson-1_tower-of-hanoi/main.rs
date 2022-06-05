use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();

    let n = n.trim().parse().unwrap();
    let a = 'A';
    let b = 'B';
    let c = 'C';
    hanoi(n, a, b, c);
}

fn hanoi(n: i32, a: char, b: char, c: char) {
    if n == 0 {
        return;
    }
    hanoi(n - 1, a, c, b);
    println!("{} -> {}", a, c);
    hanoi(n - 1, b, a, c);
}
