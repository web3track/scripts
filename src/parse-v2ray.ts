/**
 * Input the subscription link and parse the V2Ray configuration inside.
 */

import { input } from "@inquirer/prompts";
import "fetch-undici-polyfill";

const vmessProtocol = "vmess://";

async function main() {
  const url = await input({ message: "Enter your url" });

  const res = await fetch(url);
  const data = await res.text();
  const rawData = Buffer.from(data, "base64").toString();
  const lines = rawData.split("\n");
  lines.forEach((line) => {
    if (line.startsWith(vmessProtocol)) {
      const jsonStr = Buffer.from(
        line.replace(vmessProtocol, ""),
        "base64"
      ).toString();
      const json = JSON.parse(jsonStr);
      console.log(json);
    }
  });
}

main().catch((e) => console.log(e));
