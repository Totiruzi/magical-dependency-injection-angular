import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-items-manager',
  templateUrl: './items-manager.component.html',
  styleUrls: ['./items-manager.component.scss']
})
export class ItemsManagerComponent implements OnInit {
  itemsCount$!: Observable<number>;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsCount$ = this.itemsService.count$;
  }

  getCountValue(callback: any) {
    this.itemsCount$
      .pipe(
        first()
      ).subscribe(callback)
  }

  addNotification() {
    this.getCountValue((countVal: number) => {
      this.itemsService.setCount(++countVal)
    });
  }

  removeNotification() {
    this.getCountValue((countVal: number) => {
      if (countVal === 0) {
        return;
      }
      this.itemsService.setCount(--countVal);
    })
  }

  resetCount() {
    this.itemsService.setCount(0);
  }

}
