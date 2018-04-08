import {Component, OnInit} from "@angular/core";

@Component({
  selector: "main-app",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  name: string

  public constructor() {
    this.name = 'Angular'
  }

  public ngOnInit(): void {}

}