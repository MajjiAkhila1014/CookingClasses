import { createAction, props } from '@ngrx/store';

export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: any[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: string }>());

export const addCourse = createAction('[Course] Add Course', props<{ course: any }>());
export const addCourseSuccess = createAction('[Course] Add Course Success', props<{ course: any }>());
export const addCourseFailure = createAction('[Course] Add Course Failure', props<{ error: string }>());

export const deleteCourse = createAction('[Course] Delete Course', props<{ id: number }>());
export const deleteCourseSuccess = createAction('[Course] Delete Course Success', props<{ id: number }>());
export const deleteCourseFailure = createAction('[Course] Delete Course Failure', props<{ error: string }>());
