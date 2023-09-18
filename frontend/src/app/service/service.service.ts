import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FoodList } from '../modules/interfaces/food-list';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:3000"

  public getList():Observable <Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}/food-list`).pipe(
      res => res
    )
  }

  public addToList(value: string): Observable <Array<FoodList>> {
    return this.http.post<Array<FoodList>>(`${this.url}/food-list`, {food: value}).pipe(
      res => res
    )
  }

  public deleteFood(id: number): Observable <Array<FoodList>> {
    return this.http.delete<Array<FoodList>>(`${this.url}/food-list/${id}`).pipe(
      res => res
    )
  }

  public editFood(value:string, id:number): Observable <FoodList>{
    return this.http.put<FoodList>(`${this.url}/food-list/${id}`, {food: value}).pipe(
      res => res
    )
  }
}
