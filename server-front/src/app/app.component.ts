import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'server-front';

  constructor(private httpClient: HttpClient) { }

  onBtnClick(value: string) {
    document.location.href = `http://localhost:4201/ready/${value}`;
  }
}
