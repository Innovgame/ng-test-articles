export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes: number = 0) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  voteUp() {
    this.votes += 1;
  }

  voteDown() {
    this.votes -= 1;
  }
}
