import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = 'blue';
    }, 5000)
    
   }
  public user: string = "Wesley Ribeiro";

  public image: any = {
    src:"https://avatars.githubusercontent.com/u/91573742?v=4",
    alt:"Avatar Wesley Ribeiro"
  }

  public clicar(): void {
    alert("clicou");
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
  }

  public isError: boolean = true ;
  public classCor: string = "pink";

  public sapinho: boolean = true;
  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

  public peixes: string[] = [
    "Cação",
    "Lambari",
    "Peixe palhaço",
    "Baiacu",
    "Peixe espada",
    "Robalo",
    "Carpa"
  ];

  public textoPipe: string = "Texto de Exemplo (pipe)";
  public numberPipe: number = 30.3334;
  public nowPipe = new Date();
  public objProfPipe = {
    nome: "Gabriel Braga",
    idade: 20,
    area: "Tecnologia"
  }
}



