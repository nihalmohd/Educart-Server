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
  
  const mailOptions={
    from: 'educart2003@gmail.com', 
    to:OtpEmail ,   
    subject:'Educart Verification.',   
    text: otp+": otp verification Educart",
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