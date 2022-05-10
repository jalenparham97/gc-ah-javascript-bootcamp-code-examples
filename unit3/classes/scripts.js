class Room {
  available = true;

  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new Room('Sun', 30, 20);
const room2 = new Room('Green', 15, 20, 18);

room2.available = false;

// Room 1
console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.available);
console.log(room1.capacity);
console.log(room1.getArea());
console.log(room1.getPerimeter());

// Room 2
console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.available);
console.log(room2.capacity);
console.log(room2.getArea());
console.log(room2.getPerimeter());
