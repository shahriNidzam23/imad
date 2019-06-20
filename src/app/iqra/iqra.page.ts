import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iqra',
  templateUrl: './iqra.page.html',
  styleUrls: ['./iqra.page.scss'],
})
export class IqraPage implements OnInit {
  slides:Array<Array<Array<{img:string,url:string}>>>;
  inc:any;
  constructor() {
    this.slides = [];
    this.inc = 0;

    for(let s = 0; s < 8; s++){
      this.slides[s] = [];
      for(let a = 0; a < 2; a++){
        if(!(s == 7 && a == 1)){
          this.slides[s][a] = [];
          for(let i = 0; i < 2; i++){
            this.inc++;
            this.slides[s][a][i] = {
              img:"assets/image/letter/" + this.inc + ".PNG",
              url:"/iqra-info/" + this.inc
            };
            //console.log(this.inc);
          }
        }
      }
    }
   }


  ngOnInit() {
  }

}
