import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'role-user',
  templateUrl: './roleUser.component.html',
  styleUrls: ['./roleUser.component.css']
})

export class RoleUserComponent implements OnInit {
  constructor(public route: ActivatedRoute ) {
  }
  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
  }

}
