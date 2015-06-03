$(document).ready(function () {
    
    
    
    $("td").click(function () { 
        $(this).toggleClass("highlighted");
    });
    
    $("#run").click(function() {
        var i = 0;
        $("td").each(function(index) {
            if($(this).hasClass("highlighted")) {
                i++;
                life.cells[index] = 1;
            } else {
                life.cells[index] = 0;
            }
        });
        //alert (life.cells);
        alert (life.getNeighbour($("input").val()));
        //alert (life.getNeighbour(92));
        /*
        for (i = 0; i < life.cells.length; i++) {
            if
        }
        */
        
    });
    
});



var life = {
        cellCount : 100,
        rowWidth : 10,
        colHeight : 10,
        cells : new Array (100)
    };
    
    
    life.getNeighbour = function (cellNumString) {
        var cellNum = parseInt(cellNumString, 10);
        var neighbourCount = 0;
        var nText = "";
        //левый сосед
        if(cellNum % this.rowWidth == 0) {
            if(this.cells[cellNum + this.rowWidth - 1] == 1) {neighbourCount ++; nText += "left ";}
        } else {
            if(this.cells[cellNum - 1] == 1) {neighbourCount ++; nText += "left ";}
        }
        
        //правый сосед
        if((cellNum +1)% this.rowWidth == 0) {
            if(this.cells[cellNum - this.rowWidth + 1] == 1) {neighbourCount ++; nText += "right "; }
        } else {
            if(this.cells[cellNum + 1] == 1) {neighbourCount ++; nText += "right ";}
        }
        
        //нижний сосед
        if((cellNum + this.rowWidth) >= this.cellCount) {
            if(this.cells[cellNum % this.rowWidth] == 1) {neighbourCount ++; nText += "lower " ;}
        } else {
            if(this.cells[cellNum + this.rowWidth] == 1) {neighbourCount ++; nText += "lower ";}
        }
        
        //верхний сосед
        if(cellNum - this.rowWidth < 0) {
            if(this.cells[this.cellCount - this.rowWidth + cellNum] == 1) {neighbourCount ++; nText += "upper ";}
        } else {
            if(this.cells[cellNum - this.rowWidth] == 1) {neighbourCount ++; nText += "upper ";}
        }
            return nText;
        };