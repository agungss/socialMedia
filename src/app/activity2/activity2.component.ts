import { Component, OnInit } from '@angular/core';
import { Activity2 } from '../models/Activity2';
import { Activity2Service } from '../services/activity2.service';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.component.html',
  styleUrls: ['./activity2.component.css']
})
export class Activity2Component implements OnInit {
  activity2: Activity2[] | undefined;

  constructor(private activity2Service: Activity2Service) { }


  ngOnInit(): void {
    this.activity2Service.getComments().subscribe(activity2 => {
      this.activity2 = activity2;

    });
  }

}
