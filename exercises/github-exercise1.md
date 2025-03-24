# Exercise – Creating and Working with Branches

## Introduction

Branches allow you to work on changes in isolation without affecting the main codebase. This is useful when experimenting, developing new features, or preparing edits for review. By using branches, you ensure that the main branch remains stable while work is in progress.

In this exercise, you'll create a new branch using **GitHub Desktop**, make a simple change, and commit that change to the new branch. This sets the foundation for pull requests and collaborative workflows.

---

## Learning Objective

By the end of this exercise, you will be able to:

- Create a new branch using GitHub Desktop.
- Make and commit changes in a branch.
- Understand how branching supports isolated development and safer workflows.

---

# Steps to Create and Commit to a New Branch in GitHub Desktop

1. **Create a New Branch**:
   - Open GitHub Desktop.
   - Click the **“Current Branch”** dropdown at the top.
   - Select **“New Branch”**, and name it something descriptive (e.g., `feature/add-favourite-author-alice`).
   - Click **“Create Branch”**. GitHub Desktop will switch to your new branch automatically.

2. **Make a Change**:
   - Open your code editor.
   - Locate file like `favorite-authors.txt`.
   - Add your favourite TV show to the list and save the file.

3. **Commit Your Change**:
   - Return to GitHub Desktop.
   - In the **“Changes”** tab, review your edits.
   - Write a clear commit message (e.g., `Add favourite author to favourite-authors.txt`).
   - Click **“Commit to [your-branch-name]”**.

---

### Best Practices for Working with Branches

- **Use Descriptive Branch Names**:
  - Choose names that reflect the purpose of the branch (e.g., `fix/audio-config`, `feature/add-graphic-layer`).

- **Make One Change per Branch**:
  - Keep branches focused. This makes reviewing, testing, and merging easier.

- **Commit Frequently, with Meaningful Messages**:
  - Describe what changed and why. This helps others understand your work.

- **Don’t Merge to Main Yet**:
  - For now, we'll keep your work on the branch. You’ll learn how to push and create a pull request in the next exercise.
