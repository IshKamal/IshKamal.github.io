# Open Items

Nonblocking items recorded during the build. Nothing below blocked completion of the site.

## Resolved by Ishmam's direction

1. **Résumé selection.** Two résumés exist in `Resumes/`: `Kamal_Ishmam_Resume.pdf` (includes a Graduate Projects section) and `Ishmam Kamal_Analyst.pdf` (experience-focused, no Graduate Projects section, different skills grouping). Both are current, used for different purposes. Per Ishmam's direction, **`Ishmam Kamal_Analyst.pdf` is the main résumé**: it is the file copied to `assets/docs/Ishmam-Kamal-Resume.pdf`, and the homepage Experience bullets and Skills section were updated to match its wording (see `PORTFOLIO_SPEC.md` Section 20.6 for the exact deltas applied: the Imperial Health Plan bullet drops "through SymKey," the RCOE bullet adds "in R" plus a new fourth bullet, CalOptima gets a new fourth bullet, and the Skills section now uses the Tools / Reporting & Analytics / Business & Process grouping). The Graduate Projects section stays on the site regardless, since the portfolio itself (not just the downloadable résumé) is scoped to include graduate work per `PORTFOLIO_SPEC.md` Section 4.5.
2. **Education Reimbursement participant-survey visual.** The participants page named two HR staff by first name in an open-text quote. Both names are now **blurred directly in the image** (`assets/images/professional/caloptima/education-reimbursement-participants-survey.jpg`) rather than excluding the page, so the case study now shows the fuller 39-respondent participant survey instead of the smaller 22-respondent leader survey.
3. **Imperial Health Plan and Inland Empire Health Plan professional case studies.** Confirmed: no additional artifacts for now. Only the two built case studies (HR Training & Development Analytics, Education Accountability Analytics) exist. The Experience timeline's résumé bullets remain the complete, verified account of the Imperial/IEHP work.
4. **AI News Sentiment "31% prediction error reduction" discrepancy.** Per Ishmam's direction, this is not being reconciled for now. The case study continues to state the résumé's verified sentence in the Results section without displaying the contradicting Phase 2 regression chart, as already implemented.

## Resolved by publication

5. **GitHub Pages URL.** Repository: `https://github.com/IshKamal/ishmamkamal.github.io`. Because the repo name (`ishmamkamal.github.io`) does not exactly match the account login (`IshKamal`), GitHub Pages serves this as a **project site** at `https://ishkamal.github.io/ishmamkamal.github.io/`, not a bare root site at `https://ishkamal.github.io/`. Canonical `<link>` tags, `og:url`/`og:image`, `sitemap.xml`, `robots.txt`, the footer GitHub link, and the `404.html` "Back to homepage" link all use this real project-site URL now. **If you want the bare root URL, rename the repository to `IshKamal.github.io`** (Settings → General → Repository name) and then update those same absolute URLs to drop the `/ishmamkamal.github.io` path segment (see the note in `README.md`).
6. Canonical `<link>` tags, `sitemap.xml`, and `robots.txt`'s `Sitemap:` line are now in place, pointing at the real URL above. Person/ProfilePage structured data was still not added (spec allows, doesn't require it).
7. The footer now links to the GitHub repository on every page.

## Still open

8. The supplied ticker-sentiment output for the AI News project lists 15 distinct technology tickers, not 16 as stated in the résumé. The page uses the résumé's "16 technology stocks" wording as instructed, without listing or implying a specific set of 16.

## Other notes

9. No headshot/portrait was supplied; the hero was built without one, per spec.
10. The RCOE Tableau workbook documentation (`Project Documentation.docx`) references a "PII Workbook" tab containing an individual student list. That tab was not used anywhere on the site; only the four aggregate dashboard tabs (Growth, A-G, Reading, CalKIDS) were used, all school/district-level counts with no student-level data.
11. Dashboard totals shown in the CalOptima "Trainings_Dashboard.pdf" export (89 trainings / 2,789 registrations / 769 employees, unfiltered view) differ slightly from the "Trainings_Attendance_Dashboard.pdf" export and the résumé (94 / 2,953 / 787), both appear to be real exports of the same underlying data taken at different times or filter states. The case study uses the `Trainings_Attendance_Dashboard.pdf` export as the primary visual since its numbers match the résumé exactly.
12. All images (graduate-project charts and professional dashboards) were resized and re-encoded as high-quality JPEG for reasonable file size (all under ~380KB, most under 230KB) but not converted to WebP/AVIF; no image-conversion tooling was available in this environment.
13. The footer copyright year updates automatically via JavaScript; the static (no-JS) fallback reads "2026" and would need a manual edit across all six HTML pages after 2026 for visitors browsing without JavaScript.
14. The Fraud Detection case study explicitly frames Amazon EMR deployment as something the source slide deck discussed, not something that was actually built or deployed; confirm this framing matches your intent.
