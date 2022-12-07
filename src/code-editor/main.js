import "../../src/sass/style.scss";
import Split from "split.js";
import { Offcanvas } from "bootstrap";
Split(["#editor", "#output"], {
  direction: "vertical",
  sizes: [75, 25],
});
