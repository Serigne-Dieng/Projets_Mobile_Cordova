window.onload = function () {
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;
}

function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');

    if (tache.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = tache.value;

        $(newItem).on('swiperight', function () {
            $(this).toggleClass('done');
            
            if ($(this).hasClass('done')) {
                taskListDone.appendChild(this);
            } else {
                taskList.appendChild(this);
            }

            $(taskList).listview('refresh');
            $(taskListDone).listview('refresh');
        });

        $(newItem).on('swipeleft', function () {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });

        taskList.appendChild(newItem);

        $(taskList).listview('refresh');

        tache.value = '';
    }
}

function reinitialiserTache() {
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone'); 

    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
}