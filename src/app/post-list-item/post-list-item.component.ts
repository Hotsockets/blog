import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title : string;
  @Input() content : string;
  @Input() created_at : string;

  public like: number=0;

  constructor() { }

  ngOnInit() {
  }

  Like() {
    this.like++
    console.log(this.like)
  }

  Dislike() {
    this.like--
    console.log(this.like)
  }
}
