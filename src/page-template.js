//create card section
const generateCard = teamArr => {

    console.log('teamArr', teamArr);

    return `
    
        ${teamArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, roleSection }) => {
                return `             
            <div class="card mx-auto mb-3" style="width: 18rem;">
                <h5 class="card-header">${name}</br>${role}</h5>            
                <ul class="list-group list-groupflush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">
                        <a href="mailto:${email}">Email: ${email}</a>
                    </li>
                    <li class="list-group-item">
                        <a href="https://github.com/${roleSection}">GitHub: ${roleSection}</a>
                    </li>
            </div>
             
    `;
            })
            .join('')
        }

        ${teamArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, roleSection }) => {
                return `  
            <div class="card mx-auto mb-3" style="width: 18rem;">
            <h5 class="card-header">${name}</br>${role}</h5>            
            <ul class="list-group list-groupflush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">
                    <a href="mailto:${email}">Email: ${email}</a>
                </li>
                <li class="list-group-item">
                   School: ${roleSection}
                </li>
            </div>       
    `;
            })
            .join('')
        }

    ${teamArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, roleSection }) => {
                return `  
            <div class="card mx-auto mb-3" style="width: 18rem;">
            <h5 class="card-header">${name}</br>${role}</h5>            
            <ul class="list-group list-groupflush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">
                    <a href="mailto:${email}">Email: ${email}</a>
                </li>
                <li class="list-group-item">
                    Office: ${roleSection}
                </li>
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
            <div class="container bd-dark mb-5">
                <h1 class="page-title">My Team</h1>
            </div>
        </header>

        <main class="container">
            <div class="row>
                <div class="col-6">
                ${generateCard(teamArr)}
                </div>
            </div>           
        </main>
    </body>
    </html>
    `;
}

module.exports = { generatePage };