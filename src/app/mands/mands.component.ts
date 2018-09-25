import { Component, OnInit } from '@angular/core';
import {Trial} from '../trial';

@Component({
  selector: 'app-mands',
  templateUrl: './mands.component.html',
  styleUrls: ['./mands.component.css']
})

export class MandsComponent implements OnInit {

  items =  ['Graham Crackers','Train Video','Blocks','Cookies','Ice cream','Go outside','Toy room'];
  numRight = 0;
  queries: Trial[] = []; //Should load these from DB
  displayList: Trial[] = []; //used to display top scoring queries for momentum

  numQuestionsSinceReward: number = 0;
  numQuestionsBetweenRewards: number = 2;

  results: Trial[] = []; //Will update DB with these
  promptLevel = "Maximal";
  rewardNow = false;
  constructor() { }

  ngOnInit() {
    //Soon, this will load a Set from the DB, for now, let's make some
    //dummy data for testing
    for(let item of this.items)
    {
      this.queries.push({'query':item,'results':['-','-','+'],'score':Math.random()});
    }
    this.queries.sort((a,b)=>{return a.score - b.score})
    console.log(this.queries);
  }

  rewarded(){
    this.rewardNow = false;
    this.numQuestionsSinceReward = 0;
  }
  correct(item: Trial){
    this.numQuestionsSinceReward = this.numQuestionsSinceReward+1 ;
    if(this.numQuestionsSinceReward >= this.numQuestionsBetweenRewards){
      this.rewardNow = true;
    }
    console.log(this.numQuestionsSinceReward);
    //Step one: remove from the queries list
    this.queries.splice(this.queries.indexOf(item),1);

    //Step two: add the result of this trial
    item.results.push('+');

    //Step three: add the result to results array
    this.results.push(item);
  }

  prompted(item: Trial){
    this.numQuestionsSinceReward++;
    if(this.numQuestionsSinceReward > this.numQuestionsBetweenRewards){
      this.rewardNow = true;
    }
    //Step one: remove from the queries list
    this.queries.splice(this.queries.indexOf(item),1);

    //Step two: add the result of this trial
    item.results.push('-');

    //Step three: add the result to results array
    this.results.push(item);
  }

  correctLast(item:Trial)
  {
    var index = this.results.indexOf(item);
    var bit = this.results.splice(index,1);
    var val = bit[0].results[item.results.length-1];

    if (val==='+')
    {
      bit[0].results[item.results.length - 1] = '-';
      console.log('change to minus',bit[0].results);
    }else
        {
          bit[0].results[item.results.length - 1] = '+';
        }
    console.log('but now:',bit[0]);
    this.results.push(bit[0]);
  }

displayResults(allBits): string {
  var resultString = " | ";
  for(let bit of allBits){
    resultString = resultString + bit +" | " ;
  }

  return resultString;
}
  result(item: string): string {
    for(let result of this.results){
      if(result.query === item)
      {
        console.log('should print a result here')
        return result.results[0];
      }
    }
  }
}
