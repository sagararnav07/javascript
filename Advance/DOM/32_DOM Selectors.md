/*
1. To get an element by its id, but it will return entire thing inside the element name

INPUT
document.getElementById ('title') 

 OUTPUT 

<h1 id="title" class="heading">
"DOM learning by Arnav Sagar "
<span style="display: none;">text text</span> </h1>

------------------------------------------------------------------
2. To get an element using getElementById(), it will return the element name 

INPUT 
document.getElementById('title').id

OUTPUT
'title'

INPUT
document.getElementById('title').className

OUTPUT
'heading'

------------------------------------------------------------------
3. To get an element attributes using getElementById()

INPUT
document.getElementById('title').getAttribute('id')
OUTPUT
'title'

INPUT
document.getElementById('title').getAttribute('class')
OUTPUT
'heading'


------------------------------------------------------------------
3. To set an element attributes using getElementById()  

INPUT
document.getElementById('title').setAttribute('class', 'test')

OUTPUT BEFORE CHANGING
<h1 id="title" class="heading">DOM learning by Arnav Sagar
            <span style="display:none;">text text</span></h1>

OUTPUT AFTER CHANGING
<h1 id="title" class="test">DOM learning by Arnav Sagar
            <span style="display:none;">text text</span></h1>

------------------------------------------------------------------
3. manipulating style elements in DOM using getElementById()  

const mydom = document.getElementById('title')
undefined
mydom.style.backgroundColor = "green"
'green'

------------------------------------------------------------------
3. To dipslay content there are 3 ways 1> .innerText 2> .textContent  3>.innerHTML

1.
mydom.innerText
'DOM learning by Arnav Sagar'

2.
mydom.textContent
'DOM learning by Arnav Sagar\n            text text'

3.
mydom.innerHTML
'DOM learning by Arnav Sagar\n            <span style="display:none;">text text</span>'

------------------------------------------------------------------
4. To get an element using getElementByclassName(), it will return the class contents 

INPUT
document.getElementsByClassName('test')
OUTPUT
HTMLCollection [h1#title.test, title: h1#title.test]

------------------------------------------------------------------
5. .querySelector()  note: "#" --> id,  "." --> class 
work: searching and returning the very first element within the document that matches the given selector.

INPUT
document querySelector('#title')
OUTPUT
<h1 id="title" class="test" style="background-color: green; "></h1>

INPUT
document. querySelector(' test')
OUTPUT
<h1 id="title" class="test" style="background-color: green; "> </h1>

------------------------------------------------------------------
6.To select attributes of elements using  .querySelector()  note: "#" --> id,  "." --> class 

INPUT
document. querySelector( 'input [type = "password"]')
OUTPUT
<input type="password" name id>

------------------------------------------------------------------
7.To select and modify <ul>list elements using  .querySelector()  
note: .querySelector() return only 1st value in the list

a. TO SELECT

INPUT
document. querySelector ('ul')

OUTPUT
v <ul>
v<li>
::marker
"one"
</li> v<li>
::marker
"two"
</li> v<li>
::marker
"three"
</li>
</ul>

b. TO MODIFY

INPUT
const myul = document.querySelector('ul')
OUTPUT
undefined

INPUT
const turnGreen  = myul.querySelector('li')
OUTPUT
undefined

INPUT
turnGreen.style.backgroundColor = "green"
OUTPUT
'green'


------------------------------------------------------------------
8. .querySelectorAll() 
working: The Document method querySelectorAll() returns a static (not live) NodeList 
representing a list of the document's elements that match the specified group of selectors.

note: Nodelists are not pure array so we cannot use <map> or some of the array properties in nodelist
check the prototype for more references

INPUT
document.querySelectorAll('li')

STORING IN A VARIABLE
const tempList = document.querySelector("li")
OUTPUT
undefined

tempList
<li>​::marker​"one"</li>​
INPUT
const tempList = document.querySelectorAll("li")
OUTPUT
undefined

INPUT
tempList
OUTPUT
NodeList(3) [li, li, li]


------------------------------------------------------------------
7.To select and modify <ul>list elements using  .querySelectorAll(). All the elements in the
nodelist cannot work same as the array

eg:1
WILL NOT WORK LIKE THIS
tempList.style.color = "green"
VM462:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:22

WILL WORK LIKE THIS
tempList[0].style.color = "green"
'green'

eg:2
WILL NOT WORK LIKE THIS
myH1.style.color = "green"
VM697:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18
(anonymous) @ VM697:1

WILL WORK LIKE THIS
myH1[1].style.color = "green"
'green'

------------------------------------------------------------------
8.To iterate a nodelist we can use onle for each loop and cannot use map or any other loop
to use any other loop we have to convert the nodelist into an array 

const tempList = document.querySelectorAll("li")
undefined
tempList
NodeList(3) [li, li, li]
tempList.forEach((l) => {l.style.backgroundColor = "green"})

------------------------------------------------------------------
8.Array.from() ==> HTMLCollection() is a type when we use getElementByClassName() then it is generated
we cannot use any loop to iterate HTMLCollection so first we have to convert it into an array to
use different function and loops to iterate it

--> document.getElementsByClassName("list-item")
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
-->const tempList = document.getElementsByClassName("list-item")
undefined
--> Array.from(tempList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
--> const myConvertedArray = Array.from(tempList)
undefined

--> myConvertedArray.map((l) => l.style.backgroundColor = "green")  //using map
(4) ['green', 'green', 'green', 'green']
or
--> myConvertedArray.forEach((li) => {li.style.color = "green"})            //using forEach




*/