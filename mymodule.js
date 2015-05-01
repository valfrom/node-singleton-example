
var MyModule = function() {
	console.log("init");
};

MyModule.prototype.start = function() {
	console.log("start");
};

var myModule = new MyModule();

module.exports = { MyModule : MyModule, myModule : myModule }