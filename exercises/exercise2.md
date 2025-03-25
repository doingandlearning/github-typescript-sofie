# Exercise – Working with Arrays and Optional Values in TypeScript

## Introduction

The schema files in this project often contain arrays and optional values. TypeScript helps you work with them safely — but only if you give it enough information. In this exercise, you’ll work with a config-like object that includes optional and array fields, and write a helper function that safely handles this data.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Read and work with array types (`string[]`, `number[]`)
- Safely access optional fields using narrowing
- Write a helper that handles union or optional types without runtime errors

---

# Steps

1. **Create a New Branch**  
   - In GitHub Desktop, create a new branch (e.g., `feature/handle-schema-arrays-[yourname]`).

2. **Open the File**  
   - Go to `src/playground/schemaNarrowing.ts`.  
   - You’ll see the following starting code:

     ```ts
     interface StudioConfig {
       defaultGain?: number
       micNames?: string[]
     }

     const config: StudioConfig = {
       defaultGain: 10,
       micNames: ['mic1', 'mic2']
     }

     // TODO: write a function to log each mic name in uppercase
     ```

3. **Write a Function that Handles Optional Values Safely**  
   - Add a function called `logMicNames(config: StudioConfig)`  
   - Inside, use narrowing to ensure that `micNames` exists and is an array:
     ```ts
     function logMicNames(config: StudioConfig) {
       if (Array.isArray(config.micNames)) {
         for (const mic of config.micNames) {
           console.log(mic.toUpperCase())
         }
       } else {
         console.log('No mic names found')
       }
     }
     ```

4. **Try Breaking It**  
   - Comment out the `micNames` value in the `config` object.  
   - Run the file or check the editor to confirm the function handles this safely.

5. **Commit and Push Your Change**  
   - Commit with a message like `Add safe function for logging mic names`.  
   - Push your branch to GitHub.  
   - Open a pull request from your branch.

---

## Best Practices

- Always check if optional values are present before using them.
- Use `Array.isArray` to confirm the type when working with arrays.
- Avoid accessing properties directly if TypeScript warns you.
- Use meaningful commit messages and clear PR titles.