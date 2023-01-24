const express = require("epxress");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server: Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASSWORD);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "peteralexandru00@gmail.com",
    pass: "Alinpeter17!",
  },
});

contactEmail.verify((error) => {
  if (error) console.log(error);
  else console.log("Ready to Send");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: naeme,
    to: "peteralexandru00@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Message:</b> ${message}</p>`,
  };

  contactEmail.sendEmail(mail, (err) => {
    if (err) res.json(err);
    else res.json({ code: 200, status: "Message Sent" });
  });
});
