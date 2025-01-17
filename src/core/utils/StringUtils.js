/**
 * Ported from quickcommerce-react lib
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// TODO: Un-jQuery this
/*function escapeHtml = (unsafe) => {
 return $('<div />').text(unsafe).html()
 }
 function unescapeHtml = (safe) => {
 return $('<div />').html(safe).text()
 }*/

function hyphenize(str) {
  return str.replace(/[A-Z]/g, (str) => {
    return '-' + str.toLowerCase()
  })
}

function underscore(str) {
  return str.replace(/[A-Z]/g, (str) => {
    return '_' + str.toLowerCase()
  })
}

function camelize(str) {
  return str.replace(/[\s\-_]+(\w)/g, (str) => {
    return str.toUpperCase().replace(/[\s\-_]+/, '')
  })
}

function swapSubstrings (str, sub1, sub2) {
  str = str.replace(new RegExp('(' + sub1 + '|' + sub2 + ')', 'g'), (match) => {
    return match === sub1 ? sub2 : sub1
  });

  return str
}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')
}

function shortenText(str, maxLength, greedy) {
  greedy = greedy || true;
  maxLength = maxLength || str.length;

  if (maxLength < str.length) {
    let trimmed = str.substr(0, maxLength);
    // Check to see if we chopped off the last word, we don't want to trim if that's the case...
    const rem = str.substr(maxLength, str.length);
    if (greedy === false || /\s/.test(rem)) {
      return trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' '))) + '...'
    }
  }

  return str
}

function toSentenceCase(text) {
  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

function quoteIfNecessary(text) {
  if (text.indexOf(' ') !== -1) {
    text = '\'' + text + '\''
  }
  return text
}

function unquoteIfNecessary(text) {
  if ((text[0] === '\'' && text[text.length - 1] === '\'') || (text[0] === '"' && text[text.length - 1] === '"')) {
    text = text.slice(1, text.length - 1)
  }
  return text
}

function decodeHtmlEntities(str) {
  let element = document.createElement('div');

  let decode = (str) => {
    if (str && typeof str === 'string') {
      // Strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = ''
    }

    return str
  };

  return decode(str)
}

function stringIsInteger(str) {
  if (typeof value === 'undefined' || value === null) {
    return false
  }

  let n = Math.floor(Number(str));
  return String(n) === str && n >= 0
}

export { capitalizeFirstLetter, hyphenize, underscore, camelize, swapSubstrings, escapeRegExp, shortenText, toSentenceCase, quoteIfNecessary, unquoteIfNecessary, decodeHtmlEntities, stringIsInteger }
