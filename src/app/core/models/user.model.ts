export interface User{
    address: Address;
    company: Company;
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
}

export interface Address{
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company{
    bs: string;
    catchPhrase: string;
    name: string;
}
