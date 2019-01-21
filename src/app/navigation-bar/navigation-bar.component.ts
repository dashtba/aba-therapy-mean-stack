import { Component, OnInit } from '@angular/core';
import { FileIoServiceService } from '../file-io-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  availableTrials: string[] = [];
  constructor(private fileIoService:FileIoServiceService) { }

  ngOnInit() {

    this.fileIoService.getTrialNames().subscribe(res => {this.availableTrials = res});
  }

}
