# Fluent
A micro library for fluent javascript object properties.

## Usage
```javascirpt
function Circle(){}
Fluent.object(Circle)
    .addProperty(x)
    .addProperty(y)
    .addProperty(r);
```