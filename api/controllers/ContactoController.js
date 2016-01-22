/**
 * ContactoController
 *
 * @description :: Server-side logic for managing contactoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `ContactoController.con()`
   */
  con: function (req, res) {
  	var mensaje = req.body.nombre+" "+req.body.email+" "+req.body.mensaje+" "+req.body.numero
  	console.log(mensaje)
  	var sendgrid  = require('sendgrid')('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');
  	var payload   = {
	  to      : 'toony1908@gmail.com',
	  from    : 'ventas@mariachi.io',
	  subject : 'Contacto',
	  text    : mensaje
	}
	var payload2   = {
	  to      : req.body.email,
	  from    : 'contacto@mariachi.io',
	  subject : 'Contacto',
	  text    : 'Buen día, pronto nos comunicaremos contigo.'
	}
	sendgrid.send(payload, function(err, json) {
	  if (err) { console.error(err); }
	  console.log(json);
	  sendgrid.send(payload2, function(err, json) {
		  if (err) { console.error(err); }
		  console.log(json);
		  return res.redirect("/");
		});
	  // return res.redirect("/");
	});
  } 
};

