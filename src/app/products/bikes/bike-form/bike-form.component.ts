import { Component, OnInit,Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BikeFormComponent implements OnInit {
  @Input() public set bike(value: any) {
    if (value) {
      this._bike = {...value};
      this.bikeFormGroup.patchValue(value);
    }
  }
  public get bike(): any {
    return this._bike
  }
  @Output() public saveBike: EventEmitter<any>;
  @Output() public cancel: EventEmitter<any>;

  public bikeFormGroup: FormGroup;
  private _bike: any
  constructor(private formBuilder: FormBuilder) { 
    this.saveBike = new EventEmitter();
    this.cancel = new EventEmitter();

    this.createForm()
  }

  ngOnInit(): void {
  }
  onSave() {
    if (this.bikeFormGroup.valid) {
      this.saveBike.emit({...this._bike, ...this.bikeFormGroup.getRawValue()});
      console.log("save")
    }
  }
  onCancel(){
    this.cancel.emit();
  }
  private createForm() {
    this.bikeFormGroup = this.formBuilder.group({
      name: ['', [Validators.required,]],
      description: [''],
      release: ['']
    })
  }

}
