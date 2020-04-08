export default function getPath(elem, document, retFirstSelector) {
    return getParentElem(elem, '', document);
}

function getParentElem(el, selector = '', document) {
    let selectorElem = '';
    let {tagName, id, className } = el;
    const {childElementCount: count, children: data} = el.parentNode;
    if (count > 1) {
        for(let i =0 ; i < count ; i ++) {
            if(data[i] == el){
                tagName += `:nth-child(${i + 1})`
            }
        }
    }
    selectorElem = tagName.toLowerCase() + (id ? '#'+id : '') + (!!className && className.replace ? '.' + (className).trim().replace(/\s/g, '.').replace(/[:]/g, '\\$&') : '')
    if (selector !== '') {
        selectorElem = selectorElem + ' > ' + selector
    }
    if(document.querySelectorAll(selectorElem).length === 1) {
        return selectorElem
    }
    return el.parentElement ? getParentElem(el.parentElement,  selectorElem, document) : selectorElem;
}

