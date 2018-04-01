import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    template: `
      <h1>Angular App</h1>
      <p>Hello World!</p>
    `,
    styles: [`
        h1 {
            color: blue;
        }
    `]
})
export class AppComponent implements OnInit {
    
    public constructor() {}
    
    public ngOnInit(): void {}
    
}