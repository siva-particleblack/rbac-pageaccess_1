import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MaskPipe implements PipeTransform {
    transform(value: string, showSsnMask: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaskPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<MaskPipe, "ssnMask">;
}
