(()=>{
    interface Hero{
        name: string,
        age?: number,
        powers: string[];
        getNombre?: ()=> string
    }

    let flash: Hero= {
        name: 'Barry Allen',
        age: 24,
        powers: ['súper velocidad', 'Viajaer en el tiempo']
    }

    let superman: Hero= {
        name: 'Clark Kent',
        // age: 60,
        powers: ['súper fuerza']
    }

    console.log(superman);
}) ()