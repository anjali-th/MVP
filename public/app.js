let log; 

const divContainer = $('.form-container')
const menuContainer = $('.menu-container')
const historyInput = $("#his");
const btn = $("#btn");

btn.on('click', (e)=>{
    e.preventDefault();
    getInfo();
});

const getInfo = function(){
    $.get('/history', (data)=>{
        log = data;
        createLog(log);
    });
}

function createLog(){

    divContainer.hide();

    const logContainer = $('<div></div>');
    logContainer.addClass('log');
    logContainer.insertAfter(menuContainer);
    console.log(log)

    for ( var index = 0; index<log.length; index++){
        if (log[index].appusers_id == historyInput.val()){
            $(`<div class = 'log-items'>${log[index].date}</div>`).appendTo(logContainer);
            $(`<div class = 'log-items'>${log[index].workout_name}</div>`).appendTo(logContainer);
            $(`<div class = 'log-items'>${log[index].duration}</div>`).appendTo(logContainer);
            $('<br>')
        };
    };
};
    