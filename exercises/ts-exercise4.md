# Exercise – Extending Config with the Spread Operator

## Introduction

When working with configuration objects in this project, you’ll often build a new config by starting with a base and overriding specific fields. The **spread operator** (`...`) allows you to copy properties from one object into another.

This exercise walks you through extending a typed object safely, observing how TypeScript reacts when you override or omit properties.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Use the spread operator to extend a config object
- Override individual properties while keeping type safety
- Recognise when properties are missing, duplicated, or mistyped
- Understand how object structure and types interact when composing config

---

# Steps

1. **Create a New Branch**  
   - In GitHub Desktop, create a branch (e.g., `feature/spread-config-[yourname]`).

2. **Open the File**  
   - Go to `src/playground/spreadConfig.ts`.  
   - You’ll see the following starter code:

     ```ts
     interface AudioConfig {
       enabled: boolean
       defaultGain: number
       description?: string
     }

     const baseAudio: AudioConfig = {
       enabled: true,
       defaultGain: 10
     }

     const studioAudio = {
       // TODO: Extend baseAudio, override defaultGain to 15, and add description
     }

     function printConfig(config: AudioConfig) {
       console.log(config)
     }

     printConfig(studioAudio)
     ```

3. **Use the Spread Operator**  
   - Complete `studioAudio` by spreading `baseAudio` and overriding `defaultGain`:
     ```ts
     const studioAudio = {
       ...baseAudio,
       defaultGain: 15,
       description: 'Studio B audio config'
     }
     ```

4. **Ensure Type Safety**  
   - Explicitly type `studioAudio` as `AudioConfig` and check for TypeScript errors.
   - Try introducing a typo like `defualtGain: 20` and observe the editor warning.

5. **Commit, Push, and Open a Pull Request**  
   - Commit your changes (e.g., `Extend base audio config using spread operator`).
   - Push your branch and open a pull request in GitHub.

---

## Best Practices

- Spread copies all properties — later keys overwrite earlier ones.
- Always type the final object if you want strict enforcement.
- Use optional properties (`?`) when extending known types.
- Avoid silent typos — TypeScript won’t catch unknown keys unless the object is explicitly typed.
