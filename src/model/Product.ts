import { iProduct } from "./interface/iProduct"

export class Product{
    private id: number
    private name: string
    private price: number
    private description: string
    constructor(
        id: number,
        name: string,
        price: number,
        description: string
    ){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
    getId(): number{
        return this.id
    }
    getName(): string{
        return this.name
    }
    getPrice(): number{
        return this.price
    }
    getDescription(): string{
        return this.description
    }
    setName(name: string): string{
        this.name = name
        return this.name
    }
    setPrice(price: number): number{
        this.price = price
        return this.price
    }
    setDescription(description: string): string{
        this.description = description
        return this.description
    }
}