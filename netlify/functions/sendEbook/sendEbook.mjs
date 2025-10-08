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
  from: '"Focused Quotes" <colorfulworld2001@gmail.com>',
  to: customerEmail,
  subject: "📘 Your Ebook is Ready — Download Now!",
  html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #eee;">
    <div style="text-align: center;">
      <h2 style="color: #ff9800;">Thank You for Your Purchase! 🎉</h2>
      <p style="font-size: 16px; color: #555;">
        Your ebook is ready to download. Click the button below to get instant access.
      </p>
      <a href="https://drive.google.com/drive/folders/1MTgix5LxF1UxPaD8-_qXs2f0mNu-H5cw?usp=drive_link" 
         style="display: inline-block; background-color: #ff9800; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; margin-top: 20px;">
         📥 Download Your Ebook
      </a>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

    <p style="font-size: 14px; color: #777; text-align: center;">
      If you face any issues accessing your ebook, reply to this email and we’ll help you out.<br>
      <strong>— Team Focused Quotes</strong>
    </p>
  </div>
  `
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
