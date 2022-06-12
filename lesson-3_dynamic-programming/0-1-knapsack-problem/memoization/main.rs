use std::{cmp, io};

fn main() {
    let mut tmp = String::new();
    io::stdin().read_line(&mut tmp).unwrap();

    let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
    let n = tmp[0].parse().unwrap();
    let balance = tmp[1].parse().unwrap();
    let mut values = vec![0; n];
    let mut like = vec![0; n];
    let mut rec = vec![vec![0; balance + 1]; n];
    for i in 0..n {
        let mut tmp = String::new();
        io::stdin().read_line(&mut tmp).unwrap();

        let tmp = tmp.trim().split(' ').collect::<Vec<&str>>();
        values[i] = tmp[0].parse().unwrap();
        like[i] = tmp[1].parse().unwrap();
    }
    println!(
        "{}",
        get_fav(n as i32 - 1, balance, &values, &like, &mut rec),
    );
}

fn get_fav(
    i: i32,
    balance: usize,
    values: &Vec<usize>,
    like: &Vec<i32>,
    rec: &mut Vec<Vec<i32>>,
) -> i32 {
    if i == -1 || balance <= 0 {
        return 0;
    }
    if rec[i as usize][balance] == 0 {
        if values[i as usize] > balance {
            rec[i as usize][balance] = get_fav(i - 1, balance, values, like, rec);
        } else {
            rec[i as usize][balance] = cmp::max(
                get_fav(i - 1, balance, values, like, rec),
                get_fav(i - 1, balance - values[i as usize], values, like, rec) + like[i as usize],
            );
        }
    }
    return rec[i as usize][balance];
}
