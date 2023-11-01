import { Icontact } from "./interface/iContact";

export class Contact implements Icontact {
    private id: number;
    private email: string;
    private phoneNumber: string;

    constructor(
        id: number,
        email: string,
        phoneNumber: string
    ) {
        this.id = id;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    static createContact(
        id: number,
        email: string,
        phoneNumber: string
    ): Contact {
        return new Contact(id, email, phoneNumber);
    }
    getId(): number {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getPhoneNumber(): string {
        return this.phoneNumber;
    }

    setEmail(email: string): string {
        this.email = email;
        return this.email;
    }

    setPhoneNumber(phoneNumber: string): string {
        this.phoneNumber = phoneNumber;
        return this.phoneNumber;
    }

    toString(): string {
        return `
      Contato:
      ID: ${this.id}
      E-mail: ${this.email}
      Número de telefone: ${this.phoneNumber}
      `;
    }
}

