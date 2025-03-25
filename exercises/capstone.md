# Final Lab – Make a Real Contribution to the Sofie Blueprint Repo

## Introduction

You’ve learned how to work with branches, create pull requests, resolve type errors, and safely modify TypeScript-based configuration. In this final lab, you’ll put it all together by making a meaningful change to the Sofie Blueprint repo — just like you might do in your actual work context.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Clone a real project repository
- Explore the directory structure to find where changes belong
- Create and switch to a new branch
- Make and commit meaningful changes to TypeScript-based config
- Push your changes and open a pull request for review

---

# Steps

1. **Clone the Repo**  
   - In GitHub Desktop, click **File > Clone Repository**.  
   - Use the Sofie Blueprint Training repo:  
     ```
     https://github.com/bbc/eng-ga-sofie-blueprints-training
     ```
   - Choose a local folder and click **Clone**.

2. **Create a New Branch**  
   - In GitHub Desktop, click **Current Branch > New Branch**.
   - Name it something meaningful like:  
     ```
     feature/add-studio-[yourname]
     ```
   - Click **Create Branch**.

3. **Choose a Meaningful Change**  
   Pick one of the following (or discuss with your trainer):
   - Add a **new studio config** to `src/configs/studio/configs/` (e.g. `w13`, `gallery5`)
   - Add a **new show style config** to `src/configs/showStyle/configs/`
   - Add a **new field** to one of the existing schema files in `src/$schemas/studio/` or `.../showstyle/`
   - Add a **helpful utility** to `src/playground/utils/` (e.g., `formatStudioName(name: string): string`)
   - Add a **studio test config object** to `src/playground/` and ensure it matches the expected type

   - When done, run `npm run build` to make sure it works.

4. **Make and Commit Your Changes**
   - Open the file in your editor and make your change.
   - Ensure there are **no TypeScript errors**.
   - In GitHub Desktop:
     - Review the **Changes** tab.
     - Commit with a clear message like:
       ```
       Add new studio config for Gallery 5
       ```

5. **Run a Script to Validate**  
   - In your terminal, from the project root:
     ```bash
     npm run build
     ```
   - Confirm that your changes don’t introduce type errors.

6. **Push and Open a Pull Request**
   - In GitHub Desktop, click **Push Origin**.
   - Go to **Branch > Create Pull Request**.
   - In the GitHub browser tab:
     - Give your PR a clear title and short description.
     - Click **Create Pull Request**.

7. **(Optional) Review a Teammate’s PR**
   - Leave a comment or approve a pull request from someone else in the group.
   - Test their branch locally if you want the full flow.

---

## Best Practices

- Use existing folders as templates — don’t guess structure
- Don’t change other people’s config unless asked
- If adding a new field to a schema, make sure it’s also reflected in any sample objects
- Keep changes focused — 1 PR, 1 idea

---
