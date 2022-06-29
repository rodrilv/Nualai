import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [FilterPipe, DatePipe],
  exports: [FilterPipe, DatePipe],
})
export class PipesModule {}
