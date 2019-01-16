import { Component, OnInit } from '@angular/core';
  // tslint:disable:semicolon

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public titulo: String = 'Aprendendo Inglês'
  constructor() { }

  ngOnInit() {
  }

}
