ngapp.service('viewFactory', function(randomService) {
    let viewConstructors = {},
        accessibleViews = {};

    this.registerView = function(viewName, constructor) {
        viewConstructors[viewName] = constructor;
    };

    this.newView = function(viewName, active = false) {
        let view = viewConstructors[viewName]();
        view.id = randomService.generateUniqueId();
        view.active = active;
        return view;
    };
});