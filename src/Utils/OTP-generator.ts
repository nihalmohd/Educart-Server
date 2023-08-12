import { get } from 'mongoose';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'educart2003@gmail.com', 
      pass: 'jgcalmficawmgbja',   
    },
  });



export const otpSend=(Email:string)=>{
  const OtpEmail=Email
  console.log(OtpEmail)
  const otp=Math.floor(100000 + Math.random() * 900000)
  console.log(otp);

  const emailHTML = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333333;
        }
        .otp {
          font-size: 24px;
          color: #e74c3c;
        }
        .Heading{
          font-bold:10px
          font-size: 40px
          text-align: center;
          margin-top: 20px;
          color: #888888;
        }
        .footer {
          color: #888888;
          font-size: 14px;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
      <h1>Educart Verification</h1>
        <h2>Hello ${OtpEmail},</h2>
        <p>Your OTP is: <span class="otp">${otp}</span></p>
        <p>Please use this OTP to complete your verification Don't share This .</p>
        <p class="footer">Regards,<br />Your App Team</p>
      </div>
    </body>
  </html>
`;
  
  const mailOptions={
    from: 'educart2003@gmail.com', 
    to:OtpEmail ,   
    subject:'Educart Verification.',   
    // text: otp+": otp verification Educart",
    html: emailHTML
  }
  
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  return otp
}