import { Component, OnInit } from '@angular/core';

import { DoSomethingService } from '../../../core/services/do-something.service';

@Component({
  selector: 'app-example-child',
  templateUrl: './example-child.component.html',
  styleUrls: ['./example-child.component.css']
})
export class ExampleChildComponent implements OnInit {

  constructor(public doSomethingService: DoSomethingService) { }

  ngOnInit() {
  }

}
