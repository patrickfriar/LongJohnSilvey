# LongJohnSilvey

1. Copied `Cornerstone v1.9.4 _header.scss` to `assets/scss/layouts/header/`, as the theme is a customized Cornerstone, to correct the lack of class styles file for the header and nav menu.

2. Changed `.navPages {font-size:0;}` to `{font-size: 1em;}` within `assets/scss/components/stencil/navPages/_navPages.scss` to resolve the nav page link buttons being hidden by the upper edge of the carousel.

3. Commented out custom style script including `*-transform:rotate(180deg);` styles for `<body>`  from lines 92-102 of `templates/components/common/footer.html`, correcting the 180-degree page rotation.

4. corrected `_body.scss` file after turning in project. :(

Found when theme is uploaded, that `footer.html` and `_header.scss` need to be edited and then `saved and applied` to render correctly.
