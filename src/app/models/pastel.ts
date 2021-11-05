export class Pastel {
    public nombre: string;
    public imagen: string;
    public descripcion: string;
    public precio: number;
    public diametro: number;
    public altura: number;

    constructor(
        nombre: string,
        imagen: string,
        descripcion: string,
        precio: number,
        diametro: number,
        altura: number
    ){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.diametro = diametro;
        this.altura = altura;
    }


}