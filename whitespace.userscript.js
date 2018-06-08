// ==UserScript==
// @name         Auto Hide White Space Changes In GitLab
// @version      0.2
// @description  Add `?w=1` for diff links in your GitLab Merge Request Page.
// @author       Wu Haotian
// @match        https://gitlab.com/*/merge_requests/*
// @grant        none
// ==/UserScript==

(function() {
  const diffAnchor = document.querySelector(
    'li.diffs-tab a[data-target="#diffs"]'
  );
  if (diffAnchor && !diffAnchor.href.includes("w=1")) {
    diffAnchor.href = `${diffAnchor.href}?w=1`;
  }
  Array.from(document.querySelectorAll('a[href*="diffs?"]')).map(anchor => {
    if (!anchor.href.includes("w=1")) {
      anchor.href = `${anchor.href}&w=1`;
    }
  });
})();
