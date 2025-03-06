$(document).ready(function(){ //so whatever we write, it only executes after the page fully loads.
    let addButton = $('.add-button');
    let field = $('.add-field');
    let tasks = $('.tasks');
    

    //add task
    addButton.on('click', function(){
        let elem = `<li class="task">
                    <div class="task-checked col-1">
                        <input type="checkbox">
                    </div>
                    <div class="task-text col-2">${field.val()}</div>
                    <div class="task-remove col-3"></div>
                </li>`;
        //${field.val()}--> it will take the value of what was put into the field input.
        tasks.append(elem); //element added to the tasks class
        field.val(''); //so the field clear after we added the task
    })


    //remove task
   
    //add one more parameter --> the selector for the element itself that
    //we need to find when the click happens --> '.task-remove'
    tasks.on('click','.task-remove', function(){
        $(this).parent().remove();
    })
    /*EVENT DELEGATION
    So when we click on tasks (any of the ones within the ul), we
    look inside for task-remove, the specific one that was clicked.
    And then to that specific element, we add the event handler.*/


    //crossing out the tasks if they're checked or uncrossing them if they're unchecked.
    tasks.on('change', '.task-checked input', function(){
    //(CSS) we're going to add a class to the <div class="task-text col-2">text</div> --> class called checked.
        $(this).parent().next().toggleClass('checked');
        /*we find the parent element for our checkbox input,
        and then since task-text is the next element that follows, we just add next()*/
    })

    
    //changing the order of the tasks --> https://jqueryui.com/sortable/  
    //--> view source, copy script to html and write sortable() function in the script
    $('#sortable').sortable();

})

