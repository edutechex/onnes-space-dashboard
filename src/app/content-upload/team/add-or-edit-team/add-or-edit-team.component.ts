import { Component, Inject, Injectable, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { addTeam, editTeam } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-add-or-edit-team',
  templateUrl: './add-or-edit-team.component.html',
  styleUrls: ['./add-or-edit-team.component.css']
})
export class AddOrEditTeamComponent implements OnInit{
  addEditTeamItemForm: any = FormGroup;
  success : boolean = false;
  err : boolean = false;

  @ViewChild('successMsg') successDialog = {} as TemplateRef<any>;

  constructor(
    public appService : AppService,
    public fb : FormBuilder,
    public dialog : MatDialog,
    public dialogRef : MatDialogRef<AddOrEditTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public datas : any,
  ){
    this.addEditTeamItemForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      designation: new FormControl('',[Validators.required]),
      about: new FormControl('',[Validators.required]),
    })
  }
  ngOnInit(): void {
    this.addEditTeamItemForm.patchValue(this.datas);
  }

  addeditTeamItem(){
    if(this.addEditTeamItemForm.valid){
      if(this.datas){
        const editTeamData : editTeam = {
          id : this.datas.id,
          name : this.addEditTeamItemForm.controls['name'].value,
          designation : this.addEditTeamItemForm.controls['designation'].value,
          about : this.addEditTeamItemForm.controls['about'].value,
        }
        this.editTeamForm(editTeamData);
      }else{
        const addTeamdata : addTeam = {
          name : this.addEditTeamItemForm.controls['name'].value,
          designation : this.addEditTeamItemForm.controls['designation'].value,
          about : this.addEditTeamItemForm.controls['about'].value,
        }
        this.addteamForm(addTeamdata);
      }
    }
  }

  addteamForm(data:any){
    this.appService.addTeam(data).subscribe({
      next:(res)=>{
        this.closeModal();
        this.success = true;
        this.err = false;
        this.successMsgDialog('Added Successfully');
        this.appService.openSection('team');
      },
      error:(err)=>{
        this.success = false;
        this.err = true;
        this.successMsgDialog(err.message);
      }
    })
  }

  editTeamForm(data:any){
    this.appService.updateTeam(data).subscribe({
      next:(res)=>{
        this.closeModal();
        this.success = true;
        this.err = false;
        this.successMsgDialog('Updated Successfully');
        this.appService.openSection('team');
      },
      error:(err)=>{
        this.success = false;
        this.err = true;
        this.successMsgDialog(err.message);
      }
    })
  }


  closeModal(){
    this.dialogRef.close();
  }

  successMsgDialog(msg:any){
    this.appService.httpClientMsg = msg;
    const timeout = 750;
    const dialogRef = this.dialog.open(this.successDialog, {
      width: 'auto',
    });
    dialogRef.afterOpened().subscribe((_) => {
      setTimeout(() => {
        dialogRef.close();
        // this.appService.openSection('navItem');
      }, timeout);
    });
  }


}
