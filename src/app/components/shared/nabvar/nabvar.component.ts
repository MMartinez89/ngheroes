import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-nabvar",
  templateUrl: "./nabvar.component.html",
  styleUrls: ["./nabvar.component.scss"],
})
export class NabvarComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}
  buscarHeroe(termino: string) {
    this.router.navigate(['/buscar', termino])    
  }
}
