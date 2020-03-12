import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onBtnClick() {
    const header = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:5000/',
      'Access-Control-Allow-Methods': 'POST',
    });
    const opt = {
      headers: header
    };

    this.httpClient.post('http://localhost:5000/api/cauth', '')
    .subscribe({
      next: (res) => { console.log(`🌻: IndexComponent -> onBtnClick -> next`, res); },
      error: (err) => {
        if (err.status === 301) {
          const reurl = err.error;
          document.location.href = reurl;
        }
      }
    });
  }
}
