import { Component, OnInit, Input } from '@angular/core';
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
  @Input() article: Article;

  constructor() {}

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
