import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items-button',
  templateUrl: './items-button.component.html',
  styleUrls: ['./items-button.component.scss']
})
export class ItemsButtonComponent implements OnInit {
  itemsCount$: Observable<number>;
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsCount$ = this.itemsService.count$;
  }

}
