var moveType = 0;
var moveSpeed = 3000;
var moveWork = false;
var movePause = false;
function imgMove(){
    if (moveWork == false) {
        if (moveType == 0){
            var aWidth = $(".RollDiv > div > a:first").width();
            $(".RollDiv > div").append("<a href=\"" + $(".RollDiv > div > a:first").attr("href")+"\">" + $(".RollDiv > div > a:first").html() + "</a>");
            $(".RollDiv > div > a:first").animate({marginLeft: -aWidth}, {duration: moveSpeed, step: function(){
                if (movePause == true){
                    $(this).stop();
                }
            }, complete: function(){
                $(this).remove();
                imgMove();
            }
        });
    } else {
        var aWidth = $(".RollDiv > div > a:last").width();
        $("<a href=\"" + $(".Rolldiv > div > a:last").attr("href")+"\" style=\"margin-left:-"+aWidth+"px\">"+$(".RollDiv > div > a:last").html()+"</a>").insertBefore(".RollDiv>div>a:first")
        $(".RollDiv > div>a:first").animate({marginLeft:0}, {
            duration: moveSpeed, step: function(){
                if(movePause == true){
                    $(this).stop();
                }
            }, complete: function(){
                $(".RollDiv>div>a:last").remove();
                imgMove();
            }
        });
    }
    }
}
function goMove(){
    if (moveType == 0) {
        imgMove();
    } else {
        $(".RollDiv > div > a:first").animate({marginLeft:0},{duration: moveSpeed, step:function(){
            if (movePause == true){
                $(this).stop();
            }
        }, complete: function(){

            $(".RollDiv > div > a:first").remove();
            imgMove();
        }
    });

    }
}
imgMove();