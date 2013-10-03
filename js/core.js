var ViewModel = function() {
	var _this = this;
	this.tasks =  ko.observableArray();
    this.taskToAdd = ko.observable("");
    this.addTask = function() {
        if (this.taskToAdd() != "") {
            this.tasks.push({task: this.taskToAdd(), deleteTask: this.deleteTask}); 
            this.taskToAdd("");
        }
    }.bind(this);

    this.deleteTask = function() {
    	_this.tasks.remove(this);
    }

};
 
ko.applyBindings(new ViewModel());