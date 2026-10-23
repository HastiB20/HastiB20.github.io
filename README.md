# A personal website

A buildless, responsive website for academic work, writing, and personal interests. Light editorial styling with warm ivory, champagne gold, soft silver, restrained rose accents, and elegant system-serif headings. No dependencies, remote fonts, analytics, forms, or external services.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open **http://localhost:8000**. Stop the server with Ctrl+C. You can also open `index.html` directly, but a local server is recommended.

## Files

- `index.html`: introduction, photo placeholder, About, quote, and page highlights.
- `writing.html`: filterable writing index.
- `writing/entries.js`: add and edit all essays, poems, reflections, and other writings here.
- `writing/entry.html`: shared reading page; no need to edit it.
- `writing/first-entry.html`: original unused essay template, kept for reference.
- `research.html`: Research page, ordered as research, professional updates, and publications.
- `pictures.html`: gallery with automatic category filters.
- `pictures/entries.js`: add and edit picture filenames, captions, and categories here.
- `teaching.html`: future teaching space.
- `contact.html`: email placeholder; no address included.
- `cv.html`: PDF placeholder with a ready-to-enable viewer.
- `media.html`: inactive placeholders for profile links.
- `assets/css/style.css`: shared layout, palette, typography, and responsive styles.
- `assets/js/main.js`: mobile navigation and collection filters.
- `assets/images/`: local image assets.
- `assets/cv/`: your future CV PDF.
- `.nojekyll`: makes GitHub Pages serve the static files without Jekyll processing.

## Personalize

Search for `Your name`, bracketed text such as `[Your name]`, and `placeholder` across the HTML files. Replace the copy, page titles, and meta descriptions. The home introduction and decorative note are suggested wording, not claims about your background. Fonts use the visitor's installed system and serif fonts; nothing is fetched from a font provider.

Change the site palette in the `:root` variables at the top of `assets/css/style.css`. The same stylesheet serves all pages. Navigation and footers are intentionally plain HTML: update them on each page when adding a new page.

### Personal photo

Save your photo as `assets/images/portrait.jpg`. Replace the entire `.portrait-placeholder` div in `index.html` with:

```html
<img class="personal-photo" src="assets/images/portrait.jpg"
     alt="Portrait of [your name]" width="700" height="800">
```

Add this rule to the stylesheet:

```css
.personal-photo { display: block; width: 100%; height: 340px; object-fit: cover; }
```

Choose meaningful alt text and adjust the crop as needed.

### Add an essay, poem, or reflection

You only need to edit **`writing/entries.js`**. No HTML changes or extra commands are needed.

1. Open `writing/entries.js` and copy this block inside the square brackets, above any existing pieces:

```js
  {
    id: 'a-quiet-morning',
    title: 'A quiet morning',
    category: 'Poem',
    date: 'October 2026',
    intro: 'A few lines about the start of a day.',
    text: `The first line of your poem
The second line of your poem

A new stanza starts after a blank line.`,
  },
```

2. Replace the example words with your own, save the file, and publish your changes as usual. The example already commented out in the file is also available to copy; remove its surrounding `/*` and `*/` to use it.

That is all. The Writing page, links, and category buttons update automatically. Pieces appear in the order you put them in the file, so put the newest first.

- **id:** a unique address for the piece, using lowercase letters, numbers, and hyphens. Keep it unchanged after publishing so existing links still work.
- **title:** the title shown on the website.
- **category:** `Essay`, `Poem`, `Reflection`, or another category name of your choice. New categories get their own filter automatically.
- **date:** the date as you want it displayed, such as `October 2026`.
- **intro:** a short description. Use `''` to leave it empty.
- **text:** paste your full writing between the two backticks. Blank lines separate paragraphs or stanzas; single line breaks are preserved. Write plain text, with no HTML needed.

