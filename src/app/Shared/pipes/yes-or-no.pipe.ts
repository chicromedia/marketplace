import { Pipe, PipeTransform } from '@angular/core';
import { YesOrNo } from "../enums/yes-or-no";

@Pipe( {
  name: 'yesOrNo'
} )
export class YesOrNoPipe implements PipeTransform
{

  transform( value: boolean ): unknown
  {
    return value ? YesOrNo.YES : YesOrNo.NO;
  }

}
