use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();

    let n = n.trim().parse::<usize>().unwrap();
    let mut fibonacci = vec![0; n + 1];
    fibonacci[0] = 1;
    fibonacci[1] = 1;
    for i in 2..n + 1 {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    println!("{}", fibonacci[n]);
}
