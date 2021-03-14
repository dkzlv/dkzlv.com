## Markdown

### Highlight

To highlight some part of the text with yellow color (`<mark>` tag), use the
following syntax: `*#Here goes the text*`.

### Insert email collection promo

```markdown
<div class="email-collector">

You can pass some text here, it will be used instead of the default one. You can
also use **formatting** _here_.

</div>
```

### Pictures

All pictures have their colors inverted for dark theme by default. But if you
use a picture that cannot be inverted in any way (meme, screenshot, etc.) you
can disable this behavior, if you write the start the alt-text with an asterisk:

```markdown
[\*Without invertion](/img/pic.png)

[With invertion](/img/pic.png)
```

### Callout

Looks the same as Notion's callout block: emoji to the left, text to the right.
There's three variations: `green`, `red` and `yellow`. Use as a div:

```html
<div class="callout green">
  😀 Supports a single paragraph of a text. If you need more, wrap it inside
  additional
  <div>.</div>
</div>
```

### Enumeration

```html
<div class="enum">
  This one would be 1/4 of the page width. This one would be 3/4 of the page
  width.
</div>
```

### Share

```html
<div class="share">This text will be used as the share's CTA.</div>
```
