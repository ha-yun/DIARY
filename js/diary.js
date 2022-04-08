$(function(){
    var CreateModalDiv = $("#create_modal");
    var createDiaryBtn = $("#create");
    var closeDiaryBtn = $("#create_modal").children('button');

    var DiaryBtn = $("#diary").children('main').children('section').children('button');
    var DiaryBox = $("#diary_box");
    var closeDiaryBox = $("#diary_box").children('button');
    Eventlist();

    function OpenDiary(){
        DiaryBox.fadeToggle();
        DiaryBox.children('div').removeClass();
        DiaryBox.children('div').addClass($(this).attr('id'));
        DiaryBox.children('span').text($(this).children('.date').text());
        DiaryBox.children('p').text($(this).children('.diary_title').text());
    }
    function CloseDiary(){
        DiaryBox.fadeToggle();
    }

    function CreateModal(){
        CreateModalDiv.fadeIn();
    }
    function CloseModal(){
        CreateModalDiv.fadeOut();
    }

    function Eventlist(){
        createDiaryBtn.on('click', CreateModal);
        closeDiaryBtn.on('click', CloseModal);
        closeDiaryBox.on('click', CloseDiary);
        DiaryBtn.on('click', OpenDiary);
    }
})