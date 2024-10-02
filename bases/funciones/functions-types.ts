( ()=>{
    const addNumber= ( a:number, b:number)=> a+b;
    const greet= ( name:string )=> `Hola ${ name}`;
    const saveTheWorld= ()=> `El mundo esta salvado!`;

    let myFunction;

    myFunction=10;
    console.log(myFunction);

    myFunction= addNumber;
    console.log(myFunction(1,4));
    
    myFunction= greet;
    console.log(myFunction('Ricardo'));
    
    myFunction=saveTheWorld;
    console.log(myFunction());
    

} ) ()