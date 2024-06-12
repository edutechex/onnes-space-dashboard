import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';
import { AddOrEditInvestorsComponent } from './add-or-edit-investors/add-or-edit-investors.component';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css']
})
export class InvestorsComponent {
  partnerDataSource: any;
  success:boolean = false;
  err:boolean = false;
  dialogRef: any;
  partnerData: any;
  deleteId: any;


  @ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatPaginator) paginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @ViewChild('successMsg') successDialog ={} as TemplateRef<any>;
  @ViewChild('deleteNavConfirm') delteDialog = {} as TemplateRef<any>;

  public displayedColumns = [
    'id',
    'title',
    'image',
    'link',
    'edit/delete',
  ];

  constructor(
    public appService : AppService,
    public dialog : MatDialog
  ){
    this.getInvestors();
    this.partnerDataSource = new MatTableDataSource(this.partnerData);
  }

  getInvestors(){
    this.appService.getInvestors().subscribe({
      next:(res: any)=>{
        this.partnerData = res;
        this.partnerDataSource = new MatTableDataSource(res);
        this.partnerDataSource.paginator = this.paginator;
        this.partnerDataSource.sort = this.sort;
      },
      error:(err) => {
        console.log(err.message);
      }
    });
  }

  deletePartnerItem(){
    this.appService.deleteInvestors(this.deleteId).subscribe({
      next:(res)=>{
        this.closeModal();
        this.success = true;
        this.err = false;
        this.successMsgDialog('Deleted Successfully');
        this.getInvestors();
    },
    error:(err)=>{
      this.success = false;
      this.err = true;
      this.successMsgDialog(err.message);
    }
  });
  this.deleteId = 0;
  }

  openAddPartnerModal(){
    const dialogRef = this.dialog.open(AddOrEditInvestorsComponent,{
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
    });
    dialogRef.afterClosed().subscribe((res)=>{
      this.getInvestors();
    })

  }

  openEditPartnerModal(data: any){
    const dialogRef = this.dialog.open(AddOrEditInvestorsComponent,{
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data
    });
    dialogRef.afterClosed().subscribe((res)=>{
      this.getInvestors();
    })
  }

  openDeletePartnerConfirm(id: number){
    this.deleteId = id;
    const dialogRef = this.dialog.open(this.delteDialog,{
      width:'auto',
    })
  }
  public closeModal() {
    this.dialog.closeAll();
  }

  //Success or error msg dialog after form submissions or performing some actions
  public successMsgDialog(msg: string) {
    this.appService.httpClientMsg = msg;
    const timeout = 1000;
    const dialogRef = this.dialog.open(this.successDialog, {
      width: 'auto',
    });
    dialogRef.afterOpened().subscribe((_) => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }
  
}
