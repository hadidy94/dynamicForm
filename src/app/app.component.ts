import { Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from './pdf.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicForm';

  arr = Array.from({length: 5}, (_, i) => i + 1);
  showContentForPdf: boolean = true;

  constructor(private pdfService: PdfService) {}

  @ViewChild('pdfContent')
  pdfContent!: ElementRef;

  @ViewChild('header')
  header!: ElementRef;
  @ViewChild('footer')
  footer!: ElementRef;


  generatePDF() {
    this.showContentForPdf = true;

    setTimeout(() => {
      const content = this.pdfContent.nativeElement;
      this.pdfService.generatePdf2(
        content,
        this.header.nativeElement,
        this.footer.nativeElement,
        'license'
      );
    }, 200);
  }


}