Keep the punctuation around each field and the comma after each piece. If a title or introduction contains an apostrophe, use double quotes around that field, for example `title: "A poet's morning"`. In the full text, write a backtick as `` \` `` and a literal `${` as `\${`.

To edit a piece, change its block. To remove one, delete its entire block from `{` through `},`. You do not need to create or delete any HTML pages. Preview with the local server described above, or by opening `writing.html` in your browser. The writing collection requires JavaScript; the other pages are unchanged.

### Publications and updates

Duplicate `.publication-entry` in `research.html`. Replace the placeholder with the title, authors, year, venue, and summary. Replace the disabled link span with a real anchor only when you have a URL:

```html
<a class="text-link" href="YOUR_PUBLICATION_URL">Read publication ↗</a>
```

### Add a picture

Only two things are needed: save the photo, then add its details in **`pictures/entries.js`**. No HTML or CSS editing and no extra commands are needed.

1. Save your photo in **`assets/images/`**, for example `my-photo.jpg`.
2. Open **`pictures/entries.js`** and copy this block inside the square brackets:

```js
  {
    file: 'my-photo.jpg',
    caption: "A day's little details",
    category: 'Everyday',
    alt: 'A cup of tea beside an open notebook.',
  },
```

Replace the example with your details, save, and publish your changes as usual. A commented example is also provided in the file; remove its surrounding `/*` and `*/` to use it.

- **file:** your photo's exact filename, including its extension and matching capital letters. Do not add `assets/images/` here. Use a browser-friendly image such as JPG, PNG, or WebP; convert HEIC photos first.
- **caption:** the words shown below the picture.
- **category:** `Everyday`, `Places`, `Hobbies`, or any name you like. The filter button is created automatically.
- **alt:** a short description of what the picture shows, for visitors using screen readers.

Pictures appear in the order of the blocks. **Put a new block above the existing ones to show it at the top.** Keep the comma after each block. Use double quotes if your caption or description contains an apostrophe, as in the example.

To change a caption or category, edit its block. To remove a picture from the page, delete its block from `{` through `},`; you can keep the image file if you still use it elsewhere. You never need to edit `pictures.html`. Photos are sized and cropped automatically to fit the gallery. The gallery requires JavaScript.

### Contact and profile links

In `contact.html`, replace the email placeholder paragraph with your preferred address or a `mailto:` link when ready, and remove the "not added yet" note. No address is included initially.

In `media.html`, convert each `.media-row` div to an anchor with your own `href`, remove the placeholder badge, and add a simple arrow if desired. Remove unused rows. No profile URLs are prefilled.

### Update the CV

1. Save the PDF as `assets/cv/cv.pdf`.
2. In `cv.html`, remove the `.cv-placeholder` div.
3. Uncomment the `<object>` viewer and fallback link immediately below it.
4. Replace the last-updated placeholder with your date.

The viewer requests hidden PDF toolbars where supported. Browser behavior varies, particularly on mobile. A publicly accessible PDF can always be saved; the site cannot guarantee download prevention. A fallback link lets visitors open it if their browser cannot embed PDFs. No upload service is required: replace the local file whenever the CV changes.

### Add a page

Copy an existing root-level HTML file, edit the title and main content, then add its navigation link in every HTML file. Only the current page's navigation link should have `aria-current="page"`. Files in subdirectories need `../` prefixes for shared assets and root pages, as the essay template demonstrates.

## GitHub Pages

This folder is the publishable website. There is no build step. All site links are relative, supporting both user and project Pages sites. When you are ready, manage Git and configure GitHub Pages yourself to serve the appropriate branch and root directory. No commits, pushes, branch changes, or deployment are part of this implementation.

Navigation stays visible above 600px; smaller screens use a collapsible menu when JavaScript is available. The navigation order is Home, Research, CV, Writing, Pictures, Teaching, Media, Contact.

The desktop header includes a noninteractive Menu label beside the visible navigation. On screens up to 600px, JavaScript enables the Menu button and collapsible links. Without JavaScript, links stay visible. Selected headings and links use soft blue alongside the pink and ivory palette; decorative stars have been removed throughout.
