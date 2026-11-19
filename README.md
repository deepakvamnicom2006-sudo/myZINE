<p align="center"><img src="icons/icon-512.png" width="160" alt="D Zine logo"></p>

# Pocket Zine Maker · D Zine

Plan, lay out and print pocket photo zines and booklets on A4 paper, from your iPhone.
This is a home-screen web app: it installs from Safari, opens full screen like any other app, and works offline.

**The logo.** The letter **D** is built from three folded sheets nested inside each other, the way pages sit inside a zine signature. The upright of the D is the spine, with two staples. The magenta registration mark is the printer's alignment target. Colours: ink `#16181B`, paper `#F3EDE2`, registration magenta `#E8288A`.

---

## 1. Put it on GitHub (about 5 minutes, from the iPhone or a computer)

1. Sign in at **github.com** and tap **+ → New repository**.
2. Name it `pocket-zine` (any name works), set it to **Public**, and tap **Create repository**.
3. Tap **Add file → Upload files**. Upload **everything in this folder**, keeping the `icons` and `vendor` folders:
   ```
   index.html
   manifest.webmanifest
   sw.js
   .nojekyll
   README.md
   icons/   (all files)
   vendor/  (all files)
   ```
   On a computer, drag the unzipped folder's contents into the page. On an iPhone, unzip the file in the **Files** app first, then pick the files. Upload `icons` and `vendor` as folders, or create them with **Add file → Create new file** and type `icons/` in the name.
4. Tap **Commit changes**.

> `.nojekyll` starts with a dot, so Files and Finder may hide it. It is optional; the app works without it.

## 2. Turn on GitHub Pages (free hosting)

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, and tap **Save**.
3. After a minute or two the page shows your app's address, for example
   `https://<your-username>.github.io/pocket-zine/`

## 3. Install it on the iPhone 14

1. Open that address in **Safari** (not Chrome, and not inside another app).
2. Tap the **Share** button (the square with an arrow) → **Add to Home Screen**.
3. The name shows as **D Zine**; edit it if you like, then tap **Add**.

The D Zine icon appears on your home screen. The app opens full screen, fits around the Dynamic Island and the home bar, and keeps working without internet once it has loaded once.

## Saving and files on iPhone

| What | Where it goes |
|---|---|
| **Save / Save as draft** | Inside the app, on this phone (kept until you delete the app). |
| **Export as ▾ → project file (.zip)** | The iPhone share sheet opens. Choose **Save to Files** → *Google Drive* → *Pocket Zine Maker*, or AirDrop or Mail. |
| **Print sheets PDF, pages PDF, JPGs, envelope, guide** | The same share sheet. Choose **Print** to print straight away, or **Save to Files**. |
| **Open a project file** | **Import project file** → choose the .zip from Files or Google Drive. |

If a big PDF takes a few seconds to build, iPhone may not open the share sheet by itself. A **File ready** card appears instead; tap **Save…** on it.

**Back up now and then.** Projects saved inside the app are lost if you delete the app from the home screen. Export a project file to Google Drive to keep a copy, or to carry on from a laptop by opening the same GitHub address there.

## Updating the app later

1. Upload the new `index.html` to the repository (it replaces the old one).
2. Open `sw.js` and raise the version number, for example `pzm-v1.0.0` → `pzm-v1.0.1`, then commit.
3. On the iPhone, open the app while online, then close it and open it again to get the new version.

Projects saved on the phone are not touched by updates.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | The whole app: planner, layout, text, binding, imposition, envelope, exports. |
| `manifest.webmanifest` | App name, colours and icons used for **Add to Home Screen**. |
| `sw.js` | Offline support: keeps the app, fonts and libraries on the phone. |
| `icons/` | Logo (`logo.svg`) and app icons for iPhone, Android and browsers. |
| `vendor/` | jsPDF 2.5.1 and JSZip 3.10.1 (MIT licences included), used to make PDFs and project files. |

### Differences from the claude.ai version

- There's no account sign-in, so projects are kept on the device. Move them between devices with project files.
- Brightness, Contrast and Colour work in iPhone Safari too, including minus values; the app adjusts the photo pixels itself.
- Files are saved through the iPhone share sheet.
- PDF and zip tools are bundled, so exporting works offline.

## Optional: a real App Store app

Making a native app for the App Store needs a Mac with Xcode and an Apple Developer account (US$99 a year). The usual route is to wrap this same folder with **Capacitor** (`npm i @capacitor/core @capacitor/cli @capacitor/ios`, `npx cap init`, `npx cap add ios`, set `webDir` to this folder, then `npx cap open ios`). For personal use, the home-screen app above does the same job for free.
