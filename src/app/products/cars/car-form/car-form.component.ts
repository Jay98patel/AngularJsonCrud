import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CarFormComponent implements OnInit {
  @Input() public set car(value: any) {
    if (value) {
     
      this._car = {...value};
      this.carFormGroup.patchValue(value);
    }
  }
  public get car(): any {
    return this._car
  }

  @Output() public saveCar: EventEmitter<any>;
  @Output() public cancel: EventEmitter<any>;

  public carFormGroup: FormGroup;
  private _car: any
  constructor(private formBuilder: FormBuilder) {
    this.saveCar = new EventEmitter();
    this.cancel = new EventEmitter();

    this.createForm()
  }

  ngOnInit(): void {
  }

  onSave() {
    if (this.carFormGroup.valid) {
      this.saveCar.emit({...this._car, ...this.carFormGroup.getRawValue()});
    }
  }

  onCancel(){
    this.cancel.emit();
  }

  private createForm() {
    this.carFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      release: ['']
    })
  }

}
