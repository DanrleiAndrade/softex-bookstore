export interface iProduct{
    getId(): number
    getName(): string
    getPrice(): number
    getDescription(): string
    setName(name: string): string
    setPrice(price: number): number
    setDescription(description: string): string
}