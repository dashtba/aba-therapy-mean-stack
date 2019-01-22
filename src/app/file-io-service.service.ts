import { Injectable } from '@angular/core';
import {TrialSet } from './trial-set';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileIoServiceService {
  //dummy data to start the process
  items =  ['What is your last name?','Who is your teacher?','What did you have for lunch?','Do you like cookies?','Who flies in space?','Who is your brother?','What do you see outside?'];
  allTrials: TrialSet[] = [];


  constructor() {
    //Soon, this will load a Set from the DB, for now, let's make some
    //dummy data for testing
    var dummySet: TrialSet = new TrialSet();
    dummySet.setName = "Interverbals";
    dummySet.promptLevel = "Least to Most";
    dummySet.numQuestionsBetweenRewards = 2;
    dummySet.trials = [];
    for(let item of this.items)
    {
      dummySet.trials.push({'query':item,'results':[],'score':Math.random()});
    }
    dummySet.trials.sort((a,b)=>{return a.score - b.score});

    this.allTrials.push(dummySet);
   }

   public getTrialNames(): Observable<string[]>{
     var retVal: string[] = [];
     console.log('Trying to get names');
     for(let trial of this.allTrials){
        retVal.push(trial.setName);
     }
     return of(retVal);
   }

   public getTrialSetByName(trialName: string) : Observable<TrialSet>{
     console.log('Searching for '+ trialName);
     for(let trial of this.allTrials){
       if(trialName===trial.setName){
         return of(trial);
       }
     }
     //how do I throw an error properly?
     return of({setName:"null",promptLevel:"null",numQuestionsBetweenRewards:0,trials:[]});
   }
}
