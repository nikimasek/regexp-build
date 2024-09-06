function join(sequence) {
    if (typeof sequence == 'string') return sequence;
    if (sequence instanceof RegExp) return sequence.source;
    return sequence.map(item => item.source).join('');
}
const isBlock = /^\([^()]*?\)$|^\[[^\[\]]*?\]$/
function block(sequence) {
    const pattern = Array.isArray(sequence) ? sequence : join(sequence);
    return isBlock.test(pattern) ? pattern : `(?:${pattern})`;
}
export function regex(sequence) {
    return new RegExp(join(sequence));
}
export function find(sequence) {
    return regex(sequence);
}
export function pattern(sequence) {
    return regex([/^/, ...sequence, /$/]);
}
export function group(sequence, name) {
    return new RegExp((name && typeof name == 'string' ? `(?<${name}>` : '(') + join(sequence) + ')');
}
export function zeroOrMore(sequence) {
    return new RegExp(block(sequence) + '*');
}
export function oneOrMore(sequence) {
    return new RegExp(block(sequence) + '+');
}
export function optional(sequence) {
    return new RegExp(block(sequence) + '?');
}
export function repeat(sequence, count) {
    return new RegExp(block(sequence) + `{${count}}`);
}
export function choiceOf(...alternatives) {
    return new RegExp(alternatives.map(sequence => {
        const pattern = join(sequence);
        return pattern.includes('|') ? block(pattern) : pattern;
    }).join('|'));
}
export function lookahead(sequence) {
    return new RegExp(`(?=${join(sequence)})`);
}
export function negativeLookhead(sequence) {
    return new RegExp(`(!=${join(sequence)})`);
}
export function lookbehind(sequence) {
    return new RegExp(`(?<=${join(sequence)})`);
}
export function negativeLookbehind(sequence) {
    return new RegExp(`(?<!=${join(sequence)})`);
}