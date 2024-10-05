
(()=>{

    interface Client{
        name:string;
        age?:number;
        address?: Address;
    }

    interface Address{
        id: number;
        zip: string;
        city: string;
    }

    const client: Client={
        name: 'ricardo',
        age: 41,
        address:{
            id: 123,
            zip: 'KY2 ZUM',
            city: 'Ottawa'
        }
    }

    const client2: Client={
        name: 'irina',
        age: 45,
        address:{
            id: 456,
            zip: 'KZ4 ZUM',
            city: 'Toronto' 
        }
    }



}) ()