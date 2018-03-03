import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'ali-home',
 templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  filterNameArray = [
    { name: '李', value: false },
    { name: '徐', value: false },
  ];
  filterAddressArray = [
    { name: '广东省', value: false },
    { name: '浙江省', value: false },
    { name: '河南省', value: false }
  ];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
  data = [
    {
      id    : 1,
      name   : '李大钊',
      age    : 32,
      address: '河北省乐亭县',
    }, {
      id    : 2,
      name   : '陈独秀',
      age    : 42,
      address: '安徽省怀宁县十里铺',
    }, {
      id    : 3,
      name   : '李小钊',
      age    : 32,
      address: '河南省开封府',
    }, {
      id    : 4,
      name   : '孙中山',
      age    : 39,
      address: '广东省香山县翠亨村',
    }, {
      id    : 5,
      name   : '徐志摩',
      age    : 30,
      address: '浙江省海宁市',
    }, {
      id    : 6,
      name   : '鲁迅',
      age    : 45,
      address: '浙江省绍兴府会稽县',
    }, {
      id    : 7,
      name   : '梁启超',
      age    : 31,
      address: '广东省新会市',
    }
  ];
  copyData = [ ...this.data ];

  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[ key ] = null;
      } else {
        this.sortMap[ key ] = value;
      }
    });
    this.search();
  }

  search() {
    const searchAddress = this.filterAddressArray.filter(address => address.value);
    const searchName = this.filterNameArray.filter(name => name.value);
    const filterFunc = (item) => {
      return (searchAddress.length ? searchAddress.some(address => item.address.indexOf(address.name) !== -1) : true) &&
        (searchName.length ? searchName.some(name => item.name.indexOf(name.name) !== -1) : true)
    };
    this.data = [ ...this.copyData.filter(item => filterFunc(item)) ];
    this.data = [ ...this.data.sort((a, b) => {
      if (a[ this.sortName ] > b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[ this.sortName ] < b[ this.sortName ]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    }) ];
  }

  reset(array) {
    array.forEach(item => {
      item.value = false;
    });
    this.search();
  }
  constructor() {
  }


  ngOnInit() {
  }
}
