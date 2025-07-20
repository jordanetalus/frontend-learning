//fonction pour ajouté de nouvelles tâches 
function addTask() {
const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');


const taskText = taskInput.value.trim();
const priority = priorityInput.value;

//test pour voir si le nom de la tâche a été remplir 
if(taskText === '')
{
    alert('Veillez entrer une tâche!');
    return;
}


const taskList = document.getElementById('taskList');
const li = document.createElement('li');
li.classList.add(priority);
li.innerHTML = `<span>${taskText}</span>`

const completeButton = document.createElement('button');
completeButton.textContent = 'Terminer';
completeButton.onclick = function (){
    li.classList.toggle('completed');
}

const deleteButton = document.createElement('button');
deleteButton.textContent = 'supprimer'
deleteButton.onclick = function () {
    taskList.removeChild(li);
}

li.appendChild(completeButton);
li.appendChild(deleteButton);
taskList.appendChild(li);
taskInput.value = '';


}


// fonction pour filtré l'affichage des tâches 
function filterTasks(filter){
    const tasks = document.querySelectorAll('#taskList li');
    tasks.forEach(task => {
        if(filter === 'all'){
            tasks.style.display = 'flex';
        }else if(filter === 'pending' )   {
             // Afficher uniquement les tâches non terminées
            task.classList.contains('completed')
                ? (task.style.display = 'none') 
                : (task.style.display = 'flex'); 

        }

    })
}