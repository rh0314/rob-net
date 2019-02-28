import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent implements OnInit {

  testNumberArray = [1, 2, 3, 79, 108, 100099, -16, 70000, 43.1206];


  sampleUsers = [
    {
      userId: 4838,
      userInfo: {
        firstName: 'Jonathan',
        lastName: 'Johansen',
        hireDate: '3/14/2007',
        departmentInfo: {
          departmentNumber: 16,
          departmentManager: {
            firstName: 'Martha',
            lastName: 'Washington'
          }
        }
      },
      bytesUsed: 785222468752.24
    },
    {
      userId: 930,
      userInfo: {
        firstName: 'Wendy',
        lastName: 'Witchazel',
        hireDate: '12/16/2012',
        departmentInfo: {
          departmentNumber: 16,
          departmentManager: {
            firstName: 'Martha',
            lastName: 'Washington'
          }
        }
      },
      bytesUsed: 9042548853519752.47
    },
    {
      userId: 2018,
      userInfo: {
        firstName: 'Peter',
        lastName: 'Johnson',
        hireDate: '4/6/1998',
        departmentInfo: {
          departmentNumber: 22,
          departmentManager: {
            firstName: 'Josephine',
            lastName: 'Lawren'
          }
        }
      },
      bytesUsed: 1047716
    },
    {
      userId: 1003,
      userInfo: {
        firstName: 'Cindy',
        lastName: 'Harper',
        hireDate: '2/8/2013',
        departmentInfo: {
          departmentNumber: 22,
          departmentManager: {
            firstName: 'Josephine',
            lastName: 'Lawren',
          }
        }
      },
      bytesUsed: 48246884.61
    },
    {
      userId: 1607,
      userInfo: {
        firstName: 'Cindy',
        lastName: 'Harper',
        hireDate: '6/22/2016',
        departmentInfo: {
          departmentNumber: 22,
          departmentManager: {
            firstName: 'Josephine',
            lastName: 'Lawren'
          }
        }
      },
      bytesUsed: 470122
    },
    {
      userId: 3409,
      userInfo: {
        firstName: 'Indianna',
        lastName: 'Hanover',
        hireDate: '2/22/2000',
        departmentInfo: {
          departmentNumber: 22,
          departmentManager: {
            firstName: 'Josephine',
            lastName: 'Lawren'
          }
        }
      },
      bytesUsed: 19240843.51
    },
    {
      userId: 1512,
      userInfo: {
        firstName: 'Jackson',
        lastName: 'Michaels',
        hireDate: '7/18/2009',
        departmentInfo: {
          departmentNumber: 16,
          departmentManager: {
            firstName: 'Martha',
            lastName: 'Washington'
          }
        }
      },
      bytesUsed: 4573551234.16
    },

  ];








  constructor() { }

  ngOnInit() {
  }

}
