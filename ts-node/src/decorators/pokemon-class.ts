

function printToConsole(constructor:Function){
    console.log(constructor);
    
}

const printToConsoleConditional= (print:boolean=false):Function=>{
    if(print){
        return printToConsole;
    }else{
        return ()=>{}
    }
}

const bloquearPrototipo= function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function checkValidPokemonID(){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        // console.log({target, propertyKey, descriptor});
        const originalMethod= descriptor.value;

        descriptor.value= (id:number)=>{
            if( id < 1 || id > 800){
                return console.error('El ID del pokemon deber estar entre 1 y 800');
            }else{
                return originalMethod(id); 
            }
        }
    }
}

function readonly(isWritable:boolean=true):Function{
    return function(target:any, propertyKey:string){
        // console.log(target, propertyKey, descriptor );
        const descriptor: PropertyDescriptor={
            get(){
                console.log(this);
                
                return 'Ricardo';
            },
            set(this, val){
                console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable, 
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}


@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon{
    @readonly()
    public publicApi:string= 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        public name:string
    ){}

    @checkValidPokemonID()
    savePokemon(id:number){
        console.log(`Pokemon salvado en la DB con el ID ${id}`);
        
    }
}