var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var api_key = 'yourapikey';
var domain = 'domain.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('contact', {title: 'blah'});
});

router.post('/', function(req, res){

	var data = {
	  from: req.body.name + ' <' + req.body.email + '>',
	  to: 'email@email.com',
	  subject: 'Nuovo messaggio di posta elettronica da: ' + req.body.name,
	  text: req.body.message
	};

	mailgun.messages().send(data, function (error, body) {
		if(error){
			console.log('Error: ' + error);
			res.render('contact', {title: 'Contact', msg: 'Error occurred: ' + error, err: true})
		} else {
	  	console.log(body);
	  	res.render('contact', {title: 'Contact', msg: 'Message sent!', err: false})
		}
	});

	// WORKING VERSION OF GMAIL
	// var transport = nodemailer.createTransport({
	//    service: "Gmail",
	//    auth: {
	//      user: "username",
	//      pass: "password"
	//    }
	// });

	// transport.sendMail({
	//   from: req.body.email,
	//   to: 'email@email.com', // An array if you have multiple recipients.
	//   subject: 'Nuovo messaggio da ' + req.body.name,
	//   text: req.body.message,
	// }, function (err, info) {
	//   if (err) {
	//     console.log('Error: ' + err);
	//     res.render('contact', {title: 'Contact', msg: 'Error occurred: ' + error, err: true})
	//   }
	//   else {
	//     console.log('Response: ' + info);
	//     res.render('contact', {title: 'Contact', msg: 'Message sent!', err: false})
	//   }
	// });

});

module.exports = router;