class Multiton {
    static #instances = {};
    static #maxSize = 7;
    constructor() { //stugum enq instancei sizy ancnum e maxSizin
        if (Object.keys(Multiton.#instances).length >= Multiton.#maxSize) {
          throw new Error(`>Could not be created because the quantity exceeds the maximum!`);
        }
    }
    static creatInstance(instance) {
      if (!(instance in this.#instances) && Object.keys(this.#instances).length < this.#maxSize) {
        this.#instances[instance] = new Multiton(); 
      }
      return this.#instances[instance]; 
    }
};

const obj0 = Multiton.creatInstance('instance0');
//console.log(obj0);
const obj1 = Multiton.creatInstance('instance1');
const obj2 = Multiton.creatInstance('instance2');
const obj3 = Multiton.creatInstance('instance3'); 
const obj4 = Multiton.creatInstance('instance4'); 
const obj5 = Multiton.creatInstance('instance5'); 
const obj6 = Multiton.creatInstance('instance6'); 
const obj7 = Multiton.creatInstance('instance7'); 
const obj8 = Multiton.creatInstance('instance8'); 
const obj9 = Multiton.creatInstance('instance9'); 

