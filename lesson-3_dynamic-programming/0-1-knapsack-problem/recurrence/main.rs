use std::{cmp, io};

fn main() {
    let mut tmp = String::new();
    io::stdin().read_line(&mut tmp).unwrap();

    let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
    let n = tmp[0].parse().unwrap();
    let balance = tmp[1].parse().unwrap();
    let mut values = vec![0; n];
    let mut like = vec![0; n];
    let mut fav = vec![0; balance + 1];
    for i in 0..n {
        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();

        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
        values[i] = tmp[0].parse().unwrap();
        like[i] = tmp[1].parse().unwrap();
    }
    for i in 1..=balance {
        if values[0] <= i {
            fav[i] = like[0];
        }
    }
    for i in 1..n {
        for j in (1..=balance).rev() {
            if values[i] <= j {
                fav[j] = cmp::max(fav[j], fav[j - values[i]] + like[i]);
            }
        }
    }
    println!("{}", fav[balance]);
}
