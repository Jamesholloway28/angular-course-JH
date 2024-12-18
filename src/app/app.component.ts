import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];


  title = COURSES[0].description;

  startDate = new Date(2000, 0, 1)

  price = 9.9953674345;

  rate = .67;

  course0 = COURSES[0];


  //// view child decorator:
  //// CourseCardComponent class from the course-card.component.ts file
  //// gets just the first matching instance
  // @ViewChild('cardRef1', { read: ElementRef })
  // card1: ElementRef;

  // @ViewChild('container')
  // containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor() {
    // console.log('containerDiv', this.card1);

  }

  ngAfterViewInit() {
    // console.log(this.cards);
    //monitors for changes to the collection
    console.log(this.courses);
    this.cards.changes.subscribe(
      cards => console.log(cards)
    );
  }

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }
  onCourseSelected(course: Course) {
    // console.log('containerDiv', this.card1);

    //logs whichever course card button is clicked, handled here in the app.component level is ideal, 
    // though we could have done it in course-card:
    console.log(course);

  }


  trackCourse(index: number, course: Course): string {
    console.log(index, course.id);

    return `${index}-${course.id}`
  }


  // data = {
  //   title: 'Angular Core Deep Dive'
  // }
  // onLogoClicked() {
  //   alert("Hello World!")
  // }

  // onKeyUp(newTitle: string) {
  //   // console.log(this);
  //   this.data.title = newTitle;
  // }
}
