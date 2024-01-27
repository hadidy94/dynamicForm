import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  @Input() pageStructure: any;
  visible: boolean = false;
  mainSections: any[] = [];
  subSections: any[] = [];


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
}
