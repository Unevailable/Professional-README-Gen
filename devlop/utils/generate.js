// Displays the license badge
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
    } else {
        return '';
    }
}

// Links to the license
function renderLicenseLink(license) {
    //this is so the license is linked correctly 
    const licenseMap = {
        "Apache License 2.0": "apache-2.0",
        "GNU General Public License v3.0": "gpl-3.0",
        "MIT License": "mit",
        "BSD 2-Clause \"Simplified\" License": "bsd-2-clause",
        "BSD 3-Clause \"New\" or \"Revised\" License": "bsd-3-clause",
        "Boost Software License 1.0": "bsl-1.0",
        "Creative Commons Zero v1.0 Universal": "cc0-1.0",
        "Eclipse Public License 2.0": "epl-2.0",
        "GNU Affero General Public License v3.0": "agpl-3.0",
        "GNU Lesser General Public License v2.1": "lgpl-2.1",
        "Mozilla Public License 2.0": "mpl-2.0",
        "The Unlicense": "unlicense",
        "No License": ""
    };

    if (license) {
        const cleanedLicense = licenseMap[license];
        if (cleanedLicense) {
            return `[License Link](https://opensource.org/licenses/${cleanedLicense})`;
        }
    }
    return '';
}

// Displays the users' inputs for the license
function renderLicenseSection(license) {
    if (license) {
        const licenseLink = renderLicenseLink(license);
        return `## License\n\nThis project is licensed under the [${license} license](${licenseLink}).`;
    } else {
        return '';
    }
}

// This function takes the user inputs and adds it to the README file.
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach me at [GitHub: ${data.githubUsername}](https://github.com/${data.githubUsername}) or contact me via email at ${data.email}.
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
