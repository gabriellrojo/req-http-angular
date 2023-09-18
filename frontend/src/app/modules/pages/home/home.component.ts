import { AfterContentInit, Component, AfterViewInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { FoodList } from '../../interfaces/food-list';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private foodListService: ServiceService){}

  public foodList: Array<FoodList> | any = []
  public editarFood: boolean = false

  ngAfterViewInit() {
      this.foodListService.getList().subscribe(
        res => this.foodList = res
      )
  }

  public addFood(value: string){
    this.foodListService.addToList(value).subscribe(
      res => this.foodList.push(res)
    )
  }

  public deleteFood(id: number){
    this.foodListService.deleteFood(id).subscribe(
      res => this.foodList = this.foodList.filter((obj: {id: number, food: string}) => obj.id !== id)

    )
  }

  public editar(){
    this.editarFood = false ? (this.editarFood == true) : (this.editarFood == false)
  }

  public editFood(value: string, id: number){
    this.foodListService.editFood(value, id).subscribe(
      res => this.foodList = this.foodList.filter((obj: {id: number, food: string}) => obj.id !== 2000)
    )
  }

}
