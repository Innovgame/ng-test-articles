import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() onVote: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  voteUp() {
    this.article.voteUp();
    this.onVote.emit(this.article.votes);
    return false;
  }

  voteDown() {
    this.article.voteDown();
    this.onVote.emit(this.article.votes);
    return false;
  }
}
