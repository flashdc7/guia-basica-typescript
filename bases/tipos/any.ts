

( ()=>{
    let avenger: any= 123;
    let exists;
    let power;

    avenger= 'Dr Strange';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));

    avenger= 150.23424543;
    console.log((<number>avenger).toFixed(3));
    
    console.log(exists);
    console.log(power);
    
} ) ()