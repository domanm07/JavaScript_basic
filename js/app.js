// Változók, típusok
/* 
var, let -> let a = 23;
let -> block scope-val
var -> function scope
Állandó: const const a = 10; block scope

Elemi típusok:
-"sztring", 'sztring' `sztring (template) literal ${változó}`
-number: 3, 3.14 parseInt(), Number(), parseFloat() ((NaN egy number "érték"))
-boolean
-undefined (érték és egyben típus) -> nincs definiálva, de majd lesz
-null -> Vagy null a definiált értéke, vagy semmit adtak értékül a váltózónak

Operátorok:
+ (túlterhelt), *, -, / %, (modulo, modulos) // = (értékadó),
inkrementálás: ++ (python: +=1)
dekrementálás: -- (python: -=1)

Összehasonlító operátorok: 
<, >, <=, >=, ==, ===

Logikai operátorok: negálás -> !, and -> &&, or -> ||

A JS gyengén típusos nyelv:
    == 3+"4" -> "34", 3*"4" -> 12
*/

// HTML elemek elérése:
console.log(document);
const button = document.querySelector("ul li:last-child a");
const card = document.querySelector(".card")
card.style.backgroundColor = "darkgray"
button.textContent = "Új szöveg";
button.style.backgroundColor = "rgb(200, 20, 20)";
 // button.style.display = "none"
console.log(button);

/* Array (tömb) ~ Python lista (dinamikus, heterogén)
    const t = []; ne const t = new Array();
    Elemek elérése: t[0], t.at(-1);
    t.slice(start, end) end nélkül a tömb végig megy. (Szeletelő) ~ [::]
    t.splice(start, deletedCount, inserted elements)
    t.toSplice(start, deletedCount, inserted elements)
    const newT = t.tospliced( start, )
    t.index(20)
    t.toString() --> '10,20,30'
    t.join('') --> '102030'
 */


const pElements = document.querySelectorAll("p");
const floatDiv = document.querySelector(".float-div");
pElements.at(-1).style.fontfamily = "Arial";
pElements[pElements.length-1].style.color = "hsl(100, 60%, 70%)";
Array.from(pElements).splice(0, 3);
// Az Array.from() metódus tömböt készít a nodeList-ből. A NodeList nem tömb!!!

floatDiv.innerHTML = "";
console.log(Array.from(pElements));
for (let element of Array.from(pElements)){
    console.log(element.innerHTML);
    floatDiv.innerHTML += element.innerHTML;
}
// floatDiv.innerHTML = 