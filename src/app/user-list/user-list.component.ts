import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = [ 'title','price','popularity'];
  dataSource = [
  ];
  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getServiceCall('', '');
  }

  getServiceCall(url, params) {
    this.api.getServiceCall(url, params).subscribe(
      res => {
          this.dataSource = res.products;
          this.dataSource.sort(sortPopularity);
      },
      error => {
        console.log(error);
      }
    );
  }


}

function sortPopularity(a, b) {
  return b.popularity - a.popularity;
}
