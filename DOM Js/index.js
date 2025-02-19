console.log(document) // document object represents: D.O.M
console.log(window) // window object represents : B.O.M

// document is given by window. So, window.document will also give document , but document is already a global object so we can use it directly
        
/* 
Finding / Searching he element
1) document.getElementById()  ====> null / Element
2) document.getElementsByClassName()  ====> iterable [] / [elem, elem, elem... ]
3) document.getElementsByTagName()  ====> iterable [] / [elem, elem, elem... ]
4) document.querySelector()  ====> 
5) document.querySelectorAll()  ====> 
*/

const elem = document.getElementById("text")
console.dir(elem)