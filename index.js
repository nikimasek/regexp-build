/** @typedef {import('./index').Template} Template */

function join(template) {
    return [template].flat(Infinity).map(x => {
        if (x instanceof RegExp) return x.source;
        if (typeof x == 'string') return x.replaceAll(/[-[\]{}()*+?.,\\\/^$|#\s]/g,'\\$&');
        return '';
    }).join('');
}
function block(template) {
    return `(?:${join(template)})`;
}

/**
 * Join many RegExp to one
 * @example /.../
 * @param {Template} template 
 * @returns {RegExp}
 */
export function regex(template) {
    return new RegExp(join(template));
}

/**
 * Create RegExp for find
 * @example /.../
 * @param {Template} template 
 * @returns {RegExp}
 */
export function find(template) {
    return new RegExp(join(template));
}

/**
 * Create RegExp for match string
 * @example /^...$/
 * @param {Template} template 
 * @returns {RegExp}
 */
export function pattern(template) {
    return new RegExp(`^${join(template)}$`);
}

/**
 * Create RegExp group
 * @example
 * /(...)/ 
 * /(?<name>...)/
 * @param {Template} template 
 * @param {string=} name 
 * @returns {RegExp}
 */
export function group(template, name) {
    return new RegExp((name && typeof name == 'string' ? `(?<${name}>` : '(') + join(template) + ')');
}

/**
 * 
 * @example /^...$/
 * @param {Template} template 
 * @returns {RegExp}
 */
export function zeroOrMore(template) {
    return new RegExp(block(template) + '*');
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function oneOrMore(template) {
    return new RegExp(block(template) + '+');
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function optional(template) {
    return new RegExp(block(template) + '?');
}

/**
 * 
 * @param {Template} template 
 * @param {number | {nin?: number, max?: number}} count 
 * @returns {RegExp}
 */
export function repeat(template, count) {
    return new RegExp(`${block(template) }{${typeof count == 'number' ? count : ((count.min || '') + ',' + (count.max || ''))}}`);
}

/**
 * 
 * @param {Template[]} templates 
 * @returns {RegExp}
 */
export function choiceOf(...templates) {
    return new RegExp(templates.map(block).join('|'));
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function lookahead(template) {
    return new RegExp(`(?=${join(template)})`);
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function negativeLookhead(template) {
    return new RegExp(`(!=${join(template)})`);
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function lookbehind(template) {
    return new RegExp(`(?<=${join(template)})`);
}

/**
 * 
 * @param {Template} template 
 * @returns {RegExp}
 */
export function negativeLookbehind(template) {
    return new RegExp(`(?<!=${join(template)})`);
}