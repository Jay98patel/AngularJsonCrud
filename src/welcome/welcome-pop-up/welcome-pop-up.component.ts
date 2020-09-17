import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-welcome-pop-up',
  templateUrl: './welcome-pop-up.component.html',
  styleUrls: ['./welcome-pop-up.component.scss']
})
export class WelcomePopUpComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<WelcomePopUpComponent>) { }

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.onclose()
     }, 3000);

  }
  onclose(){
    this.dialogRef.close();
  }

}
