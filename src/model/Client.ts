import { Person } from "./Person"

export class Client extends Person{
    private registeredAt: string
    private purchase: any[]
    constructor(
        id: number,
        name: string,
        birthday: string,
        cpf: string,
        registeredAt: string = new Date().toLocaleDateString("pt-br"),
    ){
        super(id, name, birthday, cpf)
        this.registeredAt = registeredAt
        this.purchase = []
    }
    getRegisteredAt(): string{
        return this.registeredAt
    }
    getPurchase(): any[]{
        return this.purchase
    }
    setPurchase(purchase: any): void{
        this.purchase.push(purchase)
    }
}