import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DropdownComponent } from './dropdown.component'

@Component({
    selector: 'my-app',
    template: `<div>
        <h1>Dropdown demo</h1>
        <dropdown [values]="list" (select)="onSelect($event)"></dropdown>
    </div>`,
    directives: [DropdownComponent],
})
export class AppComponent {
    private list = [];

    constructor (private http: Http) {}

    ngAfterViewInit() {
        this.http.get('/data.json').subscribe( (res: Response) => {
            const data = res.json();
            this.list = data.items;
        })
    }

    onSelect(selectedValue: string) {
        console.log('selected', selectedValue);
    }
}
