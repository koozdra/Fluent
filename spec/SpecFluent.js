describe("Fluent object properties",function(){
    
    
    it("should be available in the constructor", function(){
        function A(){
            // this.myProperty should be available in the constructor
            expect(this.myProperty).toBeDefined();
            
            // this.myProperty should be a function
            expect(this.myProperty).toEqual(jasmine.any(Function));

        }
        Fluent.object(A).addProperty('myProperty');
        new A();
    });
    
    it("should be fluent getters and setters", function(){
        function A(){}
        Fluent.object(A).addProperty('myProperty');
        var object = new A();
        
        // this.myProperty(value) setter should return the object itself to be fluent
        expect(object.myProperty("myValue")).toEqual(jasmine.any(A));
        
        // expect the value to match what was set above
        expect(object.myProperty()).toBe("myValue");
        
    });
    
    it("should be capable of batch adding using an array", function(){
        function A(){}
        Fluent.object(A).addProperties(['myProperty','mySecondProperty']);
        var object = new A();
        
        expect(object.myProperty).toBeDefined();
        expect(object.mySecondProperty).toBeDefined();
        
        expect(object.myProperty("myValue").myProperty()).toBe("myValue");
        expect(object.mySecondProperty("mySecondValue").mySecondProperty()).toBe("mySecondValue");
        
    });
    
    // todo: show availability
//    function A(){
//        this.internalFunction = function(){
//            this.test("booyeah");
//            console.log(this.test());
//        }
//    }
//    Fluent.object(A).addProperty('test');
//    
//    var a = new A();
//    a.internalFunction();
    
});