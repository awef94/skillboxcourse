let emails = [
    `bourbon@email.com`, `scotch@email.com`, `vodka@email.com`, `beer@email.com`,
    `tequila@email.com`, `vine@email.com`, `water@email.com`, `juice@email.com`,
    `cider@email.com`, `moonshine@email.com`
];
let blackEmails = [
    `water@email.com`, `juice@email.com`
];


function filterBlackList(emails, black) {
    let whiteEmails = [];
    for(let mail of emails){
        if(black.includes(mail)){
            console.log(`Fuck off! ${mail}` );
            continue;
        }
        else{
            whiteEmails.push(mail);
        }
    }
    console.log(whiteEmails);
}

filterBlackList(emails, blackEmails);