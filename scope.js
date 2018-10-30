var a = 1, b = 2, c = 3;

(function firstFunction(){
    var a = 1, b = 8, c = 6;
       
    console.log ("a: "+a+", b: "+b+", c: "+c);
    (function secondFunction(){
        var b = 8;

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();

