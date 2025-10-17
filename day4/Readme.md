# JS 기초 문제 
#### 변수

**1.** 다음 중 재할당이 불가능한 선언은?

A) `var a = 1`  B) `let a = 1`  C) `const a = 1`

답 : C

***

** 2.** 아래 코드의 출력결과는?
```js
console.log(x);
var x = 10;
```
답: undefined;

***

**3.** 아래 코드에서 에러가 나는 줄은? 이유는? 

```jsx
1 console.log(y);
2 let y = 3;
```
답 : let은 변수 선언 전 참조가 불가능

***

**4.** `const obj = { n: 1 };`   

    obj 객체의 속성 n 의 값을 2로 변경하세요. 

답: obj.n = 2;

***

**5.** 다음 중 올바른 식별자(변수명)가 아닌 것은?

A) `_count` B) `$value` C) `2nd` D) `camelCase`

답: C

***

**6.** 다음 코드의 결과?

```jsx
let a = 1;
a = a + 2;
console.log(a);
```
답: 3

***

#### 문자열

**7.** 템플릿 리터럴로 “Hello, JS!”를 만들 올바른 코드는?

A) `'Hello, ${"JS"}!'` B) ``Hello, ${"JS"}!`` C) `"Hello, ${"JS"}!"`
답: C

**8.** `"abc".length` 값은?
답: 3

**9.** `"Hello".toLowerCase()` 결과는?
답: hello

**10.** `"  hi  ".trim()` 결과는?
답: hi (앞뒤 공백제거)

**11.** `"a,b,c".split(",")` 결과는?
답: ['a', 'b', 'c']

**12.** `"abc".includes("b")` 는 `true`?
답: true

**13.** `"cat".replace("c","b")` 결과는?
답: bat

***

#### 조건문

**14.** 아래 출력결과는?

```jsx
console.log(2 == "2", 2 === "2");
```
답: true false


**15.** 삼항연산자 결과는?

```jsx
const n = 5;
const r = n % 2 === 0 ? "even" : "odd";
```
답: odd

**16.** `switch` 기본형에서 일치 비교에 쓰이는 것은?

A) `==`  B) `===`  C) 둘 다
답: B


**17.** `&&` 단축 평가 결과:

```jsx
const ok = true && "DONE";
```
답: true

***

#### Object

**18.** 속성 접근 결과?

```jsx
const user = { name: "Ann", age: 17 };
console.log(user["name"]);
```
답: Ann

**19.** 키를 추가한 다음 코드의 결과는?

```jsx
const k = "score";
const obj = {};
obj[k] = 100;
console.log(obj.score);

```
답: 100

**20.** 다음의 출력결과는?

```jsx
const a = { n: 1 };
const b = { n: 1 };
console.log(a === b);
```
답: false 

***

#### Array

**21.** `const arr = [1,2,3]; arr.push(4);` 이후 `arr`는?
답: [1, 2, 3, 4]

**22.** `pop()`이 반환하는 것은?
답: 배열의 마지막 값

**23.** `slice(1,3)`의 의미와 arr에 적용한 결과는?
답: 인덱스 1부터 3까지 출력 
결과 : 2 3

**24.** `splice(1,2)`의 의미와 arr에 적용한 결과는?
답: 인덱스 1부터 시작해서 2개의 값 삭제
결과 arr=[1, 4]

**25.** `map` 결과?

```jsx
[1,2,3].map(x => x * 2)
```
답: [2,4,6]


**26.** `filter` 결과?

```jsx
[1,2,3,4].filter(x => x % 2 === 0)
```
답: [2,4]

**27.** `includes` 사용한 결과는?

```jsx
[1,2,3].includes(2)
```
답 : true

**28.** `reduce` 결과는?

```jsx
[1,2,3].reduce((acc, cur) => acc + cur, 0)
```
답: 6
초기값 0 에서 1,2,3을 순차적으로 더함

***

#### Loop

**29.** `for (let i=0; i<3; i++) console.log(i);` 출력?
답: 0 1 2

**30.** `for...of`는 어떤 것을 순회할때 효과적인가?
답: Iterator 속성을 가진 컬렉션

**31.** `for...in`은 주로 무엇을 순회할때 효과적인가?
답: 객체, 배열

**32.** 다음 코드의 마지막 `sum의 결과값은`?

```jsx
let i=1, sum=0;
while(i<=3){ sum+=i; i++; }

```
답: 6

**33.** `for...of` 출력 결과는?

```jsx
for (const ch of "Hi") console.log(ch);
```

답: H \n i

**34.** 빈칸에 들어갈 키워드는 무었인가? 

```jsx
const arr = [10, 20, 30];
for (const num ___ arr) {
  console.log(num);
}

```
답: of

***

1. 아래 colors 배열의 요소값을 순서대로 출력하는 반복문을작성하세요 

```jsx
const colors = ["red", "green", "blue"];

```
답:
```jsx
for(const n of colors){
    console.log(n);
};
```

1. 아래  str의 요소를 순회하여 출력하는 반복문을 작성하세요.

```jsx
const str = "JS";
```
답: 
```jsx
for(const a in str){
    console.log(str[a]);
};
```

37.  배열 scores의 점수에 대한  총점과 평균을 구하여 출력하는 코드를 작성하세요.

```jsx
const scores = [90, 80, 70];
```

답: 
```jsx
let result = scores.reduce((acc, cur) => acc + cur);
console.log(result);
console.log(result / scores.length);
```
---

1. 배열 nums 의 요소값 출력을 2번째 인덱스의 값까지만 출력하는 코드를 작성하세요

```jsx
const nums = [1, 2, 3];
```
답:
```jsx
nums.slice(0,2);
```


39. user 객체의 정보를 출력하는 반복문을 작성하세요.

```jsx
const user = { name: "Yumi", age: 20 }; 
```
답:
```jsx
for (const [k, v] of Object.entries(user)) {
  console.log(k, v);
}
```

40. arr 배열의 요소값을 forEach문을 이용하여 출력하세요. 

```jsx
const arr = [1, 2, 3];
```
답:
```jsx
arr.forEach(a => console.log(a));
```

**41.** `Map 이란`?
답: 키와 값 한쌍으로 이루어진 컬렉션 

**42.** `Set`이란?
답: 중복되지 않는 값들의 집합.

**43.** 아래 `Map의 결과는?` 

```jsx
const m = new Map();
const k = {};
m.set(k, 123);
console.log(m.get(k));
```
답: 123

**44.** 아래`Set의 결과는?`

```jsx
const s = new Set([1,2,2,3]);
s.add(3);
console.log(s.size);
```
답: 3

**45.** `Map` 크기 확인 프로퍼티는?
답: map.size