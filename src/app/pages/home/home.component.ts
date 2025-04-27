import { Component } from '@angular/core';
import { SlideShowComponent } from '../../components/slide-show/slide-show.component';

@Component({
  selector: 'app-home',
  imports: [SlideShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
