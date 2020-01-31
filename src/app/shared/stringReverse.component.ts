import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'stringToReverse'
})

export class ReverseStrPipe implements PipeTransform{
    transform(value: string): string{
        return value.split('').reverse().join('');
    }
}
