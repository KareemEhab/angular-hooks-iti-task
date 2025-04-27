import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css'],
})
export class SlideShowComponent {
  currentImg: string =
    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg';
  index: number = 0;
  images: string[] = [
    'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
    'https://img.freepik.com/free-photo/bright-neon-colors-shining-wild-chameleon_23-2151682784.jpg',
    'https://t4.ftcdn.net/jpg/10/93/45/23/360_F_1093452370_iSpkxn4xqCPjxnMJyRuguYhpqaQ8P0Yk.jpg',
    'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
  ];

  slideInterval: any;

  nextImage() {
    this.index = (this.index + 1) % this.images.length;
    this.currentImg = this.images[this.index];
  }

  prevImage() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    this.currentImg = this.images[this.index];
  }

  slideShow() {
    this.stopSlideShow();
    this.slideInterval = setInterval(() => {
      this.nextImage();
    }, 1000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }
}
