import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { QuoteBlueprint } from '../quote-blueprint';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new QuoteBlueprint("","","",0,0)
  @Output() addQuote = new EventEmitter<QuoteBlueprint>()

  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
