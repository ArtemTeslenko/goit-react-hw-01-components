export default function getRandomHexColor() {
  return `radial-gradient(#${Math.floor(Math.random() * 16777215).toString(
    16
  )}40, #fff)`;
}
