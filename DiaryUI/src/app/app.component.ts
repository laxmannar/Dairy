import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DiaryUI';
  data: string | undefined;

  //create a method to call the rest service to get the string from url http://localhost:8080/get
  getData() {
    fetch('http://localhost:8051/api')
      .then(response => response.text())
      .then(data => {
        this.data = data;
      });
  }


}
