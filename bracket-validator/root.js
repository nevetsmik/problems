import { bracketValidator } from "./bracketValidator";

let brackets1 = "{ [ ] ( ) }";
let brackets2 = "{ [ ( ] ) }";
let brackets3 = "{[}";

window.bracketValidator = bracketValidator;
window.bracket1 = brackets1;
window.bracket2 = brackets2;
window.bracket3 = brackets3;
