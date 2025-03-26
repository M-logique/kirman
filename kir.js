const { spawn } = require("child_process");
const { readFileSync } = require("fs");
const { version } = require("./package.json");

console.log(`KirMan [v${version}]`);

const help = readFileSync("help.txt").toString();

const arguments = process.argv.slice(2);

const command = arguments.shift();

switch (command) {
	case "to": {
		spawn(
			"pacman",
			["-S", ...arguments],
			{
				stdio: "inherit"
			}
		);
		break;
	}
	case "biron": {
		spawn(
			"pacman",
			["-R", ...arguments],
			{
				stdio: "inherit"
			}
		);
		break;
	}
	case "help": {
		console.log(help);
		break;
	}
	default: {
		console.error("undefined action");
		console.log(help);
		break;
	}
}
