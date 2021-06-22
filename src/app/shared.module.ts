import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { SortPipe}         from './sort.pipe';
import {SearchPipe}    from './search.pipe'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ SortPipe, SearchPipe ],
  exports:      [ SortPipe, SearchPipe ]
})
export class SharedModule { }
