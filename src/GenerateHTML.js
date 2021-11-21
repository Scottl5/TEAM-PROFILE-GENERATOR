const createSite = (employeecard) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <section class ="container">
            <div class ="row justify-content-center">
            ${employeecard}
            </div>
            </div>`;
};

const createManager = (managerAnswers) => {
  return `<div class ="card col-4">
    <div class= "card-header">
        <h3>${managerAnswers.name}</h3>
        <h4> Manager</h4>
    </div>
    <div class ="card-body">
        <p> ID: ${managerAnswers.id}</p>
        <p> Email:
                <a href ="mailto: ${managerAnswers.email}">${managerAnswers.email}</a>
        </p>
        <p> Office Number: ${managerAnswers.office}</p>
        
    </div>
</div>
`;
};

const createIntern = (internAnswers) => {
  return `div class ="card col-4">
  <div class= "card-header">
      <h3>${internAnswers.name}</h3>
      <h4> Intern</h4>
  </div>
  <div class ="card-body">
      <p> ID: ${internAnswers.id}</p>
      <p> Email:
              <a href ="mailto: ${internAnswers.email}">${InternAnswers.email}</a>
      </p>
      <p> School: ${internAnswers.school}</p>
      
  </div>
</div>`;
};

const createEngineer = (engineerAnswers) => {
  return `div class ="card col-4">
  <div class= "card-header">
      <h3>${engineerAnswers.name}</h3>
      <h4> Engineer</h4>
  </div>
  <div class ="card-body">
      <p> ID: ${engineerAnswers.id}</p>
      <p> Email:
              <a href ="mailto: ${engineerAnswers.email}">${engineerAnswers.email}</a>
      </p>
      <p> Github: <a href = "https://github.com/${engineerAnswers.github}</a></p>
      
  </div>
</div>`;
};
