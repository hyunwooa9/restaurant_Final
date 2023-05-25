export function WorkerControl (value) {
    var workerlist = value;
    
    this.getlist = function() {
        return workerlist;
    }    
}

WorkerControl.prototype.findworkerAsync = function() {
    var list = this.getlist();
    return new Promise(function (resolve) {        
        function findworker() {
            var availableWorker = list.find(function(worker) {
                return worker.isAbailable();
            });

            if (availableWorker){
                resolve(availableWorker);
            }
            else {
                setTimeout(findworker, 300);
            }
        }    

        findworker();    
    });   
}