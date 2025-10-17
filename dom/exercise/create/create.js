
    function newRegister() {
        const newItem = document.createElement("li");
        const subject = document.getElementById('subject');
        const newText = document.createTextNode(subject.value);  // <li> subject.value </li> 를 생성하는 것

        newItem.appendChild(newText);

        const itemList = document.getElementById('itemList');

        itemList.appendChild(newItem); // 생성한 li를 ul 자식에 연결

        subject.value = '';

    };


    this.document.addEventListener("DOMContentLoaded", function() {
        const button = document.querySelector('button');
        button.addEventListener("click", function(event){
            event.preventDefault();
            newRegister();
        });
    });




