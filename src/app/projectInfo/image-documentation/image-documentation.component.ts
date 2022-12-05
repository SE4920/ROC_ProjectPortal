import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-documentation',
  templateUrl: './image-documentation.component.html',
  styleUrls: ['./image-documentation.component.css'],
  animations: [
    trigger('View', [
      state('*', style({
        opacity: 1
      })),
      state('void', style({
        opacity: 0
      })),
      transition("void => *", [
        animate('0.35s')
      ]),
      transition('* => void', [
        animate('0.35s')
      ])
    ])
  ]
  
})
export class ImageDocumentationComponent {

  isExpanded: boolean = false;
 


  onClick(){
    this.isExpanded = !this.isExpanded;
  }

}
