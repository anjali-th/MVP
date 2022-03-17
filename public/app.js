let log; 
let logContainer;

const divContainer = $('.form-container')
const menuContainer = $('.menu-container')
const account = $('.account')
const add = $('.add')
const history = $('.history');
const historyInput = $("#his");
const btn = $("#btn");


// POST request on button click, send userid that was generated to user

const signUp = $('.signup');

signUp.on('submit',(e)=>{
    e.preventDefault();

    const data = new FormData(e.target);
    const newUser = {
        username : data.get("username"),
    }

    $.post({
        url: "/new-user",
        data: JSON.stringify(newUser),
        contentType: "application/json",
        success: (res)=>{
            $(`<p id="paraId">Your User-id is ${res.id}</p>`).insertAfter(account);
            
        }, 
    });
})

// post request to log

$('.log').on('submit',(e)=>{
    e.preventDefault();
    
    const data = new FormData(e.target);
    const newLog = {
        date: data.get("date"),
        workoutname: data.get("description"),
        duration: data.get("duration"),
        appusersid: data.get("userId"),
    }

    $.post({
        url: "/log",
        data: JSON.stringify(newLog),
        contentType: "application/json",
        success: (res)=>{
            $(`<p id="paraLog">Your Workout has been logged!</p>`).insertAfter(add);
        }, 
    });
})


// log your workout button
const login = $('#login');

// "log your workout button " on homepage
login.on('click',(e)=>{
    account.hide();
    add.show();
    $('#paraId').hide();
});

// history on menu bar
$('#menuHistory').on('click',()=>{
    history.show();
    add.hide();
    account.hide();
    $('#paraLog').hide();
}) 



// button on history div
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

// create workout history log 

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

        if (info[index].appusersid == historyInput.val()){
            $(`<li>
            <span>${log[index].date}</span>
            <span>${log[index].workoutname}</span>
            <span>${log[index].duration}mins.</span>
            </li>`).appendTo(ul);
        }
    };
};
    