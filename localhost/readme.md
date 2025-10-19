
# Typescript
# TypeScript = JavaScript + Types

~ It’s a superset of JavaScript.
~ Adds static typing (type checking before running).
~ Compiles to JavaScript (browser/Node can run it).


# Why Type Checking is Important?
(Many common JS bugs are avoided before deployment.)
Finds bugs early
Makes code predictable
Better autocomplete & docs
Easier teamwork
Prevents runtime crashes

# setup
> npm install -g typescript (install global)
> npm install typescript --save-dev (install Local)
> tsc -v  
> tsc --init (Create a TypeScript Config File)
{
  "compilerOptions": {
    "module": "esnext",
    "target": "ES6",
    "rootDir": "src",
    "outDir": "dist",
    "lib": ["esnext", "dom"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
> mkdir src
       -- src/index.ts
> tsc --watch
// http://127.0.0.1:5500/dist/

# cmd for compile and run ts files
> tsc   <filename>      ---   compile 
> node <filename>     ---  run