// Unused import.
// It should get tree-shaken away.
// However, the 'middle' module also contains transitive side effects, which
// should be preserved.
import { removeMe } from "./middle";

function main() {
}

main();
