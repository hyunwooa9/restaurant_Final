import { Chef } from "./js/class/chef.js";
import { Server } from "./js/class/server.js";
import { Menu } from "./js/class/menu.js";
import { ListContorl } from "./js/Controller/listcontrol.js";
import { WorkerControl } from "./js/Controller/workercontrol.js";

var ordercontrol = new ListContorl("orders");
var cookingcontrol = new ListContorl("cooking");
var servingcontrol = new ListContorl("serving");

var chefscontrol = new WorkerControl([new Chef(), new Chef()]);
var serverscontrol = new WorkerControl([new Server(1000), new Server(2000)]);

function onClickSave() {
    alert("테스트 성공");
}

Widget.button("btnSave", { label: "입력", onClick: onClickSave });

document.getElementById("sundea").onclick = function () {    
    run(new Menu("순대국", 1000));
}
document.getElementById("heajang").onclick = function () {
    run(new Menu("해장국", 2000));
}


function run(menu) {
    ordercontrol.add(menu);

    chefscontrol.findworkerAsync()
    .then(function(chef) {
        ordercontrol.remove(menu);
        cookingcontrol.add(menu);
        
        return chef.cookAsync(menu);        
    })
    .then(function () {
        cookingcontrol.remove(menu);

        return serverscontrol.findworkerAsync();
    })
    .then(function(server) {
        servingcontrol.add(menu);

        return server.serveAsync(menu);
    })
    .then(function() {
        servingcontrol.remove(menu);
    });
}