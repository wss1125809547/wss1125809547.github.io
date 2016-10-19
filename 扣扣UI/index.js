 var mylevel = 20;

 function refreshlevel(level) {
     var levArray = [];
     while (level / 4 >= 1) {
         var remainder = level % 4;
         levArray.unshift(remainder);
         level = Math.floor(level / 4);



     }
     levArray.unshift(level)
     for (var i = 0; i < levArray.length; i++) {
         var picName;
         switch (levArray.length - i) {
             case 3:
                 picName = "12.jpg"
                 break;
             case 2:
                 picName = "13.jpg"
                 break;
             case 1:
                 picName = "14.jpg"
                 break;

             default:
                 break;
         }
         for (var j = 0; j < levArray[i]; j++) {
             $("<img/>")
                 .attr("src", "img/" + picName)
                 .css("width", "0.8rem")
                 .css("height", "0.8rem")
                 .appendTo($("#self-level"))

         }

     }


 }
 refreshlevel(mylevel)

 function openclose(e) {
     if (e.target.isOpen) {
         $(e.target).nextAll("li")
             .css("display", "none")
         e.target.isOpen = false
     } else {
         $(e.target).nextAll("li")
             .css("display", "block")
         e.target.isOpen = true
     }
 }