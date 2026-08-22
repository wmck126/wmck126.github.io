# Ward McKinley — Developer Portfolio

A lightweight, no-build static portfolio/resume site designed for GitHub Pages.

## Files

- `index.html` — primary portfolio
- `styles.css` — responsive dark/light UI
- `script.js` — theme persistence, scroll reveals, sticky-header state
- `resume.html` — recruiter-friendly print resume; use **Print / Save PDF** in the browser
- `.nojekyll` — tells GitHub Pages to serve the site as-is

## Publish on GitHub Pages

1. Create a new public repository. Good names:
   - `ward-mckinley.github.io` if you want the site at the root GitHub Pages URL
   - `portfolio` if you prefer a project URL
2. Upload the files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Save.

If the repository is named `ward-mckinley.github.io`, GitHub Pages will use that as the site root after deployment.

## Before publishing

- Confirm the September 2026 Systems Engineer title transition is still accurate.
- Replace or expand project text as projects mature.
- Add project repository links only when you are comfortable having interviewers review them.
- Do not add internal screenshots or confidential implementation details from AWS systems.
- After the backlog-prioritization application launches, replace the prototype/October language with measured impact if available.

## Design notes

The site intentionally treats the professional backlog-prioritization tool as the featured case study, with a conceptual scoring visualization instead of an internal screenshot. The visual is illustrative only and is labeled that way in the UI.

No framework or package manager is required.
