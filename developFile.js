function Animal(name, sound, age, region) {      
  this.name = name;
  this.sound = sound;
  this.age = age;
  this.region = region;
}

Animal.prototype.say = function() {
    console.log(this.name + " " + this.sound);
}
var animal = new Animal();  

function Dog() {
    Animal.apply(this, arguments);    
}
// Прототипное наследование через функцию-конструктор
Dog.prototype = animal;
    
// Наследование через конструкцию Object.create()
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.goAway = function() {
    console.log("go away");
}
    
function Cat() {
    Animal.apply(this, arguments);
}
// Прототипное наследование через функцию-конструктор
Cat.prototype = animal;

// Наследование через конструкцию Object.create()
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.goAway = function() {
    console.log("go away");
}
    
function Woodpecker() {
    Animal.apply(this, arguments);
}
// Прототипное наследование через функцию-конструктор
Woodpecker.prototype = animal;

// Наследование через конструкцию Object.create()
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway = function() {
     console.log("go away");
}
    
var dog = new Dog("Dog", "bark-bark");
var cat = new Cat("Cat", "meow-meow");   
var woodpecker = new Woodpecker("Woodpecker", "pecking-sound");    

dog.say();
cat.say();
woodpecker.say();

function getTypep(obj) {
    if ('goAway' in obj) {
		console.log(obj.constructor.name);      
    } else {
  		console.log(obj.constructor.name);
    }
}
    
getTypep(dog);
getTypep(cat);
getTypep(woodpecker); 