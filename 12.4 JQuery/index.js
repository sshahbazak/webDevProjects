
console.log($(document).keypress(function(e){
    var prev = $("h1").html();
    if (prev === "Hello"){
        $("h1").html(e.key);
    }else {
        prev += e.key;
        $("h1").html(prev);
    }
    
}));