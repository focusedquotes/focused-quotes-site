import nodemailer from "nodemailer";

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parse webhook data from Razorpay
  const payload = JSON.parse(event.body);
  const customerEmail = payload.payload.payment.entity.email;

  // Configure Nodemailer (Gmail example)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "colorfulworld2001@gmail.com",
      pass: "vvgb jikw grid qgqz" // generate from Gmail App Passwords
    }
  });

  // Email content
  let mailOptions = {
    from: "colorfulworld2001@gmail.com",
    to: customerEmail,
    subject: "Your Ebook Download Link",
    text: "Thank you for your purchase! Download your ebook here: https://drive.google.com/drive/folders/1MTgix5LxF1UxPaD8-_qXs2f0mNu-H5cw?usp=drive_link"
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent to:", customerEmail);
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Failed to send email" };
  }
}
