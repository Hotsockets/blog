import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Posts';

  loves : number;

  created_at = new Date();
  
  posts = [
    {
    title: "Mon Premier Post",
    content: "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.",
    loveIts: this.loves,
    created_at: this.created_at
    },
    {
      title: "Mon Deuxième Post",
      content: "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.",
      loveIts: this.loves,
      created_at: this.created_at
    },
    {
      title: "Encore un post",
      content: "Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda patrimonii iura permisit.",
      loveIts: this.loves,
      created_at: this.created_at
    }
  ]
}
