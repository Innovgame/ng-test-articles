import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-hello-world';
  articles: Article[];

  constructor() {
    this.articles = [1, 2, 3].map(
      (v) => new Article(`ng${v}`, 'http://angular.io', v)
    );
  }

  addArticle(newTitle: HTMLInputElement, newLink: HTMLInputElement): boolean {
    console.log(`${newTitle.value} + ${newLink.value}`);

    this.articles.push(new Article(newTitle.value, newLink.value, 0));
    this.articles = this.sortedArticles();

    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a, b) => a.votes - b.votes);
  }

  onVoted(votes: number) {
    this.articles = this.sortedArticles();
  }
}
