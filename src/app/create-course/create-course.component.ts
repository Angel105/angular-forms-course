import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';




@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true}
    }
  ]
})
export class CreateCourseComponent implements OnInit {


  ngOnInit() {

  }

  submit(step1: any, step2: any, step3: any) {
    console.log(step1, step2, step3);
  }
}
