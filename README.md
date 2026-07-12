# sooraj-beep.github.io

Personal portfolio. Plain HTML/CSS/JS — no build step, no framework, no theme.

## Structure

```
index.html              home: about, experience, skills, projects, writing, contact
css/style.css           all styling (design tokens at the top)
js/main.js              footer year
blog/index.html         post listing
blog/sherp-devops.html  ported post (also serves as the template for new posts)
assets/                 resume + post images (see checklist below)
```

## Deploying

This replaces the old Hugo/Wowchemy site entirely.

1. In your local clone of `Sooraj-beep/Sooraj-beep.github.io`, delete the old Hugo
   files (`config/`, `content/`, `data/`, `static/`, `themes/`, `go.mod`,
   `netlify.toml`, `theme.toml`, `academic.Rproj`, `.github/` workflows for Hugo).
2. Copy the contents of this folder into the repo root.
3. In the repo settings → Pages, set the source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. (The old setup built with Hugo via Actions;
   plain HTML needs no build.)
4. Commit and push. The site is live at https://sooraj-beep.github.io within a minute.

## Migration checklist (assets to copy from the old site)

- [ ] `assets/resume.pdf` — from `static/uploads/resume.pdf`
- [ ] `assets/posts/sherp-devops/index_01.png`
- [ ] `assets/posts/sherp-devops/index_02.jpg`
- [ ] `assets/posts/sherp-devops/index_students_working.jpg`
- [ ] `assets/posts/sherp-devops/index_growth.jpg`
- [ ] `assets/posts/sherp-devops/index_03.png`
- [ ] `assets/posts/sherp-devops/index_04.png`

(These are in the old repo under `content/post/sherp-devops/` or downloadable
from the currently deployed site.)

## Adding a new blog post

1. Copy `blog/sherp-devops.html` to `blog/your-post-slug.html` and edit.
2. Add a `<li>` entry to `blog/index.html` and to the Writing section in `index.html`.

## Design tokens

Colors and spacing live as CSS variables at the top of
`css/style.css` — the palette is intentionally just white, black, one gray, and a hairline.

## Note

The old blog post's deploy workflow snippet exposed your EC2 hostname publicly;
it's been replaced with an `<EC2_HOST>` placeholder in the ported post.
