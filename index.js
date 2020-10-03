const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
//const questions = [

//];

//Section for Description, Installation, Usage, Contributing, and Tests
//section for Questions - GH username, GH profile link, email address

  const userInfo = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project description (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter your project installation information',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                  return true;
                } else {
                  return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage information',
        when: usageInput => {
          if (usageInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter your project contribution guidelines',
        when: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter your test instructions',
        when: testInput => {
          if (testInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: "Choose license or licenses",
        choices: ['GPLv3', 'MIT', 'Unlicense', 'ISC']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('Please enter your GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
          name: 'email',
          message: 'Enter your email address. (Required)',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email.';
          }
      },
    ])
    .then(function (userData) {

      // Generate the 'file text'
      const fileText = generateMarkdown(userData);

      // Write the 'readme' file
      writeFile(fileText);
  });
};

// function to write README file

function writeFile(userData) {
  const fileName = './dist/README.md'

  return new Promise((resolve, reject) => {
      fs.writeFile(fileName, userData, err => {
          if(err) {
          reject(err) 
          return;
          }
          resolve({
              ok: true,
              message: 'README is complete!' 
          });
      });
  });
};



// function to initialize program
function init() {
  const userData = userInfo();
}

// function call to initialize program
init();
