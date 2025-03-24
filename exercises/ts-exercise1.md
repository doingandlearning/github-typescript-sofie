# Exercise – Working with Basic Types in TypeScript

## Introduction

In TypeScript, you explicitly describe the shape of your data using types. This helps catch mistakes early and improves confidence when editing shared code. In this exercise, you’ll make a change to a typed object, fix some errors, and go through the full GitHub flow to propose your solution using a pull request.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Read and understand basic TypeScript types.
- Modify a typed object to match a defined interface.
- Fix common type errors and understand the feedback.
- Use GitHub Desktop to create a branch, commit changes, push, and open a pull request.

---

# Steps

1. **Create a New Branch**  
   - In GitHub Desktop, select your repository.  
   - From the branch dropdown, choose **New Branch**.  
   - Name it something like `feature/ts-basic-types-[yourname]`.  
   - Switch to that branch.

2. **Open the File in Your Editor**  
   - Navigate to `src/playground/basicTypes.ts`.  
   - You’ll see a file that looks like this:
```ts
interface AudioConfig {
  defaultGain: number
  enabled: boolean
  micNames: string[]
}

const audioSettings: AudioConfig = {
  defaultGain: 'high', 
  enabled: true,
  micNames: ['mic1', 'mic2']
 
}
```

3. **Fix and Extend the Code**

- Fix the existing type error: change `'high'` to a number (e.g., `10`).
- Add a new property to the interface, either this or something different.
  ```ts
  description: string
  ```
- Then reflect this in the object:
  ```ts
  description: 'Studio A default config'
  ```
- The object should match the updated interface fully, with no type errors.

4. **Commit Your Changes**  
   - In GitHub Desktop, go to the **Changes** tab.  
   - Review the diff.  
   - Use a clear commit message (e.g., `Update audioSettings to match AudioConfig`).
   - Commit to your branch.

5. **Push and Open a Pull Request**  
   - Click **Push origin** in GitHub Desktop.  
   - Then go to **Branch > Create Pull Request**.  
   - In the GitHub browser tab, give your PR a clear title and short description.  
   - Click **Create Pull Request**.

6. **(Optional) Review a Teammate’s PR**  
   - Open someone else’s pull request and leave a short comment or approval.

---

## Best Practices

- **Read the interface first** to understand what shape the object must match.
- **Use the red underlines in your editor** to guide your fixes.
- **Commit often** with clear messages — this helps future reviewers.
- **Keep your PR focused** on the task at hand — no unrelated changes.
