3.14
2345.6789
.333333333333333333

//[digits][.digits][(E|e)[(+|-)]digits]
6.02e23 // 6.02 × 10²³
1.4738223E-32 // 1.4738223 × 10⁻³²

//You can use underscores within numeric literals to break long literals up into chunks that are easier to read:

let billion = 1_000_000_000; // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.