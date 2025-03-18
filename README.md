# [Slav.Dev] Website

Web frontend for [Slav.Dev API], implemented with React.

## Suboptimal Choices

This section contains suboptimal solutions, workarounds, and hacks used
in this repository.

### Hash Router

This website uses a `HashRouter` (instead of preferred `BrowserRouter`)
and a custom redirecting script based on [spa-github-pages],
in order to prevent 404 errors on GitHub Pages.


[Slav.Dev]: https://slav.dev
[Slav.Dev API]: https://slav.dev/api
[spa-github-pages]: https://github.com/rafgraph/spa-github-pages
