import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  created_at = new Date();

  post = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur ascsuhyg etd, sed do eiuslmug.',
      loveIts: 0,
      created_at: this.created_at
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur ascsuhyg etd, sed do eiuslmug.',
      loveIts: 0,
      created_at: this.created_at
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur ascsuhyg etd, sed do eiuslmug.',
      loveIts: 0,
      created_at: this.created_at
    }
  ];
}
