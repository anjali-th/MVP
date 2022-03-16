let log; 

const divContainer = $('.form-container')
const menuContainer = $('.menu-container')
const account = $('.account')
const add = $('.add')
const history = $('.history');
const historyInput = $("#his");
const btn = $("#btn");


// log your workout button
const login = $('#login');

login.on('click',(e)=>{
    account.hide();
    add.show();
});

$('#menuHistory').on('click',()=>{
    history.show();
    add.hide();
    account.hide();
})

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
    