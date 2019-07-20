import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  
})
export class ResumeComponent implements OnInit {
  public showSummary: boolean = true;
  public showTechProf: boolean = false;
  public showWorkExp: boolean = false;
  public showAcadQual: boolean = false;
  public  showReference: boolean = false;

  constructor() { 
  }
  

  ngOnInit() {
  }

  toggle(test: String) {
    if (test == 'Summary') {
      this.showSummary = true;
      this.showTechProf = false;
      this.showWorkExp = false;
      this.showAcadQual = false;
      this.showReference = false;
    } else if (test == 'TechProf') {
      this.showSummary = false;
      this.showTechProf = true;
      this.showWorkExp = false;
      this.showAcadQual = false;
      this.showReference = false;
    } else if (test == 'WorkExp') {
      this.showSummary = false;
      this.showTechProf = false;
      this.showWorkExp = true;
      this.showAcadQual = false;
      this.showReference = false;
    } else if (test == 'AcadQual') {
      this.showSummary = false;
      this.showTechProf = false;
      this.showWorkExp = false;
      this.showAcadQual = true;
      this.showReference = false;
    } else if (test == 'Ref') {
      this.showSummary = false;
      this.showTechProf = false;
      this.showWorkExp = false;
      this.showAcadQual = false;
      this.showReference = true;
    } 
  }

}

