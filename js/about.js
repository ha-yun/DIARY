$(function(){
    var SectionList = $(".about_content").children('section');
    var i = 1;

    var $btn1 = $("nav").children('#btn_1');
    var $btn2 = $("nav").children('#btn_2');
    var $btn3 = $("nav").children('#btn_3');
    var $btn4 = $("nav").children('#btn_4');

    Scroll();
    EventList();

    function Scroll(){
        let content = $(".about_content").width();
        let AboutHeight = $("#about").height();
        let SectionHeight = AboutHeight/SectionList.length;
        let scroll$top = $(window).scrollTop();
        // 가로스크롤
        if (scroll$top==0){
            i = 1;
            $(".about_content").css({'transform':'translate('+ 0+'px,'+0+')'});
            $("nav").children('button').css({'background-color':'transparent'});
            $("nav").children('button').eq(0).css({'background-color':'salmon'});
        }else if(scroll$top < SectionHeight*i){
            $(".about_content").css({'transform':'translate('+ -content/AboutHeight*scroll$top +'px,'+0+')'});
        }else{
            i+=1;
            Scroll();}
        // nav
        if (SectionHeight*1 <= scroll$top && scroll$top < SectionHeight*2){
            $("nav").children('button').css({'background-color':'transparent'});
            $btn2.css({'background-color':'salmon'});
        }
        else if(SectionHeight*2 <= scroll$top && scroll$top < SectionHeight*3){
            $("nav").children('button').css({'background-color':'transparent'});
            $btn3.css({'background-color':'salmon'});
        }
        else if(SectionHeight*3 <= scroll$top && scroll$top < SectionHeight*4){
            $("nav").children('button').css({'background-color':'transparent'});
            $btn4.css({'background-color':'salmon'});}
    }

    function navBtn(number){
        let AboutHeight = $("#about").height();
        let SectionHeight = AboutHeight/SectionList.length;
        $(window).scrollTop(SectionHeight*number);
    }

    function EventList(){
        $btn1.on('click',navBtn.bind(null,0));
        $btn2.on('click',navBtn.bind(null,1));
        $btn3.on('click',navBtn.bind(null,2));
        $btn4.on('click',navBtn.bind(null,3));
        $(window).on('scroll',Scroll);
    }
})
