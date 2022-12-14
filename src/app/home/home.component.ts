import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IPost, PostsComponent } from './posts/posts.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, PostsComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  posts: IPost[] = [
    {
      link: '5 dicas para sua carreira profissional',
      description:
        'Confira algumas dicas que podem ajudar a alanvacar sua carreira como desenvolvedor front-end',
    },
    {
      link: '5 dicas para sua carreira profissional',
      description:
        'Confira algumas dicas que podem ajudar a alanvacar sua carreira como desenvolvedor front-end',
    },
    {
      link: '5 dicas para sua carreira profissional',
      description:
        'Confira algumas dicas que podem ajudar a alanvacar sua carreira como desenvolvedor front-end',
    },
  ];
}
