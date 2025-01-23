function TodoApp() {
    var self = this;

    self.newTask = ko.observable('');
    self.tasks = ko.observableArray([]);

    self.addTask = function() {
        if (self.newTask().trim() !== '') {
            self.tasks.push({
                name: self.newTask(),
                isCompleted: ko.observable(false)
            });
            self.newTask('');
        }
    };

    self.removeTask = function(task) {
        self.tasks.remove(task);
    };
}

ko.applyBindings(new TodoApp());
