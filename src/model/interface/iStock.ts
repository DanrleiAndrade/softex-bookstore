export interface iStock{
    getId(): number
    getProduct(): object
    getQuantity(): number
    getUpdadeAt(): string
    setProduct(product: object): object
    setQuantity(quantity: number): number
    setUpdateAt(): string
}