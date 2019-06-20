import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-iqra-info',
  templateUrl: './iqra-info.page.html',
  styleUrls: ['./iqra-info.page.scss'],
})
export class IqraInfoPage implements OnInit {
  slides:Array<{img:string}>;
  id:any;
  @ViewChild('alph') slider: IonSlides;
  constructor(private route: ActivatedRoute) { 
    this.slides = [];
    for(let i = 0; i < 30; i++) {
      this.slides.push({
        img:"assets/image/letter/" + (i + 1) + ".PNG"
      });
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.slider.slideTo(parseInt(this.id) - 1, 10);
  }

}
