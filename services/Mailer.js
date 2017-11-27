const keys = require('../config/keys');
const mailGun = require('mailgun-js')({apiKey: keys.mailGunKey, domain: keys.mailGunDomain});

class Mailer {
    constructor({ subject, recipients, body }, content){
        this.data = {
            from: 'NO-REPLY <no-reply@emaily.com>',
            to: this.formatAddresses(recipients),
            subject: subject,
            html: content
          };
    }

    formatAddresses(recipients){
        return recipients.map(({email}) => {return email}).join(',');
    }

    async send(){
        return mailGun.messages().send(this.data);
    }
}

module.exports = Mailer;