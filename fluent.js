
var Fluent = (function () {
    
    
    var api = {};

    function addProperty(object, name) {
        //object.prototype.properties = object.prototype.properties || {};
        object.prototype[name] = function (value) {
            this.properties = this.properties || {};
            if (arguments.length === 0) return this.properties[name];
            this.properties[name] = value; 
            return this;
        }
    }
    
    function addProperties(object, names){
        names.forEach(function(name){addProperty(object, name)})
    }

    api.object = function (object){
        return {
            addProperty: function (name){
                addProperty(object, name);
                return this;
            },
            addProperties: function(names){
                addProperties(object, names)
                return this;
            }
        }
    };


    return api;
}());