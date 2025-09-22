<h1 align="center">
  Re
</h1>

<h4 align="center">
  Minimalistic Jekyll theme for GitHub Pages
</h4>

## Highlights

- Ready to use out of the box
- No configuration required
- GitHub metadata integration
- Customizable
- Responsive design
- Syntax highlighting
- Light & dark mode 

## Contents

- [Highlights](#highlights)
- [Install](#install)
- [Customization](#customization)
- [Team](#team)
- [License](#license)

## Install

1. Create or edit your repository's `_config.yml`:

```yaml
remote_theme: klaudiosinani/re
plugins:
  - jekyll-github-metadata
  - jekyll-remote-theme
  - jekyll-sitemap
```

2. Enable GitHub Pages in your repository settings
3. Your `readme.md` will automatically be rendered with the Re theme

## Customization

While Re is ready to work out of the box, with zero configuration, you can customize certain aspects of the theme.

To prevent conflicts with other Jekyll plugins, all Re theme options are grouped under the `re:` namespace. 

### Full Showcase

The following illustrates a complete `_config.yaml` file that could be used to install Re and in parallel use all the available customization options.

```yaml
# _config.yaml
remote_theme: klaudiosinani/re
plugins:
  - jekyll-github-metadata
  - jekyll-remote-theme
  - jekyll-sitemap

re:
  owner_website: "https://my-website.com"
  favicon: /assets/img/favicon.png
```

### All Options

#### `re.owner_website`

- Identifier: `owner_website`
- Type: `String`
- Description: The website of the repository owner used as the href on the navigation bar logo
- Default values:
  - `${site.github.owner.blog}`
    - Source: `jekyll-github-metadata` plugin
    - Category: Primary default value
    - Description: The personal website defined in the the owner's github profile
  - `${site.github.owner_url}`
    - Source: `jekyll-github-metadata` plugin
    - Category: Secondary default value, used if primary is missing
    - Description: The URL of owner's github profile
  - `/` (root path)
    - Source: Internal fallback
    - Category: Tertiary default value used if no GitHub information is available
    - Description: Links to the root of the current project site

#### `re.favicon`

- Identifier: `favicon`
- Type: `String`
  - Accepts:
    - Local paths; e.g. `/assets/images/favicon.png`
    - Remote URLs; e.g., `https://raw.githubusercontent.com/username/repo/branch/path/to/favicon.png`
- Description: Path to the favicon file for the website
- Default value: None; if not provided by the user the html tag will not be rendered

## Team

- Klaudio Sinani [(@klaudiosinani)](https://github.com/klaudiosinani)

## License

[MIT](https://github.com/klaudiosinani/re/blob/master/license.md)
