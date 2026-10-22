# Maikeru Learning Hub — GitHub Pages + GA4

A static informational/school-project website configured with Google Analytics 4.

## Included files
- `index.html` — website content and GA4 Google tag
- `style.css` — responsive design
- `script.js` — navigation, demo form, and custom analytics events

## Google Analytics configuration
The site is configured with Measurement ID `G-CM0KS4E6DS`.

Before publishing, sign in to Google Analytics and confirm this ID belongs to the intended GA4 **Web data stream**. In Admin → Data streams → select your Web stream, verify:
- Website URL matches your published GitHub Pages URL
- Measurement ID is `G-CM0KS4E6DS`
- Enhanced Measurement is enabled if you want automatic page views and supported events

The tag is in the `<head>` of `index.html`. Do not install a second copy of the same tag through another plugin or tag manager, as that can cause duplicate events.

## Publish to GitHub Pages
1. Open https://github.com/Maiiiikeru/Maikeru
2. Upload or replace the three site files (`index.html`, `style.css`, `script.js`) and this README in the repository root. If the repository already has important files, do not delete them unnecessarily.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**. If your default branch has a different name, select that branch.
6. Wait for the Pages deployment to finish. The expected URL for this repository is usually `https://maiiiikeru.github.io/Maikeru/` (GitHub account/repository URL casing may be normalized by GitHub). Use the actual URL shown in Settings → Pages.

## Test GA4 data collection
1. Open the published Pages URL in a new tab, with ad blockers disabled for this test.
2. Click around the navigation, select one of the three resource cards, and submit the demo contact form.
3. In Google Analytics, open **Reports → Realtime**. It can take several minutes for activity to appear; initial data processing can take up to 30 minutes or longer for standard reports.
4. In Admin → Data streams → your Web stream, use **Test your website** or the Google tag instructions if available.
5. For more detailed debugging, use Google Tag Assistant: https://tagassistant.google.com/

Events included:
- Automatically collected `page_view` (if enabled in the Google tag / stream settings)
- `navigation_menu_toggle`
- `hero_browse_resources`, `hero_learn_more`, `header_explore_click`
- `feature_curiosity_click`, `feature_simple_click`, `feature_connect_click`
- `select_learning_topic` with `topic_name`
- `demo_contact_form_submit`

Note: The contact form is intentionally a front-end demo. It does not send or store messages.

## Troubleshooting
- Confirm the deployed website source contains `G-CM0KS4E6DS`.
- Ensure the measurement ID matches the Web data stream exactly.
- Make sure the URL tested is the published HTTPS GitHub Pages URL, not a local file.
- Wait for data processing and check Realtime first.
- Disable ad blockers/privacy extensions for the test.
- Do not add a second Google tag if the tag is already present.

## Privacy note
Google Analytics collects website usage data. Publish a privacy notice appropriate for your project and follow your school's and applicable privacy requirements before collecting visitor data.
