import { copyFileSync, mkdirSync } from "node:fs";

const image = new URL("./entry.png", import.meta.url);
const outputDirectory = "/output";
mkdirSync(outputDirectory, { recursive: true });
copyFileSync(image, outputDirectory + "/entry.png");
