const name = "jay",
    age = 25,
    gender = "male";

const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

export {};  // 오류 고치는 ts만의 규칙