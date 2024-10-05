(()=>{


    class Apocalipsis{

        static intance: Apocalipsis;

        private constructor( public name:string){ }

        static callApocalipsis(): Apocalipsis{
            if(!Apocalipsis.intance)
                Apocalipsis.intance= new Apocalipsis('Soy el único');

            return Apocalipsis.intance;
        }

        changeName(name:string):void{
            this.name=name;
        }

    }

    const apocalipsis1= Apocalipsis.callApocalipsis()
    const apocalipsis2= Apocalipsis.callApocalipsis()
    const apocalipsis3= Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Ricardo');

    // const apocalipsis1= new Apocalipsis('soy 1');
    // const apocalipsis2= new Apocalipsis('soy 2');
    // const apocalipsis3= new Apocalipsis('soy 3');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3 );
    
}) ()