import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'row',
  },
})
export class ArticleComponent implements OnInit {
  article: Article;
  constructor() {
    this.article = new Article('ng2', 'http://angular.io');
  }

  ngOnInit(): void {}

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }
}
