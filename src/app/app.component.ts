import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { IconType } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  get downloadIcon() {
    return IconType.Download;
  }

  downloadCv() {
    window.open('https://drive.google.com/u/0/uc?id=1n8A6Lo3KSHm3e6MkTrr6Ye_swbxedewR&export=download');
  }

  generatePdf(data) {
    html2canvas(data, { allowTaint: false }).then(canvas => {
     const HTML_Width = canvas.width;
     const HTML_Height = canvas.height;
     canvas.getContext('2d');
     const imgData = canvas.toDataURL("image/jpeg", 1.0);
     const pdf = new jsPDF('p', 'px', [HTML_Width, HTML_Width]);
     pdf.addImage(imgData, 'PNG', 0, 0, HTML_Width, HTML_Width);
     pdf.save("CV_Jorge-Branquinho.pdf");
   });
 }
}
