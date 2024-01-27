import { Component } from '@angular/core';
import { v4 as uuid4 } from 'uuid';



@Component({
  selector: 'app-add-templates',

  templateUrl: './add-templates.component.html',
  styleUrls: ['./add-templates.component.scss']
})
export class AddTemplatesComponent {
  pageStructure = {
    mainSections: [] as {
      subSections: any;
      id: string;
      name: string;
    }[],
  };



  AddMainSection() {
    const id = uuid4();
    const sectionObj = {
      id,
      name: 'section 1',
      subSections: [] as {}[]
    };
    this.pageStructure.mainSections.push(sectionObj);
  }

  addSubSection(sectionId: string) {
    const id = uuid4();
    const subSectionObj = {
      id,
      name: 'sub section 1',
      fields: [] as {}[]
    };
    const sectionIndex = this.pageStructure.mainSections.findIndex(
      (section) => section.id === sectionId
    );
    this.pageStructure.mainSections[sectionIndex].subSections.push(
      subSectionObj
    );
    console.log(this.pageStructure.mainSections[sectionIndex].subSections);

  }


  removeMainSection(sectionId: string) {
    const sectionIndex = this.pageStructure.mainSections.findIndex(
      (section) => section.id === sectionId
    );
    this.pageStructure.mainSections.splice(sectionIndex, 1);
  }


  removeSubSection(sectionId: string, subSectionId: string) {
    const sectionIndex = this.pageStructure.mainSections.findIndex(
      (section) => section.id === sectionId
    );
    const subSectionIndex = this.pageStructure.mainSections[
      sectionIndex
    ].subSections.findIndex((subSection: { id: string; }) => subSection.id === subSectionId);
    this.pageStructure.mainSections[sectionIndex].subSections.splice(
      subSectionIndex,
      1
    );
  }

  exportPageStructure() {
    console.log(this.pageStructure);
  }
}
