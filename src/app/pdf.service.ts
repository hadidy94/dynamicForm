import { Injectable } from '@angular/core';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import * as jsPDF from 'jspdf';

import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  watermark = 'assets/images/watermark.png';


  constructor() {}

  async generatePdf2(
    element: HTMLElement,
    header: HTMLElement,
    footer: HTMLElement,
    filename: string
  ) {
    const options = {
      margin: [160, 15, 70, 15],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
      // jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all' },
      // watermark: null,
      watermark: { url: 'assets/images/watermark.png', opacity: 0.8, scale: 0.8 },
    };

    const headerImage = await this.convertToImage(header);
    const footerImage = await this.convertToImage(footer);

    const container = document.createElement('div');
    container.appendChild(element.cloneNode(true));

    html2pdf()
      .from(container)
      .set(options)
      .toPdf()
      .get('pdf')
      .then((pdf: any) => {
        const totalPages = pdf.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);

          const pdfWidth = pdf.internal.pageSize.width;
          const pdfHeight = pdf.internal.pageSize.height;

          // Add header
          const headerMargin = 20;
          const doubleHeader = headerMargin * 2; // Adjust margin as needed
          const headerWidth = pdfWidth - doubleHeader;
          const headerHeight = (header.offsetHeight * headerWidth) / header.offsetWidth;
          pdf.addImage(headerImage, 'JPEG', headerMargin, headerMargin, headerWidth, headerHeight);

          const footerMargin = 20; // Adjust margin as needed
          const doubleFooter = footerMargin * 2;
          const footerWidth = pdfWidth - doubleFooter;
          const footerHeight = (footer.offsetHeight * footerWidth) / footer.offsetWidth;

          pdf.addImage(
            footerImage,
            'JPEG',
            footerMargin,
            pdfHeight - footerHeight - footerMargin,
            footerWidth,
            footerHeight
          );
        }

        pdf.save();
      });
  }

  convertToImage(element: HTMLElement): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      html2canvas(element).then(canvas => {
        const image = new Image();
        image.src = canvas.toDataURL('image/jpeg');
        image.onload = () => resolve(image);
        image.onerror = error => reject(error);
      });
    });
  }


}
