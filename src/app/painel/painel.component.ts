  // tslint:disable:semicolon
// tslint:disable:triple-equals
// tslint:disable:no-inferrable-types
// tslint:disable:no-inferrable-types
import { Component, OnInit , EventEmitter, Output } from '@angular/core'
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
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

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
      // troca  pergunta da rodada
      this.round++

      // progresso
      this.progress = this.progress + (100 / this.frases.length)
      if (this.round === 4) {
        this.encerrarJogo.emit('vitoria')
      }

      // atualiza o objeto rodadaFrase
      this.updateRound()

    } else {
        this.tentativas--
       alert('Tradução incorreta ! , tente novamente.')
       if (this.tentativas == -1) {
        this.encerrarJogo.emit('Derrota')
       }
       }
  }

  updateRound(): void {
    // define a frase da rodada com base em uma logica
    this.roundFrase = this.frases[this.round]
    // limpar textarea
    this.resposta = ''
  }
}
