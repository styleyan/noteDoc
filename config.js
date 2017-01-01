var CONFIG = {
  // your website's title
  document_title: "Jer - doc",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "sidebar.md",

  // where the docs are actually stored on github - so you can edit
  // 如：base_url: "https://github.com/ruanyf/es6tutorial/edit/gh-pages",
  base_url: "",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function(key) {
    obj[key] = conf[key];
  });
}