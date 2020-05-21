// Naked import.
// The file is marked as having side effects in package.json, so its side
// effects should be preserved.
import "./side-effect";

export function removeMe() {
  console.log( 'removeMe' );
}
