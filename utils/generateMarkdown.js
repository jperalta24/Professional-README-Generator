// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Badge](https://img.shields.io/badge/License-${license}-yellow.svg)`
  };
  return ``
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
  return `- [License](#license)`
  };
  return ``
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  This application is covered by the ${license} license`
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
 ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
  
${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Test

${data.test}

## Questions

If you have any questions, please email me at: [${data.email}](mailto:${data.email})

Find me on Github at [${data.userName}](https://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
