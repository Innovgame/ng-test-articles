import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-hello-world';

  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
    console.log(`${newTitle.value} + ${newLink.value}`);

    return false;
  }
}
