export function Server(servingTime) {
    this.status = "waiting";
    this.servingTime = servingTime;
}

Server.prototype.isAbailable = function() {
    return this.status === "waiting";
}
Server.prototype.serveAsync = function (menu) {
    var server = this;
    
    server.status = "serving";

    return new Promise(function(resolve) {
        setTimeout(function() {
            server.status = "waiting";
            resolve();
        }, server.servingTime)
    })
}