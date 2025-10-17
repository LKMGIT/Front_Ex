## Dom API 종류
- 여러개의 문서 객체를 선택할 때 사용하는 메소드 
```js
document.querySelectorAll('선택자')
document.querySelector('선택자')
documnet.getElementById('id명');
```

웹 요소의 내용을 가져올 경우에는 **innerText**, **textContent**를 사용
웹 브라우저 창에 표시되지 않은 내용까지 모두 가져오려면 **textContent**
태그 까지 가져오려면 **innerHTML**

