import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: any;

  onLike() {
    this.postLoveIts ++;
  }

  onLikenot() {
    this.postLoveIts --;
  }

  constructor() { }

  ngOnInit() {
  }

}
