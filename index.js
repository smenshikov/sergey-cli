#!/usr/bin/env node
import chalk from 'chalk'
import fs from 'fs'
const packageJson = JSON.parse(fs.readFileSync('./package.json'))

const bgYellow = chalk.bgYellowBright
const dim = chalk.dim
const italic = chalk.italic
const bold = chalk.bold

console.log(`
${bgYellow(` ${packageJson.name} `)} v${packageJson.version}

${italic(`Hey! ${bgYellow(` My name is Sergey! `)} ${bold(`I am a frontend developer.`)}
${dim(`I work for company 'Lucy in the Sky'`)}`)}
`)