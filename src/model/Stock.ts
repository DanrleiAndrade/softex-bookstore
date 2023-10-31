import { iStock } from "./interface/iStock"

export class Stock implements iStock{
    private id: number
    private product: object
    private quantity: number
    private updateAt: string
    private historicUpdateAt: any[]
    constructor(
        id: number, 
        product: object,
        quantity: number,
        updateAt: string = new Date().toLocaleDateString("pt-br"),
    ){
        this.id = id
        this.product = product
        this.quantity = quantity
        this.updateAt = updateAt
        this.historicUpdateAt = [id, [updateAt, quantity]]
    }
    getId(): number{
        return this.id
    }
    getProduct(): object{
        return this.product
    }
    getQuantity(): number{
        return this.quantity
    }
    getUpdadeAt(): string{
        return this.updateAt
    }
    getHistoric(): any[]{
        return this.historicUpdateAt
    }
    setProduct(product: object): object{
        this.product = product
        return this.product
    }
    setQuantity(quantity: number): number{
        this.quantity += quantity
        this.setUpdateAt()
        return this.quantity
    }
    setUpdateAt(): string{
        this.updateAt = new Date().toLocaleDateString("pt-br")
        this.setHistoricUpdateAt()
        return this.updateAt
    }
    setHistoricUpdateAt(): any[]{
        this.historicUpdateAt.push([this.updateAt, this.quantity])
        return this.historicUpdateAt
    }
}