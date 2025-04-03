import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction('[Category] Load Categories Success', props<{ categories: any[] }>());
export const loadCategoriesFailure = createAction('[Category] Load Categories Failure', props<{ error: string }>());

export const addCategory = createAction('[Category] Add Category', props<{ category: any }>());
export const addCategorySuccess = createAction('[Category] Add Category Success', props<{ category: any }>());
export const addCategoryFailure = createAction('[Category] Add Category Failure', props<{ error: string }>());

export const deleteCategory = createAction('[Category] Delete Category', props<{ id: number }>());
export const deleteCategorySuccess = createAction('[Category] Delete Category Success', props<{ id: number }>());
export const deleteCategoryFailure = createAction('[Category] Delete Category Failure', props<{ error: string }>());
