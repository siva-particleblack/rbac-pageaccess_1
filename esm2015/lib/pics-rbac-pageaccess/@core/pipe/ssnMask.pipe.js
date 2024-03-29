import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MaskPipe {
    transform(value, showSsnMask) {
        if (showSsnMask === true) {
            if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return '***-**-' + String(value).substring(String(value).length - 4);
            }
            else {
                return '';
            }
        }
        else {
            const cleaned = ('' + value).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3];
            }
            else if (String(value).startsWith('*')) {
                return '';
            }
            else if (String(value).match('^d{9}$')) {
                return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
            }
            else {
                return '';
            }
        }
    }
}
MaskPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
MaskPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, name: "ssnMask" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MaskPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'ssnMask' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NuTWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL3BpcGUvc3NuTWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdwRCxNQUFNLE9BQU8sUUFBUTtJQUNuQixTQUFTLENBQUMsS0FBYSxFQUFFLFdBQW9CO1FBQzNDLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtZQUN4QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN4QyxPQUFPLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO2FBQU07WUFDTCxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2RCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEMsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxRyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO0lBQ0gsQ0FBQzs7c0dBekJVLFFBQVE7b0dBQVIsUUFBUTs0RkFBUixRQUFRO2tCQURwQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Nzbk1hc2snIH0pXHJcbmV4cG9ydCBjbGFzcyBNYXNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBzaG93U3NuTWFzazogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICBpZiAoc2hvd1Nzbk1hc2sgPT09IHRydWUpIHtcclxuICAgICAgaWYgKFN0cmluZyh2YWx1ZSkuc3RhcnRzV2l0aCgnKicpKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9IGVsc2UgaWYgKFN0cmluZyh2YWx1ZSkubWF0Y2goJ15kezl9JCcpKSB7XHJcbiAgICAgICAgcmV0dXJuICcqKiotKiotJyArIFN0cmluZyh2YWx1ZSkuc3Vic3RyaW5nKFN0cmluZyh2YWx1ZSkubGVuZ3RoIC0gNCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBjbGVhbmVkID0gKCcnICsgdmFsdWUpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XHJcbiAgICAgIGNvbnN0IG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXihcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICcoJyArIG1hdGNoWzFdICsgJykgJyArIG1hdGNoWzJdICsgJy0nICsgbWF0Y2hbM107XHJcbiAgICAgIH0gZWxzZSBpZiAoU3RyaW5nKHZhbHVlKS5zdGFydHNXaXRoKCcqJykpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gZWxzZSBpZiAoU3RyaW5nKHZhbHVlKS5tYXRjaCgnXmR7OX0kJykpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgU3RyaW5nKHZhbHVlKS5zdWJzdHJpbmcoMCwgMykgKyAnLScgKyBTdHJpbmcodmFsdWUpLnN1YnN0cmluZygzLCA1KSArICctJyArIFN0cmluZyh2YWx1ZSkuc3Vic3RyaW5nKDUsIDkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19