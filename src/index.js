export default function sortCharacter(characters) {
  return characters.sort((a, b) => parseFloat(a.health) - parseFloat(b.health));
}
