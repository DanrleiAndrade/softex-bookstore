import { iPerson } from "./iPerson"

export abstract class Person implements iPerson{
    private id: number
    private name: string
    private birthday: string
    private cpf: string
    constructor(
        id: number,
        name: string,
        birthday: string,
        cpf: string
    ){
        this.id = id
        this.name = name
        this.birthday = birthday
        this.cpf = cpf
    }
    getId(): number{
        return this.id
    }
    getName(): string{
        return this.name
    }
    getBirthday(): string{
        return this.birthday
    }
    getCpf(): string{
        return this.cpf
    }
    setName(name: string): string{
        this.name = name
        return this.name
    }
    setBirthday(birthday: string): string{
        this.birthday = birthday
        return this.birthday
    }
    setCpf(cpf: string): string{
        this.cpf = cpf        
        return this.cpf
    }
}