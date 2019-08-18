import { Component, OnInit } from "@angular/core";
import { AtributoCustomizavel, Produto } from "../entities/rest.entities";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  atributo: AtributoCustomizavel;
  produto: Produto;

  constructor() {
    this.atributo = {
      id: 2,
      nome: "aaatttt",
      valor: "sdsd"
    };

    this.produto = {
      id: 2,
      codigo: "codigo",
      nome: "nome",
      descricao: "sfgdgdfg",
      estoque: 3,
      preco: 3.4,
    };
  }

  ngOnInit() {
    console.log(this.produto);
  }
}
