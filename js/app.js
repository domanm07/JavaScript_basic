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
button.style.display = "none"
console.log(button);
