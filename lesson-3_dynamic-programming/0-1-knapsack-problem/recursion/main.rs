use std::{cmp, io};

fn main() {
    let mut tmp = String::new();
    io::stdin().read_line(&mut tmp).unwrap();

    let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
    let n = tmp[0].parse().unwrap();
    let balance = tmp[1].parse().unwrap();
    let mut values = vec![0; n];
    let mut like = vec![0; n];
    for i in 0..n {
        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();

        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
        values[i] = tmp[0].parse().unwrap();
        like[i] = tmp[1].parse().unwrap();
    }
    println!("{}", get_fav(n as i32 - 1, balance, &values, &like));
}

fn get_fav(i: i32, balance: i32, values: &Vec<i32>, like: &Vec<i32>) -> i32 {
    if i == -1 || balance <= 0 {
        0
    } else if values[i as usize] > balance {
        get_fav(i - 1, balance, values, like)
    } else {
        cmp::max(
            get_fav(i - 1, balance, values, like),
            get_fav(i - 1, balance - values[i as usize], values, like) + like[i as usize],
        )
    }
}
