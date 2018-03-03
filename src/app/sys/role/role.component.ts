import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'an-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})

export class RoleComponent implements OnInit {
  data = [
    {
      id: 1,
      name: "超级管理员",
      list: [
        {
          id: 2,
          name: '陈独秀'
        },
        {
          id: 1,
          name: '李大钊'
        }
      ]
    },
    {
      id: 2,
      name: "开发工程师",
      list: [
        {
          id: 6,
          name: '鲁迅'
        }, {
          id: 7,
          name: '梁启超'
        }, {
          id    : 4,
          name   : '孙中山'
        }
      ]
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }
}
