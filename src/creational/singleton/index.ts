class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const instanceOne = Singleton.getInstance();
const instanceTwo = Singleton.getInstance();

instanceOne.value = 20;

console.log(instanceOne.value);
console.log(instanceTwo.value);

console.log(instanceOne === instanceTwo);
