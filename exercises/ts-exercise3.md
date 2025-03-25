# Exercise – Enums, Literal Types, and Conditional Logic

## Introduction

In this project, you’ll often write logic that depends on the type of a device or source. These types are usually defined using **enums** or **string literal unions**. TypeScript helps ensure you handle each possible value safely and clearly. In this exercise, you’ll create a small configuration handler that switches behaviour based on a vision mixer type.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Use enums and string literal types to represent discrete options.
- Write conditional logic using `if` or `switch` statements that branches based on a type.
- Handle optional and nested config values safely using guards or optional chaining.
- Recognise when TypeScript expects exhaustive handling of possible cases.

---

# Steps

1. **Create a New Branch**  
   - In GitHub Desktop, create a branch (e.g., `feature/vision-mixer-handling-[yourname]`).

2. **Open the File**  
   - Navigate to `src/playground/visionMixerType.ts`.  
   - You’ll see the following starting code:

     ```ts
     enum VisionMixerDevice {
       Atem = 'atem',
       Carbonite = 'carbonite'
     }

     interface StudioConfig {
       visionMixer?: {
         type: VisionMixerDevice
       }
     }

     function getMixerName(config: StudioConfig): string {
       // TODO: Return a human-readable name based on visionMixer type
       return ''
     }

     const config: StudioConfig = {
       visionMixer: {
         type: VisionMixerDevice.Atem
       }
     }

     console.log(getMixerName(config))
     ```

3. **Complete the Function Logic**  
   - Use a `switch` or `if`/`else if` block inside `getMixerName`.
   - Handle both `VisionMixerDevice.Atem` and `VisionMixerDevice.Carbonite`.
   - Return something like `'Blackmagic Atem Mixer'` or `'Ross Carbonite Mixer'`.

4. **Handle the Optional Field Safely**  
   - Add a check for `config.visionMixer?.type` before accessing it.
   - If it’s missing, return `'Unknown Mixer'`.

5. **Test with Missing Config**  
   - Change `config` to an empty object and confirm your function still runs:
     ```ts
     const config: StudioConfig = {}
     ```

6. **Commit, Push, and Open a Pull Request**  
   - Commit with a message like `Handle mixer type using enum`.
   - Push your branch and open a pull request on GitHub.

---

## Best Practices

- Use enums to avoid typos and ensure consistency in allowed values.
- Switch statements help clarify distinct behaviours per type.
- Optional chaining (`?.`) and default values are useful for defensive coding.
- TypeScript will warn you if you miss a possible case — use that to your advantage.
