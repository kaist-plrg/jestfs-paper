// order between class decl and evaluating extendee expression
// simplest: class C extends (()=>{C})() {}
class x extends class extends new new new new function ( ) { throw x ; } { ; } { }
class x extends class extends new new new new function ( ) { x ; } { ; } { }

// Should throw TypeError
// when the second argument is not given (undefined).
// https://tc39.es/ecma262/#sec-object.setprototypeof
Object . setPrototypeOf . call ( 0 , 0 ) ;

// Should throw RangeError,
// when the argument is not one of "NFC", ...
// https://tc39.es/ecma262/#sec-string.prototype.normalize
String . prototype . normalize . call ( 0 , '' ) ;

// delete should be evaluated later
// minified: x + delete 0();
0 | 0 & 0 & 0 >>> 0 >> 0 + 0 - 0 + x % function * ( ) { } % delete - class await extends 0 { } === 0 ?? async function ( ) { } ;
0 | 0 & 0 & 0 >>> x >> 0 + 0 - 0 + 0 % async function ( ... x ) { } % delete - [ 0 , , , ... 0 ] === 0 ?? x ; 

// (Highly likely spec bug)
// toString of class while initializing static field of itself
// should be ... [native code] ..
// minified: class C { static str = String(C) }
class x { ; static 0 = super [ x ] ||= 0 ; } ;

// For statement's lexical declaration:
// when object assignemnt pattern or
// array assignment pattern is used,
// ordering is wrong
// minified: for ( let [a, b, c] = arr , arr = [1, 2, 3] ; ; ) break ;
// minified: for ( let { p } = obj , obj = { p: 42 } ; ; ) break ;
for ( const [ ] = x , x = 0 ; 0 ; ) x : ;
for ( const [ ] = 0 , x = x ; 0 && async function * ( ) { } ; ) ;
