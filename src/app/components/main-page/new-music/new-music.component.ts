import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-new-music',
  templateUrl: './new-music.component.html',
  styleUrls: ['./new-music.component.scss']
})
export class NewMusicComponent implements OnInit {

  cards = [
    { img: './../../assets/img/card301.jpg' },
    { img: './../../assets/img/card332.jpg' },
    { img: './../../assets/img/card242.jpg' },
    { img: './../../assets/img/card132.jpg' },
    { img: './../../assets/img/card152.jpg' },
    { img: './../../assets/img/card172.jpg' },
    { img: './../../assets/img/card42.jpg' },
    { img: './../../assets/img/carousel89.jpg' },
    { img: './../../assets/img/card282.jpg' },
  ];

  slides: any = [[]];

  constructor(private renderer: Renderer2) { }


  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }
}
