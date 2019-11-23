export class Coracao {
  private urlCheio = '/assets/coracao_cheio.png';
  private urlVazio = '/assets/coracao_vazio.png';

  constructor(public cheio: boolean) { }

  getSrc(): string {
    return this.cheio ? this.urlCheio : this.urlVazio;
  }
}
