export interface Icontact {
    getId(): number
    getEmail(): string
    getPhoneNumber(): string
    setEmail(value: string): string
    setPhoneNumber(value: string): string
    toString(): string
} 