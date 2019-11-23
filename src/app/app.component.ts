import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jogoEmAndamento = true;
  vitoria: boolean;

  mensagem = {
    vitoria: 'Parabéns, você venceu!',
    derrota: 'Infelizmente você perdeu! Tente novamente'
  };


  encerrarJogo(vitoria: boolean) {
    this.vitoria = vitoria;
    this.jogoEmAndamento = false;
  }

  getMensagem() {
    return this.vitoria ? this.mensagem.vitoria : this.mensagem.derrota;
  }

  reiniciar() {
    this.jogoEmAndamento = true;
    this.vitoria = undefined;
  }
}
