/**
 * Input number.
 */

import { input } from "@inquirer/prompts";
import { generatePrivateKey, privateKeyToAddress } from "viem/accounts";

async function main() {
  const n = await input({ message: "Enter number" });

  for (let i = 0; i < parseInt(n); i++) {
    const pk = generatePrivateKey();
    const address = privateKeyToAddress(pk);
    console.log(`address: ${address} pk: ${pk}`);
  }
}

main().catch((e) => console.log(e));
