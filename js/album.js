$(function(){
    var SectionList = $("main").children('section');
    var i = 1;


    ScrollAlbum();
    EventList();

    function ScrollAlbum(){
        let MainWidth = $("main").width();
        let AlbumHeight = $("#album").height();
        let SectionHeight = AlbumHeight/SectionList.length;
        let scroll$top = $(window).scrollTop();
        if (scroll$top == 0){
            i=1;
            $("main").css({'transform':'translate('+0+','+0+')'});
        }else if(scroll$top < SectionHeight*i){
            $("main").css({'transform': 'translate('+-MainWidth/AlbumHeight*scroll$top +'px,'+0+')'});
        }else{
            i+=1;
            ScrollAlbum();
        }

    }
    
    function EventList(){
        $(window).on('scroll', ScrollAlbum);
    }

})