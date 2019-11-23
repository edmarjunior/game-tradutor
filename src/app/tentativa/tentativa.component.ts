import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit, OnChanges {

  @Input() tentativas: number;
  coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() { }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const index = this.coracoes.length - this.tentativas;
      this.coracoes[index - 1].cheio = false;
    }
  }

  ngOnInit() { }
}
