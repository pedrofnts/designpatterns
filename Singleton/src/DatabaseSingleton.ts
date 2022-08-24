export class DatabaseSingleton {
  private static instance: DatabaseSingleton;
  // métodos para controlar a instância do Singleton (que independem de ter ou não o objeto instanciado)

  // o construtor precisa estar indisponível

  private constructor() {
    // por enquanto ele não faz nada (mas num caso real, coloque a instrução de conexão)
    console.log("teste");
  }

  public static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }
    return DatabaseSingleton.instance;
  }

  // métodos de negócio (aquilo que o meu database pode fazer)

  public executarQuery(query: string): void {
    console.log("DB> " + query);
  }
}
