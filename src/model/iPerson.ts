export interface iPerson{
    getId(): number
    getName(): string
    getBirthday(): string
    getCpf(): string
    setName(name: string): string
    setBirthday(birthday: string): string
    setCpf(cpf: string): string
}