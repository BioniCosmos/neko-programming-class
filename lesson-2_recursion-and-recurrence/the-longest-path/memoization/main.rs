use std::{cmp, io};

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();

    let n = n.trim().parse().unwrap();
    let mut t = vec![Vec::new(); n];
    let mut rec = vec![Vec::new(); n];
    for i in 0..n {
        t[i] = vec![0; i + 1];
        rec[i] = vec![-1; i + 1];

        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();

        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
        for (j, v) in tmp.iter().enumerate() {
            t[i][j] = v.parse().unwrap();
        }
    }
    println!("{}", get_the_longest(&t, n, 0, 0, &mut rec));
}

fn get_the_longest(
    t: &Vec<Vec<i32>>,
    n: usize,
    i: usize,
    j: usize,
    rec: &mut Vec<Vec<i32>>,
) -> i32 {
    if i == n - 1 {
        t[i][j]
    } else {
        if rec[i][j] == -1 {
            rec[i][j] = cmp::max(
                get_the_longest(t, n, i + 1, j, rec),
                get_the_longest(t, n, i + 1, j + 1, rec),
            ) + t[i][j];
        }
        rec[i][j]
    }
}
