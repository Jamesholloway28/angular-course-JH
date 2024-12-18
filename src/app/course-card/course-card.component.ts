import { AfterViewInit, Component, ContentChild, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { CommonModule,/*NgClass, NgIf*/ } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [CommonModule, /*NgClass, NgIf*/],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {
  @Output()
  courseSelected = new EventEmitter<Course>();

  @Input({ required: true })
  course: Course;

  //commented out for single course card example -->
  @Input({ required: true })
  index: number;

  //can only see top part of the content part of the component instance in question
  @ContentChild(CourseImageComponent)
  image;

  // //for ngFor
  // @Input()
  // cardIndex: number;


  // // for ngIf
  // isImageVisible() {
  //   return this.course && this.course.iconUrl;
  // }
  ngAfterViewInit(): void {
    console.log(this.image);

  }

  onCourseViewed() {
    console.log("Card compenent-button clicked...");

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
    else if (this.course.category == 'INTERMEDIATE') {
      return ['intermediate']
    } else {
      return ['advanced']

    }
  }
  //ngStyle ----want to use this sparingly
  cardStyles() {
    return { 'text-decoration': 'underline', 'font-weight': '600' }


  };
}


function ViewContent(arg0: string): (target: CourseCardComponent, propertyKey: "image") => void {
  throw new Error('Function not implemented.');
}

