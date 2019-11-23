import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  resposta = '';
  rodadaAtual = 0;
  fraseAtual: Frase;
  progresso = 0;
  tentativas = 3;
  @Output() encerrarJogo: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.fraseAtual = this.frases[this.rodadaAtual];
  }

  ngOnInit() {
  }

  atualiza(evento: any): void {
    this.resposta = evento.target.value;
  }

  verificarResposta(): void {

    if (this.resposta === this.fraseAtual.frasePtBr) {
      this.progresso = this.progresso + (100 / this.frases.length);
      this.rodadaAtual++;
      this.fraseAtual = this.frases[this.rodadaAtual];
      this.resposta = '';

      if (this.rodadaAtual === 4) {
        this.encerrarJogo.emit(true);
      }

    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit(false);
      }
    }
  }
}
