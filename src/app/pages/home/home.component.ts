import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [HeaderComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
