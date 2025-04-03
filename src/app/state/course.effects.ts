import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CourseService } from '../services/course.service';
import * as CourseActions from './course.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions, private courseService: CourseService) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCourses),
      mergeMap(() =>
        this.courseService.getCourses().pipe(
          map(courses => CourseActions.loadCoursesSuccess({ courses })),
          catchError(error => of(CourseActions.loadCoursesFailure({ error: 'Failed to load courses' })))
        )
      )
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.addCourse),
      mergeMap(action =>
        this.courseService.addCourse(action.course).pipe(
          map(course => CourseActions.addCourseSuccess({ course })),
          catchError(error => of(CourseActions.addCourseFailure({ error: 'Failed to add course' })))
        )
      )
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.deleteCourse),
      mergeMap(action =>
        this.courseService.deleteCourse(action.id).pipe(
          map(() => CourseActions.deleteCourseSuccess({ id: action.id })),
          catchError(error => of(CourseActions.deleteCourseFailure({ error: 'Failed to delete course' })))
        )
      )
    )
  );
}
