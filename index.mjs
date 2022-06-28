#!/usr/bin/env node

const opts = {};

process.argv.slice(2).forEach((arg, index) => {
  if (/^--.+=/.test(arg)) {
    let m = arg.match(/^--([^=]+)=([\s\S]*)$/);
    opts[m[1]] = m[2] || true;
  }

  else if (/^-[^-]+/.test(arg)) {
    arg.slice(1).split('').forEach((letter, index) => {
      opts[letter] = true;
    })
  }
});
console.log(opts)