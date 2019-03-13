import {Component, Inject, OnInit} from '@angular/core';
import {MainService} from "../services/main.service";
import {ActivatedRoute} from "@angular/router";
import {DOCUMENT} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuUsers: any = [];
  store: any = {};
  constructor(private _service: MainService,
      private _activeRoute: ActivatedRoute, private http: HttpClient,
      @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this._activeRoute.data.subscribe((res: { home: any }) => {
      this.store = res.home;
    });

    this.loadPageData();
  }

  loadPageData(): any {
    const $users = this._service.getAllUsers();
    const url = MainService.API_PATH;
    //console.log($users);
    //$users.subscribe((category) => this.menuUsers = category);
    this.http
    .get(url)
    .subscribe(apiData => (this.menuUsers = apiData));
  }

  

}
