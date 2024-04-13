
class Key {
    private signature: number;

    // constructor() { this.signature = Math.random(); }

  public getSignature():number {
    return this.signature;
  }
}

class Person  {
    constructor( private key: Key){}
    private getKey(){
      return this.key;
    }
}

abstract class House{
protected door:boolean=false;
protected tenants: Person []=[];
comeIn(tenant:Person){
  if(this.door===true){this.tenants.push(tenant)}
}
abstract OpenDoor(key:Key):void;
constructor(protected key:Key){}
}

class MyHouse extends House{
  openDoor(key:Key):void{
    if (this.key.getSignature()===key.getSignature()){
      this.door=true;
    }
  }
}







const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());

house.comeIn(person);


export {};