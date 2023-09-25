// If there is no license, return an empty string
// Define a mapping of licenses to badge URLs and license links
const licenseData = {
    "Apache 2.0 License": {
      badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      link: "(https://opensource.org/licenses/Apache-2.0)"
    },
    "BSD 2-Clause License": {
      badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
      link: "(https://opensource.org/licenses/BSD-2-Clause)"
    },
    "The MIT License": {
      badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      link: "(https://opensource.org/licenses/MIT)"
    },
    "The Unilicense": {
      badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
      link: "(http://unlicense.org/)"
    },
    "": {
      badge: "",
      link: ""
    }
  };
  
  // Function to render the license badge
  function renderLicenseBadge(license) {
    return licenseData[license].badge;
  }
  
  // Function to render the license link
  function renderLicenseLink(license) {
    return licenseData[license].link;
  }
  
  // Function to generate markdown for README
  export function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Table of Contents
  - [Project Description](#description)
  - [Installation Instructions](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License 
  ${renderLicenseBadge(data.License)} ${data.License} ${renderLicenseLink(data.License)}
  
  ## Contribution Guidelines
  ${data.contributing}
  
  ## Test Instructions
  ${data.tests}
  
  ## Questions
  - Github: ${data.Github}
  - Email: ${data.email}
  `;
  }
  
//   module.exports = generateMarkdown;
// generateMarkdown.js
// export function generateMarkdown(data) {
//     // Your function code here
//   }
  