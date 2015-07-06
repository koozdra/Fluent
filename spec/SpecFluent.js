describe("Fluent object properties",function(){
    
    
    it("should be available in the constructor", function(){
        function A(){
            // this.myProperty should be available in the constructor
            expect(this.myProperty).toBeDefined();
            
            // this.myProperty should be a function
            expect(this.myProperty).toEqual(jasmine.any(Function));
            
            expect(this.myProperty(42).myProperty()).toBe(42);
        }
        Fluent.object(A).addProperty('myProperty');
        new A();
    });
    
    it("should be available in internal methods", function(){
        function A(){
            this.doSomething = function(){
                // this.myProperty should be available in the constructor
                expect(this.myProperty).toBeDefined();

                // this.myProperty should be a function
                expect(this.myProperty).toEqual(jasmine.any(Function));
                
                expect(this.myProperty(42).myProperty()).toBe(42);
            }
        }
        Fluent.object(A).addProperty('myProperty');

        new A().doSomething();
    });
    
    it("should be avialable in prototype defined methods", function(){
        function A(){}
        Fluent.object(A).addProperty('myProperty');
        A.prototype.doSomething = function(){
            // this.myProperty should be available in the constructor
            expect(this.myProperty).toBeDefined();

            // this.myProperty should be a function
            expect(this.myProperty).toEqual(jasmine.any(Function));

            expect(this.myProperty(42).myProperty()).toBe(42);
        }
        new A().doSomething();
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
    
    
    
});