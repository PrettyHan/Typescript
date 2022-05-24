abstract class Animal {
    protected name: string
  
    constructor(name: string) {
      this.name = name
    }
  
    abstract makeSound(): void
  }
  
  class Dog extends Animal {
    // constructor
      constructor(name : string) {
          super(name);
      }
    // 추상메소드 makeSound()
    // makeSound() 메소드
    makeSound(): void {
      console.log(this.name + " 멍멍!!")
    }
  }
  
  // 클래스 name필드에 값 "진돗개"
  const dog = new Dog("진돗개")
  dog.makeSound() // 진돗개 멍멍!!
  