import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as HttpStatus from 'http-status-codes';
import { Meta } from '@angular/platform-browser';
import { AuthObj } from './models/auth-obj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'server-front';

  constructor(
    private httpClient: HttpClient,
    private meta: Meta) { }

  ngOnInit(): void {
  }

  onBtnClick(value: string) {
    const body: AuthObj = {
      Account: value,
      Password: ''
    };

    this.httpClient.post('https://localhost:5004/api/auth', body, {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
      .subscribe({
        next: (resp: any) => {
          document.location.href = resp.redirectTo;
        },
        error: (err) => {
          console.log(`🌻: AppComponent -> onBtnClick -> err.error`, err.error);
        }
      });
  }
}
