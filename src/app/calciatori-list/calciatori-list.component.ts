import { Component } from '@angular/core';
import  {CALCIATORI}from "../data/serie"
import { Calciatore,ICalciatore,TCalciatore } from '../models/calciatori';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrl: './calciatori-list.component.css'
})
export class CalciatoriListComponent {
calciatori:TCalciatore[] = CALCIATORI
convertiInDiffensore(calciatore:TCalciatore){
  calciatore.ruolo = 'D'

}
}
