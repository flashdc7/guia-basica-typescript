(()=>{
    type Hero={
        name: string,
        age?: number,
        powers: string[];
        getNombre?: ()=> string
    }

    let myCustomVariable: (string | number | Hero )= 'Ricardo';
    console.log( typeof myCustomVariable);

    myCustomVariable= 20;
    console.log( typeof myCustomVariable);

    myCustomVariable={
        name: 'ricardooooo',
        powers: ['super habilidad']
    };
    console.log( typeof myCustomVariable);
    

}) ()