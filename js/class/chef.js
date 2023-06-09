export function Chef() {
    this.status = "ready"; // cooking    
}

Chef.prototype.isAbailable = function () {
    return this.status === "ready";
}

Chef.prototype.cookAsync = function (menu) {
    var chef = this;

    chef.status = "cooking";

    return new Promise(function(resolve) {
        setTimeout(function(){
            chef.status = "ready";
            resolve();
        }, menu.time);
    });  
}