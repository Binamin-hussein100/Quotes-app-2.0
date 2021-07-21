import { Component, OnInit } from '@angular/core';
import { QuoteBlueprint } from '../quote-blueprint';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:QuoteBlueprint[] =[
    new QuoteBlueprint("Life is what happens when you're busy making other plans.","John Lennon","binamin",40,10),
    new QuoteBlueprint("Spread love everywhere you go. Let no one ever come to you without leaving happier.","mother teresa","Samir",76,5)
  ]

  delete(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    
    }
  }
  upvote(index:any){
    this.quotes[index].upVote++
  }

  downVote(index:any){
    this.quotes[index].downVote++
  }

  // addNewQuote(quotes:any){
  //   this.quotes.push(quotes)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
