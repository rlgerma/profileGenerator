"use strict";

module.exports = function generateHTML(data) {
  var colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "#000",
      photoBorderColor: "#000"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "#ffff",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "#fff",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "#ffff",
      photoBorderColor: "#ffff"
    }
  };
  return '<!DOCTYPE html>\n<html lang="en">\n   <head>\n      <meta charset="UTF-8" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>\n      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">\n      <title>Your Profile</title>\n      <style>\n          @page {\n            margin: 0;\n          }\n         *,\n         *::after,\n         *::before {\n         box-sizing: border-box;\n         }\n         html, body {\n         padding: 0;\n         margin: 0;\n         }\n         html, body, .wrapper {\n         height: 100%;\n         }\n         .wrapper {\n         background-color: '
    .concat(
      colors[answers.color].wrapperBackground,
      ";\n         padding-top: 100px;\n         }\n         body {\n         background-color: white;\n         -webkit-print-color-adjust: exact !important;\n         font-family: 'Cabin', sans-serif;\n         }\n         main {\n         background-color: #E9EDEE;\n         height: auto;\n         padding-top: 30px;\n         }\n         h1, h2, h3, h4, h5, h6 {\n         font-family: 'BioRhyme', serif;\n         margin: 0;\n         }\n         h1 {\n         font-size: 3em;\n         }\n         h2 {\n         font-size: 2.5em;\n         }\n         h3 {\n         font-size: 2em;\n         }\n         h4 {\n         font-size: 1.5em;\n         }\n         h5 {\n         font-size: 1.3em;\n         }\n         h6 {\n         font-size: 1.2em;\n         }\n         .photo-header {\n         position: relative;\n         margin: 0 auto;\n         margin-bottom: -50px;\n         display: flex;\n         justify-content: center;\n         flex-wrap: wrap;\n         background-color: "
    )
    .concat(colors[answers.color].headerBackground, ";\n         color: ")
    .concat(
      colors[answers.color].headerColor,
      ";\n         padding: 10px;\n         width: 95%;\n         border-radius: 6px;\n         }\n         .photo-header img {\n         \n         width: 250px;\n         height: 250px;\n         border-radius: 50%;\n         object-fit: cover;\n         margin-top: -75px;\n         border: 6px solid "
    )
    .concat(
      colors[answers.color].photoBorderColor,
      ";\n         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;\n         }\n         .photo-header h1, .photo-header h2 {\n         width: 100%;\n         text-align: center;\n         }\n         .photo-header h1 {\n         margin-top: 10px;\n         }\n         .links-nav {\n         width: 100%;\n         text-align: center;\n         background-color: #ffff;\n         padding: 20px 0;\n         font-size: 1.1em;\n         border-radius: 24px;\n         margin-top:4px\n         }\n         .nav-link {\n         display: inline-block;\n         margin: 5px 10px;\n         }\n         .workExp-date {\n         font-style: italic;\n         font-size: .7em;\n         text-align: right;\n         margin-top: 10px;\n         }\n         .container {\n         padding: 50px;\n         padding-left: 100px;\n         padding-right: 100px;\n         }\n\n         .row {\n           display: flex;\n           flex-wrap: wrap;\n           justify-content: space-between;\n           margin-top: 20px;\n           margin-bottom: 20px;\n         }\n\n         .card {\n           padding: 20px;\n           border-radius: 6px;\n           background-color: "
    )
    .concat(colors[answers.color].headerBackground, ";\n           color: ")
    .concat(
      colors[answers.color],
      ';\n           margin: 20px;\n         }\n         \n         .col {\n         flex: 1;\n         text-align: center;\n         }\n\n         a, a:hover {\n         text-decoration: none;\n         color: inherit;\n         font-weight: bold;\n         }\n\n         @media print { \n          body { \n            zoom: .75; \n          } \n         }\n      </style>\n    </head>\n      <body>\n        <div class="wrapper">\n          <div class="container">\n            <div class = "photo-header">\n              <img src = "'
    )
    .concat(
      answers.profilePic,
      '" alt = "test">\n            </div> <br><br><br><br>\n            <h1>\n              hi!<br>\n            </h1>\n            <h2>\n              My name is <span class="links-nav"> '
    )
    .concat(
      answers.name,
      "</span>\n            </h2> <br><br>\n            <h3>\n              I'm from "
    )
    .concat(
      answers.location,
      '\n            </h3>\n          </div>\n          <div class="container">\n            <div class="row">\n              <div class ="col-md">\n                <h6>\n                  '
    )
    .concat(
      answers.bio,
      '\n                </h6>\n              </div>\n              <div class="col-md">\n                <h5>\n                <ul>\n                  <li>\n                      I have '
    )
    .concat(
      answers.repos,
      " repos on GitHub \n                  </li>\n                  <br>\n                  <li>\n                    I'm following "
    )
    .concat(
      answers.following,
      " Users \n                  </li>\n                  <br>\n                  <li>\n                    and I'm following "
    )
    .concat(
      answers.followers,
      ' Users \n                  </li>\n                </ul>\n                </h5>\n              </div>\n            </div>\n          </div>\n          <div class="container">\n            <div class= "links-nav">\n              <br><br>\n              <a href="'
    )
    .concat(
      answers.blog,
      '">\n              <h3>Check out my portfolio!</h3></a>\n            </div>\n          </div>\n        </div>\n      </body>\n    </html>'
    );
};
