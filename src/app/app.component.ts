import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recibo-vendas';
  public cliente:string = '';
  public produto:string = '';
  public quantidade:number = 1;
  public valor:number = 0;
  public recibo:boolean = false;

  valorTotal():number{
    return this.quantidade * this.valor;
  }

  incrementar():void{
    this.quantidade++;
  }

  decrementar():void{
    this.quantidade--;
  }

  gerarRecibo():boolean{
    return this.recibo = true;
  }
}
