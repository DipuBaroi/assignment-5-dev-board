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

        if(i >= completedButtons.length - 1){
            alert('Congrats!!! You Have Completed All The Current Task')
        }
        
        
        taskAssign.innerText = Number(taskAssign.innerText) - 1;
        taskCompleted.innerText = Number(taskCompleted.innerText) + 1;
        
        const history = document.getElementById('history');

        const taskCard = completedButton.closest('.task-card');
        const cardTitle = taskCard.querySelector('.card-title').innerText;
        

        const p = document.createElement('p');
       
        
        p.innerHTML = `
        you have completed the task <strong>${cardTitle}</strong> At 2:30 PM
        `;

        p.className = 'bg-white font-bold p-4 mt-2 rounded-lg';

        history.appendChild(p)
       
    })
}
// clear history button

const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function(){

    const history = document.getElementById('history');
    history.innerText='';
})


