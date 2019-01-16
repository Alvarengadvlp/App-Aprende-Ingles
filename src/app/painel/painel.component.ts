  // tslint:disable:semicolon
// tslint:disable:triple-equals
// tslint:disable:no-inferrable-types
// tslint:disable:no-inferrable-types
import { Component, OnInit } from '@angular/core'
import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase [] = FRASES
  public instrucao: String = 'Traduza a frase: '

  public resposta: string = ''


  public round: number = 0
  public roundFrase: Frase

  public progress: number = 0
  constructor() {
    this.updateRound()
   }

  ngOnInit() {
  }

  updateResp(eventResp: Event): void {
    this.resposta = (<HTMLInputElement>eventResp.target).value
  }

  checkAnswer(): void {

    if (this.roundFrase.frasePtBr == this.resposta) {

      alert('Parabéns, A tradução está correta !')
      // troca  pergunta da rodada
      this.round++

      // progresso
      this.progress = this.progress + (100 / this.frases.length)

      // atualiza o objeto rodadaFrase
      this.updateRound()

    } else { alert('Tradução incorreta ! , tente novamente.') }
  }

  updateRound(): void {
    // define a frase da rodada com base em uma logica
    this.roundFrase = this.frases[this.round]
    // limpar textarea
    this.resposta = ''
  }
}
