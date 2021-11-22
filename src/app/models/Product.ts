
export class Product {
    constructor(
        public _id: string,
        public name: string,
        public price: number,
        public imageUrl: string[],
        public characteristics?: any,
        public code?: string
    ) { this.characteristics = characteristics || {} }

    get getCharacteristics() {
        return this.characteristics
    }
}
