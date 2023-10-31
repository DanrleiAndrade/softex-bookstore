export interface iOrdem{
    getId(): number
    getType(): string
    getPrice(): number
    getProduct(): object
    getDate(): string
    getClient(): object
    getItens(): any[]
    getAttendant(): object
    setType(type: string): string
    setPrice(price: number): number
    setProduct(product: object): object
    setClient(client: object): object
    setItens(itens: any): any[]
    setAttendant(attendant: object): object
}
