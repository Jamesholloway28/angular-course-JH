import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {

  courses = COURSES;
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('the course card was clicked', course);

  }

  data = {
    title: 'Angular Core Deep Dive'
  }
  onLogoClicked() {
    alert("Hello World!")
  }

  onKeyUp(newTitle: string) {
    // console.log(this);
    this.data.title = newTitle;
  }
}
