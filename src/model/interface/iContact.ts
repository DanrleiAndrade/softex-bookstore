export interface Icontact {
    getId(): number
    getEmail(): string
    getPhoneNumber(): string
    setEmail(value: string): void
    setPhoneNumber(value: string): void
    toString(): string
} 