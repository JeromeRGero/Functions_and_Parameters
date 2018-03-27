printRange(2, 10, 3);

function printRange(start, end, by){
    if(by == null || by == undefined){
        by = 1;
    }

    if(end == null || end == undefined){
        end = start;
        start = 0;
    }

    for(var i = start; i < end; i+=by){
        console.log(i);
    }
}