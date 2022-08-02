module.exports={
  "title": "WaveMaker Docs",
  "tagline": "Welcome to the Learning Center",
  "url": "https://www.wavemaker.com",
  "baseUrl": "/learn/",
  "organizationName": "WaveMaker, Inc.",
  "projectName": "learn",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/learn/js/code-block-buttons.js",
    "/learn/js/error-reporting.js",
    "/learn/js/inject-stylesheets.js"
  ],
  "stylesheets": [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://fonts.googleapis.com/css?family=Lato&display=swap"
  ],
  "favicon": "img/WM_blue_logo.png",
  "customFields": {
    "docsUrl": "",
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ],
    "fonts": {
      "myFont": [
        "Open Sans",
        "Serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    "separateCss": [
      "static/remark/css/wmsicon.css",
      "static/remark/css/remark-wm-theme.css"
    ],
    "blogSidebarCount": "ALL",
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../learn",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/wavemaker/docs/tree/master/learn/",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "WaveMaker Docs",
      "logo": {
        "src": "img/WM_blue_logo.png"
      },
      "items": [
        {
          "to": "docs/documentation-reference",
          "label": "Get started",
          "position": "left"
        },
        {
          "to": "docs/app-development/widgets/widget-library",
          "label": "Widgets",
          "position": "left"
        },
        {
          "to": "docs/react-native/react-native",
          "label": "Mobile",
          "position": "left"
        },
        {
          "to": "docs/howtos-documents",
          "label": "How-to",
          "position": "left"
        },
        {
          "to": "docs/on-premise/welcome",
          "label": "Enterprise",
          "position": "left"
        },
        {
          "to": "docs/wavemaker-release-notes",
          "label": "Releases",
          "position": "left"
        },
        {
          "href": "https://www.wavemaker.com/get-started/",
          "label": "Sign-in",
          "position": "left"
        }
      ]
    },
    "image": "img/WM_blue_logo.png",
    "footer": {
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "to": "https://twitter.com/WaveMaker"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2013-2022 WaveMaker, Inc. All rights reserved.",
      "logo": {
        "src": "img/WM_blue_logo.png"
      }
    }
  }
}
