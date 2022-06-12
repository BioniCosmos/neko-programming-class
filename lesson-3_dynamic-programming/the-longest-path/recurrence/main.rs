use std::{cmp, io};

fn main() {
    let mut n = String::new();
    io::stdin().read_line(&mut n).unwrap();

    let n = n.trim().parse().unwrap();
    let mut t = vec![Vec::new(); n];
    let mut the_longest = vec![Vec::new(); n];
    for i in 0..n {
        t[i] = vec![0; i + 1];
        the_longest[i] = vec![0; i + 1];

        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();

        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
        for (j, v) in tmp.iter().enumerate() {
            t[i][j] = v.parse().unwrap();
        }
    }
    for i in 0..n {
        the_longest[n - 1][i] = t[n - 1][i];
    }
    for i in (0..n - 1).rev() {
        for (j, v) in t[i].iter().enumerate() {
            the_longest[i][j] = cmp::max(the_longest[i + 1][j], the_longest[i + 1][j + 1]) + v;
        }
    }
    println!("{}", the_longest[0][0]);
}
