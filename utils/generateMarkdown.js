// function to generate markdown for README
function generateMarkdown(userInfo) {
  console.log(userInfo);
  return `
# ${userInfo.title}\n

## Description:\n
${userInfo.description}\n

# Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation:\n
${userInfo.installation}\n

## Usage:\n
${userInfo.usage}\n

## License:\n
![License](https://img.shields.io/badge/License-${userInfo.license}-brightgreen.svg "License Badge")\n


## Contributing:\n
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)\n
${userInfo.contribution}\n


## Tests:\n
${userInfo.test}\n

## Questions:\n
If you have any questions, please feel free to email me.
- [My Github Profile](https://github.com/${userInfo.link})\n
- [Email Me](${userInfo.email})\n
  `;
}



module.exports = generateMarkdown;
