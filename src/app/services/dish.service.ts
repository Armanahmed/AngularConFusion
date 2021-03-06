import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

//import { Observable } from 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
//import { of } from 'rxjs/observable/of';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
  	//return new Promise(resolve => {
      // Simulate serverlatency with 2 second delay
      //setTimeout(() => resolve(DISHES), 2000);
    //});
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
  	//return new Promise(resolve => {
      // Simulate serverlatency with 2 second delay
      //setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
    //});
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
  	//return new Promise(resolve => {
      // Simulate serverlatency with 2 second delay
      //setTimeout(() => resolve(DISHES.filter((dish) => (dish.featured))[0]), 2000);
    //});
    return of(DISHES.filter((dish) => (dish.featured))[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<number[] | any> {
    //return Observable.of(DISHES.map(dish => dish.id ));
    return of(DISHES.map(dish => dish.id ));
  }

}
