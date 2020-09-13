var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("波霸奶茶", "四季春奶青", "港式蛋糕奶茶", "樱花烤奶", "幽兰拿铁", "椰香奶绿", "杨枝甘露", "奈雪宝藏茶", "柠檬芦荟茶", "奥利奥奶茶", "乌龙芝士奶盖", "薄荷奶茶");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#AEA1C6"
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
