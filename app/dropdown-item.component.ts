import { Component, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'dropdown-item',
    template: `
        <style>
            .dropdown-item {
                line-height: 20px;
                height: 30px;
                box-sizing: border-box;
                display: block;
                padding: 5px 5px;
                position:relative;
                transition: all 0.3s;
            }
            .dropdown-item:hover {
                background: #303947 !important;
                color: white;
            }
            :host.selected .dropdown-item {
                background: #495f82;
                color: white;
            }
            .extra {
                position: absolute;
                background: #303947;
                color: white;
                font-size: 11px;
                width: 200px;
                border-radius: 5px;
                padding: 5px;
                opacity: 0;
                visibility: hidden;
                line-height: 16px;
                bottom: 5px;
                left: 40px;
                box-sizing: border-box;
                pointer-events: none;
                transition: all 0.3s;
            }
            .extra:after{
                content: " ";
                border-top: 5px solid #303947;
                border-left: 5px solid transparent;
                position: absolute;
                border-right: 5px solid transparent;
                left: 90px;
                bottom: -4px;
            }
            .extra > * {
                padding: 5px 10px;
            }
            .extra-wrapper{
                position: fixed;
            }
            .dropdown-item:hover .extra{
                opacity: 1;
                visibility: visible;
            }
        </style>
    	<li class="dropdown-item" (mouseenter)="onEnter()" (mouseleave)="onLeave()">
    		<div class="label">{{item.label}}</div>
            <div class="extra-wrapper"
                [style.top]="fixedTop"
                [style.left]="fixedLeft"
            >
        		<div class="extra">
                    <div class="driver" *ngIf="item.driver">
                        <div><b>DRIVER</b></div>
                        <div>{{item.driver.name}}</div>
                        <div>{{item.driver.phone}}</div>
                    </div>
                    <div class="vehicle" *ngIf="item.vehicle">
                        <div><b>VEHICLE</b></div>
                        <div>{{item.vehicle.plate}}</div>
                        <div>{{item.vehicle.branch}}</div>
                    </div>
                </div>
            </div>
    	</li>
    `
})
export class DropdownItemComponent {
	@Input() item: Object;
    label: string;
    fixedTop: Number;
    fixedLeft: Number;

    constructor(public element: ElementRef){}

    updateTooltipPosition() {
        ["Left","Top"].forEach( dir => {
            var e = this.element.nativeElement.querySelector('li');
            var offset = 0;
            var propName = 'offset'+dir;
            do {
                if ( !isNaN( e[propName] ) ) offset += e[propName];
            } while( e = e.offsetParent );

            var scroll = this.element.nativeElement.parentElement.parentElement['scroll' + dir];
            var realOffset = offset - scroll;

            this['fixed'+dir] = realOffset;
        });
    }

	onEnter() {
        this.updateTooltipPosition();
    }

    onLeave() {

    }
}
