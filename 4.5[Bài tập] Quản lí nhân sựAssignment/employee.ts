export class Employee{
    private _firstName: string;
    private _lastname: string;
    private _dateOfBirth: number;
    private _address: string;
    private _companyAddress:string;

    constructor(firstName: string,
                lastname: string,
                dateOfBirth: number,
                address: string,
                companyAddress: string) {
        this._firstName = firstName;
        this._lastname = lastname;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._companyAddress = companyAddress;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get dateOfBirth(): number {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: number) {
        this._dateOfBirth = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get companyAddress(): string {
        return this._companyAddress;
    }

    set companyAddress(value: string) {
        this._companyAddress = value;
    }
}