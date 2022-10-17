import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular22';

  constructor() {
    const testMap = [1, 2, 3, 5, 6].map((item) => item * 2);
    console.log(testMap);

    const testForeach = [1, 2, 3, 5, 6].forEach((item) => item);
    console.log(testForeach);

    const testFind = [1, 2, 3, 4, 5, 6].find((item) => item === 4);
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 0);
    console.log(testFilter);

    const testFindIndex = [90, 2, 300, 4, 5, 6].findIndex(
      (item) => item === 300
    );
    console.log(testFindIndex);

    const testFindIndexOf = [90, 2, 300, 4, 5, 6].indexOf(9000);
    console.log(testFindIndexOf);

    const testJoin = [1, 2, 3, 4, 5, 6].join('*');
    console.log(testJoin);

    const testIndexOf = 'asdfghzxcvbasd'.indexOf('d');
    console.log(testIndexOf);

    const testSplit = '1*2*3*4*5*6'.split('*');
    console.log(testSplit);

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    testSpliceA.splice(0, 1);
    console.log(testSpliceB, testSpliceA);

    const testReduce = [1,2,3,4,5,6].reduce((acc, value) => acc + value);
    console.log(testReduce);

  }
}
