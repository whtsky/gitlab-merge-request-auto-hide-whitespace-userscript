// ==UserScript==
// @name         Auto Hide White Space Changes In GitLab
// @version      0.3
// @description  Add `?w=1` for diff links in your GitLab Merge Request Page.
// @author       Wu Haotian
// @match        https://gitlab.com/*/merge_requests/*
// @grant        none
// ==/UserScript==

/**
 * add `w=1` for given url
 * @param {string} url
 * @returns {string}
 */
function hideWhiteSpaceForURL(url) {
  if (url.includes("w=1")) {
    return url;
  }
  let [main, hash] = url.split("#", 2);
  if (main.includes("?")) {
    main = `${main}&w=1`;
  } else {
    main = `${main}?w=1`;
  }
  if (hash) {
    return [main, hash].join("#");
  }
  return main;
}

/**
 * add `w=1` for given anchor element
 * @param {HTMLAnchorElement} anchor
 */
function hideWhiteSpaceForAnchor(anchor) {
  anchor.href = hideWhiteSpaceForURL(anchor.href);
}

(function() {
  Array.from(document.querySelectorAll('a[href*="diffs"]')).map(
    hideWhiteSpaceForAnchor
  );
  Array.from(document.querySelectorAll('a[href*="compare"]')).map(
    hideWhiteSpaceForAnchor
  );
})();
