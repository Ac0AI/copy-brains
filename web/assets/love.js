// /love: the full wall of love.
import { mountChrome } from "./shared.js";
import { mountWall } from "./love-wall.js";

mountChrome();
mountWall(document.querySelector("#wall"));
