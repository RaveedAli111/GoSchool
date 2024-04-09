const AWS = require('aws-sdk');

//email for notification single user only
exports.SESemailNotification = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body><h1>Dear </h1>' +
            req.body.name +
            "<p style='color:red'>Thank you for reaching out</p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Thanks for reaching out',
      },
    },
    Source: 'Metagrc' + process.env.SES_NOREPLY_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};

//email for tickets single user only
exports.SESemailTicket = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body><h1>Dear </h1>' +
            req.body.name +
            `<p style='color:red'>${req.body.message}</p></body></html>`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Thanks for reaching out',
      },
    },
    Source: 'MetaGRC (Private) Limited' + process.env.SES_NOREPLY_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};

//email for feedback both user's reponse
exports.SESemailFeedback = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            req.body.name +
            '</span></h3>' +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. Our team will contact you soon.</p>" +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Fyndme</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };

  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>Contact Us | MetaGRC (Private) Limited </h2><h3>Subject: ' +
            req.body.subject +
            '</h3><h3>Name: ' +
            req.body.name +
            '</h3><h3>Cell #: ' +
            req.body.cell +
            '</h3><h3>Email: ' +
            req.body.email +
            '</h3><h3>Message: ' +
            req.body.message +
            '</h3></html>',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the contact message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Contact from ' + req.body.name,
      },
    },
    Source: 'Contact from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          res.status(200).send({
            message: 'Message send successfully !',
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({
            message: 'Failed to send !',
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};

//~~~~~~~~~~~~~~~for packages~~~~~~~~~~~~~~~~~~~~~~~~~~//
exports.SESemailPackages = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            req.body.name +
            '</span></h3>' +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have selected " +
            req.body.subject +
            ' ' +
            req.body.period +
            ' plan. Our team will contact you soon and is currently working on your request (' +
            req.body.subject +
            ')</p>' +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Meta GRC</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'fyndme',
      },
    },
    Source: 'fyndme' + process.env.SES_NOREPLY_EMAIL,
  };

  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>Package Request | MetaGRC (Private) Limited </h2><p><b>Package Period:</b> ' +
            req.body.period +
            '<p><b>Subject:</b> ' +
            req.body.subject +
            '<p><b>Softwares:</b> ' +
            req.body.checkedList +
            '<p><b>Price:</b> ' +
            '$' +
            req.body.fullprice +
            '</p><p><b>Name:</b> ' +
            req.body.name +
            '</p><p><b>Cell #:</b> ' +
            req.body.cell +
            '</p><p><b>Email:</b> ' +
            req.body.email +
            '</p><p><b>Message:</b> ' +
            req.body.message +
            '</p><p><b>Terms & Conditions:</b> ' +
            req.body.terms +
            '</p></html>',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Package Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Package Request from ' + req.body.name,
      },
    },
    Source: 'Package Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          res.status(200).send({
            success: true,
            message: 'Your request submitted successfully !',
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({
            message: 'Failed to send !',
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};

//~~~~~~~~~~~~~~~for Extra Services~~~~~~~~~~~~~~~~~~~~~~~~~~//
exports.SESemailExtraService = function (req, res, next) {
  console.log('clg', req.body);
  // AWS.config.update({
  //   accessKeyId: process.env.A_ID,
  //   secretAccessKey: process.env.ACCESSKEY,
  //   region: process.env.REGION,
  // });
  // const ses = new AWS.SES({ apiVersion: "2010-12-01" });
  // const params = {
  //   //for customer
  //   Destination: {
  //     ToAddresses: [req.body.email],
  //   },
  //   Message: {
  //     Body: {
  //       Html: {
  //         // HTML Format of the email
  //         Charset: "UTF-8",
  //         Data:
  //           "<html><body>" +
  //           "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
  //           "<h3>Dear <span style='color:#0373ba;'>" +
  //           req.body.name +
  //           "</span></h3>" +
  //           "<div style='border:1px solid gray; padding:2%'><h1><b>Invoice:</b></h1>" +
  //           "<p><b>Service Price:</b> " +
  //           "$" +
  //           req.body.fullPrice +
  //           "</p><p><b>Package Price:</b> " +
  //           "$" +
  //           req.body.packagePrice +
  //           "</p><p><b>Discount:</b> " +
  //           req.body.discount +
  //           "%" +
  //           "</p><p><b>Tax:</b> " +
  //           req.body.tax +
  //           "%" +
  //           "</p><p><b>Total Price:</b> " +
  //           "$" +
  //           req.body.totalPrice +
  //           "</p><h4 style='margin:0px;'><b>Funds transfer details:</b></h4>" +
  //           "<h3 style='margin:0px;'>Allied Bank Limited</h3>" +
  //           "<h3 style='margin:0px;'><b>Account Title:</b>Fyndme</h3>" +
  //           "<span><b>E-Banking Channel:</b>10960010090439980019</span><br></br>" +
  //           "<span><b>IBAN:</b>PK05ABPA0010090439980019</span></div>" +
  //           "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have selected " +
  //           req.body.subject +
  //           " " +
  //           req.body.period +
  //           " plan. Our team will contact you soon on your request for (" +
  //           req.body.subject +
  //           ")</p>" +
  //           "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
  //           "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
  //           "<p style='color:black;margin-bottom:12px;'>Team Meta GRC</p>" +
  //           "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
  //       },
  //       Text: {
  //         Charset: "UTF-8",
  //         Data: "Thanks for reaching out",
  //       },
  //     },
  //     Subject: {
  //       Charset: "UTF-8",
  //       Data: "Fyndme",
  //     },
  //   },
  //   Source: "Fyndme" + process.env.SES_NOREPLY_EMAIL,
  // };

  // //For us
  // const params1 = {
  //   Destination: {
  //     ToAddresses: [process.env.SES_INFO_EMAIL],
  //   },
  //   Message: {
  //     Body: {
  //       Html: {
  //         Charset: "UTF-8",
  //         Data:
  //           "<html><h2>Extra Service Request | MetaGRC (Private) Limited </h2><p><b>Package:</b> " +
  //           req.body.period +
  //           "<p><b>Subject:</b> " +
  //           req.body.subject +
  //           "<p><b>Service Price:</b> " +
  //           "$" +
  //           req.body.fullPrice +
  //           "</p><p><b>Package Price:</b> " +
  //           "$" +
  //           req.body.packagePrice +
  //           "</p><p><b>Discount:</b> " +
  //           req.body.discount +
  //           "%" +
  //           "</p><p><b>Tax:</b> " +
  //           req.body.tax +
  //           "%" +
  //           "</p><p><b>Total Price:</b> " +
  //           "$" +
  //           req.body.totalPrice +
  //           "</p><p><b>Name:</b> " +
  //           req.body.name +
  //           "</p><p><b>Cell #:</b> " +
  //           req.body.cell +
  //           "</p><p><b>Email:</b> " +
  //           req.body.email +
  //           "</p><p><b>Message:</b> " +
  //           req.body.message +
  //           "</p><p><b>Terms & Conditions:</b> " +
  //           req.body.terms +
  //           "</p></html>",
  //       },
  //       Text: {
  //         Charset: "UTF-8",
  //         Data: "This is the Extra Service Request message from user",
  //       },
  //     },
  //     Subject: {
  //       Charset: "UTF-8",
  //       Data: "Extra Service Request from " + req.body.name,
  //     },
  //   },
  //   Source: "Extra Service Request from user" + process.env.SES_INFO_EMAIL,
  // };

  // const sendEmailReceiver = ses.sendEmail(params).promise();
  // const sendEmailSender = ses.sendEmail(params1).promise();

  // sendEmailReceiver
  //   .then((data) => {
  //     console.log("email submitted to SES", data);
  //     sendEmailSender
  //       .then((data) => {
  //         console.log("email submitted to SES", data);
  //         res.status(200).send({
  //           success: true,
  //           message: "Your request submitted successfully !",
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         res.status(404).send({
  //           message: "Failed to send !",
  //         });
  //       });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res.status(404).send({
  //       message: "Failed to send !",
  //     });
  //   });
};
exports.SESemailPackge = function (req, email, name, lastName, company, cell) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            name +
            `${lastName ? lastName : ''}` +
            '</span></h3>' +
            `<div style='border:1px solid gray; padding:2%'><h1><b>Invoice:${req.Id}</b></h1>` +
            '</p><p><b>Package Price:</b> ' +
            '$' +
            req.price +
            '/' +
            req.mode +
            '</p><p><b>Discount:</b> ' +
            req.discount +
            '%' +
            '</p><p><b>Tax:</b> ' +
            req.tax +
            '%' +
            '</p><p><b>Total Price:</b> ' +
            '$' +
            req.total +
            '/' +
            req.mode +
            "</p><h4 style='margin:0px;'><b>Funds transfer details:</b></h4>" +
            `<h3 style='margin:0px;'>
              Allied Bank Limited
            </h3>` +
            `<h3 style='margin:0px;'><b>Account Title:</b>
                 Fyndme
            </h3>` +
            `<span><b>
               "E-Banking Channel"
            </b>
                 10960010090439980019
            </span><br></br>` +
            `<span><b>IBAN</b>PK05ABPA0010090439980019
            }</span>` +
            `<h3 style='margin:0px;'>
              JAZZ Cash
            </h3>` +
            `<span><b>
               "Muhammad Rashid"
            </b>
                 03219443436
            </span><br></br>` +
            `</div>` +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have selected " +
            req.package +
            ' plan. Our team will contact you soon on your request for (' +
            req.package +
            ')</p>' +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Fyndme</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };
  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>GRC Plan Request | MetaGRC (Private) Limited </h2><p><b>Package:</b> ' +
            '<p><b>Package Name:</b> ' +
            req.package +
            '</p><p><b>Package Price:</b> ' +
            '$' +
            req.price +
            '</p><p><b>Discount:</b> ' +
            req.discount +
            '%' +
            '</p><p><b>Tax:</b> ' +
            req.tax +
            '%' +
            '</p><p><b>Total Price:</b> ' +
            '$' +
            req.total +
            '</p><p><b>Name:</b> ' +
            name +
            `${lastName ? lastName : ''}` +
            '</p><p><b>Company Name:</b> ' +
            company +
            '</p><p><b>Cell #:</b> ' +
            cell +
            '</p><p><b>Email:</b> ' +
            email +
            '</p><p><b>:</b> ' +
            req.mode +
            '</p><p><b>Payment type</b> ' +
            req.paymentType +
            '</p></html>',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Extra Service Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data:
          'Extra Service Request from ' + name + `${lastName ? lastName : ''}`,
      },
    },
    Source: 'Extra Service Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          // res.status(200).send({
          //   success: true,
          //   message: "Your request submitted successfully !",
          // });
        })
        .catch((error) => {
          console.log(error);
          // res.status(404).send({
          //   message: "Failed to send !",
          // });
        });
    })
    .catch((error) => {
      console.log(error);
      // res.status(404).send({
      //   message: "Failed to send !",
      // });
    });
};
exports.SESemailCustomPlan = function (
  req,
  email,
  name,
  company,
  cell,
  lastName,
) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            name +
            `${lastName ? lastName : ''}` +
            '</span></h3>' +
            `<div style='border:1px solid gray; padding:2%'><h1><b>Invoice:${
              req.Id
            } ${req.freeTrail == true ? 'Free Trail' : ''}</b></h1>` +
            '</p><p><b>Package Price:</b> ' +
            '$' +
            req.productTotal +
            '/' +
            req.mode +
            '</p><p><b>Users:</b> ' +
            req.users +
            ':' +
            req.selectedUserCost +
            '<br></br>' +
            '</p><p><b>Data:</b> ' +
            req.space +
            ':' +
            req.selectedSpaceCost +
            '<br></br>' +
            '</p><p><b>Discount:</b> ' +
            req.discount +
            '%' +
            '</p><p><b>Tax:</b> ' +
            req.tax +
            '%' +
            '</p><p><b>Total Price:</b> ' +
            '$' +
            req.total +
            '/' +
            req.mode +
            "</p><h4 style='margin:0px;'><b>Funds transfer details:</b></h4>" +
            `<h3 style='margin:0px;'>
              Allied Bank Limited
            </h3>` +
            `<h3 style='margin:0px;'><b>Account Title:</b>
                 Fyndme
            </h3>` +
            `<span><b>
               "E-Banking Channel"
            </b>
                 10960010090439980019
            </span><br></br>` +
            `<span><b>IBAN</b>PK05ABPA0010090439980019
            }</span>` +
            `<h3 style='margin:0px;'>
              JAZZ Cash
            </h3>` +
            `<span><b>
               "Muhammad Rashid"
            </b>
                 03219443436
            </span><br></br>` +
            `</div>` +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. Our team will contact you soon on your request </p>" +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Fyndme</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };

  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>GRC Plan Request | MetaGRC (Private) Limited </h2><p><b>Package:</b> ' +
            '<p><b>Products:</b> ' +
            req.products.length +
            '</p><p><b>Users:</b> ' +
            req.users +
            ':' +
            req.selectedUserCost +
            '<br></br>' +
            '</p><p><b>Data:</b> ' +
            req.space +
            ':' +
            req.selectedSpaceCost +
            '<br></br>' +
            '</p><p><b>Price:</b> ' +
            '$' +
            req.price +
            '</p><p><b>Discount:</b> ' +
            req.discount +
            '%' +
            '</p><p><b>Tax:</b> ' +
            req.tax +
            '%' +
            '</p><p><b>Total Price:</b> ' +
            '$' +
            req.total +
            '</p><p><b>Name:</b> ' +
            name +
            `${req.body.lastName ? lastName : ''}` +
            '</p><p><b>Company Name:</b> ' +
            req.company +
            '</p><p><b>Cell #:</b> ' +
            cell +
            '</p><p><b>Email:</b> ' +
            email +
            '</p><p><b>:</b> ' +
            req.mode +
            '</p><p><b>Payment type</b> ' +
            req.paymentType +
            '</p></html>',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Extra Service Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Extra Service Request from ' + name,
      },
    },
    Source: 'Extra Service Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          // res.status(200).send({
          //   success: true,
          //   message: "Your request submitted successfully !",
          // });
        })
        .catch((error) => {
          console.log(error);
          // res.status(404).send({
          //   message: "Failed to send !",
          // });
        });
    })
    .catch((error) => {
      console.log(error);
      // res.status(404).send({
      //   message: "Failed to send !",
      // });
    });
};
exports.SESemailFreeTrail = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            req.body.name +
            '' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            `</div>` +
            `<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have selected ${req.body.quote} plan. Our team will contact you soon on your request for free trail" +
            "</p>` +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Meta GRC</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };
  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>GRC Plan Request | MetaGRC (Private) Limited </h2><p><b>Package:</b> ' +
            `<p><b>${req.body.quote}</b>` +
            '<br></br>' +
            req.body.name +
            ' ' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            '</p><p><b>Company Name:</b> ' +
            req.body.company +
            '</p><p><b>Cell #:</b> ' +
            req.body.cell +
            '</p><p><b>Email:</b> ' +
            req.body.email +
            '</p><p><b>:</b> ',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Extra Service Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Extra Service Request from ' + req.body.name + req.body.lastName,
      },
    },
    Source: 'Extra Service Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          res.status(200).send({
            success: true,
            message: 'Your request submitted successfully !',
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({
            message: 'Failed to send !',
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};
exports.SESemailQoutetion = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            req.body.name +
            '' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            `</div>` +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have submited qoutation. Our team will contact you soon on your request for free trail" +
            ')</p>' +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Meta GRC</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };
  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
            '<html><h2>GRC Plan Request | MetaGRC (Private) Limited </h2><p><b>Package:</b> ' +
            '<p><b>Qoutation</b>' +
            '<br></br>' +
            req.body.name +
            ' ' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            '</p><p><b>Company Name:</b> ' +
            req.body.company +
            '</p><p><b>NTN:</b> ' +
            req.body.ntn +
            '</p><p><b>Country:</b> ' +
            req.body.country +
            '</p><p><b>City:</b> ' +
            req.body.city +
            '</p><p><b>Cell #:</b> ' +
            req.body.cell +
            '</p><p><b>Email:</b> ' +
            req.body.email +
            '</p><p><b>:</b> ' +
            '</p><p><b>Description:</b> ' +
            req.body.description,
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Extra Service Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Extra Service Request from ' + req.body.name + req.body.lastName,
      },
    },
    Source: 'Extra Service Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          res.status(200).send({
            success: true,
            message: 'Your request submitted successfully !',
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({
            message: 'Failed to send !',
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};
//~~~~~~~~~~~~~~~for Partner Form~~~~~~~~~~~~~~~~~~~~~~~~~~//
exports.SESemailPartner = function (req, res, next) {
  AWS.config.update({
    accessKeyId: process.env.A_ID,
    secretAccessKey: process.env.ACCESSKEY,
    region: process.env.REGION,
  });
  const ses = new AWS.SES({apiVersion: '2010-12-01'});
  const params = {
    //for customer
    Destination: {
      ToAddresses: [req.body.email],
    },
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: 'UTF-8',
          Data:
            '<html><body>' +
            "<div style='width:100%'><img style='height:58px;width:200px;display:block;margin-right:auto;margin-left:auto;' src='https://metagrc.org/assets/imgs/logos/App-Logo.png' /></div>" +
            "<h3>Dear <span style='color:#0373ba;'>" +
            req.body.firstName +
            ' ' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            '</span></h3>' +
            "<p style='color:black;margin-bottom:12px;'>Thank you for reaching out. You have selected our " +
            req.body.subject +
            ' partnership. Our team will contact you soon.</p>' +
            "<p style='color:black;margin-bottom:50px;'>Or, if your request is more urgent, feel free to give us a call at <a href='tel:+92 321 9443436'>+92 321 9443436</a>. We look forward to getting you back in business!</p>" +
            "<p style='color:black;margin-bottom:12px;'>Thanks,</p>" +
            "<p style='color:black;margin-bottom:12px;'>Team Meta GRC</p>" +
            "<p>For more details visit our website: <a style='color:blue;' href='www.metagrc.org' >www.metagrc.org</a></p></body></html>",
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'Thanks for reaching out',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Fyndme',
      },
    },
    Source: 'Fyndme' + process.env.SES_NOREPLY_EMAIL,
  };

  //For us
  const params1 = {
    Destination: {
      ToAddresses: [process.env.SES_INFO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',

          Data:
            '<html><h2>Partnership Request | MetaGRC (Private) Limited </h2><p><b>Partner:</b> ' +
            req.body.subject +
            '</p><p><b>Name:</b> ' +
            req.body.firstName +
            ' ' +
            `${req.body.lastName ? req.body.lastName : ''}` +
            '</p><p><b>Cell #:</b> ' +
            req.body.cell +
            '</p><p><b>Email:</b> ' +
            req.body.email +
            '</p><p><b>Company:</b> ' +
            req.body.company +
            '</p><p><b>Country:</b> ' +
            req.body.country +
            '</p><p><b>Message:</b> ' +
            req.body.message +
            '</p><p><b>Terms & Conditions:</b> ' +
            req.body.terms +
            '</p></html>',
        },
        Text: {
          Charset: 'UTF-8',
          Data: 'This is the Partnership Request message from user',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Partnership Request from ' + req.body.name,
      },
    },
    Source: 'Partnership Request from user' + process.env.SES_INFO_EMAIL,
  };

  const sendEmailReceiver = ses.sendEmail(params).promise();
  const sendEmailSender = ses.sendEmail(params1).promise();

  sendEmailReceiver
    .then((data) => {
      console.log('email submitted to SES', data);
      sendEmailSender
        .then((data) => {
          console.log('email submitted to SES', data);
          res.status(200).send({
            success: true,
            message: 'Your request submitted successfully !',
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(404).send({
            message: 'Failed to send !',
          });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send({
        message: 'Failed to send !',
      });
    });
};
