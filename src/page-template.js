//create card section
const generateCard = teamArr => {
    console.log('teamArr', teamArr);

    return `  
        ${teamArr
            .filter(({ role }) => role === 'Manager')
            .map(({ name, id, email, role, officeNumber }) => {
                return `  
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem;">
            <h5 class="card-header text-white bg-primary">${name}
                </br><i class="fas fa-mug-hot"></i> ${role}</h5>
            <ul class="list-group list-groupflush m-2">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">
                    <a href="mailto:${email}">Email: ${email}</a>
                </li>
                <li class="list-group-item">
                    Office: ${officeNumber}
                </li>
            </div>   
            </div>     
    `;
            })
            .join('')
        }

        ${teamArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, githubUsername }) => {
                return `  
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem;">
                <h5 class="card-header text-white bg-primary">${name}</br><i class="fas fa-glasses"></i> ${role}</h5>
                <ul class="list-group list-groupflush m-2">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">
                        <a href="mailto:${email}">Email: ${email}</a>
                    </li>
                    <li class="list-group-item">
                        <a href="https://github.com/${githubUsername}">GitHub: ${githubUsername}</a>
                    </li>
            </div>
            </div>
             
    `;
            })
            .join('')
        }

        ${teamArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `  
            <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem;">
            <h5 class="card-header text-white bg-primary">${name}
                </br><i class="fas fa-mug-hot"></i> ${role}</h5>
            <ul class="list-group list-groupflush m-2">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">
                    <a href="mailto:${email}">Email: ${email}</a>
                </li>
                <li class="list-group-item">
                   School: ${school}
                </li>
            </div> 
            </div>      
    `;
            })
            .join('')
        }  
    `
}


const generatePage = teamArr => {
    console.log('Arr', teamArr)

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>            
            <h1 class="page-title bg-dark mb-5 text-center text-white">My Team</h1>           
        </header>

        <main class="container">
            <div class="row">
                
                ${generateCard(teamArr)}
                
            </div>           
        </main>
    </body>
    </html>
    `;
}

module.exports = { generatePage };