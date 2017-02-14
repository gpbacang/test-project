import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'axa-title',
  templateUrl: './title.component.html',
  styleUrls: ['./style/title.component.css']
})
export class TitleComponent {

  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['wait']);
  }

}
