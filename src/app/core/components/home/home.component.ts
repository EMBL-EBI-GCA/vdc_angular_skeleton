import { Component, OnInit } from '@angular/core';

import { DoSomethingService } from '../../services/do-something.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public doSomethingService: DoSomethingService) { }

  ngOnInit() {
  }

}
