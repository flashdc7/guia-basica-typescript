

( ()=>{
    const fullName= (firstName:string, lastName?:string, uppercase:boolean=false):string=>{
        if( uppercase ){
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();  
        }else{
            return `${firstName} ${lastName || 'no last name'}`;  
        }
    }

    const name= fullName('Tony', 'true');
    console.log({ name });
    

}) ()