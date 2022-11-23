import "./sass/style.scss";
import { animateTyping } from "./Animations.js";

const arr = [
  "print('Hello, World')",
  'System.out.println("Hello, World")',
  'console.log("Hello, World")',
  "SELECT 'Hello, World' FROM DUAL",
  'printf("Hello, World")',
];
animateTyping("#typing", arr);
document.querySelector(".typed-cursor").style.color = "white";
