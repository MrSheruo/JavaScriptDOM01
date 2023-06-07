## Before Diving into the Course ||

===================================

## Concepts you are expected to know || مفاهيم لازم تكون عارفهم قبل ما تكمل

============================================================================

1. [What is the Internet and the Web - الدحيح](https://www.youtube.com/watch?v=3N8vu5DdLbE&t)

2. [Basic HTML](https://www.youtube.com/watch?v=q3yFo-t1ykw&t)

3. [Basic CSS](https://www.youtube.com/watch?v=Z-5QVutAEW4&t)

4. [Basic JavaScript](https://www.youtube.com/watch?v=TLgKx2B_y8U)

5. [Elzero Web School](https://www.youtube.com/playlist?list=PLDoPjvoNmBAzhFD3niPAa1C1gXG4cs14J)

6. [Elzero Web School Prototype](https://www.youtube.com/watch?v=YKWWKHgxbIc)

## What is DOM ||

1. DOM = Document Object Model | نموذج بعناصر صفحة الويب

```js
console.log(document);

console.log(document.body);
console.log(document.head);
```

2. We can draw DOM like a tree | نقدر نتصور و نرسم النموذج دا علي هيئة شجره

3. We can Manipulate the HTML page using JavaScript (DOM Manipulation) Create-Read-Delete-Change Elements
   نقدر نتحكم في صفحة الويب عن طريق الجافا سكريبت في العمليات مثل انشاء - قرأة - حذف - تغير العناصر داخل الصفحة

## مثال سريع لإنشاء عنصر بداخل (body Element)

لو عاوزين نعمل حاجه زي العنصر دا مثلا بالجافاسكريبت هنكتب قد ايه ؟

<div id="content"></div>

```JS

const div = document.createElement('div');
div.setAttribute('id', 'content');
```

if we want to Display into the body element we can use this code

لو عاوزين نظهره بداخل عنصر ال
Body
هنحتاج نستخدم الكود التالي

```js
document.body.appendChild(div);
```

## Ways to Create element in js || طرق انشاء عناصر الصفحة بإستخدام جافاسكريبت

```js
1. createElement()
2. insertAdjacentHTML()
3. Element.innerHTML = ``
```

## Diffrance between var ,let ,const | الفرق بين تعريف المتغيرات

[video - اكادمية ترميز](https://www.youtube.com/watch?v=tIc2xOS03po)

```js
insertAdjacentHTML();

("beforebegin"); //Inserts the HTML content as a sibling immediately before the element.
("afterbegin"); //Inserts the HTML content as the first child of the element.
("beforeend"); //Inserts the HTML content as the last child of the element.
("afterend"); //Inserts the HTML content as a sibling immediately after the element.
```

## لو مش فاكر الكائنات بشكل كامل في الجافاسكريبت شوف الفيديو دا 

[object اكادمية ترميز - شرح](https://www.youtube.com/watch?v=PPofIB_ThbY)

