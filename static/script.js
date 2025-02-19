document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const urgentCheck = document.getElementById('urgent-check');
    const importantCheck = document.getElementById('important-check');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText, urgentCheck.checked, importantCheck.checked);
            taskInput.value = '';
            urgentCheck.checked = false;
            importantCheck.checked = false;
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.closest('li')) {
            const li = e.target.closest('li');
            if (e.target.checked) {
                moveToCompleted(li);
            } else {
                moveBackToQuadrant(li);
            }
        }
    });
});

function addTask(text, isUrgent, isImportant) {
    const quadrant = determineQuadrant(isUrgent, isImportant);
    const list = document.getElementById(quadrant);
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <div>
            <input type="checkbox" class="complete-check">
            <small>${getPriorityLabel(isUrgent, isImportant)}</small>
        </div>
    `;
   
    list.insertBefore(li, list.firstChild);
}

function moveToCompleted(li) {
    const completedList = document.getElementById('completed-list');
    li.classList.add('completed');
    completedList.appendChild(li);
}

function moveBackToQuadrant(li) {
    li.classList.remove('completed');
    const priority = li.querySelector('small').textContent;
    const quadrant = getQuadrantFromPriority(priority);
    document.getElementById(quadrant).appendChild(li);
}

function getQuadrantFromPriority(priority) {
    switch(priority) {
        case 'Do First': return 'do-first';
        case 'Schedule': return 'schedule';
        case 'Delegate': return 'delegate';
        case 'Eliminate': return 'eliminate';
        default: return 'eliminate';
    }
}

function determineQuadrant(urgent, important) {
    if (urgent && important) return 'do-first';
    if (important && !urgent) return 'schedule';
    if (urgent && !important) return 'delegate';
    return 'eliminate';
}

function getPriorityLabel(urgent, important) {
    if (urgent && important) return 'Do First';
    if (important) return 'Schedule';
    if (urgent) return 'Delegate';
    return 'Eliminate';
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    btn.style.display = window.scrollY > 100 ? 'block' : 'none';
});

document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});