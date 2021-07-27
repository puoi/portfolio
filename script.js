var tasks = [];

$(".addNew").click(function() {
    
    $(tasks).empty();
    
    var task = $(".newToDo").val();
    tasks.push(task);
    
    for(var tee of tasks){
	$(".ToDoList").append('<li>'+tee+'</li>');
}

});
