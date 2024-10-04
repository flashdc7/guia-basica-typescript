(()=>{

    class Avenger{
        // private name: string;
        // private team: string;
        // public realName?: string;
        static age: number;
        static getAge(){
            return this.name;
        }

        constructor(
            private name:string, 
            private team:string, 
            public realName?:string
        ){
            // this.name=name;
            // this.team=team;
            // this.realName=realName;
        }

        public bio(){
            return `${this.name} (- ${this.team} -)`;
        }
    }

    const avenger: Avenger= new Avenger('antman', 'capitan');
    console.log(avenger.bio());
    console.log(Avenger.getAge());
    
}) ()