import nodemailer from "nodemailer";



const SignupMailer = (email, randomName, randomPassword) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "chandrashekharsaini322@gmail.com",
      pass: "volfdzdbyovzmlix",
    },

    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });


  const mailUser = {
    from: 'chandrashekharsaini322@gmail.com',
    to: email,
    subject: "Welcome to VideoCompressor - Signup Successful!",


    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #007bff;">Welcome to Our App!</h2>
        <p>Hi <strong>${randomName}</strong>,</p>
        <p>We're excited to have you join us. Here are your account details:</p>
        <table style="width: 100%; max-width: 400px; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Username:</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>${randomName}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">Password:</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>${randomPassword}</strong></td>
          </tr>
        </table>
        <p>Please <a href="https://notes-creating-frontend.onrender.com/login" style="color: #007bff; text-decoration: none;">log in</a> to your account and change your password as soon as possible.</p>
        <p>Thanks,</p>
        <p>The <strong>Your App Name</strong> Team</p>
      </div>
    

      `

  }

  const mailOption = transporter.sendMail(mailUser, (error, info) => {
    if (error) {
      console.log(error)
    }

    console.log("Successfully Send Mail");


  })
}

export default SignupMailer;