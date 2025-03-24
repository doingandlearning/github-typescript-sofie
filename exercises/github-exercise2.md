# 🧪 Activity – Full GitHub Flow: "Contributors Challenge"

## 🎯 Purpose
This activity reinforces the **entire GitHub flow** using GitHub Desktop:  
Branching → Editing → Committing → Pushing → PR → Review → Merge → Sync.

It also gives each participant a meaningful, personal contribution to the repo.

---

## 🔧 Instructions

### 🟢 **1. Pull the Latest Main**
- In GitHub Desktop:
  - Switch to the `main` branch
  - Click **“Fetch origin”**, then **“Pull origin”**

---

### 🌱 **2. Create a New Branch**
- Branch name format:  
  ```
  feature/add-contributor-[your-name]
  ```
- Click **“Current Branch” → “New Branch…”**
- Create and switch to it

---

### 📝 **3. Add a New Contributor File**
- Open the repo folder in VS Code
- Navigate to:
  ```
  src/contributors/
  ```
- Create a new file:
  ```
  [your-name].md
  ```
  Example: `alex-smith.md`

- Content:
  ```md
  ## {{ YOUR NAME }}

  - Favourite TV Show: The West Wing
  - Favourite Book: The Left Hand of Darkness
  - One thing I learned today: How to rebase in GitHub Desktop
  ```

---

### ✅ **4. Stage and Commit**
- Return to GitHub Desktop
- Check the file shows under **Changes**
- Commit message:
  ```
  Add contributor file for [your-name]
  ```

---

### ☁️ **5. Push Your Branch**
- Click **“Push origin”**

---

### 🔁 **6. Create a Pull Request**
- Click **“Branch → Create Pull Request”**
- GitHub will open in your browser
- Title:  
  ```
  Add contributor file for [your-name]
  ```
- Add a short description if you'd like

---

### 👀 **7. Review Someone Else’s PR**
- Open a teammate’s PR on GitHub
- Click the **“Files changed”** tab
- Leave a short comment
- Approve it (if everything looks good)

---

### 🧩 **8. Merge Your PR**
- On GitHub, click **“Merge Pull Request”**
- Back in GitHub Desktop:
  - Switch to `main`
  - Click **“Pull origin”** to get everyone’s changes

---

### 🎉 **9. Celebrate**
- Everyone has now contributed a real change to the project  
- Your name is now part of the codebase

---

## 📊 Visual Checklist

```
✅  Pull from main

✅  Create new branch (feature/add-contributor-[name])

✅  Add your contributor file to: src/contributors/[your-name].md

✅  Commit the change in GitHub Desktop

✅  Push to origin

✅  Create a Pull Request

✅  Review a teammate’s PR and leave a comment

✅  Merge your own PR

✅  Pull main again
```
