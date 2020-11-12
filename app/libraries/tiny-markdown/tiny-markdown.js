/**Tiny Markdown parses a basic markdown string and returns a string of HTML
 * @param {String}string
*/
export default string => {


	// HTML hex encoding entity reference
	let entities = {
		'!': '33',
		'#': '35',
		'&': '38;',
		'(': '40',
		')': '41',
		'*': '42',
		'+': '43',
		'-': '45',
		'.': '46',
		'<': '60;',
		'>': '62;',
		'[': '91',
		'\\': '92',
		']': '93',
		'_': '95',
		'`': '96',
		'{': '123',
		'}': '125',
		'~': '126',
	}


	// Matchers for expressions used more than once
	let matchBlockquotes = /(^|\s)(> )+(.|\n)+?(?=$|\n(?!>))/g;
	let olDelimiter = '[0-9]+\\. ';
	let ulDelimiter = '[-+*] ';


	// Utils
	let lookupEntity = char => '&#' + (entities[char] || char);
	let encode = str => str.replace(/[&<>]/g, lookupEntity);
	let clipEnds = str => str.trim().slice(1, -1);
	let tag = (tagname, content) => `<${tagname}>${content}</${tagname}>`;


	// Complex factories
	let lists = str => {
		let ordered = new RegExp(`(^|\\n)${olDelimiter}`).test(str);
		let delimiter = new RegExp(`(^|\\n)${ordered ? olDelimiter : ulDelimiter}`);
		let items = str.split(delimiter).filter(item => item.trim().length);
		return tag(
			ordered ? 'ol' : 'ul',
			items.map(item => tag('li', item)).join('')
		)
	}

	let headings = str => {
		str = str.trim();
		let level = str.indexOf(' ');
		let contents = str.slice(level).replace(/#+$/, '').trim();
		return tag(`h${level} id=${contents.replace(/\W+/g, '-').toLowerCase()}`, contents);
	}

	let altHeadings = str => {
		let values = str.trim().split(/\n/);
		return tag(`h${values[1].indexOf('-') > -1 ? 2 : 1}`, values[0]);
	}

	let links = str => {
		let values = str.slice(1, -1).split('](');
		let title = values[1].split(/ ["`']/)[1];
		return `<a href="${values[1]}" ${title ? `title="${title}"` : ''}>${values[0]}</a>`;
	}

	let altLinks = str => {
		let values = str.split(/["`']/);
		let href = values[0].trim().replace(/^<|>$/g, '');
		let title = values[1];
		return ` <a href="${href}" ${title ? `title="${title}"` : ''}>${href}</a>`;
	}

	let images = str => {
		let values = str.slice(2, -1).split('](');
		let title = values[1].split(/ ["`']/)[1];
		return `<img src="${values[1]}" ${title ? `title="${title}"` : ''} alt="${values[0]}">`;
	}

	let pres = str => {
		let [lang, ...code] = str.trim().split(/\n+/);
		let inner = encode(code.slice(0, -1).join('\r')).trim();
		return tag('pre', `<code class="language-${lang.slice(3)}">${inner}</code>`);
	}

	let blockquotes = str => {
		str = tag('blockquote', str.replace(/^ *?> /gm, ''));
		return str.replace(matchBlockquotes, blockquotes);
	}


	// Simple factories
	let autoLinks = str => ` <a href="${str}">${str.trim()}</a>`;
	let paragraphs = str => tag('p', str.trim());
	let strongs = str => tag('strong', str.slice(2, -2));
	let ems = str => tag('em', clipEnds(str));
	let dels = str => tag('del', clipEnds(str));
	let codes = str => tag('code', encode(clipEnds(str)));


	return string
		.replace(/\r+/g, '\n')
		// Encode backslash-escaped special characters
		.replace(/\\[-*_\\`#~+.!(){}[\]]/g, str => lookupEntity(str.slice(1)))
		// Alt Headings (h1 and h2 only)
		.replace(/(^|\n).+?\n[-=]+(?=$|\n)/g, altHeadings)
		// Headings
		.replace(/(^|\n)#+? (.|\n)+?(?=$|\n)/g, headings)
		// Horizontal rules
		.replace(/(^|\n)([-*_] ?){3,}(?=$|\n)/g, '<hr>')
		// Lists
		.replace(/(^|\n)([0-9]+\.|[-+*]) (.|\n)+?(?=$|[\s\n]{3,})/g, lists)
		// Blockquotes
		.replace(matchBlockquotes, blockquotes)
		// Pre elements
		.replace(/(^|\n)```(.|\n)+?```(?=$|\n)/g, pres)
		// Hard line breaks (<br>)
		.replace(/  (\n|$)/g, '<br>')
		// Images
		.replace(/!\[.+?\]\(.+?\)/g, images)
		// Links
		.replace(/\[.+?\]\(.+?\)/g, links)
		// Alt Links
		.replace(/<(https?:\/\/|www).+?>( (".+?")|('.+?'))?(?=$|\n| )/g, altLinks)
		// Auto Links
		.replace(/(^|\n| )(https?:\/\/|www)(.+?)+?(?=$|\n| )/g, autoLinks)
		// Escape asterisks and underscores surrounded by spaces
		.replace(/\s[*_](?=\s)/g, str => str.slice(0, 1) + lookupEntity(str.slice(1)))
		// Strongs
		.replace(/[*_]{2}.+?[*_]{2}/gm, strongs)
		// Ems
		.replace(/[*_].+?[*_]/gm, ems)
		// Dels
		.replace(/~.+?~/gm, dels)
		// Code
		.replace(/`.+?`/gm, codes)
		// Paragraphs
		.replace(/(^|\n\n+)(?!<[huol]).+?(?=$|\n\n+)/gi, paragraphs)
}