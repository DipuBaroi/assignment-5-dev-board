const completedButtons = document.querySelectorAll('.completed-btn');
const taskAssign = document.getElementById('task-assign');
const taskCompleted = document.getElementById('task-completed')

// theme button

const bgColors = ['#f78a73', '#f7dd73', '#cdf773', '#73f7ad', '#a0f5fc', '#d2c0fa']
let bgColor = 0;

const themeButton = document.getElementById('theme-btn');

themeButton.addEventListener('click', function(){
    document.body.style.backgroundColor = bgColors[bgColor];
    bgColor++;
    if(bgColor >= bgColors.length){
        bgColor = 0;
    }
})

// current date

const today = new Date();
document.getElementById('current-date').innerText = today.toDateString();
// completed button

for(let i=0; i<completedButtons.length; i++){
    const completedButton = completedButtons[i];
    completedButton.addEventListener('click', function(){
        completedButton.disabled = true;
        alert('Board Updated Successfully');
        
        taskAssign.innerText = Number(taskAssign.innerText) - 1;
        taskCompleted.innerText = Number(taskCompleted.innerText) + 1;
        
        const history = document.getElementById('history');
        const p = document.createElement('p');
        const cardTitles = document.querySelectorAll('.card-title')

        for(let i = 0; i < cardTitles.length; i++){
            console.log(cardTitles[i]);
        }
        p.innerText = 'you have completed the task Fix mobile button Issue At 2:30 PM';

        p.className = 'bg-white font-semibold p-4 mt-2 rounded-lg'

        history.appendChild(p)
        
        
    })
}
// clear history button

const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function(){

    const history = document.getElementById('history');
    history.innerText='';
})


