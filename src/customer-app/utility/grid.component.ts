import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'grid-ui',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    gridColumns: Array<any> = new Array<any>();
    gridData: Array<any> = new Array<any>();

    @Input('grid-columns')
    set setGridColumns(_gridColumns: Array<Object>) {
        this.gridColumns = _gridColumns;
    }
    @Input('grid-data')
    set setGridData(_gridData: Array<Object>) {
        this.gridData = _gridData;
    }
    
    @Output('grid-selected')
    eventEmitter: EventEmitter<Object> = new EventEmitter<Object>();
    
    selectGrid(_selected:Object) {
        this.eventEmitter.emit(_selected);
    }
}