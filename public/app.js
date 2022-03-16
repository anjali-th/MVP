let log; 
let logContainer;

const divContainer = $('.form-container')
const menuContainer = $('.menu-container')
const account = $('.account')
const add = $('.add')
const history = $('.history');
const historyInput = $("#his");
const btn = $("#btn");


// log your workout button
const login = $('#login');


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

login.on('click',(e)=>{
    account.hide();
    add.show();
});

function createLog(){

    const info = log;
    console.log(info);
    history.hide();
    
    logContainer = $('<div></div>');
    logContainer.addClass('logbox');
    logContainer.appendTo(divContainer);

    const newlogdiv = $('<div></div>')
    newlogdiv.addClass('loghead')
    newlogdiv.html(`
    <span>DATE</span>
    <span>DESCRIPTION</span>
    <span>DURATION</span>`);
    newlogdiv.appendTo(logContainer);

    const loglist = $('<div></div>');
    loglist.addClass('loglist');
    loglist.insertAfter(newlogdiv);

    const ul = $('<ul style="list-style-type:none;"></ul>');
    ul.appendTo(loglist);
    
    for ( var index = 0; index<info.length; index++){

        if (info[index].appusers_id == historyInput.val()){
            $(`<li>
            <span>${log[index].date}</span>
            <span>${log[index].workout_name}</span>
            <span>${log[index].duration}mins.</span>
            </li>`).appendTo(ul);
        }
    };
};
    