(()=>{
    type Avengers={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }   
        const avengers:Avengers={
        nick: 'Samuel L Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.134553,
    }

    const { poder, vision }= avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());
    
    const printAvenger= ( { ironman, ...resto }:Avengers )=>{
        console.log( ironman, resto );
    }

    // printAvenger(avengers)

    const avengersArray: [string, boolean, number]= ['Cap. America', true, 3.1416];
    const [capi, ironman, numerooooo]= avengersArray;

    // console.log({ironman, capi});
    
}) ()