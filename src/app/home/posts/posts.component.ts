import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  @Input() posts: IPost[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.posts)
  }


}

export interface IPost {
  link: string,
  description: string
}
