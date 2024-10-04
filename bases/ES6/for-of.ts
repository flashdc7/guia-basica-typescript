(()=>{

    type Avenger={
        name: string,
        weapon: string
    }

    const ironman: Avenger={
        name: 'Ironman', 
        weapon: 'Armadura'
    }
    const capAmerica: Avenger={
        name: 'Capitan America', 
        weapon: 'Escudo'
    }
    const thor: Avenger={
        name: 'Thor', 
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[]=[ ironman, capAmerica, thor];

    for (const avenger of avengers) {
        // console.log(avenger);
        // console.log(avenger.name, avenger.weapon);
        
    }
}) ()