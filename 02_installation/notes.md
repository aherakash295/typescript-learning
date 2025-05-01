### ❓ **1. How to install TypeScript globally?**
💡 **Answer:**  
You can install TypeScript globally on your system using `npm`:

```bash
npm install -g typescript
```

This makes the `tsc` (TypeScript compiler) command available anywhere on your machine.

---

### ❓ **2. How to install TypeScript locally in a project?**
💡 **Answer:**  
To install TypeScript only within your project:

```bash
npm init -y              # Initialize package.json
npm install typescript --save-dev
```

Then you can run the local compiler using:
```bash
npx tsc
```

---

### ❓ **3. How to compile and run a TypeScript file?**
💡 **Answer:**  
To compile a `.ts` file (e.g., `index.ts`) to JavaScript:

```bash
tsc index.ts             # Produces index.js
node index.js            # Run the output JS file
```

---

### ❓ **4. How to use the --watch flag in TypeScript?**
💡 **Answer:**  
Use the `--watch` flag to automatically recompile your TypeScript file when it changes:

```bash
tsc index.ts --watch
```

This is helpful during development for real-time compilation.

---

### ❓ **5. How to check the installed TypeScript version?**
💡 **Answer:**  
Run the following command:

```bash
tsc -v
```

This shows the current globally installed TypeScript version.

---

### ❓ **6. How to initialize a tsconfig.json file?**
💡 **Answer:**  
`tsconfig.json` is used to configure TypeScript project settings:

```bash
npx tsc --init
```

This generates a `tsconfig.json` file with default options, which you can customize.
