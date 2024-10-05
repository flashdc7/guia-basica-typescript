

(()=>{

    interface Xmen{
        name:string;
        realName:string;
        mutantPower(id:number):string
    }

    interface Human{
        age:number;
    }

    class Mutante implements Xmen,Human{

        constructor(
            public age: number,
            public name: string,
            public realName: string,
        ){}

        mutantPower(id: number): string {
            return this.name
        }
    }



}) ()