# Fluent
A micro library for fluent javascript object properties.  Allows you to easily create fluent chained setters and getters for simple properties.

The idea is to not have to define every getter and setter to get fluent code like this:
```javascirpt
obj.prop1("someValue").prop2("someOtherValue").doSomething();
```
Just declare that obj has properties prop1 and prop2 and its all handled for you.


## Adding Properties
Fluent is initialized with an object.  Then properties can be added one at a time.
```javascirpt
function Circle(){}
Fluent.object(Circle)
    .addProperty(x)
    .addProperty(y)
    .addProperty(r);
```

Fluent can also take an array of properties.
```javascirpt
function Circle(){}
Fluent.object(Circle)
    .addProperties(['x','y','r'])
```

## Usage
Can be used as partial constructors.
```javascirpt
var circle = new Circle().x(10).y(10).r(10);
var circle = new Circle().x(10).y(10);
var circle = new Circle().x(10);
```

Consider if Circle has a draw function.
```javascirpt
var circle = new Circle();
circle.x(10).y(10).r(10).draw();
```

Define common parameters between objects.
```javascirpt
var positioned = ['x','y'];
var dimensioned = ['width','height'];

function Circle(){}
Fluent.object(Circle)
    .addProperties(positioned)
    .addProperty('r');
    
function Rectangle(){}
Fluent.object(Rectangle)
    .addProperties(positioned)
    .addProperties(dimensioned);

var circle = new Circle().x(10).y(20).r(10);
var rectangle = new Rectangle().x(10).y(20).width(10).height(20);
```

## Availability
Fluent attributes are available in the constructor of the object.
```javascirpt
function A(){
    this.test(42).test(); // === 42
}
Fluent.object(A).addProperty('test');
```

They are available in internal method definitions.
```javascirpt
function A(){
    this.doSomething = function(){
        this.test(42).test(); // === 42
    }
}
Fluent.object(A).addProperty('test');
```

They are available in prototype object extensions.
```javascirpt
function A(){}
Fluent.object(A).addProperty('test');
A.prototype.doSomething = function(){
    this.test(42).test(); // === 42
}
```


## Jasmine Tests
Jasmine tests available in the jasmine folder.  Run SpecRunner.html.


