import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Local variable for pagination
  p = 1;

  downloadData = false;

  constructor(
    private spinner: NgxSpinnerService,
    private titleService: Title
  ) { }

  ngOnInit() {
    // set title
    this.titleService.setTitle('Home');
    // spinner starts on init
    this.spinner.show();

    setTimeout(() => {
      // spinner ends after 5 seconds
      this.spinner.hide();
    }, 1000);
  }

  onDownloadData() {
    this.downloadData = !this.downloadData;
  }

}
