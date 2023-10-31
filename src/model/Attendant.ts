import { Person } from "./Person"

export class Attendant extends Person{
    private position: string
    private contractedAt: string
    private salary: number
    private sales: any[]
    constructor(
        id: number,
        name: string,
        birthday: string,
        cpf: string,
        position: string,
        contractedAt: string = new Date().toLocaleDateString("pt-br"),
        salary: number,
    ){
        super(id, name, birthday, cpf)
        this.position = position
        this.contractedAt = contractedAt
        this.salary = salary
        this.sales = []
        
    }
    getPosition(): string{
        return this.position
    }
    getContractedAt(): string{
        return this.contractedAt
    }
    getSalary(): number{
        return this.salary
    }
    getSales(): any[]{
        return this.sales
    }
    setPosition(newPosition: string): void{
        this.position = newPosition
    }
    setSalary(newSalary: number): void{
        this.salary = newSalary
    }
    setSales(sale: any): void{
        this.sales.push(sale)
    }
}