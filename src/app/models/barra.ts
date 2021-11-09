export class Barra{
    public nombre: string;
    public imagen: string;
    public descripcion: string;
    public precio: number;
    public ancho: number;
    public altura: number;
    public largo : number;

    constructor(
        nombre: string,
        imagen: string,
        descripcion: string,
        precio: number,
        ancho: number,
        altura: number,
        largo: number
    ){
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.ancho = ancho;
        this.altura = altura;
        this.largo = largo;
    }
}