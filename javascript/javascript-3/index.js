export default function getPath(elem, document, retFirstSelector) {
    return getParentElem(elem);
}

function getParentElem(el, selector = '') {
    let selectorElem = '';
    let {tagName, id, className } = el;

    let count = el.parentNode.childElementCount
    let data = el.parentNode.children
    if (count > 1) {
        for(var i =0 ; i < count ; i ++) {
            if(data[i] == el){
                tagName += ':nth-child(' + (i + 1) + ')';
            }
        }
    }
    selectorElem = tagName.toLowerCase() + (id ? '#'+id : '') + (!!className && className.replace ? '.' + className.replace(/\s/g, '.') : '')
    if (selector !== '') {
        selectorElem = selectorElem + ' > ' + selector
    }
    return el.parentElement ? getParentElem(el.parentElement,  selectorElem) : selectorElem;
}

