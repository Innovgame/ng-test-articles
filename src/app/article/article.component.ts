import { Component, OnInit } from '@angular/core';

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
  votes: number;
  title: string;
  link: string;
  constructor() {
    this.title = 'ng 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit(): void {}

  voteUp() {
    this.votes += 1;
    return false;
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }
}
