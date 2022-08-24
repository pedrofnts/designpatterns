import { ItemGenerico } from "./itemGenerico";

export class Servico implements ItemGenerico {
  private codigo: number;
  private nome: string;
  private valor: number;
  private aliquota: number;

  public constructor() {
    this.codigo = 1234;
    this.nome = "Formatação de Notebook";
    this.valor = 100.0;
    this.aliquota = 4;
  }
  exibir(): void {
    console.log(
      "SERVIÇO " +
        this.codigo +
        " | " +
        this.nome +
        " | " +
        this.valor +
        "| R$ " +
        this.valor +
        " | " +
        this.aliquota +
        "%"
    );
  }
}
