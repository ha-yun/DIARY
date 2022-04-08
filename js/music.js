$(function(){
    var prevBtn = $("#prev");
    var nextBtn = $("#next");
    var MusicDiv = $("#music").children('main').children('section').children('div');
    var MusicMain = $("#music").children('main');

    EventList();

    function ShowMusic(){
        MusicDiv.removeClass();
        $(this).addClass("main_music");
    }

    function NextList(){
        let MusicMainWidth =  parseInt(MusicMain.width());
        let MusicSection = parseInt($("#music").children('main').children('section').width());
        let MusicMainX = MusicMain.css('transform').split(',')[4];
        
        if( MusicMainX == 0){
            MusicMain.css({'transform':'translate('+ -MusicSection+'px,'+0+')'})
        }else if(MusicMainX < 0 && MusicMainX == -(MusicMainWidth-MusicSection*2)){
            MusicMainX = parseFloat(MusicMainX) - parseFloat(MusicSection);
            MusicMain.css({'transform':'translate('+ MusicMainX+'px,'+0+')'})
        }else{
            MusicMain.css({'transform':'translate('+ 0+','+0+')'})}
    }

    function PrevList(){
        let MusicMainWidth =  parseInt(MusicMain.width());
        let MusicSection = parseInt($("#music").children('main').children('section').width());
        let MusicMainX = MusicMain.css('transform').split(',')[4];

        if(MusicMainX == 0){
            MusicMain.css({'transform':'translate('+ -(MusicMainWidth-MusicSection)+'px,'+0+')'});
        }else if(MusicMainX < 0 && MusicMainX == -(MusicMainWidth-MusicSection)){
            MusicMainX = parseInt(MusicMainX) + parseInt(MusicSection);
            MusicMain.css({'transform':'translate('+ MusicMainX+'px,'+0+')'})
        }else{
            MusicMain.css({'transform':'translate('+ 0+','+0+')'})}
    }

    function EventList(){
        MusicDiv.on('click', ShowMusic);
        nextBtn.on('click', NextList);
        prevBtn.on('click', PrevList);
    }
})