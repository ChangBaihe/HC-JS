function fun(num){
    let sum = f1 = 0;
    let f2 = 1;
    while(f2 <= num){
        process.stdout.write(`${f2} `);
        if(f2%2){
            sum += f2;
        }
        let temp = f2;
        f2 += f1;
        f1 = temp;
    };
    console.log(`\n${sum}`);
}
fun(100);