// examples.ts
import { makeState } from "makest";
import readline from "node:readline";

// Setup the three main types
const counter = makeState<number>(0);
const word = makeState<string>("Hello");
const active = makeState<boolean>(false);

const C = {
  cyan: (t: any) => `\x1b[36m${t}\x1b[0m`,
  green: (t: any) => `\x1b[32m${t}\x1b[0m`,
  red: (t: any) => `\x1b[31m${t}\x1b[0m`,
  dim: (t: any) => `\x1b[90m${t}\x1b[0m`,
  bold: (t: any) => `\x1b[1m${t}\x1b[0m`,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showState = () => {
  console.clear();
  console.log(`${C.bold("Makest Makestate instance")}`);
  console.log(`${C.dim("━━━━━━━━━━━━━━━━━━━━━━━━")}`);

  // Display all three types
  console.log(`${C.cyan("Number  (Counter) :")} ${C.green(counter.value())}`);
  console.log(`${C.cyan("String  (Word)    :")} "${C.green(word.value())}"`);
  console.log(
    `${C.cyan("Boolean (Toggle)  :")} ${active.value() ? C.green("TRUE") : C.red("FALSE")}`,
  );

  console.log(`${C.dim("━━━━━━━━━━━━━━━━━━━━━━━━")}`);
  console.log(
    `Commands: ${C.bold("add")} | ${C.bold("set <text>")} | ${C.bold("toggle")} | ${C.bold("exit")}`,
  );
};

const startApp = () => {
  showState();
  rl.question(`${C.cyan("> ")}`, (input) => {
    const [cmd, ...args] = input.trim().toLowerCase().split(" ");

    if (cmd === "add") {
      const amount = Number(args[0]) || 1;
      counter.setValue(counter.value() + amount);
    } else if (cmd === "set") {
      word.setValue(args.join(" ") || "No text");
    } else if (cmd === "toggle") {
      active.setValue(!active.value());
    } else if (cmd === "exit") {
      console.log("Peace out!");
      process.exit();
    }

    startApp();
  });
};

startApp();
