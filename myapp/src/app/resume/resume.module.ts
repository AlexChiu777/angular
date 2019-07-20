import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ResumeRoutingModule } from './resume-routing.module'

import { ResumeComponent } from './resume.component'

import { SummaryComponent } from './summary/summary.component'
import { TechProfComponent } from './tech-prof/tech-prof.component'
import { WorkExpComponent } from './work-exp/work-exp.component'
import { AcadQualComponent } from './acad-qual/acad-qual.component'
import { ReferencesComponent } from './references/references.component'

import { FlexLayoutModule } from  '@angular/flex-layout';

import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ResumeComponent, SummaryComponent, TechProfComponent, WorkExpComponent, AcadQualComponent, ReferencesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
    //ResumeRoutingModule    
  ]
})
export class ResumeModule { }
