$(document).ready(function () {
    var life = {
        cellCount : 100,
        rowWidth : 10,
        colHeight : 10,
        cells : new Array (100)
    };
    
    
    life.getNeighbour = function (cellNum, direction) {
        
        
        if(this.cells[cellNum] === 1) {
            return 1;
        }
    };
    
    
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
        alert (life.getNeighbour(2));
        /*
        for (i = 0; i < life.cells.length; i++) {
            if
        }
        */
        
    });
    
});



/*
 * [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]
        
        */
