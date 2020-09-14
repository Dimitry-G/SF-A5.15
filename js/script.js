'use strict';

const startObj = {
    "text": [
        "Жили-были {var1} да {var2}",
        "Была у них {var3}",
        "Снесла {var3} {var4}, не простое - золотое",
        "- {var1} бил, бил - не разбил",
        "- {var2} била, била - не разбила",
        "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
        "{var1} плачет, {var2} плачет, а {var3} кудахчет:", "{speach}"
    ]
};

const btns = document.querySelectorAll('button'),
      getText = document.querySelector('.btn-read-tale'),
      fullTale = document.querySelector('.tale-text'),
      fixTale = document.querySelector('.btn-fix-tale'),
      writeTale = document.querySelector('.wrapper'),
      changeTale = document.querySelector('.btn-change-tale');

getText.addEventListener('click', () => {
    document.getElementById('tale-text').innerHTML = startObj.text;
    btns[1].classList.remove('hide');
});

fixTale.addEventListener('click', () => {
    writeTale.classList.remove('hide');
});

const var1Node = $('.j-var1');
const var2Node = $('.j-var2');
const var3Node = $('.j-var3');
const var4Node = $('.j-var4');
const var5Node = $('.j-var5');
const var6Node = $('.j-var6');
const speachNode = $('.j-speach');

changeTale.addEventListener('click', () => {
    const var1 = var1Node.val();
    const var2 = var2Node.val();
    const var3 = var3Node.val();
    const var4 = var4Node.val();
    const var5 = var5Node.val();
    const var6 = var6Node.val();
    const speach = speachNode.val();
      
    const newObj = {
      "text":[
        `Жили-были ${var1} да ${var2}`,
        `Была у них ${var3}`,
        `Снесла ${var3} ${var4}, не простое - золотое`,
        `- ${var1} бил, бил - не разбил`,
        `- ${var2} била, била - не разбила`,
        `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
        `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
        `${speach}`,
      ]
    };
    
    document.getElementById('tale-text').innerHTML = newObj.text;
});