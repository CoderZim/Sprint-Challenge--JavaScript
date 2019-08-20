// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(CuboidMakerAttr){
//     this.length = CuboidMakerAttr.length;
//     this.width = CuboidMakerAttr.width;
//     this.height = CuboidMakerAttr.height;
// }

// CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

// const cuboid = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
// })

class CuboidMaker1{
    constructor(CuboidMaker1Attr){
        this.length = CuboidMaker1Attr.length;
        this.width = CuboidMaker1Attr.width;
        this.height = CuboidMaker1Attr.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1 {
    constructor (cubeMakerAttr){
        super(cubeMakerAttr);
    }
    cubeVol(){
        return this.length * this.length * this.length;
    }
    cubeSa(){
        return 6*(this.length * this.length);
    }
}

const cube = new CubeMaker({
    length: 5,
});

console.log (cube.cubeVol()); //125
console.log (cube.cubeSa()); //150