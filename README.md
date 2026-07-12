# sooraj-beep.github.io

Personal portfolio. Plain HTML/CSS/JS — no build step, no framework, no theme.

## Structure

```
index.html              home: about, experience, skills, projects, writing, contact
css/style.css           all styling (design tokens at the top)
js/main.js              footer year
blog/index.html         post listing
blog/sherp-devops.html  ported post (also serves as the template for new posts)
assets/                 resume + post images
```

## Adding a new blog post

1. Copy `blog/sherp-devops.html` to `blog/your-post-slug.html` and edit.
2. Add a `<li>` entry to `blog/index.html` and to the Writing section in `index.html`.

## Design tokens

Colors and spacing live as CSS variables at the top of
`css/style.css` — the palette is intentionally just white, black, one gray, and a hairline.
