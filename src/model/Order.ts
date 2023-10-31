import { iOrdem } from "./iOrder"

export class Order implements iOrdem{
    private id: number
    private type: string
    private price: number
    private product: object
    private date: string
    private client: object
    private itens: any[]
    private attendant: object
    constructor(
        id: number,
        type: string,
        price: number,
        product: object,
        date: string = new Date().toLocaleDateString("pt-br"),
        client: object,
        itens: any[] = [],
        attendant: object,
    ){ 
        this.id = id
        this.type = type
        this.price = price
        this.product = product
        this.date = date
        this.client = client
        this.itens = []
        this.attendant = attendant
    }
    getId(): number{
        return this.id
    }
    getType(): string{
        return this.type
    }
    getPrice(): number{
        return this.price
    }
    getProduct(): object{
        return this.product
    }
    getDate(): string{
        return this.date
    }
    getClient(): object{
        return this.client
    }
    getItens(): any[]{
        return this.itens
    }
    getAttendant(): object{
        return this.attendant
    }
    setType(type: string): string{
        this.type = type
        return this.type
    }
    setPrice(price: number): number{
        this.price = price
        return this.price
    }
    setProduct(product: object): object{
        this.product = product
        return this.product
    }
    setClient(client: object): object{
        this.client = client
        return this.client
    }
    setItens(itens: any): any[]{
        this.itens.push(itens)
        return this.itens
    }
    setAttendant(attendant: object): object{
        this.attendant = attendant
        return this.attendant
    }
}