import { Iaddress } from "./interface/iAddress";

export class Address implements Iaddress {
    private id: number;
    private street: string;
    private number: number;
    private neighborhood: string;
    private city: string;
    private uf: string;
    private complement: string;
    private cep: string;

    constructor(
        id: number,
        street: string,
        number: number,
        neighborhood: string,
        city: string,
        uf: string,
        complement: string,
        cep: string

    ) {
        this.id = id;
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.uf = uf;
        this.complement = complement;
        this.cep = cep
    }

    static createAddress(
        id: number,
        street: string,
        number: number,
        city: string,
        uf: string,
        complement: string,
        neighborhood: string,
        cep: string): Address {
        return new Address(id, street, number, neighborhood, city, uf, complement, cep);

    }

    getId(): number {
        return this.id;
    }
    getStreet(): string {
        return this.street;
    }
    getNumber(): number {
        return this.number;
    }
    getNeighborhood(): string {
        return this.neighborhood;
    }
    getCity(): string {
        return this.city;
    }
    getUf(): string {
        return this.uf;
    }
    getComplement(): string {
        return this.complement;
    }
    getCep(): string {
        return this.cep;
    }
    setStreet(street: string): string {
        this.street = street;
        return this.street;
    }
    setNumber(number: number): number {
        this.number = number;
        return this.number;
    }
    setNeighborhood(neighborhood: string): string {
        this.neighborhood = neighborhood;
        return this.neighborhood;
    }
    setCity(city: string): string {
        this.city = city;
        return this.city;
    }
    setUf(uf: string): string {
        this.uf = uf;
        return this.uf;
    }
    setComplement(complement: string): string {
        this.complement = complement;
        return this.complement;
    }
    setCep(cep: string): string {
        this.cep = cep;
        return this.cep;
    }
    toString(): string {
        return `
            Endereço:
            ID: ${this.id}
            Rua: ${this.street}
            Número: ${this.number}
            Bairro: ${this.neighborhood}
            Cidade: ${this.city}
            UF: ${this.uf}
            Complemento: ${this.complement}
            CEP: ${this.cep}
            `;
    }
}

