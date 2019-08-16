import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-iqra-info',
  templateUrl: './iqra-info.page.html',
  styleUrls: ['./iqra-info.page.scss'],
})
export class IqraInfoPage implements OnInit {
  slides:Array<{img:string,sound:string, text:string}>;
  id:any;
  text:any;
  @ViewChild('alph') slider: IonSlides;
  constructor(private route: ActivatedRoute) { 
    this.slides = [];
    this.text = this.letter();
    for(let i = 0; i < 30; i++) {
      this.slides.push({
        img:"assets/image/letter/" + (i + 1) + ".PNG",
        sound:"assets/sound/" + (i + 1) + ".m4a",
        text: this.text[i]
      });
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.slider.slideTo(parseInt(this.id) - 1, 10);
  }

  letter(){
    return [
      ["A", "LIF"],
      ["BA"],
      ["TA"],
      ["TSA"],
      ["JIM"],
      ["KHA"],
      ["KHO"],
      ["DAL"],
      ["DZAL"],
      ["RO"],
      ["ZAI"],
      ["SIN"],
      ["SYIN"],
      ["SHAD"],
      ["DHAD"],
      ["THO"],
      ["DZO"],
      ["AIN"],
      ["GHAIN"],
      ["FA"],
      ["QAF"],
      ["KAF"],
      ["LAM"],
      ["MIM"],
      ["NUN"],
      ["WAU"],
      ["HAA"],
      ["LAM", "A", "LIF"],
      ["HAM", "ZA"],
      ["YAA"]
    ];
  }

}
