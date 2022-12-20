export class Cars {
    private id: number;
    private name: string;
    private age: number;
    private price: number;

    constructor(id: number, name: string, age: number, price: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.price = price;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getPrice(): number {
        return this.price;
    }

   setId(id: number) {
        this.id = id;
   }

   setName(name: string) {
        this.name = name;
   }

   setAge(age: number)  {
        this.age = age;
   }

   setPrice(price: number) {
        this.price = price;
   }
}
