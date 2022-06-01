use std::io;

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();
    let n = n.trim().parse::<usize>().unwrap();

    let mut t = vec![Vec::new(); n + 1];
    for i in 0..n {
        t[i] = vec![0; i + 1];

        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();
        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();

        for j in 0..i + 1 {
            t[i][j] = tmp[j].parse::<i32>().unwrap();
        }
    }
    println!("{}", get_the_longest(&t, n, 0, 0));
}

fn get_the_longest(t: &Vec<Vec<i32>>, n: usize, i: usize, j: usize) -> i32 {
    if i == n - 1 {
        t[i][j]
    } else {
        max(
            get_the_longest(t, n, i + 1, j),
            get_the_longest(t, n, i + 1, j + 1),
        ) + t[i][j]
    }
}

fn max(x: i32, y: i32) -> i32 {
    if x < y {
        y
    } else {
        x
    }
}
