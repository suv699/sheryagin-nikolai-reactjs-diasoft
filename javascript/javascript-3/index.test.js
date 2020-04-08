import getPath from './index'

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const assert = require('chai').assert;

function itNode(node, index, document){
    it(`testNode${index}`, () => {
        const path = getPath(node, document); // строим селектор
        assert.isNotEmpty(path, `path is empty`); // проверяем что он не пустой
        const findNode = document.querySelector(path); // пытаемся найти элемент
        assert.equal(findNode, node, `Wrong element found, path - ${path}`); // проверяем что найденный элемент совпадает с текущим проверяемым
    });
}

describe('getPath', () => {
    const testHtml = fs.readFileSync(__dirname+'/test2.html', 'UTF-8'); // читаем файл
    const { document } = (new JSDOM(testHtml)).window; //парсим файл (используется либа jsdom)
    const items = document.querySelectorAll('*'); // формируем список всех элементов
    items.forEach((node, index) => itNode(node, index, document)); // бежим по элементам
});

describe('getPath', () => {
    const testHtml = fs.readFileSync(__dirname+'/test.html', 'UTF-8'); // читаем файл
    const { document } = (new JSDOM(testHtml)).window; //парсим файл (используется либа jsdom)
    const items = document.querySelectorAll('*'); // формируем список всех элементов
    items.forEach((node, index) => itNode(node, index, document)); // бежим по элементам
});