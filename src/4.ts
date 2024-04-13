class Key {
    private signature: number;

    // constructor() { this.signature = Math.random(); }

  public getSignature():number {
    return this.signature;
  }
}

class Person  {
    constructor( private key: Key){}
    // private getKey()
   public getKey():Key{
      return this.key;
    }
}

abstract class House{
protected door:boolean=false;
protected tenants: Person []=[];

public comeIn(tenant:Person):void{
  if(this.door===true){
    this.tenants.push(tenant);
  }
}
public abstract OpenDoor(key:Key):void;
constructor(protected key:Key){}
}

class MyHouse extends House{
  public OpenDoor(key:Key):void{
    if (this.key.getSignature()===key.getSignature()){
      this.door=true;
    }
  }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());
house.comeIn(person);


export {};