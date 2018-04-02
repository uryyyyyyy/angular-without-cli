import { Component } from '@angular/core'

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string

  public constructor() {
    this.name = 'Angular'
  }
}
