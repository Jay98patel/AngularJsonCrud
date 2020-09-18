import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AccessFormComponent implements OnInit {
  @Input() public set acce(value: any) {
    if (value) {
      this._acce = {...value};
      this.acceFormGroup.patchValue(value);
    }
  }
  public get acce(): any {
    return this._acce
  }
  @Output() public saveAcce: EventEmitter<any>;
  @Output() public cancel: EventEmitter<any>;
  public acceFormGroup: FormGroup;
  private _acce: any
  constructor(private formBuilder: FormBuilder) { 
    this.saveAcce = new EventEmitter();
    this.cancel = new EventEmitter();

    this.createForm()
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.acceFormGroup.valid) {
      this.saveAcce.emit({...this._acce, ...this.acceFormGroup.getRawValue()});
      console.log(" accessories saved")
    }
  }
  onCancel(){
    this.cancel.emit();
  }

  private createForm() {
    this.acceFormGroup = this.formBuilder.group({
      name: ['', [Validators.required,]],
      description: [''],
      release: ['']
    })
  }
}
