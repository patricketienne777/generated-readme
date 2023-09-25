function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache-2.0":
        return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "BSD-3-Clause":
        return "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      default:
        return "[![License: Unknown](https://img.shields.io/badge/License-Unknown-lightgrey.svg)](https://example.com)";
    }
  }
  
  function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        return "https://opensource.org/licenses/MIT";
      case "Apache-2.0":
        return "https://opensource.org/licenses/Apache-2.0";
      case "BSD-3-Clause":
        return "https://opensource.org/licenses/BSD-3-Clause";
      default:
        return "https://example.com";
    }
  }
  
  // Function to generate markdown for README
  export function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
  
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
  ${licenseBadge} [${data.license}](${licenseLink})
  
  ## Contribution Guidelines
  ${data.contributing}
  
  ## Test Instructions
  ${data.tests}
  
  ## Questions
  - Github: ${data.username}
  - Email: ${data.email}
    `;
  }
  
  export default { generateMarkdown };
  