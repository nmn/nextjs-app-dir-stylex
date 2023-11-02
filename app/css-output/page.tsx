import * as stylex from "@stylexjs/stylex";
import fs from "fs/promises";
import path from "path";
import { Code } from "bright";

export default async function CSSOutput() {
  const cssPathDev = path.join(
    process.cwd(),
    ".next/static/css/app/layout.css"
  );

  try {
    const cssText = await fs.readFile(cssPathDev, "utf-8");

    return (
      <div>
        <h1>StyleX CSS Output</h1>
        <Code lang="css">{cssText}</Code>
      </div>
    );
  } catch (e) {
    const possibleFiles = await fs.readdir(
      path.join(process.cwd(), ".next/static/css/")
    );
    const cssFile = possibleFiles.find((file) => file.endsWith(".css"));

    if (cssFile == null) {
      return (
        <div>
          <h1>StyleX CSS Output</h1>
          <h2>No CSS file found</h2>
        </div>
      );
    }

    const cssText = await fs.readFile(
      path.join(process.cwd(), ".next/static/css/", cssFile),
      "utf-8"
    );

    return (
      <div>
        <h1>StyleX CSS Output</h1>
        <Code lang="css">{cssText}</Code>
      </div>
    );
  }
}
