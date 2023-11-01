export interface Iaddress {
    getId(): number
    getStreet(): string
    getNumber(): number
    getNeighborhood(): string
    getCity(): string
    getUf(): string
    getComplement(): string
    getCep(): string
    setStreet(street: string): string
    setNumber(number: number): number 
    setNeighborhood(neighborhood: string): string
    setCity(city: string): string
    setUf(value: string): string
    setComplement(value: string): string
    setCep(value: string): string    
    toString(): string
}

