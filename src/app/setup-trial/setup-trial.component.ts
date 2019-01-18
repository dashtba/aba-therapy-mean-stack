import { Component, OnInit } from '@angular/core';
import {Trial} from '../trial';
import {TrialSet} from '../trial-set';

@Component({
  selector: 'app-setup-trial',
  templateUrl: './setup-trial.component.html',
  styleUrls: ['./setup-trial.component.css']
})
export class SetupTrialComponent implements OnInit {

  newTrial : Trial;
  tempString : string;
  newTrialSet : TrialSet;
  tempNum : number;
  tempQuery : string;

  constructor() { }

  ngOnInit() {
    console.log('Setting up a new trial set.');
    this.newTrialSet = new TrialSet;
    this.newTrialSet.trials = [];

      }

  setPromptLevel() {
    this.newTrialSet.promptLevel = this.tempString;
    console.log(this.newTrialSet);
  }

  setRewardInterval(){
    this.newTrialSet.numQuestionsBetweenRewards = this.tempNum;
    console.log(this.newTrialSet);
  }

  addQuery(){
    var newQuery = new Trial;
    newQuery.query = this.tempQuery;
    newQuery.score = 0;
    newQuery.results = [];
    this.newTrialSet.trials.push(newQuery);
  }

  remove(query: Trial){
      this.newTrialSet.trials.splice(this.newTrialSet.trials.indexOf(query),1);
  }
}
