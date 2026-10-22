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
- `writing/first-entry.html`: reusable essay template, clearly marked as placeholder content.
- `research.html`: Research page, ordered as research, professional updates, and publications.
- `pictures.html`: gallery with category filters and abstract CSS placeholders.
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

### New writing

1. Copy `writing/first-entry.html` to `writing/your-title.html`.
2. Replace the title, description, metadata, and article content; remove placeholder labels.
3. Duplicate a `.writing-row` article in `writing.html` and point its title link to your new file.
4. Set `data-category="essay"` or `data-category="reflection"` for filtering. To add a category, add a matching filter button with `aria-pressed="false"` and the same `data-filter` value.

All entries stay visible if JavaScript is disabled. Filters are only shown when JavaScript is available.

### Publications and updates

Duplicate `.publication-entry` in `research.html`. Replace the placeholder with the title, authors, year, venue, and summary. Replace the disabled link span with a real anchor only when you have a URL:

```html
<a class="text-link" href="YOUR_PUBLICATION_URL">Read publication ↗</a>
```

### Pictures

Store optimized photos in `assets/images/`. In each gallery figure, replace the `.gallery-placeholder` div with:

```html
<img class="gallery-photo" src="assets/images/your-photo.jpg"
     alt="Describe what the photo shows" width="900" height="1100" loading="lazy">
```

Add `.gallery-photo { display: block; width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }` to the stylesheet. Edit the caption and `data-category` (`everyday`, `places`, or `hobbies`). Duplicate a figure to add more photos. Abstract artwork in the starting gallery is explicitly labeled as placeholder imagery.

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
