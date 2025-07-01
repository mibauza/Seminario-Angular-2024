export interface productoModel {
    id: number,
    title: string,
    contador: number,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {        
        rate: number,
        count: number
    }
}