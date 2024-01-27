import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  @Input() pageStructure: any;
  @Output() addTemplate = new EventEmitter();
  visible: boolean = false;
  mainSections: any[] = [];
  subSections: any[] = [];

  fieldForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fieldForm = this.fb.group({
      mainSection: [null, Validators.required],
      subSection: [null, Validators.required],
      fieldName: [null, Validators.required],
      fieldControl: [null, Validators.required],
      isRequired: [null, Validators.required],
      errorMsg: [null, Validators.required],
    });
  }


  addField() {
    this.visible = true;
    let MainSectionarr: any = [];
    this.pageStructure.mainSections.forEach((element: any) => {
      MainSectionarr.push({
        id: element.id,
        name: element.name,
      });
    });

    this.mainSections = MainSectionarr;
  }

  addSubSection(val: any) {
    const filteredArr = this.pageStructure.mainSections.find(
      (section: any) => section.id === val.value
    )
    let subSectionarr: any = [];
    filteredArr.subSections.forEach((element: any) => {
      console.log(element);
      subSectionarr.push({
        id: element.id,
        name: element.name,
      });
    });

    this.subSections = subSectionarr;
  }

  submitField(){
    console.log(this.fieldForm.value);
    this.addTemplate.emit(this.fieldForm.value);
    this.closeBtn();
  }

  closeBtn(){
    this.visible = false;
    this.fieldForm.reset();
  }
}
