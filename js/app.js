const pageHeader = document.querySelector('.page-header');
console.info(pageHeader.childNodes);

function talksAbout(node, string) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    for (let child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}


console.log(talksAbout(document.body, "Specials"))


function extractContents(node, textNodes = []) {
  for (let child of node.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      textNodes.push(child.textContent);
    } else {
      extractContents(child, textNodes);
    }
  }
  return textNodes;
}

const allText = extractContents(document.body);
console.info(allText.join(''))
