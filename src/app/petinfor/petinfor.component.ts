import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petinfor',
  templateUrl: './petinfor.component.html',
  styleUrls: ['./petinfor.component.scss']
})
export class PetinforComponent implements OnInit {
  title='Pet Information';
  petName ='FireFox';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }
  updateName(name){
      this.petName = name;
  }

  updateImage(image){
      this.petImage = image;
  }
  ngOnInit(): void {
  }

}
