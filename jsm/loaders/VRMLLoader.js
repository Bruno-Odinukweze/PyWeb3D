
BackSide = window.THREE.BackSide;
BoxGeometry = window.THREE.BoxGeometry;
BufferAttribute = window.THREE.BufferAttribute;
BufferGeometry = window.THREE.BufferGeometry;
ClampToEdgeWrapping = window.THREE.ClampToEdgeWrapping;
Color = window.THREE.Color;
ConeGeometry = window.THREE.ConeGeometry;
CylinderGeometry = window.THREE.CylinderGeometry;
DataTexture = window.THREE.DataTexture;
DoubleSide = window.THREE.DoubleSide;
FileLoader = window.THREE.FileLoader;
Float32BufferAttribute = window.THREE.Float32BufferAttribute;
FrontSide = window.THREE.FrontSide;
Group = window.THREE.Group;
LineBasicMaterial = window.THREE.LineBasicMaterial;
LineSegments = window.THREE.LineSegments;
Loader = window.THREE.Loader;
LoaderUtils = window.THREE.LoaderUtils;
Mesh = window.THREE.Mesh;
MeshBasicMaterial = window.THREE.MeshBasicMaterial;
MeshPhongMaterial = window.THREE.MeshPhongMaterial;
Object3D = window.THREE.Object3D;
Points = window.THREE.Points;
PointsMaterial = window.THREE.PointsMaterial;
Quaternion = window.THREE.Quaternion;
RepeatWrapping = window.THREE.RepeatWrapping;
Scene = window.THREE.Scene;
ShapeUtils = window.THREE.ShapeUtils;
SphereGeometry = window.THREE.SphereGeometry;
TextureLoader = window.THREE.TextureLoader;
Vector2 = window.THREE.Vector2;
Vector3 = window.THREE.Vector3;


/////////////////////////////////////////////////////////////
// /libs/chevrotain.module.min Start 
////////////////////////////////////////////////////////////

