import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.actions';

export interface CategoryState {
  categories: any[];
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  error: null
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategoriesSuccess, (state, { categories }) => ({ ...state, categories, error: null })),
  on(CategoryActions.loadCategoriesFailure, (state, { error }) => ({ ...state, categories: [], error })),
  on(CategoryActions.addCategorySuccess, (state, { category }) => ({ ...state, categories: [...state.categories, category] })),
  on(CategoryActions.deleteCategorySuccess, (state, { id }) => ({
    ...state,
    categories: state.categories.filter(category => category.id !== id)
  }))
);
