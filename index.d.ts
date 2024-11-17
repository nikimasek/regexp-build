type Template = RegExp | string | Template[];

export function regex(template: Template): RegExp;
export function find(template: Template): RegExp;
export function pattern(template: Template): RegExp;
export function group(template: Template, name?: string): RegExp;
export function zeroOrMore(template: Template): RegExp;
export function oneOrMore(template: Template): RegExp;
export function optional(template: Template): RegExp;
export function repeat(template: Template, count: number | { min?: number, max?: number }): RegExp;
export function choiceOf(...templates: Template[]): RegExp;
export function lookahead(template: Template): RegExp;
export function negativeLookhead(template: Template): RegExp;
export function lookbehind(template: Template): RegExp;
export function negativeLookbehind(template: Template): RegExp;