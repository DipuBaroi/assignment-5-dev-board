const completedButtons = document.querySelectorAll('.completed-btn');
const taskAssign = document.getElementById('task-assign');
const taskCompleted = document.getElementById('task-completed')

const theme = document.getElementById('theme-btn');

theme.addEventListener('click', function(){
    document.getElementById('body').classList = 'bg-yellow-300'
})


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
const clearHistoryBtn = document.getElementById('clear-history-btn');
clearHistoryBtn.addEventListener('click', function(){

    const history = document.getElementById('history');
    history.innerText='';
})


