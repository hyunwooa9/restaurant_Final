export function ListContorl (id) {    
    var items = [];
    this.id = id;
    
    this.add = function (item) {
        items.push(item);
        this.render();
    }

    this.remove = function (item) {
        items.splice(items.indexOf(item), 1);
        this.render();
    }
    
    this.getlist = function() {
        return items;
    }
}

ListContorl.prototype.render = function() {

    var list = this;

    var mealEl = document.getElementById(list.id);

    mealEl.innerHTML = "";
    list.getlist().forEach(function (item) {
        var liEl = document.createElement("li");
        liEl.textContent = item.name;
        mealEl.append(liEl);
    });
}
