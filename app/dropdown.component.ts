import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItemComponent } from './dropdown-item.component';

@Component({
    selector: 'dropdown',
    template: `
        <style>
        .dropdown-wrapper{
            box-sizing: border-box;
            position: relative;
            width: 300px;
            height: 30px;
            line-height: 20px;
            color: #333;
            font-size: 12px;
            z-index: 5;
        }
        .label {
            border: 1px solid #B4B4B4;
            padding: 5px 5px;
            box-sizing: border-box;
            background: #BFCDDC;
            height: 100%;
            position: relative;
        }
        .label.empty{
            background: white;
        }
        .label .caret {
            position: absolute;
            right: 7px;
            top: 5px;
            font-size: 8px;
        }
        .search-input-wrapper {
            line-height: 20px;
            box-sizing: border-box;
            height: 30px;
            position: relative;
        }
        .option-list-wrapper {
            box-sizing: border-box;
            display: none;
            position: absolute;
            top: 29px;
            left: 0;
            width: 100%;
            background: #BFCDDC;
            border: 1px solid #B4B4B4;
            border-top: none;
            height: 150px;
        }
        .option-list-wrapper.show {
            display: block;
        }
        .list-wrapper {
            overflow-y: auto;
            height: 120px;
        }
        .search-input {
            width: 100%;
            height: 100%;
            border: none;
            padding-right: 30px;
            padding-left: 5px;
            font-size: 12px;
            background: #DFE7EF;
            box-sizing: border-box;
        }
        .search-icon {
            position: absolute;
            top: 4px;
            right: 8px;
            font-size: 25px;
            -webkit-transform: rotate(45deg);
               -moz-transform: rotate(45deg);
                 -o-transform: rotate(45deg);
        }
        ul.option-list {
            margin: 0;
            padding: 0;
            list-style: none
        }
        </style>
        <div class="dropdown-wrapper">
            <div class="label" (click)="onLabelClick()" [class.empty]="selectedItem === null && !showList">
                <span *ngIf="selectedItem === null">Select driver / Pair Vehicle</span>
                <span *ngIf="selectedItem !== null">{{selectedItem.label}}</span>
                <span class="caret">╲╱</span>
            </div>

            <div class="option-list-wrapper" [class.show]="showList">
                <div class="search-input-wrapper">
                    <input class="search-input" />
                    <div class="search-icon">&#9906;</div>
                </div>
                <div class="list-wrapper">
                    <ul class="option-list">
                        <dropdown-item *ngFor="let value of values"
                            (click)="selectItem(value)"
                            [item]="value"
                            [class.selected]="value === selectedItem"
                        >
                        </dropdown-item>
                    </ul>
                </div>
            </div>
        </div>
        `,
    directives: [DropdownItemComponent]
})
export class DropdownComponent {
    @Input()
    values: Array<Object>;

    @Output()
    select = new EventEmitter();

    showList: boolean = false;
    selectedItem: Object = null;

    onLabelClick(){
        this.showList = !this.showList;
    }
    selectItem(value) {
        this.selectedItem = value;
        this.select.emit(value);
        this.showList = false;
    }
}
