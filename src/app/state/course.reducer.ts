import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';

export interface CourseState {
  courses: any[];
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  error: null
};

export const courseReducer = createReducer(
  initialState,
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, courses, error: null })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({ ...state, courses: [], error })),
  on(CourseActions.addCourseSuccess, (state, { course }) => ({ ...state, courses: [...state.courses, course] })),
  on(CourseActions.deleteCourseSuccess, (state, { id }) => ({
    ...state,
    courses: state.courses.filter(course => course.id !== id)
  }))
);
