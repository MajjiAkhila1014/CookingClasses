import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import * as CategoryActions from './category.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.loadCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map(categories => CategoryActions.loadCategoriesSuccess({ categories })),
          catchError(error => of(CategoryActions.loadCategoriesFailure({ error: 'Failed to load categories' })))
        )
      )
    )
  );

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.addCategory),
      mergeMap(action =>
        this.categoryService.addCategory(action.category).pipe(
          map(category => CategoryActions.addCategorySuccess({ category })),
          catchError(error => of(CategoryActions.addCategoryFailure({ error: 'Failed to add category' })))
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.deleteCategory),
      mergeMap(action =>
        this.categoryService.deleteCategory(action.id).pipe(
          map(() => CategoryActions.deleteCategorySuccess({ id: action.id })),
          catchError(error => of(CategoryActions.deleteCategoryFailure({ error: 'Failed to delete category' })))
        )
      )
    )
  );
}
