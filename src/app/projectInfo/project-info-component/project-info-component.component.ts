import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-project-info-component',
  templateUrl: './project-info-component.component.html',
  styleUrls: ['./project-info-component.component.css']
})
export class ProjectInfoComponentComponent implements AfterViewInit {
  displayedColumns: string[] = ['Date', 'Name'];
    // dataSource = new MatTableDataSource<ReportElement>(ELEMENT_DATA);

    
    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      // this.dataSource.paginator = this.paginator;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
