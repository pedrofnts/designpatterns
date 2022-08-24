import { ItemGenerico } from "./itemGenerico";

export class Produto implements ItemGenerico {
  private id: number;
  private desc: string;
  private foto: string;
  private preco: number;

  public constructor() {
    this.id = 1;
    this.desc = "Computador";
    this.foto = "computador.png";
    this.preco = 1000.0;
  }
  exibir(): void {
    console.log(
      "PRODUTO: " +
        this.id +
        " | " +
        this.desc +
        " | " +
        this.foto +
        " | R$ " +
        this.preco
    );
  }
}
