import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'server-front';

  constructor(private httpClient: HttpClient) { }

  onBtnClick(value: string) {
    // TODO: post to server-back
    this.httpClient.post('https://localhost:5004/api/auth', value, {
      headers: new HttpHeaders({
        'content-type': 'text/plain'
      })
    })
      .subscribe({
        next: (resp) => {
          console.log(`🌻: AppComponent -> onBtnClick -> value`, resp);
        },
        error: (err) => {
          if (err.status === 301) {
            console.log(`🌻: AppComponent -> onBtnClick -> err.error`, err.error);
            document.location.href = err.error;
          }
        }
      });
  }
}
