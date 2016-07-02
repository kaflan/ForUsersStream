# How to start code in typescript
## Install global using node using npm.:

```
npm install tsd -g
```

### Init in console in youre app

```
$ tsd init
```
### Instal in tsd package menager angular (or youre custom module)

```
$ tsd install angular
```
### Create tsconfig.json file
```
touch tsconfig.json
```
#### Simpleconfig tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

### Cleanup the bundle file (usually tsd.d.ts): remove paths to non-existent files, and append unlisted definitions. Handy when editing definitions.
```
$ tsd rebundle
```
### Add simple function read your code to tsd.d.ts  file
```
declare function require(string): any;

```
### How to save file in tsd config
```
 tsd install angular --save or  tsd install angular -s
```
[Simple](http://kaflan.github.io/angularTYpescript2/)