/*! chevrotain - v9.0.1 */
var R=(t,e)=>()=>(e||(e={exports:{}},t(e.exports,e)),e.exports);var Er=R(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0});Pt.VERSION=void 0;Pt.VERSION="9.0.1"});var k=R((exports,module)=>{"use strict";var __spreadArray=exports&&exports.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t};Object.defineProperty(exports,"__esModule",{value:!0});exports.toFastProperties=exports.timer=exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}exports.isEmpty=isEmpty;function keys(t){return t==null?[]:Object.keys(t)}exports.keys=keys;function values(t){for(var e=[],r=Object.keys(t),n=0;n<r.length;n++)e.push(t[r[n]]);return e}exports.values=values;function mapValues(t,e){for(var r=[],n=keys(t),i=0;i<n.length;i++){var a=n[i];r.push(e.call(null,t[a],a))}return r}exports.mapValues=mapValues;function map(t,e){for(var r=[],n=0;n<t.length;n++)r.push(e.call(null,t[n],n));return r}exports.map=map;function flatten(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];Array.isArray(n)?e=e.concat(flatten(n)):e.push(n)}return e}exports.flatten=flatten;function first(t){return isEmpty(t)?void 0:t[0]}exports.first=first;function last(t){var e=t&&t.length;return e?t[e-1]:void 0}exports.last=last;function forEach(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)e.call(null,t[r],r);else if(isObject(t))for(var n=keys(t),r=0;r<n.length;r++){var i=n[r],a=t[i];e.call(null,a,i)}else throw Error("non exhaustive match")}exports.forEach=forEach;function isString(t){return typeof t=="string"}exports.isString=isString;function isUndefined(t){return t===void 0}exports.isUndefined=isUndefined;function isFunction(t){return t instanceof Function}exports.isFunction=isFunction;function drop(t,e){return e===void 0&&(e=1),t.slice(e,t.length)}exports.drop=drop;function dropRight(t,e){return e===void 0&&(e=1),t.slice(0,t.length-e)}exports.dropRight=dropRight;function filter(t,e){var r=[];if(Array.isArray(t))for(var n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}return r}exports.filter=filter;function reject(t,e){return filter(t,function(r){return!e(r)})}exports.reject=reject;function pick(t,e){for(var r=Object.keys(t),n={},i=0;i<r.length;i++){var a=r[i],o=t[a];e(o)&&(n[a]=o)}return n}exports.pick=pick;function has(t,e){return isObject(t)?t.hasOwnProperty(e):!1}exports.has=has;function contains(t,e){return find(t,function(r){return r===e})!==void 0}exports.contains=contains;function cloneArr(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r]);return e}exports.cloneArr=cloneArr;function cloneObj(t){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}exports.cloneObj=cloneObj;function find(t,e){for(var r=0;r<t.length;r++){var n=t[r];if(e.call(null,n))return n}}exports.find=find;function findAll(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}return r}exports.findAll=findAll;function reduce(t,e,r){for(var n=Array.isArray(t),i=n?t:values(t),a=n?[]:keys(t),o=r,s=0;s<i.length;s++)o=e.call(null,o,i[s],n?s:a[s]);return o}exports.reduce=reduce;function compact(t){return reject(t,function(e){return e==null})}exports.compact=compact;function uniq(t,e){e===void 0&&(e=function(n){return n});var r=[];return reduce(t,function(n,i){var a=e(i);return contains(r,a)?n:(r.push(a),n.concat(i))},[])}exports.uniq=uniq;function partial(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=[null],i=n.concat(e);return Function.bind.apply(t,i)}exports.partial=partial;function isArray(t){return Array.isArray(t)}exports.isArray=isArray;function isRegExp(t){return t instanceof RegExp}exports.isRegExp=isRegExp;function isObject(t){return t instanceof Object}exports.isObject=isObject;function every(t,e){for(var r=0;r<t.length;r++)if(!e(t[r],r))return!1;return!0}exports.every=every;function difference(t,e){return reject(t,function(r){return contains(e,r)})}exports.difference=difference;function some(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return!0;return!1}exports.some=some;function indexOf(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return r;return-1}exports.indexOf=indexOf;function sortBy(t,e){var r=cloneArr(t);return r.sort(function(n,i){return e(n)-e(i)}),r}exports.sortBy=sortBy;function zipObject(t,e){if(t.length!==e.length)throw Error("can't zipObject with different number of keys and values!");for(var r={},n=0;n<t.length;n++)r[t[n]]=e[n];return r}exports.zipObject=zipObject;function assign(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],a=keys(i),o=0;o<a.length;o++){var s=a[o];t[s]=i[s]}return t}exports.assign=assign;function assignNoOverwrite(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],a=keys(i),o=0;o<a.length;o++){var s=a[o];has(t,s)||(t[s]=i[s])}return t}exports.assignNoOverwrite=assignNoOverwrite;function defaults(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return assignNoOverwrite.apply(void 0,__spreadArray([{}],t))}exports.defaults=defaults;function groupBy(t,e){var r={};return forEach(t,function(n){var i=e(n),a=r[i];a?a.push(n):r[i]=[n]}),r}exports.groupBy=groupBy;function merge(t,e){for(var r=cloneObj(t),n=keys(e),i=0;i<n.length;i++){var a=n[i],o=e[a];r[a]=o}return r}exports.merge=merge;function NOOP(){}exports.NOOP=NOOP;function IDENTITY(t){return t}exports.IDENTITY=IDENTITY;function packArray(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];e.push(n!==void 0?n:void 0)}return e}exports.packArray=packArray;function PRINT_ERROR(t){console&&console.error&&console.error("Error: "+t)}exports.PRINT_ERROR=PRINT_ERROR;function PRINT_WARNING(t){console&&console.warn&&console.warn("Warning: "+t)}exports.PRINT_WARNING=PRINT_WARNING;function isES2015MapSupported(){return typeof Map=="function"}exports.isES2015MapSupported=isES2015MapSupported;function peek(t){return t[t.length-1]}exports.peek=peek;function timer(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}}exports.timer=timer;function toFastProperties(toBecomeFast){function FakeConstructor(){}FakeConstructor.prototype=toBecomeFast;var fakeInstance=new FakeConstructor;function fakeAccess(){return typeof fakeInstance.bar}return fakeAccess(),fakeAccess(),toBecomeFast;eval(toBecomeFast)}exports.toFastProperties=toFastProperties});var xt=R((sn,St)=>{(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof St=="object"&&St.exports?St.exports=e():t.regexpToAst=e()})(typeof self!="undefined"?self:sn,function(){function t(){}t.prototype.saveState=function(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}},t.prototype.restoreState=function(u){this.idx=u.idx,this.input=u.input,this.groupIdx=u.groupIdx},t.prototype.pattern=function(u){this.idx=0,this.input=u,this.groupIdx=0,this.consumeChar("/");var d=this.disjunction();this.consumeChar("/");for(var A={type:"Flags",loc:{begin:this.idx,end:u.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};this.isRegExpFlag();)switch(this.popChar()){case"g":o(A,"global");break;case"i":o(A,"ignoreCase");break;case"m":o(A,"multiLine");break;case"u":o(A,"unicode");break;case"y":o(A,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:A,value:d,loc:this.loc(0)}},t.prototype.disjunction=function(){var u=[],d=this.idx;for(u.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),u.push(this.alternative());return{type:"Disjunction",value:u,loc:this.loc(d)}},t.prototype.alternative=function(){for(var u=[],d=this.idx;this.isTerm();)u.push(this.term());return{type:"Alternative",value:u,loc:this.loc(d)}},t.prototype.term=function(){return this.isAssertion()?this.assertion():this.atom()},t.prototype.assertion=function(){var u=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(u)};case"$":return{type:"EndAnchor",loc:this.loc(u)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(u)};case"B":return{type:"NonWordBoundary",loc:this.loc(u)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");var d;switch(this.popChar()){case"=":d="Lookahead";break;case"!":d="NegativeLookahead";break}s(d);var A=this.disjunction();return this.consumeChar(")"),{type:d,value:A,loc:this.loc(u)}}c()},t.prototype.quantifier=function(u){var d,A=this.idx;switch(this.popChar()){case"*":d={atLeast:0,atMost:Infinity};break;case"+":d={atLeast:1,atMost:Infinity};break;case"?":d={atLeast:0,atMost:1};break;case"{":var _=this.integerIncludingZero();switch(this.popChar()){case"}":d={atLeast:_,atMost:_};break;case",":var g;this.isDigit()?(g=this.integerIncludingZero(),d={atLeast:_,atMost:g}):d={atLeast:_,atMost:Infinity},this.consumeChar("}");break}if(u===!0&&d===void 0)return;s(d);break}if(!(u===!0&&d===void 0))return s(d),this.peekChar(0)==="?"?(this.consumeChar("?"),d.greedy=!1):d.greedy=!0,d.type="Quantifier",d.loc=this.loc(A),d},t.prototype.atom=function(){var u,d=this.idx;switch(this.peekChar()){case".":u=this.dotAll();break;case"\\":u=this.atomEscape();break;case"[":u=this.characterClass();break;case"(":u=this.group();break}return u===void 0&&this.isPatternCharacter()&&(u=this.patternCharacter()),s(u),u.loc=this.loc(d),this.isQuantifier()&&(u.quantifier=this.quantifier()),u},t.prototype.dotAll=function(){return this.consumeChar("."),{type:"Set",complement:!0,value:[i(`
`),i("\r"),i("\u2028"),i("\u2029")]}},t.prototype.atomEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){var u=this.positiveInteger();return{type:"GroupBackReference",value:u}},t.prototype.characterClassEscape=function(){var u,d=!1;switch(this.popChar()){case"d":u=p;break;case"D":u=p,d=!0;break;case"s":u=m;break;case"S":u=m,d=!0;break;case"w":u=l;break;case"W":u=l,d=!0;break}return s(u),{type:"Set",value:u,complement:d}},t.prototype.controlEscapeAtom=function(){var u;switch(this.popChar()){case"f":u=i("\f");break;case"n":u=i(`
`);break;case"r":u=i("\r");break;case"t":u=i("	");break;case"v":u=i("\v");break}return s(u),{type:"Character",value:u}},t.prototype.controlLetterEscapeAtom=function(){this.consumeChar("c");var u=this.popChar();if(/[a-zA-Z]/.test(u)===!1)throw Error("Invalid ");var d=u.toUpperCase().charCodeAt(0)-64;return{type:"Character",value:d}},t.prototype.nulCharacterAtom=function(){return this.consumeChar("0"),{type:"Character",value:i("\0")}},t.prototype.hexEscapeSequenceAtom=function(){return this.consumeChar("x"),this.parseHexDigits(2)},t.prototype.regExpUnicodeEscapeSequenceAtom=function(){return this.consumeChar("u"),this.parseHexDigits(4)},t.prototype.identityEscapeAtom=function(){var u=this.popChar();return{type:"Character",value:i(u)}},t.prototype.classPatternCharacterAtom=function(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:var u=this.popChar();return{type:"Character",value:i(u)}}},t.prototype.characterClass=function(){var u=[],d=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),d=!0);this.isClassAtom();){var A=this.classAtom(),_=A.type==="Character";if(_&&this.isRangeDash()){this.consumeChar("-");var g=this.classAtom(),y=g.type==="Character";if(y){if(g.value<A.value)throw Error("Range out of order in character class");u.push({from:A.value,to:g.value})}else a(A.value,u),u.push(i("-")),a(g.value,u)}else a(A.value,u)}return this.consumeChar("]"),{type:"Set",complement:d,value:u}},t.prototype.classAtom=function(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:i("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){var u=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),u=!1;break;default:this.groupIdx++;break}var d=this.disjunction();this.consumeChar(")");var A={type:"Group",capturing:u,value:d};return u&&(A.idx=this.groupIdx),A},t.prototype.positiveInteger=function(){var u=this.popChar();if(n.test(u)===!1)throw Error("Expecting a positive integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.integerIncludingZero=function(){var u=this.popChar();if(r.test(u)===!1)throw Error("Expecting an integer");for(;r.test(this.peekChar(0));)u+=this.popChar();return parseInt(u,10)},t.prototype.patternCharacter=function(){var u=this.popChar();switch(u){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:i(u)}}},t.prototype.isRegExpFlag=function(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}},t.prototype.isRangeDash=function(){return this.peekChar()==="-"&&this.isClassAtom(1)},t.prototype.isDigit=function(){return r.test(this.peekChar(0))},t.prototype.isClassAtom=function(u){switch(u===void 0&&(u=0),this.peekChar(u)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.isTerm=function(){return this.isAtom()||this.isAssertion()},t.prototype.isAtom=function(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}},t.prototype.isAssertion=function(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}},t.prototype.isQuantifier=function(){var u=this.saveState();try{return this.quantifier(!0)!==void 0}catch(d){return!1}finally{this.restoreState(u)}},t.prototype.isPatternCharacter=function(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}},t.prototype.parseHexDigits=function(u){for(var d="",A=0;A<u;A++){var _=this.popChar();if(e.test(_)===!1)throw Error("Expecting a HexDecimal digits");d+=_}var g=parseInt(d,16);return{type:"Character",value:g}},t.prototype.peekChar=function(u){return u===void 0&&(u=0),this.input[this.idx+u]},t.prototype.popChar=function(){var u=this.peekChar(0);return this.consumeChar(),u},t.prototype.consumeChar=function(u){if(u!==void 0&&this.input[this.idx]!==u)throw Error("Expected: '"+u+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++},t.prototype.loc=function(u){return{begin:u,end:this.idx}};var e=/[0-9a-fA-F]/,r=/[0-9]/,n=/[1-9]/;function i(u){return u.charCodeAt(0)}function a(u,d){u.length!==void 0?u.forEach(function(A){d.push(A)}):d.push(u)}function o(u,d){if(u[d]===!0)throw"duplicate flag "+d;u[d]=!0}function s(u){if(u===void 0)throw Error("Internal Error - Should never get here!")}function c(){throw Error("Internal Error - Should never get here!")}var f,p=[];for(f=i("0");f<=i("9");f++)p.push(f);var l=[i("_")].concat(p);for(f=i("a");f<=i("z");f++)l.push(f);for(f=i("A");f<=i("Z");f++)l.push(f);var m=[i(" "),i("\f"),i(`
`),i("\r"),i("	"),i("\v"),i("	"),i("\xA0"),i("\u1680"),i("\u2000"),i("\u2001"),i("\u2002"),i("\u2003"),i("\u2004"),i("\u2005"),i("\u2006"),i("\u2007"),i("\u2008"),i("\u2009"),i("\u200A"),i("\u2028"),i("\u2029"),i("\u202F"),i("\u205F"),i("\u3000"),i("\uFEFF")];function v(){}return v.prototype.visitChildren=function(u){for(var d in u){var A=u[d];u.hasOwnProperty(d)&&(A.type!==void 0?this.visit(A):Array.isArray(A)&&A.forEach(function(_){this.visit(_)},this))}},v.prototype.visit=function(u){switch(u.type){case"Pattern":this.visitPattern(u);break;case"Flags":this.visitFlags(u);break;case"Disjunction":this.visitDisjunction(u);break;case"Alternative":this.visitAlternative(u);break;case"StartAnchor":this.visitStartAnchor(u);break;case"EndAnchor":this.visitEndAnchor(u);break;case"WordBoundary":this.visitWordBoundary(u);break;case"NonWordBoundary":this.visitNonWordBoundary(u);break;case"Lookahead":this.visitLookahead(u);break;case"NegativeLookahead":this.visitNegativeLookahead(u);break;case"Character":this.visitCharacter(u);break;case"Set":this.visitSet(u);break;case"Group":this.visitGroup(u);break;case"GroupBackReference":this.visitGroupBackReference(u);break;case"Quantifier":this.visitQuantifier(u);break}this.visitChildren(u)},v.prototype.visitPattern=function(u){},v.prototype.visitFlags=function(u){},v.prototype.visitDisjunction=function(u){},v.prototype.visitAlternative=function(u){},v.prototype.visitStartAnchor=function(u){},v.prototype.visitEndAnchor=function(u){},v.prototype.visitWordBoundary=function(u){},v.prototype.visitNonWordBoundary=function(u){},v.prototype.visitLookahead=function(u){},v.prototype.visitNegativeLookahead=function(u){},v.prototype.visitCharacter=function(u){},v.prototype.visitSet=function(u){},v.prototype.visitGroup=function(u){},v.prototype.visitGroupBackReference=function(u){},v.prototype.visitQuantifier=function(u){},{RegExpParser:t,BaseRegExpVisitor:v,VERSION:"0.5.0"}})});var Lt=R(He=>{"use strict";Object.defineProperty(He,"__esModule",{value:!0});He.clearRegExpParserCache=He.getRegExpAst=void 0;var Ga=xt(),Ct={},Wa=new Ga.RegExpParser;function Ba(t){var e=t.toString();if(Ct.hasOwnProperty(e))return Ct[e];var r=Wa.pattern(e);return Ct[e]=r,r}He.getRegExpAst=Ba;function qa(){Ct={}}He.clearRegExpParserCache=qa});var pn=R(re=>{"use strict";var ja=re&&re.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(re,"__esModule",{value:!0});re.canMatchCharCode=re.firstCharOptimizedIndices=re.getOptimizedStartCodesIndices=re.failedOptimizationPrefixMsg=void 0;var un=xt(),pe=k(),cn=Lt(),Ce=Tr(),ln="Complement Sets are not supported for first char optimization";re.failedOptimizationPrefixMsg=`Unable to use "first char" lexer optimizations:
`;function Va(t,e){e===void 0&&(e=!1);try{var r=cn.getRegExpAst(t),n=Mt(r.value,{},r.flags.ignoreCase);return n}catch(a){if(a.message===ln)e&&pe.PRINT_WARNING(""+re.failedOptimizationPrefixMsg+("	Unable to optimize: < "+t.toString()+` >
`)+`	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{var i="";e&&(i=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),pe.PRINT_ERROR(re.failedOptimizationPrefixMsg+`
`+("	Failed parsing: < "+t.toString()+` >
`)+("	Using the regexp-to-ast library version: "+un.VERSION+`
`)+"	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues"+i)}}return[]}re.getOptimizedStartCodesIndices=Va;function Mt(t,e,r){switch(t.type){case"Disjunction":for(var n=0;n<t.value.length;n++)Mt(t.value[n],e,r);break;case"Alternative":for(var i=t.value,n=0;n<i.length;n++){var a=i[n];switch(a.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}var o=a;switch(o.type){case"Character":bt(o.value,e,r);break;case"Set":if(o.complement===!0)throw Error(ln);pe.forEach(o.value,function(f){if(typeof f=="number")bt(f,e,r);else{var p=f;if(r===!0)for(var l=p.from;l<=p.to;l++)bt(l,e,r);else{for(var l=p.from;l<=p.to&&l<Ce.minOptimizationVal;l++)bt(l,e,r);if(p.to>=Ce.minOptimizationVal)for(var m=p.from>=Ce.minOptimizationVal?p.from:Ce.minOptimizationVal,v=p.to,u=Ce.charCodeToOptimizedIndex(m),d=Ce.charCodeToOptimizedIndex(v),A=u;A<=d;A++)e[A]=A}}});break;case"Group":Mt(o.value,e,r);break;default:throw Error("Non Exhaustive Match")}var s=o.quantifier!==void 0&&o.quantifier.atLeast===0;if(o.type==="Group"&&yr(o)===!1||o.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return pe.values(e)}re.firstCharOptimizedIndices=Mt;function bt(t,e,r){var n=Ce.charCodeToOptimizedIndex(t);e[n]=n,r===!0&&Ka(t,e)}function Ka(t,e){var r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){var i=Ce.charCodeToOptimizedIndex(n.charCodeAt(0));e[i]=i}else{var a=r.toLowerCase();if(a!==r){var i=Ce.charCodeToOptimizedIndex(a.charCodeAt(0));e[i]=i}}}function fn(t,e){return pe.find(t.value,function(r){if(typeof r=="number")return pe.contains(e,r);var n=r;return pe.find(e,function(i){return n.from<=i&&i<=n.to})!==void 0})}function yr(t){return t.quantifier&&t.quantifier.atLeast===0?!0:t.value?pe.isArray(t.value)?pe.every(t.value,yr):yr(t.value):!1}var za=function(t){ja(e,t);function e(r){var n=t.call(this)||this;return n.targetCharCodes=r,n.found=!1,n}return e.prototype.visitChildren=function(r){if(this.found!==!0){switch(r.type){case"Lookahead":this.visitLookahead(r);return;case"NegativeLookahead":this.visitNegativeLookahead(r);return}t.prototype.visitChildren.call(this,r)}},e.prototype.visitCharacter=function(r){pe.contains(this.targetCharCodes,r.value)&&(this.found=!0)},e.prototype.visitSet=function(r){r.complement?fn(r,this.targetCharCodes)===void 0&&(this.found=!0):fn(r,this.targetCharCodes)!==void 0&&(this.found=!0)},e}(un.BaseRegExpVisitor);function Ha(t,e){if(e instanceof RegExp){var r=cn.getRegExpAst(e),n=new za(t);return n.visit(r),n.found}else return pe.find(e,function(i){return pe.contains(t,i.charCodeAt(0))})!==void 0}re.canMatchCharCode=Ha});var Tr=R(T=>{"use strict";var hn=T&&T.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(T,"__esModule",{value:!0});T.charCodeToOptimizedIndex=T.minOptimizationVal=T.buildLineBreakIssueMessage=T.LineTerminatorOptimizedTester=T.isShortPattern=T.isCustomPattern=T.cloneEmptyGroups=T.performWarningRuntimeChecks=T.performRuntimeChecks=T.addStickyFlag=T.addStartOfInput=T.findUnreachablePatterns=T.findModesThatDoNotExist=T.findInvalidGroupType=T.findDuplicatePatterns=T.findUnsupportedFlags=T.findStartOfInputAnchor=T.findEmptyMatchRegExps=T.findEndOfInputAnchor=T.findInvalidPatterns=T.findMissingPatterns=T.validatePatterns=T.analyzeTokenTypes=T.enableSticky=T.disableSticky=T.SUPPORT_STICKY=T.MODES=T.DEFAULT_MODE=void 0;var dn=xt(),F=ft(),h=k(),Ye=pn(),vn=Lt(),Ae="PATTERN";T.DEFAULT_MODE="defaultMode";T.MODES="modes";T.SUPPORT_STICKY=typeof new RegExp("(?:)").sticky=="boolean";function Ya(){T.SUPPORT_STICKY=!1}T.disableSticky=Ya;function Xa(){T.SUPPORT_STICKY=!0}T.enableSticky=Xa;function Za(t,e){e=h.defaults(e,{useSticky:T.SUPPORT_STICKY,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:function(g,y){return y()}});var r=e.tracer;r("initCharCodeToOptimizedIndexMap",function(){$a()});var n;r("Reject Lexer.NA",function(){n=h.reject(t,function(g){return g[Ae]===F.Lexer.NA})});var i=!1,a;r("Transform Patterns",function(){i=!1,a=h.map(n,function(g){var y=g[Ae];if(h.isRegExp(y)){var b=y.source;return b.length===1&&b!=="^"&&b!=="$"&&b!=="."&&!y.ignoreCase?b:b.length===2&&b[0]==="\\"&&!h.contains(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],b[1])?b[1]:e.useSticky?gr(y):_r(y)}else{if(h.isFunction(y))return i=!0,{exec:y};if(h.has(y,"exec"))return i=!0,y;if(typeof y=="string"){if(y.length===1)return y;var L=y.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),se=new RegExp(L);return e.useSticky?gr(se):_r(se)}else throw Error("non exhaustive match")}})});var o,s,c,f,p;r("misc mapping",function(){o=h.map(n,function(g){return g.tokenTypeIdx}),s=h.map(n,function(g){var y=g.GROUP;if(y!==F.Lexer.SKIPPED){if(h.isString(y))return y;if(h.isUndefined(y))return!1;throw Error("non exhaustive match")}}),c=h.map(n,function(g){var y=g.LONGER_ALT;if(y){var b=h.indexOf(n,y);return b}}),f=h.map(n,function(g){return g.PUSH_MODE}),p=h.map(n,function(g){return h.has(g,"POP_MODE")})});var l;r("Line Terminator Handling",function(){var g=Tn(e.lineTerminatorCharacters);l=h.map(n,function(y){return!1}),e.positionTracking!=="onlyOffset"&&(l=h.map(n,function(y){if(h.has(y,"LINE_BREAKS"))return y.LINE_BREAKS;if(En(y,g)===!1)return Ye.canMatchCharCode(g,y.PATTERN)}))});var m,v,u,d;r("Misc Mapping #2",function(){m=h.map(n,Ar),v=h.map(a,mn),u=h.reduce(n,function(g,y){var b=y.GROUP;return h.isString(b)&&b!==F.Lexer.SKIPPED&&(g[b]=[]),g},{}),d=h.map(a,function(g,y){return{pattern:a[y],longerAlt:c[y],canLineTerminator:l[y],isCustom:m[y],short:v[y],group:s[y],push:f[y],pop:p[y],tokenTypeIdx:o[y],tokenType:n[y]}})});var A=!0,_=[];return e.safeMode||r("First Char Optimization",function(){_=h.reduce(n,function(g,y,b){if(typeof y.PATTERN=="string"){var L=y.PATTERN.charCodeAt(0),se=Or(L);Rr(g,se,d[b])}else if(h.isArray(y.START_CHARS_HINT)){var fe;h.forEach(y.START_CHARS_HINT,function(ue){var Q=typeof ue=="string"?ue.charCodeAt(0):ue,te=Or(Q);fe!==te&&(fe=te,Rr(g,te,d[b]))})}else if(h.isRegExp(y.PATTERN))if(y.PATTERN.unicode)A=!1,e.ensureOptimizations&&h.PRINT_ERROR(""+Ye.failedOptimizationPrefixMsg+("	Unable to analyze < "+y.PATTERN.toString()+` > pattern.
`)+`	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{var Z=Ye.getOptimizedStartCodesIndices(y.PATTERN,e.ensureOptimizations);h.isEmpty(Z)&&(A=!1),h.forEach(Z,function(ue){Rr(g,ue,d[b])})}else e.ensureOptimizations&&h.PRINT_ERROR(""+Ye.failedOptimizationPrefixMsg+("	TokenType: <"+y.name+`> is using a custom token pattern without providing <start_chars_hint> parameter.
`)+`	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),A=!1;return g},[])}),r("ArrayPacking",function(){_=h.packArray(_)}),{emptyGroups:u,patternIdxToConfig:d,charCodeToPatternIdxToConfig:_,hasCustom:i,canBeOptimized:A}}T.analyzeTokenTypes=Za;function Ja(t,e){var r=[],n=yn(t);r=r.concat(n.errors);var i=_n(n.valid),a=i.valid;return r=r.concat(i.errors),r=r.concat(Qa(a)),r=r.concat(gn(a)),r=r.concat(An(a,e)),r=r.concat(Rn(a)),r}T.validatePatterns=Ja;function Qa(t){var e=[],r=h.filter(t,function(n){return h.isRegExp(n[Ae])});return e=e.concat(On(r)),e=e.concat(In(r)),e=e.concat(kn(r)),e=e.concat(Pn(r)),e=e.concat(Nn(r)),e}function yn(t){var e=h.filter(t,function(i){return!h.has(i,Ae)}),r=h.map(e,function(i){return{message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:F.LexerDefinitionErrorType.MISSING_PATTERN,tokenTypes:[i]}}),n=h.difference(t,e);return{errors:r,valid:n}}T.findMissingPatterns=yn;function _n(t){var e=h.filter(t,function(i){var a=i[Ae];return!h.isRegExp(a)&&!h.isFunction(a)&&!h.has(a,"exec")&&!h.isString(a)}),r=h.map(e,function(i){return{message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:F.LexerDefinitionErrorType.INVALID_PATTERN,tokenTypes:[i]}}),n=h.difference(t,e);return{errors:r,valid:n}}T.findInvalidPatterns=_n;var eo=/[^\\][\$]/;function On(t){var e=function(i){hn(a,i);function a(){var o=i!==null&&i.apply(this,arguments)||this;return o.found=!1,o}return a.prototype.visitEndAnchor=function(o){this.found=!0},a}(dn.BaseRegExpVisitor),r=h.filter(t,function(i){var a=i[Ae];try{var o=vn.getRegExpAst(a),s=new e;return s.visit(o),s.found}catch(c){return eo.test(a.source)}}),n=h.map(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:F.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}T.findEndOfInputAnchor=On;function Nn(t){var e=h.filter(t,function(n){var i=n[Ae];return i.test("")}),r=h.map(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:F.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,tokenTypes:[n]}});return r}T.findEmptyMatchRegExps=Nn;var to=/[^\\[][\^]|^\^/;function In(t){var e=function(i){hn(a,i);function a(){var o=i!==null&&i.apply(this,arguments)||this;return o.found=!1,o}return a.prototype.visitStartAnchor=function(o){this.found=!0},a}(dn.BaseRegExpVisitor),r=h.filter(t,function(i){var a=i[Ae];try{var o=vn.getRegExpAst(a),s=new e;return s.visit(o),s.found}catch(c){return to.test(a.source)}}),n=h.map(r,function(i){return{message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:F.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,tokenTypes:[i]}});return n}T.findStartOfInputAnchor=In;function kn(t){var e=h.filter(t,function(n){var i=n[Ae];return i instanceof RegExp&&(i.multiline||i.global)}),r=h.map(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:F.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}});return r}T.findUnsupportedFlags=kn;function Pn(t){var e=[],r=h.map(t,function(a){return h.reduce(t,function(o,s){return a.PATTERN.source===s.PATTERN.source&&!h.contains(e,s)&&s.PATTERN!==F.Lexer.NA&&(e.push(s),o.push(s)),o},[])});r=h.compact(r);var n=h.filter(r,function(a){return a.length>1}),i=h.map(n,function(a){var o=h.map(a,function(c){return c.name}),s=h.first(a).PATTERN;return{message:"The same RegExp pattern ->"+s+"<-"+("has been used in all of the following Token Types: "+o.join(", ")+" <-"),type:F.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,tokenTypes:a}});return i}T.findDuplicatePatterns=Pn;function gn(t){var e=h.filter(t,function(n){if(!h.has(n,"GROUP"))return!1;var i=n.GROUP;return i!==F.Lexer.SKIPPED&&i!==F.Lexer.NA&&!h.isString(i)}),r=h.map(e,function(n){return{message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:F.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}});return r}T.findInvalidGroupType=gn;function An(t,e){var r=h.filter(t,function(i){return i.PUSH_MODE!==void 0&&!h.contains(e,i.PUSH_MODE)}),n=h.map(r,function(i){var a="Token Type: ->"+i.name+"<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->"+i.PUSH_MODE+"<-which does not exist";return{message:a,type:F.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}});return n}T.findModesThatDoNotExist=An;function Rn(t){var e=[],r=h.reduce(t,function(n,i,a){var o=i.PATTERN;return o===F.Lexer.NA||(h.isString(o)?n.push({str:o,idx:a,tokenType:i}):h.isRegExp(o)&&no(o)&&n.push({str:o.source,idx:a,tokenType:i})),n},[]);return h.forEach(t,function(n,i){h.forEach(r,function(a){var o=a.str,s=a.idx,c=a.tokenType;if(i<s&&ro(o,n.PATTERN)){var f="Token: ->"+c.name+`<- can never be matched.
`+("Because it appears AFTER the Token Type ->"+n.name+"<-")+`in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:f,type:F.LexerDefinitionErrorType.UNREACHABLE_PATTERN,tokenTypes:[n,c]})}})}),e}T.findUnreachablePatterns=Rn;function ro(t,e){if(h.isRegExp(e)){var r=e.exec(t);return r!==null&&r.index===0}else{if(h.isFunction(e))return e(t,0,[],{});if(h.has(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function no(t){var e=[".","\\","[","]","|","^","$","(",")","?","*","+","{"];return h.find(e,function(r){return t.source.indexOf(r)!==-1})===void 0}function _r(t){var e=t.ignoreCase?"i":"";return new RegExp("^(?:"+t.source+")",e)}T.addStartOfInput=_r;function gr(t){var e=t.ignoreCase?"iy":"y";return new RegExp(""+t.source,e)}T.addStickyFlag=gr;function io(t,e,r){var n=[];return h.has(t,T.DEFAULT_MODE)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+T.DEFAULT_MODE+`> property in its definition
`,type:F.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),h.has(t,T.MODES)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+T.MODES+`> property in its definition
`,type:F.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),h.has(t,T.MODES)&&h.has(t,T.DEFAULT_MODE)&&!h.has(t.modes,t.defaultMode)&&n.push({message:"A MultiMode Lexer cannot be initialized with a "+T.DEFAULT_MODE+": <"+t.defaultMode+`>which does not exist
`,type:F.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),h.has(t,T.MODES)&&h.forEach(t.modes,function(i,a){h.forEach(i,function(o,s){h.isUndefined(o)&&n.push({message:"A Lexer cannot be initialized using an undefined Token Type. Mode:"+("<"+a+"> at index: <"+s+`>
`),type:F.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED})})}),n}T.performRuntimeChecks=io;function ao(t,e,r){var n=[],i=!1,a=h.compact(h.flatten(h.mapValues(t.modes,function(c){return c}))),o=h.reject(a,function(c){return c[Ae]===F.Lexer.NA}),s=Tn(r);return e&&h.forEach(o,function(c){var f=En(c,s);if(f!==!1){var p=Sn(c,f),l={message:p,type:f.issue,tokenType:c};n.push(l)}else h.has(c,"LINE_BREAKS")?c.LINE_BREAKS===!0&&(i=!0):Ye.canMatchCharCode(s,c.PATTERN)&&(i=!0)}),e&&!i&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS
	for details.`,type:F.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS}),n}T.performWarningRuntimeChecks=ao;function oo(t){var e={},r=h.keys(t);return h.forEach(r,function(n){var i=t[n];if(h.isArray(i))e[n]=[];else throw Error("non exhaustive match")}),e}T.cloneEmptyGroups=oo;function Ar(t){var e=t.PATTERN;if(h.isRegExp(e))return!1;if(h.isFunction(e))return!0;if(h.has(e,"exec"))return!0;if(h.isString(e))return!1;throw Error("non exhaustive match")}T.isCustomPattern=Ar;function mn(t){return h.isString(t)&&t.length===1?t.charCodeAt(0):!1}T.isShortPattern=mn;T.LineTerminatorOptimizedTester={test:function(t){for(var e=t.length,r=this.lastIndex;r<e;r++){var n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function En(t,e){if(h.has(t,"LINE_BREAKS"))return!1;if(h.isRegExp(t.PATTERN)){try{Ye.canMatchCharCode(e,t.PATTERN)}catch(r){return{issue:F.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(h.isString(t.PATTERN))return!1;if(Ar(t))return{issue:F.LexerDefinitionErrorType.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function Sn(t,e){if(e.issue===F.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
`+("	The problem is in the <"+t.name+`> Token Type
`)+("	 Root cause: "+e.errMsg+`.
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";if(e.issue===F.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
`+("	The problem is in the <"+t.name+`> Token Type
`)+"	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";throw Error("non exhaustive match")}T.buildLineBreakIssueMessage=Sn;function Tn(t){var e=h.map(t,function(r){return h.isString(r)&&r.length>0?r.charCodeAt(0):r});return e}function Rr(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}T.minOptimizationVal=256;var Ft=[];function Or(t){return t<T.minOptimizationVal?t:Ft[t]}T.charCodeToOptimizedIndex=Or;function $a(){if(h.isEmpty(Ft)){Ft=new Array(65536);for(var t=0;t<65536;t++)Ft[t]=t>255?255+~~(t/255):t}}});var Xe=R(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.isTokenType=N.hasExtendingTokensTypesMapProperty=N.hasExtendingTokensTypesProperty=N.hasCategoriesProperty=N.hasShortKeyProperty=N.singleAssignCategoriesToksMap=N.assignCategoriesMapProp=N.assignCategoriesTokensProp=N.assignTokenDefaultProps=N.expandCategories=N.augmentTokenTypes=N.tokenIdxToClass=N.tokenShortNameIdx=N.tokenStructuredMatcherNoCategories=N.tokenStructuredMatcher=void 0;var V=k();function so(t,e){var r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}N.tokenStructuredMatcher=so;function uo(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}N.tokenStructuredMatcherNoCategories=uo;N.tokenShortNameIdx=1;N.tokenIdxToClass={};function co(t){var e=xn(t);Cn(e),Mn(e),Ln(e),V.forEach(e,function(r){r.isParent=r.categoryMatches.length>0})}N.augmentTokenTypes=co;function xn(t){for(var e=V.cloneArr(t),r=t,n=!0;n;){r=V.compact(V.flatten(V.map(r,function(a){return a.CATEGORIES})));var i=V.difference(r,e);e=e.concat(i),V.isEmpty(i)?n=!1:r=i}return e}N.expandCategories=xn;function Cn(t){V.forEach(t,function(e){bn(e)||(N.tokenIdxToClass[N.tokenShortNameIdx]=e,e.tokenTypeIdx=N.tokenShortNameIdx++),Nr(e)&&!V.isArray(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),Nr(e)||(e.CATEGORIES=[]),Fn(e)||(e.categoryMatches=[]),wn(e)||(e.categoryMatchesMap={})})}N.assignTokenDefaultProps=Cn;function Ln(t){V.forEach(t,function(e){e.categoryMatches=[],V.forEach(e.categoryMatchesMap,function(r,n){e.categoryMatches.push(N.tokenIdxToClass[n].tokenTypeIdx)})})}N.assignCategoriesTokensProp=Ln;function Mn(t){V.forEach(t,function(e){Ir([],e)})}N.assignCategoriesMapProp=Mn;function Ir(t,e){V.forEach(t,function(r){e.categoryMatchesMap[r.tokenTypeIdx]=!0}),V.forEach(e.CATEGORIES,function(r){var n=t.concat(e);V.contains(n,r)||Ir(n,r)})}N.singleAssignCategoriesToksMap=Ir;function bn(t){return V.has(t,"tokenTypeIdx")}N.hasShortKeyProperty=bn;function Nr(t){return V.has(t,"CATEGORIES")}N.hasCategoriesProperty=Nr;function Fn(t){return V.has(t,"categoryMatches")}N.hasExtendingTokensTypesProperty=Fn;function wn(t){return V.has(t,"categoryMatchesMap")}N.hasExtendingTokensTypesMapProperty=wn;function lo(t){return V.has(t,"tokenTypeIdx")}N.isTokenType=lo});var kr=R(wt=>{"use strict";Object.defineProperty(wt,"__esModule",{value:!0});wt.defaultLexerErrorProvider=void 0;wt.defaultLexerErrorProvider={buildUnableToPopLexerModeMessage:function(t){return"Unable to pop Lexer Mode after encountering Token ->"+t.image+"<- The Mode Stack is empty"},buildUnexpectedCharactersMessage:function(t,e,r,n,i){return"unexpected character: ->"+t.charAt(e)+"<- at offset: "+e+","+(" skipped "+r+" characters.")}}});var ft=R(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});qe.Lexer=qe.LexerDefinitionErrorType=void 0;var Ee=Tr(),w=k(),fo=Xe(),po=kr(),ho=Lt(),vo;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK"})(vo=qe.LexerDefinitionErrorType||(qe.LexerDefinitionErrorType={}));var pt={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:po.defaultLexerErrorProvider,traceInitPerf:!1,skipValidations:!1};Object.freeze(pt);var mo=function(){function t(e,r){var n=this;if(r===void 0&&(r=pt),this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.config=void 0,this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=w.merge(pt,r);var i=this.config.traceInitPerf;i===!0?(this.traceInitMaxIdent=Infinity,this.traceInitPerf=!0):typeof i=="number"&&(this.traceInitMaxIdent=i,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",function(){var a,o=!0;n.TRACE_INIT("Lexer Config handling",function(){if(n.config.lineTerminatorsPattern===pt.lineTerminatorsPattern)n.config.lineTerminatorsPattern=Ee.LineTerminatorOptimizedTester;else if(n.config.lineTerminatorCharacters===pt.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');n.trackStartLines=/full|onlyStart/i.test(n.config.positionTracking),n.trackEndLines=/full/i.test(n.config.positionTracking),w.isArray(e)?(a={modes:{}},a.modes[Ee.DEFAULT_MODE]=w.cloneArr(e),a[Ee.DEFAULT_MODE]=Ee.DEFAULT_MODE):(o=!1,a=w.cloneObj(e))}),n.config.skipValidations===!1&&(n.TRACE_INIT("performRuntimeChecks",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat(Ee.performRuntimeChecks(a,n.trackStartLines,n.config.lineTerminatorCharacters))}),n.TRACE_INIT("performWarningRuntimeChecks",function(){n.lexerDefinitionWarning=n.lexerDefinitionWarning.concat(Ee.performWarningRuntimeChecks(a,n.trackStartLines,n.config.lineTerminatorCharacters))})),a.modes=a.modes?a.modes:{},w.forEach(a.modes,function(p,l){a.modes[l]=w.reject(p,function(m){return w.isUndefined(m)})});var s=w.keys(a.modes);if(w.forEach(a.modes,function(p,l){n.TRACE_INIT("Mode: <"+l+"> processing",function(){if(n.modes.push(l),n.config.skipValidations===!1&&n.TRACE_INIT("validatePatterns",function(){n.lexerDefinitionErrors=n.lexerDefinitionErrors.concat(Ee.validatePatterns(p,s))}),w.isEmpty(n.lexerDefinitionErrors)){fo.augmentTokenTypes(p);var m;n.TRACE_INIT("analyzeTokenTypes",function(){m=Ee.analyzeTokenTypes(p,{lineTerminatorCharacters:n.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:n.TRACE_INIT.bind(n)})}),n.patternIdxToConfig[l]=m.patternIdxToConfig,n.charCodeToPatternIdxToConfig[l]=m.charCodeToPatternIdxToConfig,n.emptyGroups=w.merge(n.emptyGroups,m.emptyGroups),n.hasCustom=m.hasCustom||n.hasCustom,n.canModeBeOptimized[l]=m.canBeOptimized}})}),n.defaultMode=a.defaultMode,!w.isEmpty(n.lexerDefinitionErrors)&&!n.config.deferDefinitionErrorsHandling){var c=w.map(n.lexerDefinitionErrors,function(p){return p.message}),f=c.join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+f)}w.forEach(n.lexerDefinitionWarning,function(p){w.PRINT_WARNING(p.message)}),n.TRACE_INIT("Choosing sub-methods implementations",function(){if(Ee.SUPPORT_STICKY?(n.chopInput=w.IDENTITY,n.match=n.matchWithTest):(n.updateLastIndex=w.NOOP,n.match=n.matchWithExec),o&&(n.handleModes=w.NOOP),n.trackStartLines===!1&&(n.computeNewColumn=w.IDENTITY),n.trackEndLines===!1&&(n.updateTokenEndLineColumnLocation=w.NOOP),/full/i.test(n.config.positionTracking))n.createTokenInstance=n.createFullToken;else if(/onlyStart/i.test(n.config.positionTracking))n.createTokenInstance=n.createStartOnlyToken;else if(/onlyOffset/i.test(n.config.positionTracking))n.createTokenInstance=n.createOffsetOnlyToken;else throw Error('Invalid <positionTracking> config option: "'+n.config.positionTracking+'"');n.hasCustom?(n.addToken=n.addTokenUsingPush,n.handlePayload=n.handlePayloadWithCustom):(n.addToken=n.addTokenUsingMemberAccess,n.handlePayload=n.handlePayloadNoCustom)}),n.TRACE_INIT("Failed Optimization Warnings",function(){var p=w.reduce(n.canModeBeOptimized,function(l,m,v){return m===!1&&l.push(v),l},[]);if(r.ensureOptimizations&&!w.isEmpty(p))throw Error("Lexer Modes: < "+p.join(", ")+` > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),n.TRACE_INIT("clearRegExpParserCache",function(){ho.clearRegExpParserCache()}),n.TRACE_INIT("toFastProperties",function(){w.toFastProperties(n)})})}return t.prototype.tokenize=function(e,r){if(r===void 0&&(r=this.defaultMode),!w.isEmpty(this.lexerDefinitionErrors)){var n=w.map(this.lexerDefinitionErrors,function(o){return o.message}),i=n.join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}var a=this.tokenizeInternal(e,r);return a},t.prototype.tokenizeInternal=function(e,r){var n=this,i,a,o,s,c,f,p,l,m,v,u,d,A,_,g,y=e,b=y.length,L=0,se=0,fe=this.hasCustom?0:Math.floor(e.length/10),Z=new Array(fe),ue=[],Q=this.trackStartLines?1:void 0,te=this.trackStartLines?1:void 0,xe=Ee.cloneEmptyGroups(this.emptyGroups),it=this.trackStartLines,at=this.config.lineTerminatorsPattern,Ke=0,we=[],ot=[],It=[],Qr=[];Object.freeze(Qr);var st=void 0;function Jr(){return we}function en(J){var lt=Ee.charCodeToOptimizedIndex(J),ze=ot[lt];return ze===void 0?Qr:ze}var wa=function(J){if(It.length===1&&J.tokenType.PUSH_MODE===void 0){var lt=n.config.errorMessageProvider.buildUnableToPopLexerModeMessage(J);ue.push({offset:J.startOffset,line:J.startLine!==void 0?J.startLine:void 0,column:J.startColumn!==void 0?J.startColumn:void 0,length:J.image.length,message:lt})}else{It.pop();var ze=w.last(It);we=n.patternIdxToConfig[ze],ot=n.charCodeToPatternIdxToConfig[ze],Ke=we.length;var Ua=n.canModeBeOptimized[ze]&&n.config.safeMode===!1;ot&&Ua?st=en:st=Jr}};function tn(J){It.push(J),ot=this.charCodeToPatternIdxToConfig[J],we=this.patternIdxToConfig[J],Ke=we.length,Ke=we.length;var lt=this.canModeBeOptimized[J]&&this.config.safeMode===!1;ot&&lt?st=en:st=Jr}tn.call(this,r);for(var me;L<b;){c=null;var rn=y.charCodeAt(L),nn=st(rn),Da=nn.length;for(i=0;i<Da;i++){me=nn[i];var De=me.pattern;f=null;var ut=me.short;if(ut!==!1?rn===ut&&(c=De):me.isCustom===!0?(g=De.exec(y,L,Z,xe),g!==null?(c=g[0],g.payload!==void 0&&(f=g.payload)):c=null):(this.updateLastIndex(De,L),c=this.match(De,e,L)),c!==null){if(s=me.longerAlt,s!==void 0){var fr=we[s],pr=fr.pattern;p=null,fr.isCustom===!0?(g=pr.exec(y,L,Z,xe),g!==null?(o=g[0],g.payload!==void 0&&(p=g.payload)):o=null):(this.updateLastIndex(pr,L),o=this.match(pr,e,L)),o&&o.length>c.length&&(c=o,f=p,me=fr)}break}}if(c!==null){if(l=c.length,m=me.group,m!==void 0&&(v=me.tokenTypeIdx,u=this.createTokenInstance(c,L,v,me.tokenType,Q,te,l),this.handlePayload(u,f),m===!1?se=this.addToken(Z,se,u):xe[m].push(u)),e=this.chopInput(e,l),L=L+l,te=this.computeNewColumn(te,l),it===!0&&me.canLineTerminator===!0){var kt=0,hr=void 0,dr=void 0;at.lastIndex=0;do hr=at.test(c),hr===!0&&(dr=at.lastIndex-1,kt++);while(hr===!0);kt!==0&&(Q=Q+kt,te=l-dr,this.updateTokenEndLineColumnLocation(u,m,dr,kt,Q,te,l))}this.handleModes(me,wa,tn,u)}else{for(var vr=L,an=Q,on=te,ct=!1;!ct&&L<b;)for(A=y.charCodeAt(L),e=this.chopInput(e,1),L++,a=0;a<Ke;a++){var mr=we[a],De=mr.pattern,ut=mr.short;if(ut!==!1?y.charCodeAt(L)===ut&&(ct=!0):mr.isCustom===!0?ct=De.exec(y,L,Z,xe)!==null:(this.updateLastIndex(De,L),ct=De.exec(e)!==null),ct===!0)break}d=L-vr,_=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(y,vr,d,an,on),ue.push({offset:vr,line:an,column:on,length:d,message:_})}}return this.hasCustom||(Z.length=se),{tokens:Z,groups:xe,errors:ue}},t.prototype.handleModes=function(e,r,n,i){if(e.pop===!0){var a=e.push;r(i),a!==void 0&&n.call(this,a)}else e.push!==void 0&&n.call(this,e.push)},t.prototype.chopInput=function(e,r){return e.substring(r)},t.prototype.updateLastIndex=function(e,r){e.lastIndex=r},t.prototype.updateTokenEndLineColumnLocation=function(e,r,n,i,a,o,s){var c,f;r!==void 0&&(c=n===s-1,f=c?-1:0,i===1&&c===!0||(e.endLine=a+f,e.endColumn=o-1+-f))},t.prototype.computeNewColumn=function(e,r){return e+r},t.prototype.createTokenInstance=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return null},t.prototype.createOffsetOnlyToken=function(e,r,n,i){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:i}},t.prototype.createStartOnlyToken=function(e,r,n,i,a,o){return{image:e,startOffset:r,startLine:a,startColumn:o,tokenTypeIdx:n,tokenType:i}},t.prototype.createFullToken=function(e,r,n,i,a,o,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:a,endLine:a,startColumn:o,endColumn:o+s-1,tokenTypeIdx:n,tokenType:i}},t.prototype.addToken=function(e,r,n){return 666},t.prototype.addTokenUsingPush=function(e,r,n){return e.push(n),r},t.prototype.addTokenUsingMemberAccess=function(e,r,n){return e[r]=n,r++,r},t.prototype.handlePayload=function(e,r){},t.prototype.handlePayloadNoCustom=function(e,r){},t.prototype.handlePayloadWithCustom=function(e,r){r!==null&&(e.payload=r)},t.prototype.match=function(e,r,n){return null},t.prototype.matchWithTest=function(e,r,n){var i=e.test(r);return i===!0?r.substring(n,e.lastIndex):null},t.prototype.matchWithExec=function(e,r){var n=e.exec(r);return n!==null?n[0]:n},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(n+"--> <"+e+">");var i=w.timer(r),a=i.time,o=i.value,s=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(n+"<-- <"+e+"> time: "+a+"ms"),this.traceInitIndent--,o}else return r()},t.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.",t.NA=/NOT_APPLICABLE/,t}();qe.Lexer=mo});var Ue=R(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.tokenMatcher=H.createTokenInstance=H.EOF=H.createToken=H.hasTokenLabel=H.tokenName=H.tokenLabel=void 0;var Te=k(),Eo=ft(),Pr=Xe();function To(t){return Dn(t)?t.LABEL:t.name}H.tokenLabel=To;function yo(t){return t.name}H.tokenName=yo;function Dn(t){return Te.isString(t.LABEL)&&t.LABEL!==""}H.hasTokenLabel=Dn;var _o="parent",Un="categories",Gn="label",Wn="group",Bn="push_mode",qn="pop_mode",jn="longer_alt",Vn="line_breaks",Kn="start_chars_hint";function zn(t){return go(t)}H.createToken=zn;function go(t){var e=t.pattern,r={};if(r.name=t.name,Te.isUndefined(e)||(r.PATTERN=e),Te.has(t,_o))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return Te.has(t,Un)&&(r.CATEGORIES=t[Un]),Pr.augmentTokenTypes([r]),Te.has(t,Gn)&&(r.LABEL=t[Gn]),Te.has(t,Wn)&&(r.GROUP=t[Wn]),Te.has(t,qn)&&(r.POP_MODE=t[qn]),Te.has(t,Bn)&&(r.PUSH_MODE=t[Bn]),Te.has(t,jn)&&(r.LONGER_ALT=t[jn]),Te.has(t,Vn)&&(r.LINE_BREAKS=t[Vn]),Te.has(t,Kn)&&(r.START_CHARS_HINT=t[Kn]),r}H.EOF=zn({name:"EOF",pattern:Eo.Lexer.NA});Pr.augmentTokenTypes([H.EOF]);function Ao(t,e,r,n,i,a,o,s){return{image:e,startOffset:r,endOffset:n,startLine:i,endLine:a,startColumn:o,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}H.createTokenInstance=Ao;function Ro(t,e){return Pr.tokenStructuredMatcher(t,e)}H.tokenMatcher=Ro});var ne=R(S=>{"use strict";var Le=S&&S.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(S,"__esModule",{value:!0});S.serializeProduction=S.serializeGrammar=S.Terminal=S.Alternation=S.RepetitionWithSeparator=S.Repetition=S.RepetitionMandatoryWithSeparator=S.RepetitionMandatory=S.Option=S.Alternative=S.Rule=S.NonTerminal=S.AbstractProduction=void 0;var G=k(),Oo=Ue(),Re=function(){function t(e){this._definition=e}return Object.defineProperty(t.prototype,"definition",{get:function(){return this._definition},set:function(e){this._definition=e},enumerable:!1,configurable:!0}),t.prototype.accept=function(e){e.visit(this),G.forEach(this.definition,function(r){r.accept(e)})},t}();S.AbstractProduction=Re;var Hn=function(t){Le(e,t);function e(r){var n=t.call(this,[])||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this.referencedRule!==void 0?this.referencedRule.definition:[]},set:function(r){},enumerable:!1,configurable:!0}),e.prototype.accept=function(r){r.visit(this)},e}(Re);S.NonTerminal=Hn;var Yn=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.orgText="",G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.Rule=Yn;var Xn=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.ignoreAmbiguities=!1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.Alternative=Xn;var $n=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.Option=$n;var Zn=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.RepetitionMandatory=Zn;var Qn=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.RepetitionMandatoryWithSeparator=Qn;var Jn=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.Repetition=Jn;var ei=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return e}(Re);S.RepetitionWithSeparator=ei;var ti=function(t){Le(e,t);function e(r){var n=t.call(this,r.definition)||this;return n.idx=1,n.ignoreAmbiguities=!1,n.hasPredicates=!1,G.assign(n,G.pick(r,function(i){return i!==void 0})),n}return Object.defineProperty(e.prototype,"definition",{get:function(){return this._definition},set:function(r){this._definition=r},enumerable:!1,configurable:!0}),e}(Re);S.Alternation=ti;var Dt=function(){function t(e){this.idx=1,G.assign(this,G.pick(e,function(r){return r!==void 0}))}return t.prototype.accept=function(e){e.visit(this)},t}();S.Terminal=Dt;function No(t){return G.map(t,ht)}S.serializeGrammar=No;function ht(t){function e(i){return G.map(i,ht)}if(t instanceof Hn)return{type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};if(t instanceof Xn)return{type:"Alternative",definition:e(t.definition)};if(t instanceof $n)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof Zn)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Qn)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:ht(new Dt({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ei)return{type:"RepetitionWithSeparator",idx:t.idx,separator:ht(new Dt({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Jn)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof ti)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Dt){var r={type:"Terminal",name:t.terminalType.name,label:Oo.tokenLabel(t.terminalType),idx:t.idx},n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=G.isRegExp(n)?n.source:n),r}else{if(t instanceof Yn)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}S.serializeProduction=ht});var Gt=R(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.RestWalker=void 0;var Sr=k(),ie=ne(),Io=function(){function t(){}return t.prototype.walk=function(e,r){var n=this;r===void 0&&(r=[]),Sr.forEach(e.definition,function(i,a){var o=Sr.drop(e.definition,a+1);if(i instanceof ie.NonTerminal)n.walkProdRef(i,o,r);else if(i instanceof ie.Terminal)n.walkTerminal(i,o,r);else if(i instanceof ie.Alternative)n.walkFlat(i,o,r);else if(i instanceof ie.Option)n.walkOption(i,o,r);else if(i instanceof ie.RepetitionMandatory)n.walkAtLeastOne(i,o,r);else if(i instanceof ie.RepetitionMandatoryWithSeparator)n.walkAtLeastOneSep(i,o,r);else if(i instanceof ie.RepetitionWithSeparator)n.walkManySep(i,o,r);else if(i instanceof ie.Repetition)n.walkMany(i,o,r);else if(i instanceof ie.Alternation)n.walkOr(i,o,r);else throw Error("non exhaustive match")})},t.prototype.walkTerminal=function(e,r,n){},t.prototype.walkProdRef=function(e,r,n){},t.prototype.walkFlat=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkOption=function(e,r,n){var i=r.concat(n);this.walk(e,i)},t.prototype.walkAtLeastOne=function(e,r,n){var i=[new ie.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkAtLeastOneSep=function(e,r,n){var i=ri(e,r,n);this.walk(e,i)},t.prototype.walkMany=function(e,r,n){var i=[new ie.Option({definition:e.definition})].concat(r,n);this.walk(e,i)},t.prototype.walkManySep=function(e,r,n){var i=ri(e,r,n);this.walk(e,i)},t.prototype.walkOr=function(e,r,n){var i=this,a=r.concat(n);Sr.forEach(e.definition,function(o){var s=new ie.Alternative({definition:[o]});i.walk(s,a)})},t}();Ut.RestWalker=Io;function ri(t,e,r){var n=[new ie.Option({definition:[new ie.Terminal({terminalType:t.separator})].concat(t.definition)})],i=n.concat(e,r);return i}});var $e=R(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.GAstVisitor=void 0;var Oe=ne(),ko=function(){function t(){}return t.prototype.visit=function(e){var r=e;switch(r.constructor){case Oe.NonTerminal:return this.visitNonTerminal(r);case Oe.Alternative:return this.visitAlternative(r);case Oe.Option:return this.visitOption(r);case Oe.RepetitionMandatory:return this.visitRepetitionMandatory(r);case Oe.RepetitionMandatoryWithSeparator:return this.visitRepetitionMandatoryWithSeparator(r);case Oe.RepetitionWithSeparator:return this.visitRepetitionWithSeparator(r);case Oe.Repetition:return this.visitRepetition(r);case Oe.Alternation:return this.visitAlternation(r);case Oe.Terminal:return this.visitTerminal(r);case Oe.Rule:return this.visitRule(r);default:throw Error("non exhaustive match")}},t.prototype.visitNonTerminal=function(e){},t.prototype.visitAlternative=function(e){},t.prototype.visitOption=function(e){},t.prototype.visitRepetition=function(e){},t.prototype.visitRepetitionMandatory=function(e){},t.prototype.visitRepetitionMandatoryWithSeparator=function(e){},t.prototype.visitRepetitionWithSeparator=function(e){},t.prototype.visitAlternation=function(e){},t.prototype.visitTerminal=function(e){},t.prototype.visitRule=function(e){},t}();Wt.GAstVisitor=ko});var vt=R(X=>{"use strict";var Po=X&&X.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(X,"__esModule",{value:!0});X.collectMethods=X.DslMethodsCollectorVisitor=X.getProductionDslName=X.isBranchingProd=X.isOptionalProd=X.isSequenceProd=void 0;var dt=k(),W=ne(),So=$e();function xo(t){return t instanceof W.Alternative||t instanceof W.Option||t instanceof W.Repetition||t instanceof W.RepetitionMandatory||t instanceof W.RepetitionMandatoryWithSeparator||t instanceof W.RepetitionWithSeparator||t instanceof W.Terminal||t instanceof W.Rule}X.isSequenceProd=xo;function xr(t,e){e===void 0&&(e=[]);var r=t instanceof W.Option||t instanceof W.Repetition||t instanceof W.RepetitionWithSeparator;return r?!0:t instanceof W.Alternation?dt.some(t.definition,function(n){return xr(n,e)}):t instanceof W.NonTerminal&&dt.contains(e,t)?!1:t instanceof W.AbstractProduction?(t instanceof W.NonTerminal&&e.push(t),dt.every(t.definition,function(n){return xr(n,e)})):!1}X.isOptionalProd=xr;function Co(t){return t instanceof W.Alternation}X.isBranchingProd=Co;function Lo(t){if(t instanceof W.NonTerminal)return"SUBRULE";if(t instanceof W.Option)return"OPTION";if(t instanceof W.Alternation)return"OR";if(t instanceof W.RepetitionMandatory)return"AT_LEAST_ONE";if(t instanceof W.RepetitionMandatoryWithSeparator)return"AT_LEAST_ONE_SEP";if(t instanceof W.RepetitionWithSeparator)return"MANY_SEP";if(t instanceof W.Repetition)return"MANY";if(t instanceof W.Terminal)return"CONSUME";throw Error("non exhaustive match")}X.getProductionDslName=Lo;var ni=function(t){Po(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.separator="-",r.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]},r}return e.prototype.reset=function(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}},e.prototype.visitTerminal=function(r){var n=r.terminalType.name+this.separator+"Terminal";dt.has(this.dslMethods,n)||(this.dslMethods[n]=[]),this.dslMethods[n].push(r)},e.prototype.visitNonTerminal=function(r){var n=r.nonTerminalName+this.separator+"Terminal";dt.has(this.dslMethods,n)||(this.dslMethods[n]=[]),this.dslMethods[n].push(r)},e.prototype.visitOption=function(r){this.dslMethods.option.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.dslMethods.repetitionWithSeparator.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.dslMethods.repetitionMandatory.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.dslMethods.repetitionMandatoryWithSeparator.push(r)},e.prototype.visitRepetition=function(r){this.dslMethods.repetition.push(r)},e.prototype.visitAlternation=function(r){this.dslMethods.alternation.push(r)},e}(So.GAstVisitor);X.DslMethodsCollectorVisitor=ni;var Bt=new ni;function Mo(t){Bt.reset(),t.accept(Bt);var e=Bt.dslMethods;return Bt.reset(),e}X.collectMethods=Mo});var Lr=R(Ne=>{"use strict";Object.defineProperty(Ne,"__esModule",{value:!0});Ne.firstForTerminal=Ne.firstForBranching=Ne.firstForSequence=Ne.first=void 0;var qt=k(),ii=ne(),Cr=vt();function jt(t){if(t instanceof ii.NonTerminal)return jt(t.referencedRule);if(t instanceof ii.Terminal)return si(t);if(Cr.isSequenceProd(t))return ai(t);if(Cr.isBranchingProd(t))return oi(t);throw Error("non exhaustive match")}Ne.first=jt;function ai(t){for(var e=[],r=t.definition,n=0,i=r.length>n,a,o=!0;i&&o;)a=r[n],o=Cr.isOptionalProd(a),e=e.concat(jt(a)),n=n+1,i=r.length>n;return qt.uniq(e)}Ne.firstForSequence=ai;function oi(t){var e=qt.map(t.definition,function(r){return jt(r)});return qt.uniq(qt.flatten(e))}Ne.firstForBranching=oi;function si(t){return[t.terminalType]}Ne.firstForTerminal=si});var Mr=R(Vt=>{"use strict";Object.defineProperty(Vt,"__esModule",{value:!0});Vt.IN=void 0;Vt.IN="_~IN~_"});var pi=R(he=>{"use strict";var bo=he&&he.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(he,"__esModule",{value:!0});he.buildInProdFollowPrefix=he.buildBetweenProdsFollowPrefix=he.computeAllProdsFollows=he.ResyncFollowsWalker=void 0;var Fo=Gt(),wo=Lr(),ui=k(),ci=Mr(),Do=ne(),fi=function(t){bo(e,t);function e(r){var n=t.call(this)||this;return n.topProd=r,n.follows={},n}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.follows},e.prototype.walkTerminal=function(r,n,i){},e.prototype.walkProdRef=function(r,n,i){var a=li(r.referencedRule,r.idx)+this.topProd.name,o=n.concat(i),s=new Do.Alternative({definition:o}),c=wo.first(s);this.follows[a]=c},e}(Fo.RestWalker);he.ResyncFollowsWalker=fi;function Uo(t){var e={};return ui.forEach(t,function(r){var n=new fi(r).startWalking();ui.assign(e,n)}),e}he.computeAllProdsFollows=Uo;function li(t,e){return t.name+e+ci.IN}he.buildBetweenProdsFollowPrefix=li;function Go(t){var e=t.terminalType.name;return e+t.idx+ci.IN}he.buildInProdFollowPrefix=Go});var mt=R(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.defaultGrammarValidatorErrorProvider=Me.defaultGrammarResolverErrorProvider=Me.defaultParserErrorProvider=void 0;var Ze=Ue(),Wo=k(),ye=k(),br=ne(),hi=vt();Me.defaultParserErrorProvider={buildMismatchTokenMessage:function(t){var e=t.expected,r=t.actual,n=t.previous,i=t.ruleName,a=Ze.hasTokenLabel(e),o=a?"--> "+Ze.tokenLabel(e)+" <--":"token of type --> "+e.name+" <--",s="Expecting "+o+" but found --> '"+r.image+"' <--";return s},buildNotAllInputParsedMessage:function(t){var e=t.firstRedundant,r=t.ruleName;return"Redundant input, expecting EOF but found: "+e.image},buildNoViableAltMessage:function(t){var e=t.expectedPathsPerAlt,r=t.actual,n=t.previous,i=t.customUserDescription,a=t.ruleName,o="Expecting: ",s=ye.first(r).image,c=`
but found: '`+s+"'";if(i)return o+i+c;var f=ye.reduce(e,function(v,u){return v.concat(u)},[]),p=ye.map(f,function(v){return"["+ye.map(v,function(u){return Ze.tokenLabel(u)}).join(", ")+"]"}),l=ye.map(p,function(v,u){return"  "+(u+1)+". "+v}),m=`one of these possible Token sequences:
`+l.join(`
`);return o+m+c},buildEarlyExitMessage:function(t){var e=t.expectedIterationPaths,r=t.actual,n=t.customUserDescription,i=t.ruleName,a="Expecting: ",o=ye.first(r).image,s=`
but found: '`+o+"'";if(n)return a+n+s;var c=ye.map(e,function(p){return"["+ye.map(p,function(l){return Ze.tokenLabel(l)}).join(",")+"]"}),f=`expecting at least one iteration which starts with one of these possible Token sequences::
  `+("<"+c.join(" ,")+">");return a+f+s}};Object.freeze(Me.defaultParserErrorProvider);Me.defaultGrammarResolverErrorProvider={buildRuleNotFoundError:function(t,e){var r="Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-";return r}};Me.defaultGrammarValidatorErrorProvider={buildDuplicateFoundError:function(t,e){function r(p){return p instanceof br.Terminal?p.terminalType.name:p instanceof br.NonTerminal?p.nonTerminalName:""}var n=t.name,i=ye.first(e),a=i.idx,o=hi.getProductionDslName(i),s=r(i),c=a>0,f="->"+o+(c?a:"")+"<- "+(s?"with argument: ->"+s+"<-":"")+`
                  appears more than once (`+e.length+" times) in the top level rule: ->"+n+`<-.
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES
                  `;return f=f.replace(/[ \t]+/g," "),f=f.replace(/\s\s+/g,`
`),f},buildNamespaceConflictError:function(t){var e=`Namespace conflict found in grammar.
`+("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <"+t.name+`>.
`)+`To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;return e},buildAlternationPrefixAmbiguityError:function(t){var e=ye.map(t.prefixPath,function(i){return Ze.tokenLabel(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous alternatives: <"+t.ambiguityIndices.join(" ,")+`> due to common lookahead prefix
`+("in <OR"+r+"> inside <"+t.topLevelRule.name+`> Rule,
`)+("<"+e+`> may appears as a prefix path in all these alternatives.
`)+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;return n},buildAlternationAmbiguityError:function(t){var e=ye.map(t.prefixPath,function(i){return Ze.tokenLabel(i)}).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n="Ambiguous Alternatives Detected: <"+t.ambiguityIndices.join(" ,")+"> in <OR"+r+">"+(" inside <"+t.topLevelRule.name+`> Rule,
`)+("<"+e+`> may appears as a prefix path in all these alternatives.
`);return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError:function(t){var e=hi.getProductionDslName(t.repetition);t.repetition.idx!==0&&(e+=t.repetition.idx);var r="The repetition <"+e+"> within Rule <"+t.topLevelRule.name+`> can never consume any tokens.
This could lead to an infinite loop.`;return r},buildTokenNameError:function(t){return"deprecated"},buildEmptyAlternationError:function(t){var e="Ambiguous empty alternative: <"+(t.emptyChoiceIdx+1)+">"+(" in <OR"+t.alternation.idx+"> inside <"+t.topLevelRule.name+`> Rule.
`)+"Only the last alternative may be an empty alternative.";return e},buildTooManyAlternativesError:function(t){var e=`An Alternation cannot have more than 256 alternatives:
`+("<OR"+t.alternation.idx+"> inside <"+t.topLevelRule.name+`> Rule.
 has `+(t.alternation.definition.length+1)+" alternatives.");return e},buildLeftRecursionError:function(t){var e=t.topLevelRule.name,r=Wo.map(t.leftRecursionPath,function(a){return a.name}),n=e+" --> "+r.concat([e]).join(" --> "),i=`Left Recursion found in grammar.
`+("rule: <"+e+`> can be invoked from itself (directly or indirectly)
`)+(`without consuming any Tokens. The grammar path that causes this is:
 `+n+`
`)+` To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.`;return i},buildInvalidRuleNameError:function(t){return"deprecated"},buildDuplicateRuleNameError:function(t){var e;t.topLevelRule instanceof br.Rule?e=t.topLevelRule.name:e=t.topLevelRule;var r="Duplicate definition, rule: ->"+e+"<- is already defined in the grammar: ->"+t.grammarName+"<-";return r}}});var mi=R(Ge=>{"use strict";var Bo=Ge&&Ge.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(Ge,"__esModule",{value:!0});Ge.GastRefResolverVisitor=Ge.resolveGrammar=void 0;var qo=ce(),di=k(),jo=$e();function Vo(t,e){var r=new vi(t,e);return r.resolveRefs(),r.errors}Ge.resolveGrammar=Vo;var vi=function(t){Bo(e,t);function e(r,n){var i=t.call(this)||this;return i.nameToTopRule=r,i.errMsgProvider=n,i.errors=[],i}return e.prototype.resolveRefs=function(){var r=this;di.forEach(di.values(this.nameToTopRule),function(n){r.currTopLevel=n,n.accept(r)})},e.prototype.visitNonTerminal=function(r){var n=this.nameToTopRule[r.nonTerminalName];if(n)r.referencedRule=n;else{var i=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,r);this.errors.push({message:i,type:qo.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:r.nonTerminalName})}},e}(jo.GAstVisitor);Ge.GastRefResolverVisitor=vi});var Tt=R(j=>{"use strict";var je=j&&j.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(j,"__esModule",{value:!0});j.nextPossibleTokensAfter=j.possiblePathsFrom=j.NextTerminalAfterAtLeastOneSepWalker=j.NextTerminalAfterAtLeastOneWalker=j.NextTerminalAfterManySepWalker=j.NextTerminalAfterManyWalker=j.AbstractNextTerminalAfterProductionWalker=j.NextAfterTokenWalker=j.AbstractNextPossibleTokensWalker=void 0;var Ei=Gt(),I=k(),Ko=Lr(),O=ne(),Ti=function(t){je(e,t);function e(r,n){var i=t.call(this)||this;return i.topProd=r,i.path=n,i.possibleTokTypes=[],i.nextProductionName="",i.nextProductionOccurrence=0,i.found=!1,i.isAtEndOfPath=!1,i}return e.prototype.startWalking=function(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=I.cloneArr(this.path.ruleStack).reverse(),this.occurrenceStack=I.cloneArr(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes},e.prototype.walk=function(r,n){n===void 0&&(n=[]),this.found||t.prototype.walk.call(this,r,n)},e.prototype.walkProdRef=function(r,n,i){if(r.referencedRule.name===this.nextProductionName&&r.idx===this.nextProductionOccurrence){var a=n.concat(i);this.updateExpectedNext(),this.walk(r.referencedRule,a)}},e.prototype.updateExpectedNext=function(){I.isEmpty(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())},e}(Ei.RestWalker);j.AbstractNextPossibleTokensWalker=Ti;var zo=function(t){je(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.path=n,i.nextTerminalName="",i.nextTerminalOccurrence=0,i.nextTerminalName=i.path.lastTok.name,i.nextTerminalOccurrence=i.path.lastTokOccurrence,i}return e.prototype.walkTerminal=function(r,n,i){if(this.isAtEndOfPath&&r.terminalType.name===this.nextTerminalName&&r.idx===this.nextTerminalOccurrence&&!this.found){var a=n.concat(i),o=new O.Alternative({definition:a});this.possibleTokTypes=Ko.first(o),this.found=!0}},e}(Ti);j.NextAfterTokenWalker=zo;var Et=function(t){je(e,t);function e(r,n){var i=t.call(this)||this;return i.topRule=r,i.occurrence=n,i.result={token:void 0,occurrence:void 0,isEndOfRule:void 0},i}return e.prototype.startWalking=function(){return this.walk(this.topRule),this.result},e}(Ei.RestWalker);j.AbstractNextTerminalAfterProductionWalker=Et;var Ho=function(t){je(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkMany=function(r,n,i){if(r.idx===this.occurrence){var a=I.first(n.concat(i));this.result.isEndOfRule=a===void 0,a instanceof O.Terminal&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else t.prototype.walkMany.call(this,r,n,i)},e}(Et);j.NextTerminalAfterManyWalker=Ho;var Yo=function(t){je(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkManySep=function(r,n,i){if(r.idx===this.occurrence){var a=I.first(n.concat(i));this.result.isEndOfRule=a===void 0,a instanceof O.Terminal&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else t.prototype.walkManySep.call(this,r,n,i)},e}(Et);j.NextTerminalAfterManySepWalker=Yo;var Xo=function(t){je(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOne=function(r,n,i){if(r.idx===this.occurrence){var a=I.first(n.concat(i));this.result.isEndOfRule=a===void 0,a instanceof O.Terminal&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else t.prototype.walkAtLeastOne.call(this,r,n,i)},e}(Et);j.NextTerminalAfterAtLeastOneWalker=Xo;var $o=function(t){je(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.walkAtLeastOneSep=function(r,n,i){if(r.idx===this.occurrence){var a=I.first(n.concat(i));this.result.isEndOfRule=a===void 0,a instanceof O.Terminal&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else t.prototype.walkAtLeastOneSep.call(this,r,n,i)},e}(Et);j.NextTerminalAfterAtLeastOneSepWalker=$o;function yi(t,e,r){r===void 0&&(r=[]),r=I.cloneArr(r);var n=[],i=0;function a(f){return f.concat(I.drop(t,i+1))}function o(f){var p=yi(a(f),e,r);return n.concat(p)}for(;r.length<e&&i<t.length;){var s=t[i];if(s instanceof O.Alternative)return o(s.definition);if(s instanceof O.NonTerminal)return o(s.definition);if(s instanceof O.Option)n=o(s.definition);else if(s instanceof O.RepetitionMandatory){var c=s.definition.concat([new O.Repetition({definition:s.definition})]);return o(c)}else if(s instanceof O.RepetitionMandatoryWithSeparator){var c=[new O.Alternative({definition:s.definition}),new O.Repetition({definition:[new O.Terminal({terminalType:s.separator})].concat(s.definition)})];return o(c)}else if(s instanceof O.RepetitionWithSeparator){var c=s.definition.concat([new O.Repetition({definition:[new O.Terminal({terminalType:s.separator})].concat(s.definition)})]);n=o(c)}else if(s instanceof O.Repetition){var c=s.definition.concat([new O.Repetition({definition:s.definition})]);n=o(c)}else{if(s instanceof O.Alternation)return I.forEach(s.definition,function(f){I.isEmpty(f.definition)===!1&&(n=o(f.definition))}),n;if(s instanceof O.Terminal)r.push(s.terminalType);else throw Error("non exhaustive match")}i++}return n.push({partialPath:r,suffixDef:I.drop(t,i)}),n}j.possiblePathsFrom=yi;function Qo(t,e,r,n){var i="EXIT_NONE_TERMINAL",a=[i],o="EXIT_ALTERNATIVE",s=!1,c=e.length,f=c-n-1,p=[],l=[];for(l.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!I.isEmpty(l);){var m=l.pop();if(m===o){s&&I.last(l).idx<=f&&l.pop();continue}var v=m.def,u=m.idx,d=m.ruleStack,A=m.occurrenceStack;if(!I.isEmpty(v)){var _=v[0];if(_===i){var g={idx:u,def:I.drop(v),ruleStack:I.dropRight(d),occurrenceStack:I.dropRight(A)};l.push(g)}else if(_ instanceof O.Terminal)if(u<c-1){var y=u+1,b=e[y];if(r(b,_.terminalType)){var g={idx:y,def:I.drop(v),ruleStack:d,occurrenceStack:A};l.push(g)}}else if(u===c-1)p.push({nextTokenType:_.terminalType,nextTokenOccurrence:_.idx,ruleStack:d,occurrenceStack:A}),s=!0;else throw Error("non exhaustive match");else if(_ instanceof O.NonTerminal){var L=I.cloneArr(d);L.push(_.nonTerminalName);var se=I.cloneArr(A);se.push(_.idx);var g={idx:u,def:_.definition.concat(a,I.drop(v)),ruleStack:L,occurrenceStack:se};l.push(g)}else if(_ instanceof O.Option){var fe={idx:u,def:I.drop(v),ruleStack:d,occurrenceStack:A};l.push(fe),l.push(o);var Z={idx:u,def:_.definition.concat(I.drop(v)),ruleStack:d,occurrenceStack:A};l.push(Z)}else if(_ instanceof O.RepetitionMandatory){var ue=new O.Repetition({definition:_.definition,idx:_.idx}),Q=_.definition.concat([ue],I.drop(v)),g={idx:u,def:Q,ruleStack:d,occurrenceStack:A};l.push(g)}else if(_ instanceof O.RepetitionMandatoryWithSeparator){var te=new O.Terminal({terminalType:_.separator}),ue=new O.Repetition({definition:[te].concat(_.definition),idx:_.idx}),Q=_.definition.concat([ue],I.drop(v)),g={idx:u,def:Q,ruleStack:d,occurrenceStack:A};l.push(g)}else if(_ instanceof O.RepetitionWithSeparator){var fe={idx:u,def:I.drop(v),ruleStack:d,occurrenceStack:A};l.push(fe),l.push(o);var te=new O.Terminal({terminalType:_.separator}),xe=new O.Repetition({definition:[te].concat(_.definition),idx:_.idx}),Q=_.definition.concat([xe],I.drop(v)),Z={idx:u,def:Q,ruleStack:d,occurrenceStack:A};l.push(Z)}else if(_ instanceof O.Repetition){var fe={idx:u,def:I.drop(v),ruleStack:d,occurrenceStack:A};l.push(fe),l.push(o);var xe=new O.Repetition({definition:_.definition,idx:_.idx}),Q=_.definition.concat([xe],I.drop(v)),Z={idx:u,def:Q,ruleStack:d,occurrenceStack:A};l.push(Z)}else if(_ instanceof O.Alternation)for(var it=_.definition.length-1;it>=0;it--){var at=_.definition[it],Ke={idx:u,def:at.definition.concat(I.drop(v)),ruleStack:d,occurrenceStack:A};l.push(Ke),l.push(o)}else if(_ instanceof O.Alternative)l.push({idx:u,def:_.definition.concat(I.drop(v)),ruleStack:d,occurrenceStack:A});else if(_ instanceof O.Rule)l.push(Zo(_,u,d,A));else throw Error("non exhaustive match")}}return p}j.nextPossibleTokensAfter=Qo;function Zo(t,e,r,n){var i=I.cloneArr(r);i.push(t.name);var a=I.cloneArr(n);return a.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:a}}});var yt=R(C=>{"use strict";var _i=C&&C.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(C,"__esModule",{value:!0});C.areTokenCategoriesNotUsed=C.isStrictPrefixOfPath=C.containsPath=C.getLookaheadPathsForOptionalProd=C.getLookaheadPathsForOr=C.lookAheadSequenceFromAlternatives=C.buildSingleAlternativeLookaheadFunction=C.buildAlternativesLookAheadFunc=C.buildLookaheadFuncForOptionalProd=C.buildLookaheadFuncForOr=C.getProdType=C.PROD_TYPE=void 0;var D=k(),gi=Tt(),Jo=Gt(),Kt=Xe(),We=ne(),es=$e(),z;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(z=C.PROD_TYPE||(C.PROD_TYPE={}));function ts(t){if(t instanceof We.Option)return z.OPTION;if(t instanceof We.Repetition)return z.REPETITION;if(t instanceof We.RepetitionMandatory)return z.REPETITION_MANDATORY;if(t instanceof We.RepetitionMandatoryWithSeparator)return z.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof We.RepetitionWithSeparator)return z.REPETITION_WITH_SEPARATOR;if(t instanceof We.Alternation)return z.ALTERNATION;throw Error("non exhaustive match")}C.getProdType=ts;function rs(t,e,r,n,i,a){var o=Ai(t,e,r),s=Fr(o)?Kt.tokenStructuredMatcherNoCategories:Kt.tokenStructuredMatcher;return a(o,n,s,i)}C.buildLookaheadFuncForOr=rs;function ns(t,e,r,n,i,a){var o=Ri(t,e,i,r),s=Fr(o)?Kt.tokenStructuredMatcherNoCategories:Kt.tokenStructuredMatcher;return a(o[0],s,n)}C.buildLookaheadFuncForOptionalProd=ns;function is(t,e,r,n){var i=t.length,a=D.every(t,function(c){return D.every(c,function(f){return f.length===1})});if(e)return function(c){for(var f=D.map(c,function(y){return y.GATE}),p=0;p<i;p++){var l=t[p],m=l.length,v=f[p];if(v!==void 0&&v.call(this)===!1)continue;e:for(var u=0;u<m;u++){for(var d=l[u],A=d.length,_=0;_<A;_++){var g=this.LA(_+1);if(r(g,d[_])===!1)continue e}return p}}};if(a&&!n){var o=D.map(t,function(c){return D.flatten(c)}),s=D.reduce(o,function(c,f,p){return D.forEach(f,function(l){D.has(c,l.tokenTypeIdx)||(c[l.tokenTypeIdx]=p),D.forEach(l.categoryMatches,function(m){D.has(c,m)||(c[m]=p)})}),c},[]);return function(){var c=this.LA(1);return s[c.tokenTypeIdx]}}else return function(){for(var c=0;c<i;c++){var f=t[c],p=f.length;e:for(var l=0;l<p;l++){for(var m=f[l],v=m.length,u=0;u<v;u++){var d=this.LA(u+1);if(r(d,m[u])===!1)continue e}return c}}}}C.buildAlternativesLookAheadFunc=is;function as(t,e,r){var n=D.every(t,function(f){return f.length===1}),i=t.length;if(n&&!r){var a=D.flatten(t);if(a.length===1&&D.isEmpty(a[0].categoryMatches)){var o=a[0],s=o.tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{var c=D.reduce(a,function(f,p,l){return f[p.tokenTypeIdx]=!0,D.forEach(p.categoryMatches,function(m){f[m]=!0}),f},[]);return function(){var f=this.LA(1);return c[f.tokenTypeIdx]===!0}}}else return function(){e:for(var f=0;f<i;f++){for(var p=t[f],l=p.length,m=0;m<l;m++){var v=this.LA(m+1);if(e(v,p[m])===!1)continue e}return!0}return!1}}C.buildSingleAlternativeLookaheadFunction=as;var os=function(t){_i(e,t);function e(r,n,i){var a=t.call(this)||this;return a.topProd=r,a.targetOccurrence=n,a.targetProdType=i,a}return e.prototype.startWalking=function(){return this.walk(this.topProd),this.restDef},e.prototype.checkIsTarget=function(r,n,i,a){return r.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=i.concat(a),!0):!1},e.prototype.walkOption=function(r,n,i){this.checkIsTarget(r,z.OPTION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOne=function(r,n,i){this.checkIsTarget(r,z.REPETITION_MANDATORY,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkAtLeastOneSep=function(r,n,i){this.checkIsTarget(r,z.REPETITION_MANDATORY_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkMany=function(r,n,i){this.checkIsTarget(r,z.REPETITION,n,i)||t.prototype.walkOption.call(this,r,n,i)},e.prototype.walkManySep=function(r,n,i){this.checkIsTarget(r,z.REPETITION_WITH_SEPARATOR,n,i)||t.prototype.walkOption.call(this,r,n,i)},e}(Jo.RestWalker),Oi=function(t){_i(e,t);function e(r,n,i){var a=t.call(this)||this;return a.targetOccurrence=r,a.targetProdType=n,a.targetRef=i,a.result=[],a}return e.prototype.checkIsTarget=function(r,n){r.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||r===this.targetRef)&&(this.result=r.definition)},e.prototype.visitOption=function(r){this.checkIsTarget(r,z.OPTION)},e.prototype.visitRepetition=function(r){this.checkIsTarget(r,z.REPETITION)},e.prototype.visitRepetitionMandatory=function(r){this.checkIsTarget(r,z.REPETITION_MANDATORY)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.checkIsTarget(r,z.REPETITION_MANDATORY_WITH_SEPARATOR)},e.prototype.visitRepetitionWithSeparator=function(r){this.checkIsTarget(r,z.REPETITION_WITH_SEPARATOR)},e.prototype.visitAlternation=function(r){this.checkIsTarget(r,z.ALTERNATION)},e}(es.GAstVisitor);function Ni(t){for(var e=new Array(t),r=0;r<t;r++)e[r]=[];return e}function wr(t){for(var e=[""],r=0;r<t.length;r++){for(var n=t[r],i=[],a=0;a<e.length;a++){var o=e[a];i.push(o+"_"+n.tokenTypeIdx);for(var s=0;s<n.categoryMatches.length;s++){var c="_"+n.categoryMatches[s];i.push(o+c)}}e=i}return e}function ss(t,e,r){for(var n=0;n<t.length;n++)if(n!==r)for(var i=t[n],a=0;a<e.length;a++){var o=e[a];if(i[o]===!0)return!1}return!0}function Dr(t,e){for(var r=D.map(t,function(p){return gi.possiblePathsFrom([p],1)}),n=Ni(r.length),i=D.map(r,function(p){var l={};return D.forEach(p,function(m){var v=wr(m.partialPath);D.forEach(v,function(u){l[u]=!0})}),l}),a=r,o=1;o<=e;o++){var s=a;a=Ni(s.length);for(var c=function(p){for(var l=s[p],m=0;m<l.length;m++){var v=l[m].partialPath,u=l[m].suffixDef,d=wr(v),A=ss(i,d,p);if(A||D.isEmpty(u)||v.length===e){var _=n[p];if(Ii(_,v)===!1){_.push(v);for(var g=0;g<d.length;g++){var y=d[g];i[p][y]=!0}}}else{var b=gi.possiblePathsFrom(u,o+1,v);a[p]=a[p].concat(b),D.forEach(b,function(L){var se=wr(L.partialPath);D.forEach(se,function(fe){i[p][fe]=!0})})}}},f=0;f<s.length;f++)c(f)}return n}C.lookAheadSequenceFromAlternatives=Dr;function Ai(t,e,r,n){var i=new Oi(t,z.ALTERNATION,n);return e.accept(i),Dr(i.result,r)}C.getLookaheadPathsForOr=Ai;function Ri(t,e,r,n){var i=new Oi(t,r);e.accept(i);var a=i.result,o=new os(e,t,r),s=o.startWalking(),c=new We.Alternative({definition:a}),f=new We.Alternative({definition:s});return Dr([c,f],n)}C.getLookaheadPathsForOptionalProd=Ri;function Ii(t,e){e:for(var r=0;r<t.length;r++){var n=t[r];if(n.length===e.length){for(var i=0;i<n.length;i++){var a=e[i],o=n[i],s=a===o||o.categoryMatchesMap[a.tokenTypeIdx]!==void 0;if(s===!1)continue e}return!0}}return!1}C.containsPath=Ii;function us(t,e){return t.length<e.length&&D.every(t,function(r,n){var i=e[n];return r===i||i.categoryMatchesMap[r.tokenTypeIdx]})}C.isStrictPrefixOfPath=us;function Fr(t){return D.every(t,function(e){return D.every(e,function(r){return D.every(r,function(n){return D.isEmpty(n.categoryMatches)})})})}C.areTokenCategoriesNotUsed=Fr});var jr=R(x=>{"use strict";var Ur=x&&x.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(x,"__esModule",{value:!0});x.checkPrefixAlternativesAmbiguities=x.validateSomeNonEmptyLookaheadPath=x.validateTooManyAlts=x.RepetionCollector=x.validateAmbiguousAlternationAlternatives=x.validateEmptyOrAlternative=x.getFirstNoneTerminal=x.validateNoLeftRecursion=x.validateRuleIsOverridden=x.validateRuleDoesNotAlreadyExist=x.OccurrenceValidationCollector=x.identifyProductionForDuplicates=x.validateGrammar=void 0;var M=k(),B=k(),Ie=ce(),Gr=vt(),Qe=yt(),cs=Tt(),_e=ne(),Wr=$e();function ps(t,e,r,n,i){var a=M.map(t,function(v){return ls(v,n)}),o=M.map(t,function(v){return Br(v,v,n)}),s=[],c=[],f=[];B.every(o,B.isEmpty)&&(s=B.map(t,function(v){return Pi(v,n)}),c=B.map(t,function(v){return Si(v,e,n)}),f=Ci(t,e,n));var p=fs(t,r,n),l=B.map(t,function(v){return xi(v,n)}),m=B.map(t,function(v){return ki(v,t,i,n)});return M.flatten(a.concat(f,o,s,c,p,l,m))}x.validateGrammar=ps;function ls(t,e){var r=new bi;t.accept(r);var n=r.allProductions,i=M.groupBy(n,Li),a=M.pick(i,function(s){return s.length>1}),o=M.map(M.values(a),function(s){var c=M.first(s),f=e.buildDuplicateFoundError(t,s),p=Gr.getProductionDslName(c),l={message:f,type:Ie.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:p,occurrence:c.idx},m=Mi(c);return m&&(l.parameter=m),l});return o}function Li(t){return Gr.getProductionDslName(t)+"_#_"+t.idx+"_#_"+Mi(t)}x.identifyProductionForDuplicates=Li;function Mi(t){return t instanceof _e.Terminal?t.terminalType.name:t instanceof _e.NonTerminal?t.nonTerminalName:""}var bi=function(t){Ur(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitNonTerminal=function(r){this.allProductions.push(r)},e.prototype.visitOption=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e.prototype.visitAlternation=function(r){this.allProductions.push(r)},e.prototype.visitTerminal=function(r){this.allProductions.push(r)},e}(Wr.GAstVisitor);x.OccurrenceValidationCollector=bi;function ki(t,e,r,n){var i=[],a=B.reduce(e,function(s,c){return c.name===t.name?s+1:s},0);if(a>1){var o=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});i.push({message:o,type:Ie.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}x.validateRuleDoesNotAlreadyExist=ki;function hs(t,e,r){var n=[],i;return M.contains(e,t)||(i="Invalid rule override, rule: ->"+t+"<- cannot be overridden in the grammar: ->"+r+"<-as it is not defined in any of the super grammars ",n.push({message:i,type:Ie.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,ruleName:t})),n}x.validateRuleIsOverridden=hs;function Br(t,e,r,n){n===void 0&&(n=[]);var i=[],a=_t(e.definition);if(M.isEmpty(a))return[];var o=t.name,s=M.contains(a,t);s&&i.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:Ie.ParserDefinitionErrorType.LEFT_RECURSION,ruleName:o});var c=M.difference(a,n.concat([t])),f=M.map(c,function(p){var l=M.cloneArr(n);return l.push(p),Br(t,p,r,l)});return i.concat(M.flatten(f))}x.validateNoLeftRecursion=Br;function _t(t){var e=[];if(M.isEmpty(t))return e;var r=M.first(t);if(r instanceof _e.NonTerminal)e.push(r.referencedRule);else if(r instanceof _e.Alternative||r instanceof _e.Option||r instanceof _e.RepetitionMandatory||r instanceof _e.RepetitionMandatoryWithSeparator||r instanceof _e.RepetitionWithSeparator||r instanceof _e.Repetition)e=e.concat(_t(r.definition));else if(r instanceof _e.Alternation)e=M.flatten(M.map(r.definition,function(o){return _t(o.definition)}));else if(!(r instanceof _e.Terminal))throw Error("non exhaustive match");var n=Gr.isOptionalProd(r),i=t.length>1;if(n&&i){var a=M.drop(t);return e.concat(_t(a))}else return e}x.getFirstNoneTerminal=_t;var qr=function(t){Ur(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.alternations=[],r}return e.prototype.visitAlternation=function(r){this.alternations.push(r)},e}(Wr.GAstVisitor);function Pi(t,e){var r=new qr;t.accept(r);var n=r.alternations,i=M.reduce(n,function(a,o){var s=M.dropRight(o.definition),c=M.map(s,function(f,p){var l=cs.nextPossibleTokensAfter([f],[],null,1);return M.isEmpty(l)?{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:p}),type:Ie.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:p+1}:null});return a.concat(M.compact(c))},[]);return i}x.validateEmptyOrAlternative=Pi;function Si(t,e,r){var n=new qr;t.accept(n);var i=n.alternations;i=B.reject(i,function(o){return o.ignoreAmbiguities===!0});var a=M.reduce(i,function(o,s){var c=s.idx,f=s.maxLookahead||e,p=Qe.getLookaheadPathsForOr(c,t,f,s),l=ds(p,s,t,r),m=Fi(p,s,t,r);return o.concat(l,m)},[]);return a}x.validateAmbiguousAlternationAlternatives=Si;var wi=function(t){Ur(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.allProductions=[],r}return e.prototype.visitRepetitionWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatory=function(r){this.allProductions.push(r)},e.prototype.visitRepetitionMandatoryWithSeparator=function(r){this.allProductions.push(r)},e.prototype.visitRepetition=function(r){this.allProductions.push(r)},e}(Wr.GAstVisitor);x.RepetionCollector=wi;function xi(t,e){var r=new qr;t.accept(r);var n=r.alternations,i=M.reduce(n,function(a,o){return o.definition.length>255&&a.push({message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:Ie.ParserDefinitionErrorType.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}),a},[]);return i}x.validateTooManyAlts=xi;function Ci(t,e,r){var n=[];return B.forEach(t,function(i){var a=new wi;i.accept(a);var o=a.allProductions;B.forEach(o,function(s){var c=Qe.getProdType(s),f=s.maxLookahead||e,p=s.idx,l=Qe.getLookaheadPathsForOptionalProd(p,i,c,f),m=l[0];if(B.isEmpty(B.flatten(m))){var v=r.buildEmptyRepetitionError({topLevelRule:i,repetition:s});n.push({message:v,type:Ie.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),n}x.validateSomeNonEmptyLookaheadPath=Ci;function ds(t,e,r,n){var i=[],a=B.reduce(t,function(s,c,f){return e.definition[f].ignoreAmbiguities===!0||B.forEach(c,function(p){var l=[f];B.forEach(t,function(m,v){f!==v&&Qe.containsPath(m,p)&&e.definition[v].ignoreAmbiguities!==!0&&l.push(v)}),l.length>1&&!Qe.containsPath(i,p)&&(i.push(p),s.push({alts:l,path:p}))}),s},[]),o=M.map(a,function(s){var c=B.map(s.alts,function(p){return p+1}),f=n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:c,prefixPath:s.path});return{message:f,type:Ie.ParserDefinitionErrorType.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:[s.alts]}});return o}function Fi(t,e,r,n){var i=[],a=B.reduce(t,function(o,s,c){var f=B.map(s,function(p){return{idx:c,path:p}});return o.concat(f)},[]);return B.forEach(a,function(o){var s=e.definition[o.idx];if(s.ignoreAmbiguities!==!0){var c=o.idx,f=o.path,p=B.findAll(a,function(m){return e.definition[m.idx].ignoreAmbiguities!==!0&&m.idx<c&&Qe.isStrictPrefixOfPath(m.path,f)}),l=B.map(p,function(m){var v=[m.idx+1,c+1],u=e.idx===0?"":e.idx,d=n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:v,prefixPath:m.path});return{message:d,type:Ie.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:u,alternatives:v}});i=i.concat(l)}}),i}x.checkPrefixAlternativesAmbiguities=Fi;function fs(t,e,r){var n=[],i=B.map(e,function(a){return a.name});return B.forEach(t,function(a){var o=a.name;if(B.contains(i,o)){var s=r.buildNamespaceConflictError(a);n.push({message:s,type:Ie.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:o})}}),n}});var Ui=R(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.validateGrammar=Je.resolveGrammar=void 0;var Vr=k(),vs=mi(),ms=jr(),Di=mt();function Es(t){t=Vr.defaults(t,{errMsgProvider:Di.defaultGrammarResolverErrorProvider});var e={};return Vr.forEach(t.rules,function(r){e[r.name]=r}),vs.resolveGrammar(e,t.errMsgProvider)}Je.resolveGrammar=Es;function Ts(t){return t=Vr.defaults(t,{errMsgProvider:Di.defaultGrammarValidatorErrorProvider}),ms.validateGrammar(t.rules,t.maxLookahead,t.tokenTypes,t.errMsgProvider,t.grammarName)}Je.validateGrammar=Ts});var et=R(ae=>{"use strict";var gt=ae&&ae.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(ae,"__esModule",{value:!0});ae.EarlyExitException=ae.NotAllInputParsedException=ae.NoViableAltException=ae.MismatchedTokenException=ae.isRecognitionException=void 0;var ys=k(),Gi="MismatchedTokenException",Wi="NoViableAltException",Bi="EarlyExitException",qi="NotAllInputParsedException",ji=[Gi,Wi,Bi,qi];Object.freeze(ji);function _s(t){return ys.contains(ji,t.name)}ae.isRecognitionException=_s;var zt=function(t){gt(e,t);function e(r,n){var i=this.constructor,a=t.call(this,r)||this;return a.token=n,a.resyncedTokens=[],Object.setPrototypeOf(a,i.prototype),Error.captureStackTrace&&Error.captureStackTrace(a,a.constructor),a}return e}(Error),gs=function(t){gt(e,t);function e(r,n,i){var a=t.call(this,r,n)||this;return a.previousToken=i,a.name=Gi,a}return e}(zt);ae.MismatchedTokenException=gs;var As=function(t){gt(e,t);function e(r,n,i){var a=t.call(this,r,n)||this;return a.previousToken=i,a.name=Wi,a}return e}(zt);ae.NoViableAltException=As;var Rs=function(t){gt(e,t);function e(r,n){var i=t.call(this,r,n)||this;return i.name=qi,i}return e}(zt);ae.NotAllInputParsedException=Rs;var Os=function(t){gt(e,t);function e(r,n,i){var a=t.call(this,r,n)||this;return a.previousToken=i,a.name=Bi,a}return e}(zt);ae.EarlyExitException=Os});var zr=R($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.attemptInRepetitionRecovery=$.Recoverable=$.InRuleRecoveryException=$.IN_RULE_RECOVERY_EXCEPTION=$.EOF_FOLLOW_KEY=void 0;var Ht=Ue(),de=k(),Ns=et(),Is=Mr(),ks=ce();$.EOF_FOLLOW_KEY={};$.IN_RULE_RECOVERY_EXCEPTION="InRuleRecoveryException";function Kr(t){this.name=$.IN_RULE_RECOVERY_EXCEPTION,this.message=t}$.InRuleRecoveryException=Kr;Kr.prototype=Error.prototype;var Ps=function(){function t(){}return t.prototype.initRecoverable=function(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=de.has(e,"recoveryEnabled")?e.recoveryEnabled:ks.DEFAULT_PARSER_CONFIG.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=Vi)},t.prototype.getTokenToInsert=function(e){var r=Ht.createTokenInstance(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r},t.prototype.canTokenTypeBeInsertedInRecovery=function(e){return!0},t.prototype.tryInRepetitionRecovery=function(e,r,n,i){for(var a=this,o=this.findReSyncTokenType(),s=this.exportLexerState(),c=[],f=!1,p=this.LA(1),l=this.LA(1),m=function(){var v=a.LA(0),u=a.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:v,ruleName:a.getCurrRuleFullName()}),d=new Ns.MismatchedTokenException(u,p,a.LA(0));d.resyncedTokens=de.dropRight(c),a.SAVE_ERROR(d)};!f;)if(this.tokenMatcher(l,i)){m();return}else if(n.call(this)){m(),e.apply(this,r);return}else this.tokenMatcher(l,o)?f=!0:(l=this.SKIP_TOKEN(),this.addToResyncTokens(l,c));this.importLexerState(s)},t.prototype.shouldInRepetitionRecoveryBeTried=function(e,r,n){return!(n===!1||e===void 0||r===void 0||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))},t.prototype.getFollowsForInRuleRecovery=function(e,r){var n=this.getCurrentGrammarPath(e,r),i=this.getNextPossibleTokenTypes(n);return i},t.prototype.tryInRuleRecovery=function(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r)){var n=this.getTokenToInsert(e);return n}if(this.canRecoverWithSingleTokenDeletion(e)){var i=this.SKIP_TOKEN();return this.consumeToken(),i}throw new Kr("sad sad panda")},t.prototype.canPerformInRuleRecovery=function(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)},t.prototype.canRecoverWithSingleTokenInsertion=function(e,r){var n=this;if(!this.canTokenTypeBeInsertedInRecovery(e)||de.isEmpty(r))return!1;var i=this.LA(1),a=de.find(r,function(o){return n.tokenMatcher(i,o)})!==void 0;return a},t.prototype.canRecoverWithSingleTokenDeletion=function(e){var r=this.tokenMatcher(this.LA(2),e);return r},t.prototype.isInCurrentRuleReSyncSet=function(e){var r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return de.contains(n,e)},t.prototype.findReSyncTokenType=function(){for(var e=this.flattenFollowSet(),r=this.LA(1),n=2;;){var i=r.tokenType;if(de.contains(e,i))return i;r=this.LA(n),n++}},t.prototype.getCurrFollowKey=function(){if(this.RULE_STACK.length===1)return $.EOF_FOLLOW_KEY;var e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}},t.prototype.buildFullFollowKeyStack=function(){var e=this,r=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return de.map(r,function(i,a){return a===0?$.EOF_FOLLOW_KEY:{ruleName:e.shortRuleNameToFullName(i),idxInCallingRule:n[a],inRule:e.shortRuleNameToFullName(r[a-1])}})},t.prototype.flattenFollowSet=function(){var e=this,r=de.map(this.buildFullFollowKeyStack(),function(n){return e.getFollowSetFromFollowKey(n)});return de.flatten(r)},t.prototype.getFollowSetFromFollowKey=function(e){if(e===$.EOF_FOLLOW_KEY)return[Ht.EOF];var r=e.ruleName+e.idxInCallingRule+Is.IN+e.inRule;return this.resyncFollows[r]},t.prototype.addToResyncTokens=function(e,r){return this.tokenMatcher(e,Ht.EOF)||r.push(e),r},t.prototype.reSyncTo=function(e){for(var r=[],n=this.LA(1);this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return de.dropRight(r)},t.prototype.attemptInRepetitionRecovery=function(e,r,n,i,a,o,s){},t.prototype.getCurrentGrammarPath=function(e,r){var n=this.getHumanReadableRuleStack(),i=de.cloneArr(this.RULE_OCCURRENCE_STACK),a={ruleStack:n,occurrenceStack:i,lastTok:e,lastTokOccurrence:r};return a},t.prototype.getHumanReadableRuleStack=function(){var e=this;return de.map(this.RULE_STACK,function(r){return e.shortRuleNameToFullName(r)})},t}();$.Recoverable=Ps;function Vi(t,e,r,n,i,a,o){var s=this.getKeyForAutomaticLookahead(n,i),c=this.firstAfterRepMap[s];if(c===void 0){var f=this.getCurrRuleFullName(),p=this.getGAstProductions()[f],l=new a(p,i);c=l.startWalking(),this.firstAfterRepMap[s]=c}var m=c.token,v=c.occurrence,u=c.isEndOfRule;this.RULE_STACK.length===1&&u&&m===void 0&&(m=Ht.EOF,v=1),this.shouldInRepetitionRecoveryBeTried(m,v,o)&&this.tryInRepetitionRecovery(t,e,r,m)}$.attemptInRepetitionRecovery=Vi});var Yt=R(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.getKeyForAutomaticLookahead=P.AT_LEAST_ONE_SEP_IDX=P.MANY_SEP_IDX=P.AT_LEAST_ONE_IDX=P.MANY_IDX=P.OPTION_IDX=P.OR_IDX=P.BITS_FOR_ALT_IDX=P.BITS_FOR_RULE_IDX=P.BITS_FOR_OCCURRENCE_IDX=P.BITS_FOR_METHOD_TYPE=void 0;P.BITS_FOR_METHOD_TYPE=4;P.BITS_FOR_OCCURRENCE_IDX=8;P.BITS_FOR_RULE_IDX=12;P.BITS_FOR_ALT_IDX=8;P.OR_IDX=1<<P.BITS_FOR_OCCURRENCE_IDX;P.OPTION_IDX=2<<P.BITS_FOR_OCCURRENCE_IDX;P.MANY_IDX=3<<P.BITS_FOR_OCCURRENCE_IDX;P.AT_LEAST_ONE_IDX=4<<P.BITS_FOR_OCCURRENCE_IDX;P.MANY_SEP_IDX=5<<P.BITS_FOR_OCCURRENCE_IDX;P.AT_LEAST_ONE_SEP_IDX=6<<P.BITS_FOR_OCCURRENCE_IDX;function Ss(t,e,r){return r|e|t}P.getKeyForAutomaticLookahead=Ss;var ic=32-P.BITS_FOR_ALT_IDX});var zi=R(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.LooksAhead=void 0;var be=yt(),ge=k(),Ki=ce(),Fe=Yt(),Ve=vt(),xs=function(){function t(){}return t.prototype.initLooksAhead=function(e){this.dynamicTokensEnabled=ge.has(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Ki.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled,this.maxLookahead=ge.has(e,"maxLookahead")?e.maxLookahead:Ki.DEFAULT_PARSER_CONFIG.maxLookahead,this.lookAheadFuncsCache=ge.isES2015MapSupported()?new Map:[],ge.isES2015MapSupported()?(this.getLaFuncFromCache=this.getLaFuncFromMap,this.setLaFuncCache=this.setLaFuncCacheUsingMap):(this.getLaFuncFromCache=this.getLaFuncFromObj,this.setLaFuncCache=this.setLaFuncUsingObj)},t.prototype.preComputeLookaheadFunctions=function(e){var r=this;ge.forEach(e,function(n){r.TRACE_INIT(n.name+" Rule Lookahead",function(){var i=Ve.collectMethods(n),a=i.alternation,o=i.repetition,s=i.option,c=i.repetitionMandatory,f=i.repetitionMandatoryWithSeparator,p=i.repetitionWithSeparator;ge.forEach(a,function(l){var m=l.idx===0?"":l.idx;r.TRACE_INIT(""+Ve.getProductionDslName(l)+m,function(){var v=be.buildLookaheadFuncForOr(l.idx,n,l.maxLookahead||r.maxLookahead,l.hasPredicates,r.dynamicTokensEnabled,r.lookAheadBuilderForAlternatives),u=Fe.getKeyForAutomaticLookahead(r.fullRuleNameToShort[n.name],Fe.OR_IDX,l.idx);r.setLaFuncCache(u,v)})}),ge.forEach(o,function(l){r.computeLookaheadFunc(n,l.idx,Fe.MANY_IDX,be.PROD_TYPE.REPETITION,l.maxLookahead,Ve.getProductionDslName(l))}),ge.forEach(s,function(l){r.computeLookaheadFunc(n,l.idx,Fe.OPTION_IDX,be.PROD_TYPE.OPTION,l.maxLookahead,Ve.getProductionDslName(l))}),ge.forEach(c,function(l){r.computeLookaheadFunc(n,l.idx,Fe.AT_LEAST_ONE_IDX,be.PROD_TYPE.REPETITION_MANDATORY,l.maxLookahead,Ve.getProductionDslName(l))}),ge.forEach(f,function(l){r.computeLookaheadFunc(n,l.idx,Fe.AT_LEAST_ONE_SEP_IDX,be.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,l.maxLookahead,Ve.getProductionDslName(l))}),ge.forEach(p,function(l){r.computeLookaheadFunc(n,l.idx,Fe.MANY_SEP_IDX,be.PROD_TYPE.REPETITION_WITH_SEPARATOR,l.maxLookahead,Ve.getProductionDslName(l))})})})},t.prototype.computeLookaheadFunc=function(e,r,n,i,a,o){var s=this;this.TRACE_INIT(""+o+(r===0?"":r),function(){var c=be.buildLookaheadFuncForOptionalProd(r,e,a||s.maxLookahead,s.dynamicTokensEnabled,i,s.lookAheadBuilderForOptional),f=Fe.getKeyForAutomaticLookahead(s.fullRuleNameToShort[e.name],n,r);s.setLaFuncCache(f,c)})},t.prototype.lookAheadBuilderForOptional=function(e,r,n){return be.buildSingleAlternativeLookaheadFunction(e,r,n)},t.prototype.lookAheadBuilderForAlternatives=function(e,r,n,i){return be.buildAlternativesLookAheadFunc(e,r,n,i)},t.prototype.getKeyForAutomaticLookahead=function(e,r){var n=this.getLastExplicitRuleShortName();return Fe.getKeyForAutomaticLookahead(n,e,r)},t.prototype.getLaFuncFromCache=function(e){},t.prototype.getLaFuncFromMap=function(e){return this.lookAheadFuncsCache.get(e)},t.prototype.getLaFuncFromObj=function(e){return this.lookAheadFuncsCache[e]},t.prototype.setLaFuncCache=function(e,r){},t.prototype.setLaFuncCacheUsingMap=function(e,r){this.lookAheadFuncsCache.set(e,r)},t.prototype.setLaFuncUsingObj=function(e,r){this.lookAheadFuncsCache[e]=r},t}();Xt.LooksAhead=xs});var Hi=R(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.addNoneTerminalToCst=ke.addTerminalToCst=ke.setNodeLocationFull=ke.setNodeLocationOnlyOffset=void 0;function Cs(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}ke.setNodeLocationOnlyOffset=Cs;function Ls(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}ke.setNodeLocationFull=Ls;function Ms(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}ke.addTerminalToCst=Ms;function bs(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}ke.addNoneTerminalToCst=bs});var Hr=R(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.defineNameProp=Be.functionName=Be.classNameFromInstance=void 0;var Fs=k();function ws(t){return Yi(t.constructor)}Be.classNameFromInstance=ws;var Xi="name";function Yi(t){var e=t.name;return e||"anonymous"}Be.functionName=Yi;function Ds(t,e){var r=Object.getOwnPropertyDescriptor(t,Xi);return Fs.isUndefined(r)||r.configurable?(Object.defineProperty(t,Xi,{enumerable:!1,configurable:!0,writable:!1,value:e}),!0):!1}Be.defineNameProp=Ds});var ea=R(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.validateRedundantMethods=Y.validateMissingCstMethods=Y.validateVisitor=Y.CstVisitorDefinitionError=Y.createBaseVisitorConstructorWithDefaults=Y.createBaseSemanticVisitorConstructor=Y.defaultVisit=void 0;var ve=k(),At=Hr();function $i(t,e){for(var r=ve.keys(t),n=r.length,i=0;i<n;i++)for(var a=r[i],o=t[a],s=o.length,c=0;c<s;c++){var f=o[c];f.tokenTypeIdx===void 0&&this[f.name](f.children,e)}}Y.defaultVisit=$i;function Us(t,e){var r=function(){};At.defineNameProp(r,t+"BaseSemantics");var n={visit:function(i,a){if(ve.isArray(i)&&(i=i[0]),!ve.isUndefined(i))return this[i.name](i.children,a)},validateVisitor:function(){var i=Zi(this,e);if(!ve.isEmpty(i)){var a=ve.map(i,function(o){return o.msg});throw Error("Errors Detected in CST Visitor <"+At.functionName(this.constructor)+`>:
	`+(""+a.join(`

`).replace(/\n/g,`
	`)))}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}Y.createBaseSemanticVisitorConstructor=Us;function Gs(t,e,r){var n=function(){};At.defineNameProp(n,t+"BaseSemanticsWithDefaults");var i=Object.create(r.prototype);return ve.forEach(e,function(a){i[a]=$i}),n.prototype=i,n.prototype.constructor=n,n}Y.createBaseVisitorConstructorWithDefaults=Gs;var Yr;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(Yr=Y.CstVisitorDefinitionError||(Y.CstVisitorDefinitionError={}));function Zi(t,e){var r=Qi(t,e),n=Ji(t,e);return r.concat(n)}Y.validateVisitor=Zi;function Qi(t,e){var r=ve.map(e,function(n){if(!ve.isFunction(t[n]))return{msg:"Missing visitor method: <"+n+"> on "+At.functionName(t.constructor)+" CST Visitor.",type:Yr.MISSING_METHOD,methodName:n}});return ve.compact(r)}Y.validateMissingCstMethods=Qi;var Ws=["constructor","visit","validateVisitor"];function Ji(t,e){var r=[];for(var n in t)ve.isFunction(t[n])&&!ve.contains(Ws,n)&&!ve.contains(e,n)&&r.push({msg:"Redundant visitor method: <"+n+"> on "+At.functionName(t.constructor)+` CST Visitor
There is no Grammar Rule corresponding to this method's name.
`,type:Yr.REDUNDANT_METHOD,methodName:n});return r}Y.validateRedundantMethods=Ji});var ra=R($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.TreeBuilder=void 0;var tt=Hi(),K=k(),ta=ea(),Bs=ce(),qs=function(){function t(){}return t.prototype.initTreeBuilder=function(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=K.has(e,"nodeLocationTracking")?e.nodeLocationTracking:Bs.DEFAULT_PARSER_CONFIG.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=K.NOOP,this.cstFinallyStateUpdate=K.NOOP,this.cstPostTerminal=K.NOOP,this.cstPostNonTerminal=K.NOOP,this.cstPostRule=K.NOOP;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=tt.setNodeLocationFull,this.setNodeLocationFromNode=tt.setNodeLocationFull,this.cstPostRule=K.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=K.NOOP,this.setNodeLocationFromNode=K.NOOP,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=tt.setNodeLocationOnlyOffset,this.setNodeLocationFromNode=tt.setNodeLocationOnlyOffset,this.cstPostRule=K.NOOP,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=K.NOOP,this.setNodeLocationFromNode=K.NOOP,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=K.NOOP,this.setNodeLocationFromNode=K.NOOP,this.cstPostRule=K.NOOP,this.setInitialNodeLocation=K.NOOP;else throw Error('Invalid <nodeLocationTracking> config option: "'+e.nodeLocationTracking+'"')},t.prototype.setInitialNodeLocationOnlyOffsetRecovery=function(e){e.location={startOffset:NaN,endOffset:NaN}},t.prototype.setInitialNodeLocationOnlyOffsetRegular=function(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}},t.prototype.setInitialNodeLocationFullRecovery=function(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.setInitialNodeLocationFullRegular=function(e){var r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}},t.prototype.cstInvocationStateUpdate=function(e,r){var n={name:e,children:{}};this.setInitialNodeLocation(n),this.CST_STACK.push(n)},t.prototype.cstFinallyStateUpdate=function(){this.CST_STACK.pop()},t.prototype.cstPostRuleFull=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)},t.prototype.cstPostRuleOnlyOffset=function(e){var r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN},t.prototype.cstPostTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];tt.addTerminalToCst(n,r,e),this.setNodeLocationFromToken(n.location,r)},t.prototype.cstPostNonTerminal=function(e,r){var n=this.CST_STACK[this.CST_STACK.length-1];tt.addNoneTerminalToCst(n,r,e),this.setNodeLocationFromNode(n.location,e.location)},t.prototype.getBaseCstVisitorConstructor=function(){if(K.isUndefined(this.baseCstVisitorConstructor)){var e=ta.createBaseSemanticVisitorConstructor(this.className,K.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){if(K.isUndefined(this.baseCstVisitorWithDefaultsConstructor)){var e=ta.createBaseVisitorConstructorWithDefaults(this.className,K.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-1]},t.prototype.getPreviousExplicitRuleShortName=function(){var e=this.RULE_STACK;return e[e.length-2]},t.prototype.getLastExplicitRuleOccurrenceIndex=function(){var e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]},t}();$t.TreeBuilder=qs});var ia=R(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.LexerAdapter=void 0;var na=ce(),js=function(){function t(){}return t.prototype.initLexerAdapter=function(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1},Object.defineProperty(t.prototype,"input",{get:function(){return this.tokVector},set:function(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length},enumerable:!1,configurable:!0}),t.prototype.SKIP_TOKEN=function(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):na.END_OF_FILE},t.prototype.LA=function(e){var r=this.currIdx+e;return r<0||this.tokVectorLength<=r?na.END_OF_FILE:this.tokVector[r]},t.prototype.consumeToken=function(){this.currIdx++},t.prototype.exportLexerState=function(){return this.currIdx},t.prototype.importLexerState=function(e){this.currIdx=e},t.prototype.resetLexerState=function(){this.currIdx=-1},t.prototype.moveToTerminatedState=function(){this.currIdx=this.tokVector.length-1},t.prototype.getLexerPosition=function(){return this.exportLexerState()},t}();Zt.LexerAdapter=js});var oa=R(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.RecognizerApi=void 0;var aa=k(),Vs=et(),Xr=ce(),Ks=mt(),zs=jr(),Hs=ne(),Ys=function(){function t(){}return t.prototype.ACTION=function(e){return e.call(this)},t.prototype.consume=function(e,r,n){return this.consumeInternal(r,e,n)},t.prototype.subrule=function(e,r,n){return this.subruleInternal(r,e,n)},t.prototype.option=function(e,r){return this.optionInternal(r,e)},t.prototype.or=function(e,r){return this.orInternal(r,e)},t.prototype.many=function(e,r){return this.manyInternal(e,r)},t.prototype.atLeastOne=function(e,r){return this.atLeastOneInternal(e,r)},t.prototype.CONSUME=function(e,r){return this.consumeInternal(e,0,r)},t.prototype.CONSUME1=function(e,r){return this.consumeInternal(e,1,r)},t.prototype.CONSUME2=function(e,r){return this.consumeInternal(e,2,r)},t.prototype.CONSUME3=function(e,r){return this.consumeInternal(e,3,r)},t.prototype.CONSUME4=function(e,r){return this.consumeInternal(e,4,r)},t.prototype.CONSUME5=function(e,r){return this.consumeInternal(e,5,r)},t.prototype.CONSUME6=function(e,r){return this.consumeInternal(e,6,r)},t.prototype.CONSUME7=function(e,r){return this.consumeInternal(e,7,r)},t.prototype.CONSUME8=function(e,r){return this.consumeInternal(e,8,r)},t.prototype.CONSUME9=function(e,r){return this.consumeInternal(e,9,r)},t.prototype.SUBRULE=function(e,r){return this.subruleInternal(e,0,r)},t.prototype.SUBRULE1=function(e,r){return this.subruleInternal(e,1,r)},t.prototype.SUBRULE2=function(e,r){return this.subruleInternal(e,2,r)},t.prototype.SUBRULE3=function(e,r){return this.subruleInternal(e,3,r)},t.prototype.SUBRULE4=function(e,r){return this.subruleInternal(e,4,r)},t.prototype.SUBRULE5=function(e,r){return this.subruleInternal(e,5,r)},t.prototype.SUBRULE6=function(e,r){return this.subruleInternal(e,6,r)},t.prototype.SUBRULE7=function(e,r){return this.subruleInternal(e,7,r)},t.prototype.SUBRULE8=function(e,r){return this.subruleInternal(e,8,r)},t.prototype.SUBRULE9=function(e,r){return this.subruleInternal(e,9,r)},t.prototype.OPTION=function(e){return this.optionInternal(e,0)},t.prototype.OPTION1=function(e){return this.optionInternal(e,1)},t.prototype.OPTION2=function(e){return this.optionInternal(e,2)},t.prototype.OPTION3=function(e){return this.optionInternal(e,3)},t.prototype.OPTION4=function(e){return this.optionInternal(e,4)},t.prototype.OPTION5=function(e){return this.optionInternal(e,5)},t.prototype.OPTION6=function(e){return this.optionInternal(e,6)},t.prototype.OPTION7=function(e){return this.optionInternal(e,7)},t.prototype.OPTION8=function(e){return this.optionInternal(e,8)},t.prototype.OPTION9=function(e){return this.optionInternal(e,9)},t.prototype.OR=function(e){return this.orInternal(e,0)},t.prototype.OR1=function(e){return this.orInternal(e,1)},t.prototype.OR2=function(e){return this.orInternal(e,2)},t.prototype.OR3=function(e){return this.orInternal(e,3)},t.prototype.OR4=function(e){return this.orInternal(e,4)},t.prototype.OR5=function(e){return this.orInternal(e,5)},t.prototype.OR6=function(e){return this.orInternal(e,6)},t.prototype.OR7=function(e){return this.orInternal(e,7)},t.prototype.OR8=function(e){return this.orInternal(e,8)},t.prototype.OR9=function(e){return this.orInternal(e,9)},t.prototype.MANY=function(e){this.manyInternal(0,e)},t.prototype.MANY1=function(e){this.manyInternal(1,e)},t.prototype.MANY2=function(e){this.manyInternal(2,e)},t.prototype.MANY3=function(e){this.manyInternal(3,e)},t.prototype.MANY4=function(e){this.manyInternal(4,e)},t.prototype.MANY5=function(e){this.manyInternal(5,e)},t.prototype.MANY6=function(e){this.manyInternal(6,e)},t.prototype.MANY7=function(e){this.manyInternal(7,e)},t.prototype.MANY8=function(e){this.manyInternal(8,e)},t.prototype.MANY9=function(e){this.manyInternal(9,e)},t.prototype.MANY_SEP=function(e){this.manySepFirstInternal(0,e)},t.prototype.MANY_SEP1=function(e){this.manySepFirstInternal(1,e)},t.prototype.MANY_SEP2=function(e){this.manySepFirstInternal(2,e)},t.prototype.MANY_SEP3=function(e){this.manySepFirstInternal(3,e)},t.prototype.MANY_SEP4=function(e){this.manySepFirstInternal(4,e)},t.prototype.MANY_SEP5=function(e){this.manySepFirstInternal(5,e)},t.prototype.MANY_SEP6=function(e){this.manySepFirstInternal(6,e)},t.prototype.MANY_SEP7=function(e){this.manySepFirstInternal(7,e)},t.prototype.MANY_SEP8=function(e){this.manySepFirstInternal(8,e)},t.prototype.MANY_SEP9=function(e){this.manySepFirstInternal(9,e)},t.prototype.AT_LEAST_ONE=function(e){this.atLeastOneInternal(0,e)},t.prototype.AT_LEAST_ONE1=function(e){return this.atLeastOneInternal(1,e)},t.prototype.AT_LEAST_ONE2=function(e){this.atLeastOneInternal(2,e)},t.prototype.AT_LEAST_ONE3=function(e){this.atLeastOneInternal(3,e)},t.prototype.AT_LEAST_ONE4=function(e){this.atLeastOneInternal(4,e)},t.prototype.AT_LEAST_ONE5=function(e){this.atLeastOneInternal(5,e)},t.prototype.AT_LEAST_ONE6=function(e){this.atLeastOneInternal(6,e)},t.prototype.AT_LEAST_ONE7=function(e){this.atLeastOneInternal(7,e)},t.prototype.AT_LEAST_ONE8=function(e){this.atLeastOneInternal(8,e)},t.prototype.AT_LEAST_ONE9=function(e){this.atLeastOneInternal(9,e)},t.prototype.AT_LEAST_ONE_SEP=function(e){this.atLeastOneSepFirstInternal(0,e)},t.prototype.AT_LEAST_ONE_SEP1=function(e){this.atLeastOneSepFirstInternal(1,e)},t.prototype.AT_LEAST_ONE_SEP2=function(e){this.atLeastOneSepFirstInternal(2,e)},t.prototype.AT_LEAST_ONE_SEP3=function(e){this.atLeastOneSepFirstInternal(3,e)},t.prototype.AT_LEAST_ONE_SEP4=function(e){this.atLeastOneSepFirstInternal(4,e)},t.prototype.AT_LEAST_ONE_SEP5=function(e){this.atLeastOneSepFirstInternal(5,e)},t.prototype.AT_LEAST_ONE_SEP6=function(e){this.atLeastOneSepFirstInternal(6,e)},t.prototype.AT_LEAST_ONE_SEP7=function(e){this.atLeastOneSepFirstInternal(7,e)},t.prototype.AT_LEAST_ONE_SEP8=function(e){this.atLeastOneSepFirstInternal(8,e)},t.prototype.AT_LEAST_ONE_SEP9=function(e){this.atLeastOneSepFirstInternal(9,e)},t.prototype.RULE=function(e,r,n){if(n===void 0&&(n=Xr.DEFAULT_RULE_CONFIG),aa.contains(this.definedRulesNames,e)){var i=Ks.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),a={message:i,type:Xr.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(a)}this.definedRulesNames.push(e);var o=this.defineRule(e,r,n);return this[e]=o,o},t.prototype.OVERRIDE_RULE=function(e,r,n){n===void 0&&(n=Xr.DEFAULT_RULE_CONFIG);var i=[];i=i.concat(zs.validateRuleIsOverridden(e,this.definedRulesNames,this.className)),this.definitionErrors=this.definitionErrors.concat(i);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.BACKTRACK=function(e,r){return function(){this.isBackTrackingStack.push(1);var n=this.saveRecogState();try{return e.apply(this,r),!0}catch(i){if(Vs.isRecognitionException(i))return!1;throw i}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}},t.prototype.getGAstProductions=function(){return this.gastProductionsCache},t.prototype.getSerializedGastProductions=function(){return Hs.serializeGrammar(aa.values(this.gastProductionsCache))},t}();Qt.RecognizerApi=Ys});var la=R(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.RecognizerEngine=void 0;var q=k(),le=Yt(),er=et(),sa=yt(),rt=Tt(),ua=ce(),Xs=zr(),ca=Ue(),Rt=Xe(),$s=Hr(),Zs=function(){function t(){}return t.prototype.initRecognizerEngine=function(e,r){if(this.className=$s.classNameFromInstance(this),this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Rt.tokenStructuredMatcherNoCategories,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},q.has(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(q.isArray(e)){if(q.isEmpty(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(q.isArray(e))this.tokensMap=q.reduce(e,function(o,s){return o[s.name]=s,o},{});else if(q.has(e,"modes")&&q.every(q.flatten(q.values(e.modes)),Rt.isTokenType)){var n=q.flatten(q.values(e.modes)),i=q.uniq(n);this.tokensMap=q.reduce(i,function(o,s){return o[s.name]=s,o},{})}else if(q.isObject(e))this.tokensMap=q.cloneObj(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=ca.EOF;var a=q.every(q.values(e),function(o){return q.isEmpty(o.categoryMatches)});this.tokenMatcher=a?Rt.tokenStructuredMatcherNoCategories:Rt.tokenStructuredMatcher,Rt.augmentTokenTypes(q.values(this.tokensMap))},t.prototype.defineRule=function(e,r,n){if(this.selfAnalysisDone)throw Error("Grammar rule <"+e+`> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);var i=q.has(n,"resyncEnabled")?n.resyncEnabled:ua.DEFAULT_RULE_CONFIG.resyncEnabled,a=q.has(n,"recoveryValueFunc")?n.recoveryValueFunc:ua.DEFAULT_RULE_CONFIG.recoveryValueFunc,o=this.ruleShortNameIdx<<le.BITS_FOR_METHOD_TYPE+le.BITS_FOR_OCCURRENCE_IDX;this.ruleShortNameIdx++,this.shortRuleNameToFull[o]=e,this.fullRuleNameToShort[e]=o;function s(p){try{if(this.outputCst===!0){r.apply(this,p);var l=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(l),l}else return r.apply(this,p)}catch(m){return this.invokeRuleCatch(m,i,a)}finally{this.ruleFinallyStateUpdate()}}var c=function(p,l){return p===void 0&&(p=0),this.ruleInvocationStateUpdate(o,e,p),s.call(this,l)},f="ruleName";return c[f]=e,c.originalGrammarAction=r,c},t.prototype.invokeRuleCatch=function(e,r,n){var i=this.RULE_STACK.length===1,a=r&&!this.isBackTracking()&&this.recoveryEnabled;if(er.isRecognitionException(e)){var o=e;if(a){var s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(o.resyncedTokens=this.reSyncTo(s),this.outputCst){var c=this.CST_STACK[this.CST_STACK.length-1];return c.recoveredNode=!0,c}else return n();else{if(this.outputCst){var c=this.CST_STACK[this.CST_STACK.length-1];c.recoveredNode=!0,o.partialCstResult=c}throw o}}else{if(i)return this.moveToTerminatedState(),n();throw o}}else throw e},t.prototype.optionInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.OPTION_IDX,r);return this.optionInternalLogic(e,r,n)},t.prototype.optionInternalLogic=function(e,r,n){var i=this,a=this.getLaFuncFromCache(n),o,s;if(e.DEF!==void 0){if(o=e.DEF,s=e.GATE,s!==void 0){var c=a;a=function(){return s.call(i)&&c.call(i)}}}else o=e;if(a.call(this)===!0)return o.call(this)},t.prototype.atLeastOneInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.AT_LEAST_ONE_IDX,e);return this.atLeastOneInternalLogic(e,r,n)},t.prototype.atLeastOneInternalLogic=function(e,r,n){var i=this,a=this.getLaFuncFromCache(n),o,s;if(r.DEF!==void 0){if(o=r.DEF,s=r.GATE,s!==void 0){var c=a;a=function(){return s.call(i)&&c.call(i)}}}else o=r;if(a.call(this)===!0)for(var f=this.doSingleRepetition(o);a.call(this)===!0&&f===!0;)f=this.doSingleRepetition(o);else throw this.raiseEarlyExitException(e,sa.PROD_TYPE.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],a,le.AT_LEAST_ONE_IDX,e,rt.NextTerminalAfterAtLeastOneWalker)},t.prototype.atLeastOneSepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.AT_LEAST_ONE_SEP_IDX,e);this.atLeastOneSepFirstInternalLogic(e,r,n)},t.prototype.atLeastOneSepFirstInternalLogic=function(e,r,n){var i=this,a=r.DEF,o=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){a.call(this);for(var c=function(){return i.tokenMatcher(i.LA(1),o)};this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,c,a,rt.NextTerminalAfterAtLeastOneSepWalker],c,le.AT_LEAST_ONE_SEP_IDX,e,rt.NextTerminalAfterAtLeastOneSepWalker)}else throw this.raiseEarlyExitException(e,sa.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)},t.prototype.manyInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.MANY_IDX,e);return this.manyInternalLogic(e,r,n)},t.prototype.manyInternalLogic=function(e,r,n){var i=this,a=this.getLaFuncFromCache(n),o,s;if(r.DEF!==void 0){if(o=r.DEF,s=r.GATE,s!==void 0){var c=a;a=function(){return s.call(i)&&c.call(i)}}}else o=r;for(var f=!0;a.call(this)===!0&&f===!0;)f=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],a,le.MANY_IDX,e,rt.NextTerminalAfterManyWalker,f)},t.prototype.manySepFirstInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.MANY_SEP_IDX,e);this.manySepFirstInternalLogic(e,r,n)},t.prototype.manySepFirstInternalLogic=function(e,r,n){var i=this,a=r.DEF,o=r.SEP,s=this.getLaFuncFromCache(n);if(s.call(this)===!0){a.call(this);for(var c=function(){return i.tokenMatcher(i.LA(1),o)};this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,c,a,rt.NextTerminalAfterManySepWalker],c,le.MANY_SEP_IDX,e,rt.NextTerminalAfterManySepWalker)}},t.prototype.repetitionSepSecondInternal=function(e,r,n,i,a){for(;n();)this.CONSUME(r),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,i,a],n,le.AT_LEAST_ONE_SEP_IDX,e,a)},t.prototype.doSingleRepetition=function(e){var r=this.getLexerPosition();e.call(this);var n=this.getLexerPosition();return n>r},t.prototype.orInternal=function(e,r){var n=this.getKeyForAutomaticLookahead(le.OR_IDX,r),i=q.isArray(e)?e:e.DEF,a=this.getLaFuncFromCache(n),o=a.call(this,i);if(o!==void 0){var s=i[o];return s.ALT.call(this)}this.raiseNoAltException(r,e.ERR_MSG)},t.prototype.ruleFinallyStateUpdate=function(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){var e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new er.NotAllInputParsedException(r,e))}},t.prototype.subruleInternal=function(e,r,n){var i;try{var a=n!==void 0?n.ARGS:void 0;return i=e.call(this,r,a),this.cstPostNonTerminal(i,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),i}catch(o){this.subruleInternalError(o,n,e.ruleName)}},t.prototype.subruleInternalError=function(e,r,n){throw er.isRecognitionException(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e},t.prototype.consumeInternal=function(e,r,n){var i;try{var a=this.LA(1);this.tokenMatcher(a,e)===!0?(this.consumeToken(),i=a):this.consumeInternalError(e,a,n)}catch(o){i=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,i),i},t.prototype.consumeInternalError=function(e,r,n){var i,a=this.LA(0);throw n!==void 0&&n.ERR_MSG?i=n.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:a,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new er.MismatchedTokenException(i,r,a))},t.prototype.consumeInternalRecovery=function(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){var i=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,i)}catch(a){throw a.name===Xs.IN_RULE_RECOVERY_EXCEPTION?n:a}}else throw n},t.prototype.saveRecogState=function(){var e=this.errors,r=q.cloneArr(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}},t.prototype.reloadRecogState=function(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK},t.prototype.ruleInvocationStateUpdate=function(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r,e)},t.prototype.isBackTracking=function(){return this.isBackTrackingStack.length!==0},t.prototype.getCurrRuleFullName=function(){var e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]},t.prototype.shortRuleNameToFullName=function(e){return this.shortRuleNameToFull[e]},t.prototype.isAtEndOfInput=function(){return this.tokenMatcher(this.LA(1),ca.EOF)},t.prototype.reset=function(){this.resetLexerState(),this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]},t}();Jt.RecognizerEngine=Zs});var pa=R(tr=>{"use strict";Object.defineProperty(tr,"__esModule",{value:!0});tr.ErrorHandler=void 0;var $r=et(),Zr=k(),fa=yt(),Qs=ce(),Js=function(){function t(){}return t.prototype.initErrorHandler=function(e){this._errors=[],this.errorMessageProvider=Zr.has(e,"errorMessageProvider")?e.errorMessageProvider:Qs.DEFAULT_PARSER_CONFIG.errorMessageProvider},t.prototype.SAVE_ERROR=function(e){if($r.isRecognitionException(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Zr.cloneArr(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")},Object.defineProperty(t.prototype,"errors",{get:function(){return Zr.cloneArr(this._errors)},set:function(e){this._errors=e},enumerable:!1,configurable:!0}),t.prototype.raiseEarlyExitException=function(e,r,n){for(var i=this.getCurrRuleFullName(),a=this.getGAstProductions()[i],o=fa.getLookaheadPathsForOptionalProd(e,a,r,this.maxLookahead),s=o[0],c=[],f=1;f<=this.maxLookahead;f++)c.push(this.LA(f));var p=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:c,previous:this.LA(0),customUserDescription:n,ruleName:i});throw this.SAVE_ERROR(new $r.EarlyExitException(p,this.LA(1),this.LA(0)))},t.prototype.raiseNoAltException=function(e,r){for(var n=this.getCurrRuleFullName(),i=this.getGAstProductions()[n],a=fa.getLookaheadPathsForOr(e,i,this.maxLookahead),o=[],s=1;s<=this.maxLookahead;s++)o.push(this.LA(s));var c=this.LA(0),f=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:a,actual:o,previous:c,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new $r.NoViableAltException(f,this.LA(1),c))},t}();tr.ErrorHandler=Js});var va=R(rr=>{"use strict";Object.defineProperty(rr,"__esModule",{value:!0});rr.ContentAssist=void 0;var ha=Tt(),da=k(),eu=function(){function t(){}return t.prototype.initContentAssist=function(){},t.prototype.computeContentAssist=function(e,r){var n=this.gastProductionsCache[e];if(da.isUndefined(n))throw Error("Rule ->"+e+"<- does not exist in this grammar.");return ha.nextPossibleTokensAfter([n],r,this.tokenMatcher,this.maxLookahead)},t.prototype.getNextPossibleTokenTypes=function(e){var r=da.first(e.ruleStack),n=this.getGAstProductions(),i=n[r],a=new ha.NextAfterTokenWalker(i,e).startWalking();return a},t}();rr.ContentAssist=eu});var Ra=R(nr=>{"use strict";Object.defineProperty(nr,"__esModule",{value:!0});nr.GastRecorder=void 0;var oe=k(),Pe=ne(),tu=ft(),ma=Xe(),Ea=Ue(),ru=ce(),nu=Yt(),ir={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(ir);var Ta=!0,ya=Math.pow(2,nu.BITS_FOR_OCCURRENCE_IDX)-1,_a=Ea.createToken({name:"RECORDING_PHASE_TOKEN",pattern:tu.Lexer.NA});ma.augmentTokenTypes([_a]);var ga=Ea.createTokenInstance(_a,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(ga);var iu={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},ou=function(){function t(){}return t.prototype.initGastRecorder=function(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1},t.prototype.enableRecording=function(){var e=this;this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",function(){for(var r=function(i){var a=i>0?i:"";e["CONSUME"+a]=function(o,s){return this.consumeInternalRecord(o,i,s)},e["SUBRULE"+a]=function(o,s){return this.subruleInternalRecord(o,i,s)},e["OPTION"+a]=function(o){return this.optionInternalRecord(o,i)},e["OR"+a]=function(o){return this.orInternalRecord(o,i)},e["MANY"+a]=function(o){this.manyInternalRecord(i,o)},e["MANY_SEP"+a]=function(o){this.manySepFirstInternalRecord(i,o)},e["AT_LEAST_ONE"+a]=function(o){this.atLeastOneInternalRecord(i,o)},e["AT_LEAST_ONE_SEP"+a]=function(o){this.atLeastOneSepFirstInternalRecord(i,o)}},n=0;n<10;n++)r(n);e.consume=function(i,a,o){return this.consumeInternalRecord(a,i,o)},e.subrule=function(i,a,o){return this.subruleInternalRecord(a,i,o)},e.option=function(i,a){return this.optionInternalRecord(a,i)},e.or=function(i,a){return this.orInternalRecord(a,i)},e.many=function(i,a){this.manyInternalRecord(i,a)},e.atLeastOne=function(i,a){this.atLeastOneInternalRecord(i,a)},e.ACTION=e.ACTION_RECORD,e.BACKTRACK=e.BACKTRACK_RECORD,e.LA=e.LA_RECORD})},t.prototype.disableRecording=function(){var e=this;this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",function(){for(var r=0;r<10;r++){var n=r>0?r:"";delete e["CONSUME"+n],delete e["SUBRULE"+n],delete e["OPTION"+n],delete e["OR"+n],delete e["MANY"+n],delete e["MANY_SEP"+n],delete e["AT_LEAST_ONE"+n],delete e["AT_LEAST_ONE_SEP"+n]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})},t.prototype.ACTION_RECORD=function(e){},t.prototype.BACKTRACK_RECORD=function(e,r){return function(){return!0}},t.prototype.LA_RECORD=function(e){return ru.END_OF_FILE},t.prototype.topLevelRuleRecord=function(e,r){try{var n=new Pe.Rule({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(i){if(i.KNOWN_RECORDER_ERROR!==!0)try{i.message=i.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch(a){throw i}throw i}},t.prototype.optionInternalRecord=function(e,r){return Ot.call(this,Pe.Option,e,r)},t.prototype.atLeastOneInternalRecord=function(e,r){Ot.call(this,Pe.RepetitionMandatory,r,e)},t.prototype.atLeastOneSepFirstInternalRecord=function(e,r){Ot.call(this,Pe.RepetitionMandatoryWithSeparator,r,e,Ta)},t.prototype.manyInternalRecord=function(e,r){Ot.call(this,Pe.Repetition,r,e)},t.prototype.manySepFirstInternalRecord=function(e,r){Ot.call(this,Pe.RepetitionWithSeparator,r,e,Ta)},t.prototype.orInternalRecord=function(e,r){return au.call(this,e,r)},t.prototype.subruleInternalRecord=function(e,r,n){if(ar(r),!e||oe.has(e,"ruleName")===!1){var i=new Error("<SUBRULE"+Aa(r)+"> argument is invalid"+(" expecting a Parser method reference but got: <"+JSON.stringify(e)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var a=oe.peek(this.recordingProdStack),o=e.ruleName,s=new Pe.NonTerminal({idx:r,nonTerminalName:o,referencedRule:void 0});return a.definition.push(s),this.outputCst?iu:ir},t.prototype.consumeInternalRecord=function(e,r,n){if(ar(r),!ma.hasShortKeyProperty(e)){var i=new Error("<CONSUME"+Aa(r)+"> argument is invalid"+(" expecting a TokenType reference but got: <"+JSON.stringify(e)+">")+(`
 inside top level rule: <`+this.recordingProdStack[0].name+">"));throw i.KNOWN_RECORDER_ERROR=!0,i}var a=oe.peek(this.recordingProdStack),o=new Pe.Terminal({idx:r,terminalType:e});return a.definition.push(o),ga},t}();nr.GastRecorder=ou;function Ot(t,e,r,n){n===void 0&&(n=!1),ar(r);var i=oe.peek(this.recordingProdStack),a=oe.isFunction(e)?e:e.DEF,o=new t({definition:[],idx:r});return n&&(o.separator=e.SEP),oe.has(e,"MAX_LOOKAHEAD")&&(o.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(o),a.call(this),i.definition.push(o),this.recordingProdStack.pop(),ir}function au(t,e){var r=this;ar(e);var n=oe.peek(this.recordingProdStack),i=oe.isArray(t)===!1,a=i===!1?t:t.DEF,o=new Pe.Alternation({definition:[],idx:e,ignoreAmbiguities:i&&t.IGNORE_AMBIGUITIES===!0});oe.has(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);var s=oe.some(a,function(c){return oe.isFunction(c.GATE)});return o.hasPredicates=s,n.definition.push(o),oe.forEach(a,function(c){var f=new Pe.Alternative({definition:[]});o.definition.push(f),oe.has(c,"IGNORE_AMBIGUITIES")?f.ignoreAmbiguities=c.IGNORE_AMBIGUITIES:oe.has(c,"GATE")&&(f.ignoreAmbiguities=!0),r.recordingProdStack.push(f),c.ALT.call(r),r.recordingProdStack.pop()}),ir}function Aa(t){return t===0?"":""+t}function ar(t){if(t<0||t>ya){var e=new Error("Invalid DSL Method idx value: <"+t+`>
	`+("Idx value must be a none negative value smaller than "+(ya+1)));throw e.KNOWN_RECORDER_ERROR=!0,e}}});var Na=R(or=>{"use strict";Object.defineProperty(or,"__esModule",{value:!0});or.PerformanceTracer=void 0;var Oa=k(),su=ce(),uu=function(){function t(){}return t.prototype.initPerformanceTracer=function(e){if(Oa.has(e,"traceInitPerf")){var r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:Infinity,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=su.DEFAULT_PARSER_CONFIG.traceInitPerf;this.traceInitIndent=-1},t.prototype.TRACE_INIT=function(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;var n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(n+"--> <"+e+">");var i=Oa.timer(r),a=i.time,o=i.value,s=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&s(n+"<-- <"+e+"> time: "+a+"ms"),this.traceInitIndent--,o}else return r()},t}();or.PerformanceTracer=uu});var Ia=R(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.applyMixins=void 0;function cu(t,e){e.forEach(function(r){var n=r.prototype;Object.getOwnPropertyNames(n).forEach(function(i){if(i!=="constructor"){var a=Object.getOwnPropertyDescriptor(n,i);a&&(a.get||a.set)?Object.defineProperty(t.prototype,i,a):t.prototype[i]=r.prototype[i]}})})}sr.applyMixins=cu});var ce=R(U=>{"use strict";var ka=U&&U.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(U,"__esModule",{value:!0});U.EmbeddedActionsParser=U.CstParser=U.Parser=U.EMPTY_ALT=U.ParserDefinitionErrorType=U.DEFAULT_RULE_CONFIG=U.DEFAULT_PARSER_CONFIG=U.END_OF_FILE=void 0;var ee=k(),lu=pi(),Pa=Ue(),Sa=mt(),xa=Ui(),fu=zr(),pu=zi(),hu=ra(),du=ia(),vu=oa(),mu=la(),Eu=pa(),Tu=va(),yu=Ra(),_u=Na(),gu=Ia();U.END_OF_FILE=Pa.createTokenInstance(Pa.EOF,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(U.END_OF_FILE);U.DEFAULT_PARSER_CONFIG=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Sa.defaultParserErrorProvider,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1});U.DEFAULT_RULE_CONFIG=Object.freeze({recoveryValueFunc:function(){},resyncEnabled:!0});var Au;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS"})(Au=U.ParserDefinitionErrorType||(U.ParserDefinitionErrorType={}));function Ru(t){return t===void 0&&(t=void 0),function(){return t}}U.EMPTY_ALT=Ru;var ur=function(){function t(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;var n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),ee.has(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=ee.has(r,"skipValidations")?r.skipValidations:U.DEFAULT_PARSER_CONFIG.skipValidations}return t.performSelfAnalysis=function(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")},t.prototype.performSelfAnalysis=function(){var e=this;this.TRACE_INIT("performSelfAnalysis",function(){var r;e.selfAnalysisDone=!0;var n=e.className;e.TRACE_INIT("toFastProps",function(){ee.toFastProperties(e)}),e.TRACE_INIT("Grammar Recording",function(){try{e.enableRecording(),ee.forEach(e.definedRulesNames,function(a){var o=e[a],s=o.originalGrammarAction,c=void 0;e.TRACE_INIT(a+" Rule",function(){c=e.topLevelRuleRecord(a,s)}),e.gastProductionsCache[a]=c})}finally{e.disableRecording()}});var i=[];if(e.TRACE_INIT("Grammar Resolving",function(){i=xa.resolveGrammar({rules:ee.values(e.gastProductionsCache)}),e.definitionErrors=e.definitionErrors.concat(i)}),e.TRACE_INIT("Grammar Validations",function(){if(ee.isEmpty(i)&&e.skipValidations===!1){var a=xa.validateGrammar({rules:ee.values(e.gastProductionsCache),maxLookahead:e.maxLookahead,tokenTypes:ee.values(e.tokensMap),errMsgProvider:Sa.defaultGrammarValidatorErrorProvider,grammarName:n});e.definitionErrors=e.definitionErrors.concat(a)}}),ee.isEmpty(e.definitionErrors)&&(e.recoveryEnabled&&e.TRACE_INIT("computeAllProdsFollows",function(){var a=lu.computeAllProdsFollows(ee.values(e.gastProductionsCache));e.resyncFollows=a}),e.TRACE_INIT("ComputeLookaheadFunctions",function(){e.preComputeLookaheadFunctions(ee.values(e.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!ee.isEmpty(e.definitionErrors))throw r=ee.map(e.definitionErrors,function(a){return a.message}),new Error(`Parser Definition Errors detected:
 `+r.join(`
-------------------------------
`))})},t.DEFER_DEFINITION_ERRORS_HANDLING=!1,t}();U.Parser=ur;gu.applyMixins(ur,[fu.Recoverable,pu.LooksAhead,hu.TreeBuilder,du.LexerAdapter,mu.RecognizerEngine,vu.RecognizerApi,Eu.ErrorHandler,Tu.ContentAssist,yu.GastRecorder,_u.PerformanceTracer]);var Ou=function(t){ka(e,t);function e(r,n){n===void 0&&(n=U.DEFAULT_PARSER_CONFIG);var i=this,a=ee.cloneObj(n);return a.outputCst=!0,i=t.call(this,r,a)||this,i}return e}(ur);U.CstParser=Ou;var Nu=function(t){ka(e,t);function e(r,n){n===void 0&&(n=U.DEFAULT_PARSER_CONFIG);var i=this,a=ee.cloneObj(n);return a.outputCst=!1,i=t.call(this,r,a)||this,i}return e}(ur);U.EmbeddedActionsParser=Nu});var La=R(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.createSyntaxDiagramsCode=void 0;var Ca=Er();function Iu(t,e){var r=e===void 0?{}:e,n=r.resourceBase,i=n===void 0?"https://unpkg.com/chevrotain@"+Ca.VERSION+"/diagrams/":n,a=r.css,o=a===void 0?"https://unpkg.com/chevrotain@"+Ca.VERSION+"/diagrams/diagrams.css":a,s=`
<!-- This is a generated file -->
<!DOCTYPE html>
<meta charset="utf-8">
<style>
  body {
    background-color: hsl(30, 20%, 95%)
  }
</style>

`,c=`
<link rel='stylesheet' href='`+o+`'>
`,f=`
<script src='`+i+`vendor/railroad-diagrams.js'></script>
<script src='`+i+`src/diagrams_builder.js'></script>
<script src='`+i+`src/diagrams_behavior.js'></script>
<script src='`+i+`src/main.js'></script>
`,p=`
<div id="diagrams" align="center"></div>
`,l=`
<script>
    window.serializedGrammar = `+JSON.stringify(t,null,"  ")+`;
</script>
`,m=`
<script>
    var diagramsDiv = document.getElementById("diagrams");
    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);
</script>
`;return s+c+f+p+l+m}cr.createSyntaxDiagramsCode=Iu});var Fa=R(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.Parser=E.createSyntaxDiagramsCode=E.clearCache=E.GAstVisitor=E.serializeProduction=E.serializeGrammar=E.Terminal=E.Rule=E.RepetitionWithSeparator=E.RepetitionMandatoryWithSeparator=E.RepetitionMandatory=E.Repetition=E.Option=E.NonTerminal=E.Alternative=E.Alternation=E.defaultLexerErrorProvider=E.NoViableAltException=E.NotAllInputParsedException=E.MismatchedTokenException=E.isRecognitionException=E.EarlyExitException=E.defaultParserErrorProvider=E.tokenName=E.tokenMatcher=E.tokenLabel=E.EOF=E.createTokenInstance=E.createToken=E.LexerDefinitionErrorType=E.Lexer=E.EMPTY_ALT=E.ParserDefinitionErrorType=E.EmbeddedActionsParser=E.CstParser=E.VERSION=void 0;var ku=Er();Object.defineProperty(E,"VERSION",{enumerable:!0,get:function(){return ku.VERSION}});var lr=ce();Object.defineProperty(E,"CstParser",{enumerable:!0,get:function(){return lr.CstParser}});Object.defineProperty(E,"EmbeddedActionsParser",{enumerable:!0,get:function(){return lr.EmbeddedActionsParser}});Object.defineProperty(E,"ParserDefinitionErrorType",{enumerable:!0,get:function(){return lr.ParserDefinitionErrorType}});Object.defineProperty(E,"EMPTY_ALT",{enumerable:!0,get:function(){return lr.EMPTY_ALT}});var Ma=ft();Object.defineProperty(E,"Lexer",{enumerable:!0,get:function(){return Ma.Lexer}});Object.defineProperty(E,"LexerDefinitionErrorType",{enumerable:!0,get:function(){return Ma.LexerDefinitionErrorType}});var nt=Ue();Object.defineProperty(E,"createToken",{enumerable:!0,get:function(){return nt.createToken}});Object.defineProperty(E,"createTokenInstance",{enumerable:!0,get:function(){return nt.createTokenInstance}});Object.defineProperty(E,"EOF",{enumerable:!0,get:function(){return nt.EOF}});Object.defineProperty(E,"tokenLabel",{enumerable:!0,get:function(){return nt.tokenLabel}});Object.defineProperty(E,"tokenMatcher",{enumerable:!0,get:function(){return nt.tokenMatcher}});Object.defineProperty(E,"tokenName",{enumerable:!0,get:function(){return nt.tokenName}});var Pu=mt();Object.defineProperty(E,"defaultParserErrorProvider",{enumerable:!0,get:function(){return Pu.defaultParserErrorProvider}});var Nt=et();Object.defineProperty(E,"EarlyExitException",{enumerable:!0,get:function(){return Nt.EarlyExitException}});Object.defineProperty(E,"isRecognitionException",{enumerable:!0,get:function(){return Nt.isRecognitionException}});Object.defineProperty(E,"MismatchedTokenException",{enumerable:!0,get:function(){return Nt.MismatchedTokenException}});Object.defineProperty(E,"NotAllInputParsedException",{enumerable:!0,get:function(){return Nt.NotAllInputParsedException}});Object.defineProperty(E,"NoViableAltException",{enumerable:!0,get:function(){return Nt.NoViableAltException}});var Su=kr();Object.defineProperty(E,"defaultLexerErrorProvider",{enumerable:!0,get:function(){return Su.defaultLexerErrorProvider}});var Se=ne();Object.defineProperty(E,"Alternation",{enumerable:!0,get:function(){return Se.Alternation}});Object.defineProperty(E,"Alternative",{enumerable:!0,get:function(){return Se.Alternative}});Object.defineProperty(E,"NonTerminal",{enumerable:!0,get:function(){return Se.NonTerminal}});Object.defineProperty(E,"Option",{enumerable:!0,get:function(){return Se.Option}});Object.defineProperty(E,"Repetition",{enumerable:!0,get:function(){return Se.Repetition}});Object.defineProperty(E,"RepetitionMandatory",{enumerable:!0,get:function(){return Se.RepetitionMandatory}});Object.defineProperty(E,"RepetitionMandatoryWithSeparator",{enumerable:!0,get:function(){return Se.RepetitionMandatoryWithSeparator}});Object.defineProperty(E,"RepetitionWithSeparator",{enumerable:!0,get:function(){return Se.RepetitionWithSeparator}});Object.defineProperty(E,"Rule",{enumerable:!0,get:function(){return Se.Rule}});Object.defineProperty(E,"Terminal",{enumerable:!0,get:function(){return Se.Terminal}});var ba=ne();Object.defineProperty(E,"serializeGrammar",{enumerable:!0,get:function(){return ba.serializeGrammar}});Object.defineProperty(E,"serializeProduction",{enumerable:!0,get:function(){return ba.serializeProduction}});var xu=$e();Object.defineProperty(E,"GAstVisitor",{enumerable:!0,get:function(){return xu.GAstVisitor}});function Cu(){console.warn(`The clearCache function was 'soft' removed from the Chevrotain API.
	 It performs no action other than printing this message.
	 Please avoid using it as it will be completely removed in the future`)}E.clearCache=Cu;var Lu=La();Object.defineProperty(E,"createSyntaxDiagramsCode",{enumerable:!0,get:function(){return Lu.createSyntaxDiagramsCode}});var Mu=function(){function t(){throw new Error(`The Parser class has been deprecated, use CstParser or EmbeddedActionsParser instead.
See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_7-0-0`)}return t}();E.Parser=Mu});export default Fa();


///////////////////////////////////////////////////////////
// /libs/chevrotain.module.min END 
//////////////////////////////////////////////////////////


class VRMLLoader extends Loader {

	constructor( manager ) {

		super( manager );

		// dependency check

		if ( typeof chevrotain === 'undefined' ) { // eslint-disable-line no-undef

			throw Error( 'THREE.VRMLLoader: External library chevrotain.min.js required.' );

		}

	}

	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		const path = ( scope.path === '' ) ? LoaderUtils.extractUrlBase( url ) : scope.path;

		const loader = new FileLoader( scope.manager );
		loader.setPath( scope.path );
		loader.setRequestHeader( scope.requestHeader );
		loader.setWithCredentials( scope.withCredentials );
		loader.load( url, function ( text ) {

			try {

				onLoad( scope.parse( text, path ) );

			} catch ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );

			}

		}, onProgress, onError );

	}

	parse( data, path ) {

		const nodeMap = {};

		function generateVRMLTree( data ) {

			// create lexer, parser and visitor

			const tokenData = createTokens();

			const lexer = new VRMLLexer( tokenData.tokens );
			const parser = new VRMLParser( tokenData.tokenVocabulary );
			const visitor = createVisitor( parser.getBaseCstVisitorConstructor() );

			// lexing

			const lexingResult = lexer.lex( data );
			parser.input = lexingResult.tokens;

			// parsing

			const cstOutput = parser.vrml();

			if ( parser.errors.length > 0 ) {

				console.error( parser.errors );

				throw Error( 'THREE.VRMLLoader: Parsing errors detected.' );

			}

			// actions

			const ast = visitor.visit( cstOutput );

			return ast;

		}

		function createTokens() {

			const createToken = chevrotain.createToken; // eslint-disable-line no-undef

			// from http://gun.teipir.gr/VRML-amgem/spec/part1/concepts.html#SyntaxBasics

			const RouteIdentifier = createToken( { name: 'RouteIdentifier', pattern: /[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*[\.][^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/ } );
			const Identifier = createToken( { name: 'Identifier', pattern: /[^\x30-\x39\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d][^\0-\x20\x22\x27\x23\x2b\x2c\x2d\x2e\x5b\x5d\x5c\x7b\x7d]*/, longer_alt: RouteIdentifier } );

			// from http://gun.teipir.gr/VRML-amgem/spec/part1/nodesRef.html

			const nodeTypes = [
				'Anchor', 'Billboard', 'Collision', 'Group', 'Transform', // grouping nodes
				'Inline', 'LOD', 'Switch', // special groups
				'AudioClip', 'DirectionalLight', 'PointLight', 'Script', 'Shape', 'Sound', 'SpotLight', 'WorldInfo', // common nodes
				'CylinderSensor', 'PlaneSensor', 'ProximitySensor', 'SphereSensor', 'TimeSensor', 'TouchSensor', 'VisibilitySensor', // sensors
				'Box', 'Cone', 'Cylinder', 'ElevationGrid', 'Extrusion', 'IndexedFaceSet', 'IndexedLineSet', 'PointSet', 'Sphere', // geometries
				'Color', 'Coordinate', 'Normal', 'TextureCoordinate', // geometric properties
				'Appearance', 'FontStyle', 'ImageTexture', 'Material', 'MovieTexture', 'PixelTexture', 'TextureTransform', // appearance
				'ColorInterpolator', 'CoordinateInterpolator', 'NormalInterpolator', 'OrientationInterpolator', 'PositionInterpolator', 'ScalarInterpolator', // interpolators
				'Background', 'Fog', 'NavigationInfo', 'Viewpoint', // bindable nodes
				'Text' // Text must be placed at the end of the regex so there are no matches for TextureTransform and TextureCoordinate
			];

			//

			const Version = createToken( {
				name: 'Version',
				pattern: /#VRML.*/,
				longer_alt: Identifier
			} );

			const NodeName = createToken( {
				name: 'NodeName',
				pattern: new RegExp( nodeTypes.join( '|' ) ),
				longer_alt: Identifier
			} );

			const DEF = createToken( {
				name: 'DEF',
				pattern: /DEF/,
				longer_alt: Identifier
			} );

			const USE = createToken( {
				name: 'USE',
				pattern: /USE/,
				longer_alt: Identifier
			} );

			const ROUTE = createToken( {
				name: 'ROUTE',
				pattern: /ROUTE/,
				longer_alt: Identifier
			} );

			const TO = createToken( {
				name: 'TO',
				pattern: /TO/,
				longer_alt: Identifier
			} );

			//

			const StringLiteral = createToken( { name: 'StringLiteral', pattern: /"(?:[^\\"\n\r]|\\[bfnrtv"\\/]|\\u[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])*"/ } );
			const HexLiteral = createToken( { name: 'HexLiteral', pattern: /0[xX][0-9a-fA-F]+/ } );
			const NumberLiteral = createToken( { name: 'NumberLiteral', pattern: /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/ } );
			const TrueLiteral = createToken( { name: 'TrueLiteral', pattern: /TRUE/ } );
			const FalseLiteral = createToken( { name: 'FalseLiteral', pattern: /FALSE/ } );
			const NullLiteral = createToken( { name: 'NullLiteral', pattern: /NULL/ } );
			const LSquare = createToken( { name: 'LSquare', pattern: /\[/ } );
			const RSquare = createToken( { name: 'RSquare', pattern: /]/ } );
			const LCurly = createToken( { name: 'LCurly', pattern: /{/ } );
			const RCurly = createToken( { name: 'RCurly', pattern: /}/ } );
			const Comment = createToken( {
				name: 'Comment',
				pattern: /#.*/,
				group: chevrotain.Lexer.SKIPPED // eslint-disable-line no-undef
			} );

			// commas, blanks, tabs, newlines and carriage returns are whitespace characters wherever they appear outside of string fields

			const WhiteSpace = createToken( {
				name: 'WhiteSpace',
				pattern: /[ ,\s]/,
				group: chevrotain.Lexer.SKIPPED // eslint-disable-line no-undef
			} );

			const tokens = [
				WhiteSpace,
				// keywords appear before the Identifier
				NodeName,
				DEF,
				USE,
				ROUTE,
				TO,
				TrueLiteral,
				FalseLiteral,
				NullLiteral,
				// the Identifier must appear after the keywords because all keywords are valid identifiers
				Version,
				Identifier,
				RouteIdentifier,
				StringLiteral,
				HexLiteral,
				NumberLiteral,
				LSquare,
				RSquare,
				LCurly,
				RCurly,
				Comment
			];

			const tokenVocabulary = {};

			for ( let i = 0, l = tokens.length; i < l; i ++ ) {

				const token = tokens[ i ];

				tokenVocabulary[ token.name ] = token;

			}

			return { tokens: tokens, tokenVocabulary: tokenVocabulary };

		}


		function createVisitor( BaseVRMLVisitor ) {

			// the visitor is created dynmaically based on the given base class

			class VRMLToASTVisitor extends BaseVRMLVisitor {

				constructor() {

					super();

					this.validateVisitor();

				}

				vrml( ctx ) {

					const data = {
						version: this.visit( ctx.version ),
						nodes: [],
						routes: []
					};

					for ( let i = 0, l = ctx.node.length; i < l; i ++ ) {

						const node = ctx.node[ i ];

						data.nodes.push( this.visit( node ) );

					}

					if ( ctx.route ) {

						for ( let i = 0, l = ctx.route.length; i < l; i ++ ) {

							const route = ctx.route[ i ];

							data.routes.push( this.visit( route ) );

						}

					}

					return data;

				}

				version( ctx ) {

					return ctx.Version[ 0 ].image;

				}

				node( ctx ) {

					const data = {
						name: ctx.NodeName[ 0 ].image,
						fields: []
					};

					if ( ctx.field ) {

						for ( let i = 0, l = ctx.field.length; i < l; i ++ ) {

							const field = ctx.field[ i ];

							data.fields.push( this.visit( field ) );

						}

					}

					// DEF

					if ( ctx.def ) {

						data.DEF = this.visit( ctx.def[ 0 ] );

					}

					return data;

				}

				field( ctx ) {

					const data = {
						name: ctx.Identifier[ 0 ].image,
						type: null,
						values: null
					};

					let result;

					// SFValue

					if ( ctx.singleFieldValue ) {

						result = this.visit( ctx.singleFieldValue[ 0 ] );

					}

					// MFValue

					if ( ctx.multiFieldValue ) {

						result = this.visit( ctx.multiFieldValue[ 0 ] );

					}

					data.type = result.type;
					data.values = result.values;

					return data;

				}

				def( ctx ) {

					return ( ctx.Identifier || ctx.NodeName )[ 0 ].image;

				}

				use( ctx ) {

					return { USE: ( ctx.Identifier || ctx.NodeName )[ 0 ].image };

				}

				singleFieldValue( ctx ) {

					return processField( this, ctx );

				}

				multiFieldValue( ctx ) {

					return processField( this, ctx );

				}

				route( ctx ) {

					const data = {
						FROM: ctx.RouteIdentifier[ 0 ].image,
						TO: ctx.RouteIdentifier[ 1 ].image
					};

					return data;

				}

			}

			function processField( scope, ctx ) {

				const field = {
					type: null,
					values: []
				};

				if ( ctx.node ) {

					field.type = 'node';

					for ( let i = 0, l = ctx.node.length; i < l; i ++ ) {

						const node = ctx.node[ i ];

						field.values.push( scope.visit( node ) );

					}

				}

				if ( ctx.use ) {

					field.type = 'use';

					for ( let i = 0, l = ctx.use.length; i < l; i ++ ) {

						const use = ctx.use[ i ];

						field.values.push( scope.visit( use ) );

					}

				}

				if ( ctx.StringLiteral ) {

					field.type = 'string';

					for ( let i = 0, l = ctx.StringLiteral.length; i < l; i ++ ) {

						const stringLiteral = ctx.StringLiteral[ i ];

						field.values.push( stringLiteral.image.replace( /'|"/g, '' ) );

					}

				}

				if ( ctx.NumberLiteral ) {

					field.type = 'number';

					for ( let i = 0, l = ctx.NumberLiteral.length; i < l; i ++ ) {

						const numberLiteral = ctx.NumberLiteral[ i ];

						field.values.push( parseFloat( numberLiteral.image ) );

					}

				}

				if ( ctx.HexLiteral ) {

					field.type = 'hex';

					for ( let i = 0, l = ctx.HexLiteral.length; i < l; i ++ ) {

						const hexLiteral = ctx.HexLiteral[ i ];

						field.values.push( hexLiteral.image );

					}

				}

				if ( ctx.TrueLiteral ) {

					field.type = 'boolean';

					for ( let i = 0, l = ctx.TrueLiteral.length; i < l; i ++ ) {

						const trueLiteral = ctx.TrueLiteral[ i ];

						if ( trueLiteral.image === 'TRUE' ) field.values.push( true );

					}

				}

				if ( ctx.FalseLiteral ) {

					field.type = 'boolean';

					for ( let i = 0, l = ctx.FalseLiteral.length; i < l; i ++ ) {

						const falseLiteral = ctx.FalseLiteral[ i ];

						if ( falseLiteral.image === 'FALSE' ) field.values.push( false );

					}

				}

				if ( ctx.NullLiteral ) {

					field.type = 'null';

					ctx.NullLiteral.forEach( function () {

						field.values.push( null );

					} );

				}

				return field;

			}

			return new VRMLToASTVisitor();

		}

		function parseTree( tree ) {

			// console.log( JSON.stringify( tree, null, 2 ) );

			const nodes = tree.nodes;
			const scene = new Scene();

			// first iteration: build nodemap based on DEF statements

			for ( let i = 0, l = nodes.length; i < l; i ++ ) {

				const node = nodes[ i ];

				buildNodeMap( node );

			}

			// second iteration: build nodes

			for ( let i = 0, l = nodes.length; i < l; i ++ ) {

				const node = nodes[ i ];
				const object = getNode( node );

				if ( object instanceof Object3D ) scene.add( object );

				if ( node.name === 'WorldInfo' ) scene.userData.worldInfo = object;

			}

			return scene;

		}

		function buildNodeMap( node ) {

			if ( node.DEF ) {

				nodeMap[ node.DEF ] = node;

			}

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];

				if ( field.type === 'node' ) {

					const fieldValues = field.values;

					for ( let j = 0, jl = fieldValues.length; j < jl; j ++ ) {

						buildNodeMap( fieldValues[ j ] );

					}

				}


			}

		}


		function getNode( node ) {

			// handle case where a node refers to a different one

			if ( node.USE ) {

				return resolveUSE( node.USE );

			}

			if ( node.build !== undefined ) return node.build;

			node.build = buildNode( node );

			return node.build;

		}

		// node builder

		function buildNode( node ) {

			const nodeName = node.name;
			let build;

			switch ( nodeName ) {

				case 'Anchor':
				case 'Group':
				case 'Transform':
				case 'Collision':
					build = buildGroupingNode( node );
					break;

				case 'Background':
					build = buildBackgroundNode( node );
					break;

				case 'Shape':
					build = buildShapeNode( node );
					break;

				case 'Appearance':
					build = buildAppearanceNode( node );
					break;

				case 'Material':
					build = buildMaterialNode( node );
					break;

				case 'ImageTexture':
					build = buildImageTextureNode( node );
					break;

				case 'PixelTexture':
					build = buildPixelTextureNode( node );
					break;

				case 'TextureTransform':
					build = buildTextureTransformNode( node );
					break;

				case 'IndexedFaceSet':
					build = buildIndexedFaceSetNode( node );
					break;

				case 'IndexedLineSet':
					build = buildIndexedLineSetNode( node );
					break;

				case 'PointSet':
					build = buildPointSetNode( node );
					break;

				case 'Box':
					build = buildBoxNode( node );
					break;

				case 'Cone':
					build = buildConeNode( node );
					break;

				case 'Cylinder':
					build = buildCylinderNode( node );
					break;

				case 'Sphere':
					build = buildSphereNode( node );
					break;

				case 'ElevationGrid':
					build = buildElevationGridNode( node );
					break;

				case 'Extrusion':
					build = buildExtrusionNode( node );
					break;

				case 'Color':
				case 'Coordinate':
				case 'Normal':
				case 'TextureCoordinate':
					build = buildGeometricNode( node );
					break;

				case 'WorldInfo':
					build = buildWorldInfoNode( node );
					break;

				case 'Billboard':

				case 'Inline':
				case 'LOD':
				case 'Switch':

				case 'AudioClip':
				case 'DirectionalLight':
				case 'PointLight':
				case 'Script':
				case 'Sound':
				case 'SpotLight':

				case 'CylinderSensor':
				case 'PlaneSensor':
				case 'ProximitySensor':
				case 'SphereSensor':
				case 'TimeSensor':
				case 'TouchSensor':
				case 'VisibilitySensor':

				case 'Text':

				case 'FontStyle':
				case 'MovieTexture':

				case 'ColorInterpolator':
				case 'CoordinateInterpolator':
				case 'NormalInterpolator':
				case 'OrientationInterpolator':
				case 'PositionInterpolator':
				case 'ScalarInterpolator':

				case 'Fog':
				case 'NavigationInfo':
				case 'Viewpoint':
					// node not supported yet
					break;

				default:
					console.warn( 'THREE.VRMLLoader: Unknown node:', nodeName );
					break;

			}

			if ( build !== undefined && node.DEF !== undefined && build.hasOwnProperty( 'name' ) === true ) {

				build.name = node.DEF;

			}

			return build;

		}

		function buildGroupingNode( node ) {

			const object = new Group();

			//

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'bboxCenter':
						// field not supported
						break;

					case 'bboxSize':
						// field not supported
						break;

					case 'center':
						// field not supported
						break;

					case 'children':
						parseFieldChildren( fieldValues, object );
						break;

					case 'description':
						// field not supported
						break;

					case 'collide':
						// field not supported
						break;

					case 'parameter':
						// field not supported
						break;

					case 'rotation':
						const axis = new Vector3( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						const angle = fieldValues[ 3 ];
						object.quaternion.setFromAxisAngle( axis, angle );
						break;

					case 'scale':
						object.scale.set( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						break;

					case 'scaleOrientation':
						// field not supported
						break;

					case 'translation':
						object.position.set( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						break;

					case 'proxy':
						// field not supported
						break;

					case 'url':
						// field not supported
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			return object;

		}

		function buildBackgroundNode( node ) {

			const group = new Group();

			let groundAngle, groundColor;
			let skyAngle, skyColor;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'groundAngle':
						groundAngle = fieldValues;
						break;

					case 'groundColor':
						groundColor = fieldValues;
						break;

					case 'backUrl':
						// field not supported
						break;

					case 'bottomUrl':
						// field not supported
						break;

					case 'frontUrl':
						// field not supported
						break;

					case 'leftUrl':
						// field not supported
						break;

					case 'rightUrl':
						// field not supported
						break;

					case 'topUrl':
						// field not supported
						break;

					case 'skyAngle':
						skyAngle = fieldValues;
						break;

					case 'skyColor':
						skyColor = fieldValues;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const radius = 10000;

			// sky

			if ( skyColor ) {

				const skyGeometry = new SphereGeometry( radius, 32, 16 );
				const skyMaterial = new MeshBasicMaterial( { fog: false, side: BackSide, depthWrite: false, depthTest: false } );

				if ( skyColor.length > 3 ) {

					paintFaces( skyGeometry, radius, skyAngle, toColorArray( skyColor ), true );
					skyMaterial.vertexColors = true;

				} else {

					skyMaterial.color.setRGB( skyColor[ 0 ], skyColor[ 1 ], skyColor[ 2 ] );

				}

				const sky = new Mesh( skyGeometry, skyMaterial );
				group.add( sky );

			}

			// ground

			if ( groundColor ) {

				if ( groundColor.length > 0 ) {

					const groundGeometry = new SphereGeometry( radius, 32, 16, 0, 2 * Math.PI, 0.5 * Math.PI, 1.5 * Math.PI );
					const groundMaterial = new MeshBasicMaterial( { fog: false, side: BackSide, vertexColors: true, depthWrite: false, depthTest: false } );

					paintFaces( groundGeometry, radius, groundAngle, toColorArray( groundColor ), false );

					const ground = new Mesh( groundGeometry, groundMaterial );
					group.add( ground );

				}

			}

			// render background group first

			group.renderOrder = - Infinity;

			return group;

		}

		function buildShapeNode( node ) {

			const fields = node.fields;

			// if the appearance field is NULL or unspecified, lighting is off and the unlit object color is (0, 0, 0)

			let material = new MeshBasicMaterial( { color: 0x000000 } );
			let geometry;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'appearance':
						if ( fieldValues[ 0 ] !== null ) {

							material = getNode( fieldValues[ 0 ] );

						}

						break;

					case 'geometry':
						if ( fieldValues[ 0 ] !== null ) {

							geometry = getNode( fieldValues[ 0 ] );

						}

						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			// build 3D object

			let object;

			if ( geometry && geometry.attributes.position ) {

				const type = geometry._type;

				if ( type === 'points' ) { // points

					const pointsMaterial = new PointsMaterial( { color: 0xffffff } );

					if ( geometry.attributes.color !== undefined ) {

						pointsMaterial.vertexColors = true;

					} else {

						// if the color field is NULL and there is a material defined for the appearance affecting this PointSet, then use the emissiveColor of the material to draw the points

						if ( material.isMeshPhongMaterial ) {

							pointsMaterial.color.copy( material.emissive );

						}

					}

					object = new Points( geometry, pointsMaterial );

				} else if ( type === 'line' ) { // lines

					const lineMaterial = new LineBasicMaterial( { color: 0xffffff } );

					if ( geometry.attributes.color !== undefined ) {

						lineMaterial.vertexColors = true;

					} else {

						// if the color field is NULL and there is a material defined for the appearance affecting this IndexedLineSet, then use the emissiveColor of the material to draw the lines

						if ( material.isMeshPhongMaterial ) {

							lineMaterial.color.copy( material.emissive );

						}

					}

					object = new LineSegments( geometry, lineMaterial );

				} else { // consider meshes

					// check "solid" hint (it's placed in the geometry but affects the material)

					if ( geometry._solid !== undefined ) {

						material.side = ( geometry._solid ) ? FrontSide : DoubleSide;

					}

					// check for vertex colors

					if ( geometry.attributes.color !== undefined ) {

						material.vertexColors = true;

					}

					object = new Mesh( geometry, material );

				}

			} else {

				object = new Object3D();

				// if the geometry field is NULL or no vertices are defined the object is not drawn

				object.visible = false;

			}

			return object;

		}

		function buildAppearanceNode( node ) {

			let material = new MeshPhongMaterial();
			let transformData;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'material':
						if ( fieldValues[ 0 ] !== null ) {

							const materialData = getNode( fieldValues[ 0 ] );

							if ( materialData.diffuseColor ) material.color.copy( materialData.diffuseColor );
							if ( materialData.emissiveColor ) material.emissive.copy( materialData.emissiveColor );
							if ( materialData.shininess ) material.shininess = materialData.shininess;
							if ( materialData.specularColor ) material.specular.copy( materialData.specularColor );
							if ( materialData.transparency ) material.opacity = 1 - materialData.transparency;
							if ( materialData.transparency > 0 ) material.transparent = true;

						} else {

							// if the material field is NULL or unspecified, lighting is off and the unlit object color is (0, 0, 0)

							material = new MeshBasicMaterial( { color: 0x000000 } );

						}

						break;

					case 'texture':
						const textureNode = fieldValues[ 0 ];
						if ( textureNode !== null ) {

							if ( textureNode.name === 'ImageTexture' || textureNode.name === 'PixelTexture' ) {

								material.map = getNode( textureNode );

							} else {

								// MovieTexture not supported yet

							}

						}

						break;

					case 'textureTransform':
						if ( fieldValues[ 0 ] !== null ) {

							transformData = getNode( fieldValues[ 0 ] );

						}

						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			// only apply texture transform data if a texture was defined

			if ( material.map ) {

				// respect VRML lighting model

				if ( material.map.__type ) {

					switch ( material.map.__type ) {

						case TEXTURE_TYPE.INTENSITY_ALPHA:
							material.opacity = 1; // ignore transparency
							break;

						case TEXTURE_TYPE.RGB:
							material.color.set( 0xffffff ); // ignore material color
							break;

						case TEXTURE_TYPE.RGBA:
							material.color.set( 0xffffff ); // ignore material color
							material.opacity = 1; // ignore transparency
							break;

						default:

					}

					delete material.map.__type;

				}

				// apply texture transform

				if ( transformData ) {

					material.map.center.copy( transformData.center );
					material.map.rotation = transformData.rotation;
					material.map.repeat.copy( transformData.scale );
					material.map.offset.copy( transformData.translation );

				}

			}

			return material;

		}

		function buildMaterialNode( node ) {

			const materialData = {};

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'ambientIntensity':
						// field not supported
						break;

					case 'diffuseColor':
						materialData.diffuseColor = new Color( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						break;

					case 'emissiveColor':
						materialData.emissiveColor = new Color( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						break;

					case 'shininess':
						materialData.shininess = fieldValues[ 0 ];
						break;

					case 'specularColor':
						materialData.emissiveColor = new Color( fieldValues[ 0 ], fieldValues[ 1 ], fieldValues[ 2 ] );
						break;

					case 'transparency':
						materialData.transparency = fieldValues[ 0 ];
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			return materialData;

		}

		function parseHexColor( hex, textureType, color ) {

			let value;

			switch ( textureType ) {

				case TEXTURE_TYPE.INTENSITY:
					// Intensity texture: A one-component image specifies one-byte hexadecimal or integer values representing the intensity of the image
					value = parseInt( hex );
					color.r = value;
					color.g = value;
					color.b = value;
					color.a = 1;
					break;

				case TEXTURE_TYPE.INTENSITY_ALPHA:
					// Intensity+Alpha texture: A two-component image specifies the intensity in the first (high) byte and the alpha opacity in the second (low) byte.
					value = parseInt( '0x' + hex.substring( 2, 4 ) );
					color.r = value;
					color.g = value;
					color.b = value;
					color.a = parseInt( '0x' + hex.substring( 4, 6 ) );
					break;

				case TEXTURE_TYPE.RGB:
					// RGB texture: Pixels in a three-component image specify the red component in the first (high) byte, followed by the green and blue components
					color.r = parseInt( '0x' + hex.substring( 2, 4 ) );
					color.g = parseInt( '0x' + hex.substring( 4, 6 ) );
					color.b = parseInt( '0x' + hex.substring( 6, 8 ) );
					color.a = 1;
					break;

				case TEXTURE_TYPE.RGBA:
					// RGBA texture: Four-component images specify the alpha opacity byte after red/green/blue
					color.r = parseInt( '0x' + hex.substring( 2, 4 ) );
					color.g = parseInt( '0x' + hex.substring( 4, 6 ) );
					color.b = parseInt( '0x' + hex.substring( 6, 8 ) );
					color.a = parseInt( '0x' + hex.substring( 8, 10 ) );
					break;

				default:

			}

		}

		function getTextureType( num_components ) {

			let type;

			switch ( num_components ) {

				case 1:
					type = TEXTURE_TYPE.INTENSITY;
					break;

				case 2:
					type = TEXTURE_TYPE.INTENSITY_ALPHA;
					break;

				case 3:
					type = TEXTURE_TYPE.RGB;
					break;

				case 4:
					type = TEXTURE_TYPE.RGBA;
					break;

				default:

			}

			return type;

		}

		function buildPixelTextureNode( node ) {

			let texture;
			let wrapS = RepeatWrapping;
			let wrapT = RepeatWrapping;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'image':
						const width = fieldValues[ 0 ];
						const height = fieldValues[ 1 ];
						const num_components = fieldValues[ 2 ];

						const textureType = getTextureType( num_components );

						const data = new Uint8Array( 4 * width * height );

						const color = { r: 0, g: 0, b: 0, a: 0 };

						for ( let j = 3, k = 0, jl = fieldValues.length; j < jl; j ++, k ++ ) {

							parseHexColor( fieldValues[ j ], textureType, color );

							const stride = k * 4;

							data[ stride + 0 ] = color.r;
							data[ stride + 1 ] = color.g;
							data[ stride + 2 ] = color.b;
							data[ stride + 3 ] = color.a;

						}

						texture = new DataTexture( data, width, height );
						texture.needsUpdate = true;
						texture.__type = textureType; // needed for material modifications
						break;

					case 'repeatS':
						if ( fieldValues[ 0 ] === false ) wrapS = ClampToEdgeWrapping;
						break;

					case 'repeatT':
						if ( fieldValues[ 0 ] === false ) wrapT = ClampToEdgeWrapping;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			if ( texture ) {

				texture.wrapS = wrapS;
				texture.wrapT = wrapT;

			}

			return texture;

		}

		function buildImageTextureNode( node ) {

			let texture;
			let wrapS = RepeatWrapping;
			let wrapT = RepeatWrapping;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'url':
						const url = fieldValues[ 0 ];
						if ( url ) texture = textureLoader.load( url );
						break;

					case 'repeatS':
						if ( fieldValues[ 0 ] === false ) wrapS = ClampToEdgeWrapping;
						break;

					case 'repeatT':
						if ( fieldValues[ 0 ] === false ) wrapT = ClampToEdgeWrapping;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			if ( texture ) {

				texture.wrapS = wrapS;
				texture.wrapT = wrapT;

			}

			return texture;

		}

		function buildTextureTransformNode( node ) {

			const transformData = {
				center: new Vector2(),
				rotation: new Vector2(),
				scale: new Vector2(),
				translation: new Vector2()
			};

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'center':
						transformData.center.set( fieldValues[ 0 ], fieldValues[ 1 ] );
						break;

					case 'rotation':
						transformData.rotation = fieldValues[ 0 ];
						break;

					case 'scale':
						transformData.scale.set( fieldValues[ 0 ], fieldValues[ 1 ] );
						break;

					case 'translation':
						transformData.translation.set( fieldValues[ 0 ], fieldValues[ 1 ] );
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			return transformData;

		}

		function buildGeometricNode( node ) {

			return node.fields[ 0 ].values;

		}

		function buildWorldInfoNode( node ) {

			const worldInfo = {};

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'title':
						worldInfo.title = fieldValues[ 0 ];
						break;

					case 'info':
						worldInfo.info = fieldValues;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			return worldInfo;

		}

		function buildIndexedFaceSetNode( node ) {

			let color, coord, normal, texCoord;
			let ccw = true, solid = true, creaseAngle = 0;
			let colorIndex, coordIndex, normalIndex, texCoordIndex;
			let colorPerVertex = true, normalPerVertex = true;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'color':
						const colorNode = fieldValues[ 0 ];

						if ( colorNode !== null ) {

							color = getNode( colorNode );

						}

						break;

					case 'coord':
						const coordNode = fieldValues[ 0 ];

						if ( coordNode !== null ) {

							coord = getNode( coordNode );

						}

						break;

					case 'normal':
						const normalNode = fieldValues[ 0 ];

						if ( normalNode !== null ) {

							normal = getNode( normalNode );

						}

						break;

					case 'texCoord':
						const texCoordNode = fieldValues[ 0 ];

						if ( texCoordNode !== null ) {

							texCoord = getNode( texCoordNode );

						}

						break;

					case 'ccw':
						ccw = fieldValues[ 0 ];
						break;

					case 'colorIndex':
						colorIndex = fieldValues;
						break;

					case 'colorPerVertex':
						colorPerVertex = fieldValues[ 0 ];
						break;

					case 'convex':
						// field not supported
						break;

					case 'coordIndex':
						coordIndex = fieldValues;
						break;

					case 'creaseAngle':
						creaseAngle = fieldValues[ 0 ];
						break;

					case 'normalIndex':
						normalIndex = fieldValues;
						break;

					case 'normalPerVertex':
						normalPerVertex = fieldValues[ 0 ];
						break;

					case 'solid':
						solid = fieldValues[ 0 ];
						break;

					case 'texCoordIndex':
						texCoordIndex = fieldValues;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			if ( coordIndex === undefined ) {

				console.warn( 'THREE.VRMLLoader: Missing coordIndex.' );

				return new BufferGeometry(); // handle VRML files with incomplete geometry definition

			}

			const triangulatedCoordIndex = triangulateFaceIndex( coordIndex, ccw );

			let colorAttribute;
			let normalAttribute;
			let uvAttribute;

			if ( color ) {

				if ( colorPerVertex === true ) {

					if ( colorIndex && colorIndex.length > 0 ) {

						// if the colorIndex field is not empty, then it is used to choose colors for each vertex of the IndexedFaceSet.

						const triangulatedColorIndex = triangulateFaceIndex( colorIndex, ccw );
						colorAttribute = computeAttributeFromIndexedData( triangulatedCoordIndex, triangulatedColorIndex, color, 3 );

					} else {

						// if the colorIndex field is empty, then the coordIndex field is used to choose colors from the Color node

						colorAttribute = toNonIndexedAttribute( triangulatedCoordIndex, new Float32BufferAttribute( color, 3 ) );

					}

				} else {

					if ( colorIndex && colorIndex.length > 0 ) {

						// if the colorIndex field is not empty, then they are used to choose one color for each face of the IndexedFaceSet

						const flattenFaceColors = flattenData( color, colorIndex );
						const triangulatedFaceColors = triangulateFaceData( flattenFaceColors, coordIndex );
						colorAttribute = computeAttributeFromFaceData( triangulatedCoordIndex, triangulatedFaceColors );

					} else {

						// if the colorIndex field is empty, then the color are applied to each face of the IndexedFaceSet in order

						const triangulatedFaceColors = triangulateFaceData( color, coordIndex );
						colorAttribute = computeAttributeFromFaceData( triangulatedCoordIndex, triangulatedFaceColors );


					}

				}

			}

			if ( normal ) {

				if ( normalPerVertex === true ) {

					// consider vertex normals

					if ( normalIndex && normalIndex.length > 0 ) {

						// if the normalIndex field is not empty, then it is used to choose normals for each vertex of the IndexedFaceSet.

						const triangulatedNormalIndex = triangulateFaceIndex( normalIndex, ccw );
						normalAttribute = computeAttributeFromIndexedData( triangulatedCoordIndex, triangulatedNormalIndex, normal, 3 );

					} else {

						// if the normalIndex field is empty, then the coordIndex field is used to choose normals from the Normal node

						normalAttribute = toNonIndexedAttribute( triangulatedCoordIndex, new Float32BufferAttribute( normal, 3 ) );

					}

				} else {

					// consider face normals

					if ( normalIndex && normalIndex.length > 0 ) {

						// if the normalIndex field is not empty, then they are used to choose one normal for each face of the IndexedFaceSet

						const flattenFaceNormals = flattenData( normal, normalIndex );
						const triangulatedFaceNormals = triangulateFaceData( flattenFaceNormals, coordIndex );
						normalAttribute = computeAttributeFromFaceData( triangulatedCoordIndex, triangulatedFaceNormals );

					} else {

						// if the normalIndex field is empty, then the normals are applied to each face of the IndexedFaceSet in order

						const triangulatedFaceNormals = triangulateFaceData( normal, coordIndex );
						normalAttribute = computeAttributeFromFaceData( triangulatedCoordIndex, triangulatedFaceNormals );

					}

				}

			} else {

				// if the normal field is NULL, then the loader should automatically generate normals, using creaseAngle to determine if and how normals are smoothed across shared vertices

				normalAttribute = computeNormalAttribute( triangulatedCoordIndex, coord, creaseAngle );

			}

			if ( texCoord ) {

				// texture coordinates are always defined on vertex level

				if ( texCoordIndex && texCoordIndex.length > 0 ) {

					// if the texCoordIndex field is not empty, then it is used to choose texture coordinates for each vertex of the IndexedFaceSet.

					const triangulatedTexCoordIndex = triangulateFaceIndex( texCoordIndex, ccw );
					uvAttribute = computeAttributeFromIndexedData( triangulatedCoordIndex, triangulatedTexCoordIndex, texCoord, 2 );


				} else {

					// if the texCoordIndex field is empty, then the coordIndex array is used to choose texture coordinates from the TextureCoordinate node

					uvAttribute = toNonIndexedAttribute( triangulatedCoordIndex, new Float32BufferAttribute( texCoord, 2 ) );

				}

			}

			const geometry = new BufferGeometry();
			const positionAttribute = toNonIndexedAttribute( triangulatedCoordIndex, new Float32BufferAttribute( coord, 3 ) );

			geometry.setAttribute( 'position', positionAttribute );
			geometry.setAttribute( 'normal', normalAttribute );

			// optional attributes

			if ( colorAttribute ) geometry.setAttribute( 'color', colorAttribute );
			if ( uvAttribute ) geometry.setAttribute( 'uv', uvAttribute );

			// "solid" influences the material so let's store it for later use

			geometry._solid = solid;
			geometry._type = 'mesh';

			return geometry;

		}

		function buildIndexedLineSetNode( node ) {

			let color, coord;
			let colorIndex, coordIndex;
			let colorPerVertex = true;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'color':
						const colorNode = fieldValues[ 0 ];

						if ( colorNode !== null ) {

							color = getNode( colorNode );

						}

						break;

					case 'coord':
						const coordNode = fieldValues[ 0 ];

						if ( coordNode !== null ) {

							coord = getNode( coordNode );

						}

						break;

					case 'colorIndex':
						colorIndex = fieldValues;
						break;

					case 'colorPerVertex':
						colorPerVertex = fieldValues[ 0 ];
						break;

					case 'coordIndex':
						coordIndex = fieldValues;
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			// build lines

			let colorAttribute;

			const expandedLineIndex = expandLineIndex( coordIndex ); // create an index for three.js's linesegment primitive

			if ( color ) {

				if ( colorPerVertex === true ) {

					if ( colorIndex.length > 0 ) {

						// if the colorIndex field is not empty, then one color is used for each polyline of the IndexedLineSet.

						const expandedColorIndex = expandLineIndex( colorIndex ); // compute colors for each line segment (rendering primitve)
						colorAttribute = computeAttributeFromIndexedData( expandedLineIndex, expandedColorIndex, color, 3 ); // compute data on vertex level

					} else {

						// if the colorIndex field is empty, then the colors are applied to each polyline of the IndexedLineSet in order.

						colorAttribute = toNonIndexedAttribute( expandedLineIndex, new Float32BufferAttribute( color, 3 ) );

					}

				} else {

					if ( colorIndex.length > 0 ) {

						// if the colorIndex field is not empty, then colors are applied to each vertex of the IndexedLineSet

						const flattenLineColors = flattenData( color, colorIndex ); // compute colors for each VRML primitve
						const expandedLineColors = expandLineData( flattenLineColors, coordIndex ); // compute colors for each line segment (rendering primitve)
						colorAttribute = computeAttributeFromLineData( expandedLineIndex, expandedLineColors ); // compute data on vertex level


					} else {

						// if the colorIndex field is empty, then the coordIndex field is used to choose colors from the Color node

						const expandedLineColors = expandLineData( color, coordIndex ); // compute colors for each line segment (rendering primitve)
						colorAttribute = computeAttributeFromLineData( expandedLineIndex, expandedLineColors ); // compute data on vertex level

					}

				}

			}

			//

			const geometry = new BufferGeometry();

			const positionAttribute = toNonIndexedAttribute( expandedLineIndex, new Float32BufferAttribute( coord, 3 ) );
			geometry.setAttribute( 'position', positionAttribute );

			if ( colorAttribute ) geometry.setAttribute( 'color', colorAttribute );

			geometry._type = 'line';

			return geometry;

		}

		function buildPointSetNode( node ) {

			let color, coord;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'color':
						const colorNode = fieldValues[ 0 ];

						if ( colorNode !== null ) {

							color = getNode( colorNode );

						}

						break;

					case 'coord':
						const coordNode = fieldValues[ 0 ];

						if ( coordNode !== null ) {

							coord = getNode( coordNode );

						}

						break;


					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const geometry = new BufferGeometry();

			geometry.setAttribute( 'position', new Float32BufferAttribute( coord, 3 ) );
			if ( color ) geometry.setAttribute( 'color', new Float32BufferAttribute( color, 3 ) );

			geometry._type = 'points';

			return geometry;

		}

		function buildBoxNode( node ) {

			const size = new Vector3( 2, 2, 2 );

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'size':
						size.x = fieldValues[ 0 ];
						size.y = fieldValues[ 1 ];
						size.z = fieldValues[ 2 ];
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const geometry = new BoxGeometry( size.x, size.y, size.z );

			return geometry;

		}

		function buildConeNode( node ) {

			let radius = 1, height = 2, openEnded = false;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'bottom':
						openEnded = ! fieldValues[ 0 ];
						break;

					case 'bottomRadius':
						radius = fieldValues[ 0 ];
						break;

					case 'height':
						height = fieldValues[ 0 ];
						break;

					case 'side':
						// field not supported
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const geometry = new ConeGeometry( radius, height, 16, 1, openEnded );

			return geometry;

		}

		function buildCylinderNode( node ) {

			let radius = 1, height = 2;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'bottom':
						// field not supported
						break;

					case 'radius':
						radius = fieldValues[ 0 ];
						break;

					case 'height':
						height = fieldValues[ 0 ];
						break;

					case 'side':
						// field not supported
						break;

					case 'top':
						// field not supported
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const geometry = new CylinderGeometry( radius, radius, height, 16, 1 );

			return geometry;

		}

		function buildSphereNode( node ) {

			let radius = 1;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'radius':
						radius = fieldValues[ 0 ];
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const geometry = new SphereGeometry( radius, 16, 16 );

			return geometry;

		}

		function buildElevationGridNode( node ) {

			let color;
			let normal;
			let texCoord;
			let height;

			let colorPerVertex = true;
			let normalPerVertex = true;
			let solid = true;
			let ccw = true;
			let creaseAngle = 0;
			let xDimension = 2;
			let zDimension = 2;
			let xSpacing = 1;
			let zSpacing = 1;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'color':
						const colorNode = fieldValues[ 0 ];

						if ( colorNode !== null ) {

							color = getNode( colorNode );

						}

						break;

					case 'normal':
						const normalNode = fieldValues[ 0 ];

						if ( normalNode !== null ) {

							normal = getNode( normalNode );

						}

						break;

					case 'texCoord':
						const texCoordNode = fieldValues[ 0 ];

						if ( texCoordNode !== null ) {

							texCoord = getNode( texCoordNode );

						}

						break;

					case 'height':
						height = fieldValues;
						break;

					case 'ccw':
						ccw = fieldValues[ 0 ];
						break;

					case 'colorPerVertex':
						colorPerVertex = fieldValues[ 0 ];
						break;

					case 'creaseAngle':
						creaseAngle = fieldValues[ 0 ];
						break;

					case 'normalPerVertex':
						normalPerVertex = fieldValues[ 0 ];
						break;

					case 'solid':
						solid = fieldValues[ 0 ];
						break;

					case 'xDimension':
						xDimension = fieldValues[ 0 ];
						break;

					case 'xSpacing':
						xSpacing = fieldValues[ 0 ];
						break;

					case 'zDimension':
						zDimension = fieldValues[ 0 ];
						break;

					case 'zSpacing':
						zSpacing = fieldValues[ 0 ];
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			// vertex data

			const vertices = [];
			const normals = [];
			const colors = [];
			const uvs = [];

			for ( let i = 0; i < zDimension; i ++ ) {

				for ( let j = 0; j < xDimension; j ++ ) {

					// compute a row major index

					const index = ( i * xDimension ) + j;

					// vertices

					const x = xSpacing * i;
					const y = height[ index ];
					const z = zSpacing * j;

					vertices.push( x, y, z );

					// colors

					if ( color && colorPerVertex === true ) {

						const r = color[ index * 3 + 0 ];
						const g = color[ index * 3 + 1 ];
						const b = color[ index * 3 + 2 ];

						colors.push( r, g, b );

					}

					// normals

					if ( normal && normalPerVertex === true ) {

						const xn = normal[ index * 3 + 0 ];
						const yn = normal[ index * 3 + 1 ];
						const zn = normal[ index * 3 + 2 ];

						normals.push( xn, yn, zn );

					}

					// uvs

					if ( texCoord ) {

						const s = texCoord[ index * 2 + 0 ];
						const t = texCoord[ index * 2 + 1 ];

						uvs.push( s, t );


					} else {

						uvs.push( i / ( xDimension - 1 ), j / ( zDimension - 1 ) );

					}

				}

			}

			// indices

			const indices = [];

			for ( let i = 0; i < xDimension - 1; i ++ ) {

				for ( let j = 0; j < zDimension - 1; j ++ ) {

					// from https://tecfa.unige.ch/guides/vrml/vrml97/spec/part1/nodesRef.html#ElevationGrid

					const a = i + j * xDimension;
					const b = i + ( j + 1 ) * xDimension;
					const c = ( i + 1 ) + ( j + 1 ) * xDimension;
					const d = ( i + 1 ) + j * xDimension;

					// faces

					if ( ccw === true ) {

						indices.push( a, c, b );
						indices.push( c, a, d );

					} else {

						indices.push( a, b, c );
						indices.push( c, d, a );

					}

				}

			}

			//

			const positionAttribute = toNonIndexedAttribute( indices, new Float32BufferAttribute( vertices, 3 ) );
			const uvAttribute = toNonIndexedAttribute( indices, new Float32BufferAttribute( uvs, 2 ) );
			let colorAttribute;
			let normalAttribute;

			// color attribute

			if ( color ) {

				if ( colorPerVertex === false ) {

					for ( let i = 0; i < xDimension - 1; i ++ ) {

						for ( let j = 0; j < zDimension - 1; j ++ ) {

							const index = i + j * ( xDimension - 1 );

							const r = color[ index * 3 + 0 ];
							const g = color[ index * 3 + 1 ];
							const b = color[ index * 3 + 2 ];

							// one color per quad

							colors.push( r, g, b ); colors.push( r, g, b ); colors.push( r, g, b );
							colors.push( r, g, b ); colors.push( r, g, b ); colors.push( r, g, b );

						}

					}

					colorAttribute = new Float32BufferAttribute( colors, 3 );

				} else {

					colorAttribute = toNonIndexedAttribute( indices, new Float32BufferAttribute( colors, 3 ) );

				}

			}

			// normal attribute

			if ( normal ) {

				if ( normalPerVertex === false ) {

					for ( let i = 0; i < xDimension - 1; i ++ ) {

						for ( let j = 0; j < zDimension - 1; j ++ ) {

							const index = i + j * ( xDimension - 1 );

							const xn = normal[ index * 3 + 0 ];
							const yn = normal[ index * 3 + 1 ];
							const zn = normal[ index * 3 + 2 ];

							// one normal per quad

							normals.push( xn, yn, zn ); normals.push( xn, yn, zn ); normals.push( xn, yn, zn );
							normals.push( xn, yn, zn ); normals.push( xn, yn, zn ); normals.push( xn, yn, zn );

						}

					}

					normalAttribute = new Float32BufferAttribute( normals, 3 );

				} else {

					normalAttribute = toNonIndexedAttribute( indices, new Float32BufferAttribute( normals, 3 ) );

				}

			} else {

				normalAttribute = computeNormalAttribute( indices, vertices, creaseAngle );

			}

			// build geometry

			const geometry = new BufferGeometry();
			geometry.setAttribute( 'position', positionAttribute );
			geometry.setAttribute( 'normal', normalAttribute );
			geometry.setAttribute( 'uv', uvAttribute );

			if ( colorAttribute ) geometry.setAttribute( 'color', colorAttribute );

			// "solid" influences the material so let's store it for later use

			geometry._solid = solid;
			geometry._type = 'mesh';

			return geometry;

		}

		function buildExtrusionNode( node ) {

			let crossSection = [ 1, 1, 1, - 1, - 1, - 1, - 1, 1, 1, 1 ];
			let spine = [ 0, 0, 0, 0, 1, 0 ];
			let scale;
			let orientation;

			let beginCap = true;
			let ccw = true;
			let creaseAngle = 0;
			let endCap = true;
			let solid = true;

			const fields = node.fields;

			for ( let i = 0, l = fields.length; i < l; i ++ ) {

				const field = fields[ i ];
				const fieldName = field.name;
				const fieldValues = field.values;

				switch ( fieldName ) {

					case 'beginCap':
						beginCap = fieldValues[ 0 ];
						break;

					case 'ccw':
						ccw = fieldValues[ 0 ];
						break;

					case 'convex':
						// field not supported
						break;

					case 'creaseAngle':
						creaseAngle = fieldValues[ 0 ];
						break;

					case 'crossSection':
						crossSection = fieldValues;
						break;

					case 'endCap':
						endCap = fieldValues[ 0 ];
						break;

					case 'orientation':
						orientation = fieldValues;
						break;

					case 'scale':
						scale = fieldValues;
						break;

					case 'solid':
						solid = fieldValues[ 0 ];
						break;

					case 'spine':
						spine = fieldValues; // only extrusion along the Y-axis are supported so far
						break;

					default:
						console.warn( 'THREE.VRMLLoader: Unknown field:', fieldName );
						break;

				}

			}

			const crossSectionClosed = ( crossSection[ 0 ] === crossSection[ crossSection.length - 2 ] && crossSection[ 1 ] === crossSection[ crossSection.length - 1 ] );

			// vertices

			const vertices = [];
			const spineVector = new Vector3();
			const scaling = new Vector3();

			const axis = new Vector3();
			const vertex = new Vector3();
			const quaternion = new Quaternion();

			for ( let i = 0, j = 0, o = 0, il = spine.length; i < il; i += 3, j += 2, o += 4 ) {

				spineVector.fromArray( spine, i );

				scaling.x = scale ? scale[ j + 0 ] : 1;
				scaling.y = 1;
				scaling.z = scale ? scale[ j + 1 ] : 1;

				axis.x = orientation ? orientation[ o + 0 ] : 0;
				axis.y = orientation ? orientation[ o + 1 ] : 0;
				axis.z = orientation ? orientation[ o + 2 ] : 1;
				const angle = orientation ? orientation[ o + 3 ] : 0;

				for ( let k = 0, kl = crossSection.length; k < kl; k += 2 ) {

					vertex.x = crossSection[ k + 0 ];
					vertex.y = 0;
					vertex.z = crossSection[ k + 1 ];

					// scale

					vertex.multiply( scaling );

					// rotate

					quaternion.setFromAxisAngle( axis, angle );
					vertex.applyQuaternion( quaternion );

					// translate

					vertex.add( spineVector );

					vertices.push( vertex.x, vertex.y, vertex.z );

				}

			}

			// indices

			const indices = [];

			const spineCount = spine.length / 3;
			const crossSectionCount = crossSection.length / 2;

			for ( let i = 0; i < spineCount - 1; i ++ ) {

				for ( let j = 0; j < crossSectionCount - 1; j ++ ) {

					const a = j + i * crossSectionCount;
					let b = ( j + 1 ) + i * crossSectionCount;
					const c = j + ( i + 1 ) * crossSectionCount;
					let d = ( j + 1 ) + ( i + 1 ) * crossSectionCount;

					if ( ( j === crossSectionCount - 2 ) && ( crossSectionClosed === true ) ) {

						b = i * crossSectionCount;
						d = ( i + 1 ) * crossSectionCount;

					}

					if ( ccw === true ) {

						indices.push( a, b, c );
						indices.push( c, b, d );

					} else {

						indices.push( a, c, b );
						indices.push( c, d, b );

					}

				}

			}

			// triangulate cap

			if ( beginCap === true || endCap === true ) {

				const contour = [];

				for ( let i = 0, l = crossSection.length; i < l; i += 2 ) {

					contour.push( new Vector2( crossSection[ i ], crossSection[ i + 1 ] ) );

				}

				const faces = ShapeUtils.triangulateShape( contour, [] );
				const capIndices = [];

				for ( let i = 0, l = faces.length; i < l; i ++ ) {

					const face = faces[ i ];

					capIndices.push( face[ 0 ], face[ 1 ], face[ 2 ] );

				}

				// begin cap

				if ( beginCap === true ) {

					for ( let i = 0, l = capIndices.length; i < l; i += 3 ) {

						if ( ccw === true ) {

							indices.push( capIndices[ i + 0 ], capIndices[ i + 1 ], capIndices[ i + 2 ] );

						} else {

							indices.push( capIndices[ i + 0 ], capIndices[ i + 2 ], capIndices[ i + 1 ] );

						}

					}

				}

				// end cap

				if ( endCap === true ) {

					const indexOffset = crossSectionCount * ( spineCount - 1 ); // references to the first vertex of the last cross section

					for ( let i = 0, l = capIndices.length; i < l; i += 3 ) {

						if ( ccw === true ) {

							indices.push( indexOffset + capIndices[ i + 0 ], indexOffset + capIndices[ i + 2 ], indexOffset + capIndices[ i + 1 ] );

						} else {

							indices.push( indexOffset + capIndices[ i + 0 ], indexOffset + capIndices[ i + 1 ], indexOffset + capIndices[ i + 2 ] );

						}

					}

				}

			}

			const positionAttribute = toNonIndexedAttribute( indices, new Float32BufferAttribute( vertices, 3 ) );
			const normalAttribute = computeNormalAttribute( indices, vertices, creaseAngle );

			const geometry = new BufferGeometry();
			geometry.setAttribute( 'position', positionAttribute );
			geometry.setAttribute( 'normal', normalAttribute );
			// no uvs yet

			// "solid" influences the material so let's store it for later use

			geometry._solid = solid;
			geometry._type = 'mesh';

			return geometry;

		}

		// helper functions

		function resolveUSE( identifier ) {

			const node = nodeMap[ identifier ];
			const build = getNode( node );

			// because the same 3D objects can have different transformations, it's necessary to clone them.
			// materials can be influenced by the geometry (e.g. vertex normals). cloning is necessary to avoid
			// any side effects

			return ( build.isObject3D || build.isMaterial ) ? build.clone() : build;

		}

		function parseFieldChildren( children, owner ) {

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const object = getNode( children[ i ] );

				if ( object instanceof Object3D ) owner.add( object );

			}

		}

		function triangulateFaceIndex( index, ccw ) {

			const indices = [];

			// since face defintions can have more than three vertices, it's necessary to
			// perform a simple triangulation

			let start = 0;

			for ( let i = 0, l = index.length; i < l; i ++ ) {

				const i1 = index[ start ];
				const i2 = index[ i + ( ccw ? 1 : 2 ) ];
				const i3 = index[ i + ( ccw ? 2 : 1 ) ];

				indices.push( i1, i2, i3 );

				// an index of -1 indicates that the current face has ended and the next one begins

				if ( index[ i + 3 ] === - 1 || i + 3 >= l ) {

					i += 3;
					start = i + 1;

				}

			}

			return indices;

		}

		function triangulateFaceData( data, index ) {

			const triangulatedData = [];

			let start = 0;

			for ( let i = 0, l = index.length; i < l; i ++ ) {

				const stride = start * 3;

				const x = data[ stride ];
				const y = data[ stride + 1 ];
				const z = data[ stride + 2 ];

				triangulatedData.push( x, y, z );

				// an index of -1 indicates that the current face has ended and the next one begins

				if ( index[ i + 3 ] === - 1 || i + 3 >= l ) {

					i += 3;
					start ++;

				}

			}

			return triangulatedData;

		}

		function flattenData( data, index ) {

			const flattenData = [];

			for ( let i = 0, l = index.length; i < l; i ++ ) {

				const i1 = index[ i ];

				const stride = i1 * 3;

				const x = data[ stride ];
				const y = data[ stride + 1 ];
				const z = data[ stride + 2 ];

				flattenData.push( x, y, z );

			}

			return flattenData;

		}

		function expandLineIndex( index ) {

			const indices = [];

			for ( let i = 0, l = index.length; i < l; i ++ ) {

				const i1 = index[ i ];
				const i2 = index[ i + 1 ];

				indices.push( i1, i2 );

				// an index of -1 indicates that the current line has ended and the next one begins

				if ( index[ i + 2 ] === - 1 || i + 2 >= l ) {

					i += 2;

				}

			}

			return indices;

		}

		function expandLineData( data, index ) {

			const triangulatedData = [];

			let start = 0;

			for ( let i = 0, l = index.length; i < l; i ++ ) {

				const stride = start * 3;

				const x = data[ stride ];
				const y = data[ stride + 1 ];
				const z = data[ stride + 2 ];

				triangulatedData.push( x, y, z );

				// an index of -1 indicates that the current line has ended and the next one begins

				if ( index[ i + 2 ] === - 1 || i + 2 >= l ) {

					i += 2;
					start ++;

				}

			}

			return triangulatedData;

		}

		const vA = new Vector3();
		const vB = new Vector3();
		const vC = new Vector3();

		const uvA = new Vector2();
		const uvB = new Vector2();
		const uvC = new Vector2();

		function computeAttributeFromIndexedData( coordIndex, index, data, itemSize ) {

			const array = [];

			// we use the coordIndex.length as delimiter since normalIndex must contain at least as many indices

			for ( let i = 0, l = coordIndex.length; i < l; i += 3 ) {

				const a = index[ i ];
				const b = index[ i + 1 ];
				const c = index[ i + 2 ];

				if ( itemSize === 2 ) {

					uvA.fromArray( data, a * itemSize );
					uvB.fromArray( data, b * itemSize );
					uvC.fromArray( data, c * itemSize );

					array.push( uvA.x, uvA.y );
					array.push( uvB.x, uvB.y );
					array.push( uvC.x, uvC.y );

				} else {

					vA.fromArray( data, a * itemSize );
					vB.fromArray( data, b * itemSize );
					vC.fromArray( data, c * itemSize );

					array.push( vA.x, vA.y, vA.z );
					array.push( vB.x, vB.y, vB.z );
					array.push( vC.x, vC.y, vC.z );

				}

			}

			return new Float32BufferAttribute( array, itemSize );

		}

		function computeAttributeFromFaceData( index, faceData ) {

			const array = [];

			for ( let i = 0, j = 0, l = index.length; i < l; i += 3, j ++ ) {

				vA.fromArray( faceData, j * 3 );

				array.push( vA.x, vA.y, vA.z );
				array.push( vA.x, vA.y, vA.z );
				array.push( vA.x, vA.y, vA.z );

			}

			return new Float32BufferAttribute( array, 3 );

		}

		function computeAttributeFromLineData( index, lineData ) {

			const array = [];

			for ( let i = 0, j = 0, l = index.length; i < l; i += 2, j ++ ) {

				vA.fromArray( lineData, j * 3 );

				array.push( vA.x, vA.y, vA.z );
				array.push( vA.x, vA.y, vA.z );

			}

			return new Float32BufferAttribute( array, 3 );

		}

		function toNonIndexedAttribute( indices, attribute ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				index = indices[ i ] * itemSize;

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new Float32BufferAttribute( array2, itemSize );

		}

		const ab = new Vector3();
		const cb = new Vector3();

		function computeNormalAttribute( index, coord, creaseAngle ) {

			const faces = [];
			const vertexNormals = {};

			// prepare face and raw vertex normals

			for ( let i = 0, l = index.length; i < l; i += 3 ) {

				const a = index[ i ];
				const b = index[ i + 1 ];
				const c = index[ i + 2 ];

				const face = new Face( a, b, c );

				vA.fromArray( coord, a * 3 );
				vB.fromArray( coord, b * 3 );
				vC.fromArray( coord, c * 3 );

				cb.subVectors( vC, vB );
				ab.subVectors( vA, vB );
				cb.cross( ab );

				cb.normalize();

				face.normal.copy( cb );

				if ( vertexNormals[ a ] === undefined ) vertexNormals[ a ] = [];
				if ( vertexNormals[ b ] === undefined ) vertexNormals[ b ] = [];
				if ( vertexNormals[ c ] === undefined ) vertexNormals[ c ] = [];

				vertexNormals[ a ].push( face.normal );
				vertexNormals[ b ].push( face.normal );
				vertexNormals[ c ].push( face.normal );

				faces.push( face );

			}

			// compute vertex normals and build final geometry

			const normals = [];

			for ( let i = 0, l = faces.length; i < l; i ++ ) {

				const face = faces[ i ];

				const nA = weightedNormal( vertexNormals[ face.a ], face.normal, creaseAngle );
				const nB = weightedNormal( vertexNormals[ face.b ], face.normal, creaseAngle );
				const nC = weightedNormal( vertexNormals[ face.c ], face.normal, creaseAngle );

				vA.fromArray( coord, face.a * 3 );
				vB.fromArray( coord, face.b * 3 );
				vC.fromArray( coord, face.c * 3 );

				normals.push( nA.x, nA.y, nA.z );
				normals.push( nB.x, nB.y, nB.z );
				normals.push( nC.x, nC.y, nC.z );

			}

			return new Float32BufferAttribute( normals, 3 );

		}

		function weightedNormal( normals, vector, creaseAngle ) {

			const normal = new Vector3();

			if ( creaseAngle === 0 ) {

				normal.copy( vector );

			} else {

				for ( let i = 0, l = normals.length; i < l; i ++ ) {

					if ( normals[ i ].angleTo( vector ) < creaseAngle ) {

						normal.add( normals[ i ] );

					}

				}

			}

			return normal.normalize();

		}

		function toColorArray( colors ) {

			const array = [];

			for ( let i = 0, l = colors.length; i < l; i += 3 ) {

				array.push( new Color( colors[ i ], colors[ i + 1 ], colors[ i + 2 ] ) );

			}

			return array;

		}

		/**
		 * Vertically paints the faces interpolating between the
		 * specified colors at the specified angels. This is used for the Background
		 * node, but could be applied to other nodes with multiple faces as well.
		 *
		 * When used with the Background node, default is directionIsDown is true if
		 * interpolating the skyColor down from the Zenith. When interpolationg up from
		 * the Nadir i.e. interpolating the groundColor, the directionIsDown is false.
		 *
		 * The first angle is never specified, it is the Zenith (0 rad). Angles are specified
		 * in radians. The geometry is thought a sphere, but could be anything. The color interpolation
		 * is linear along the Y axis in any case.
		 *
		 * You must specify one more color than you have angles at the beginning of the colors array.
		 * This is the color of the Zenith (the top of the shape).
		 *
		 * @param {BufferGeometry} geometry
		 * @param {number} radius
		 * @param {array} angles
		 * @param {array} colors
		 * @param {boolean} topDown - Whether to work top down or bottom up.
		 */
		function paintFaces( geometry, radius, angles, colors, topDown ) {

			// compute threshold values

			const thresholds = [];
			const startAngle = ( topDown === true ) ? 0 : Math.PI;

			for ( let i = 0, l = colors.length; i < l; i ++ ) {

				let angle = ( i === 0 ) ? 0 : angles[ i - 1 ];
				angle = ( topDown === true ) ? angle : ( startAngle - angle );

				const point = new Vector3();
				point.setFromSphericalCoords( radius, angle, 0 );

				thresholds.push( point );

			}

			// generate vertex colors

			const indices = geometry.index;
			const positionAttribute = geometry.attributes.position;
			const colorAttribute = new BufferAttribute( new Float32Array( geometry.attributes.position.count * 3 ), 3 );

			const position = new Vector3();
			const color = new Color();

			for ( let i = 0; i < indices.count; i ++ ) {

				const index = indices.getX( i );
				position.fromBufferAttribute( positionAttribute, index );

				let thresholdIndexA, thresholdIndexB;
				let t = 1;

				for ( let j = 1; j < thresholds.length; j ++ ) {

					thresholdIndexA = j - 1;
					thresholdIndexB = j;

					const thresholdA = thresholds[ thresholdIndexA ];
					const thresholdB = thresholds[ thresholdIndexB ];

					if ( topDown === true ) {

						// interpolation for sky color

						if ( position.y <= thresholdA.y && position.y > thresholdB.y ) {

							t = Math.abs( thresholdA.y - position.y ) / Math.abs( thresholdA.y - thresholdB.y );

							break;

						}

					} else {

						// interpolation for ground color

						if ( position.y >= thresholdA.y && position.y < thresholdB.y ) {

							t = Math.abs( thresholdA.y - position.y ) / Math.abs( thresholdA.y - thresholdB.y );

							break;

						}

					}

				}

				const colorA = colors[ thresholdIndexA ];
				const colorB = colors[ thresholdIndexB ];

				color.copy( colorA ).lerp( colorB, t );

				colorAttribute.setXYZ( index, color.r, color.g, color.b );

			}

			geometry.setAttribute( 'color', colorAttribute );

		}

		//

		const textureLoader = new TextureLoader( this.manager );
		textureLoader.setPath( this.resourcePath || path ).setCrossOrigin( this.crossOrigin );

		// check version (only 2.0 is supported)

		if ( data.indexOf( '#VRML V2.0' ) === - 1 ) {

			throw Error( 'THREE.VRMLLexer: Version of VRML asset not supported.' );

		}

		// create JSON representing the tree structure of the VRML asset

		const tree = generateVRMLTree( data );

		// parse the tree structure to a three.js scene

		const scene = parseTree( tree );

		return scene;

	}

}

class VRMLLexer {

	constructor( tokens ) {

		this.lexer = new chevrotain.Lexer( tokens ); // eslint-disable-line no-undef

	}

	lex( inputText ) {

		const lexingResult = this.lexer.tokenize( inputText );

		if ( lexingResult.errors.length > 0 ) {

			console.error( lexingResult.errors );

			throw Error( 'THREE.VRMLLexer: Lexing errors detected.' );

		}

		return lexingResult;

	}

}

const CstParser = chevrotain.CstParser;// eslint-disable-line no-undef

class VRMLParser extends CstParser {

	constructor( tokenVocabulary ) {

		super( tokenVocabulary );

		const $ = this;

		const Version = tokenVocabulary[ 'Version' ];
		const LCurly = tokenVocabulary[ 'LCurly' ];
		const RCurly = tokenVocabulary[ 'RCurly' ];
		const LSquare = tokenVocabulary[ 'LSquare' ];
		const RSquare = tokenVocabulary[ 'RSquare' ];
		const Identifier = tokenVocabulary[ 'Identifier' ];
		const RouteIdentifier = tokenVocabulary[ 'RouteIdentifier' ];
		const StringLiteral = tokenVocabulary[ 'StringLiteral' ];
		const HexLiteral = tokenVocabulary[ 'HexLiteral' ];
		const NumberLiteral = tokenVocabulary[ 'NumberLiteral' ];
		const TrueLiteral = tokenVocabulary[ 'TrueLiteral' ];
		const FalseLiteral = tokenVocabulary[ 'FalseLiteral' ];
		const NullLiteral = tokenVocabulary[ 'NullLiteral' ];
		const DEF = tokenVocabulary[ 'DEF' ];
		const USE = tokenVocabulary[ 'USE' ];
		const ROUTE = tokenVocabulary[ 'ROUTE' ];
		const TO = tokenVocabulary[ 'TO' ];
		const NodeName = tokenVocabulary[ 'NodeName' ];

		$.RULE( 'vrml', function () {

			$.SUBRULE( $.version );
			$.AT_LEAST_ONE( function () {

				$.SUBRULE( $.node );

			} );
			$.MANY( function () {

				$.SUBRULE( $.route );

			} );

		} );

		$.RULE( 'version', function () {

			$.CONSUME( Version );

		} );

		$.RULE( 'node', function () {

			$.OPTION( function () {

				$.SUBRULE( $.def );

			} );

			$.CONSUME( NodeName );
			$.CONSUME( LCurly );
			$.MANY( function () {

				$.SUBRULE( $.field );

			} );
			$.CONSUME( RCurly );

		} );

		$.RULE( 'field', function () {

			$.CONSUME( Identifier );

			$.OR2( [
				{ ALT: function () {

					$.SUBRULE( $.singleFieldValue );

				} },
				{ ALT: function () {

					$.SUBRULE( $.multiFieldValue );

				} }
			] );

		} );

		$.RULE( 'def', function () {

			$.CONSUME( DEF );
			$.OR( [
				{ ALT: function () {

					$.CONSUME( Identifier );

				} },
				{ ALT: function () {

					$.CONSUME( NodeName );

				} }
			] );

		} );

		$.RULE( 'use', function () {

			$.CONSUME( USE );
			$.OR( [
				{ ALT: function () {

					$.CONSUME( Identifier );

				} },
				{ ALT: function () {

					$.CONSUME( NodeName );

				} }
			] );

		} );

		$.RULE( 'singleFieldValue', function () {

			$.AT_LEAST_ONE( function () {

				$.OR( [
					{ ALT: function () {

						$.SUBRULE( $.node );

					} },
					{ ALT: function () {

						$.SUBRULE( $.use );

					} },
					{ ALT: function () {

						$.CONSUME( StringLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( HexLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( NumberLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( TrueLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( FalseLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( NullLiteral );

					} }
				] );


			} );

		} );

		$.RULE( 'multiFieldValue', function () {

			$.CONSUME( LSquare );
			$.MANY( function () {

				$.OR( [
					{ ALT: function () {

						$.SUBRULE( $.node );

					} },
					{ ALT: function () {

						$.SUBRULE( $.use );

					} },
					{ ALT: function () {

						$.CONSUME( StringLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( HexLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( NumberLiteral );

					} },
					{ ALT: function () {

						$.CONSUME( NullLiteral );

					} }
				] );

			} );
			$.CONSUME( RSquare );

		} );

		$.RULE( 'route', function () {

			$.CONSUME( ROUTE );
			$.CONSUME( RouteIdentifier );
			$.CONSUME( TO );
			$.CONSUME2( RouteIdentifier );

		} );

		this.performSelfAnalysis();

	}

}

class Face {

	constructor( a, b, c ) {

		this.a = a;
		this.b = b;
		this.c = c;
		this.normal = new Vector3();

	}

}

const TEXTURE_TYPE = {
	INTENSITY: 1,
	INTENSITY_ALPHA: 2,
	RGB: 3,
	RGBA: 4
};

window.THREE.VRMLLoader = VRMLLoader;
