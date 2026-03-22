export const welcomeEmailTemplate = (name) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <title>Welcome to Portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color:#f0f4f8;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
          style="max-width:560px;background-color:#ffffff;border-radius:20px;
          overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.08);">

          <!-- ── HEADER BANNER ── -->
          <tr>
            <td align="center"
              style="background: linear-gradient(135deg, #081b29 0%, #0f3460 100%);
              padding: 44px 40px 36px;">

              <!-- Glowing circle icon -->
              <div style="width:68px;height:68px;border-radius:50%;
                background:rgba(34,211,238,0.15);
                border:2px solid rgba(34,211,238,0.4);
                margin:0 auto 20px;
                display:flex;align-items:center;justify-content:center;
                font-size:30px;line-height:68px;text-align:center;">
                ⚡
              </div>

              <h1 style="margin:0;color:#ffffff;font-size:28px;
                font-weight:800;letter-spacing:-0.5px;line-height:1.2;">
                Welcome Aboard!
              </h1>
              <p style="margin:10px 0 0;color:#22d3ee;font-size:14px;
                letter-spacing:1px;text-transform:uppercase;font-weight:600;">
                Signup Successful ✓
              </p>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="padding:40px 40px 32px;">

              <!-- Greeting -->
              <p style="margin:0 0 8px;color:#64748b;font-size:13px;
                text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Hello,
              </p>
              <h2 style="margin:0 0 24px;color:#0f172a;font-size:24px;
                font-weight:800;letter-spacing:-0.5px;">
                ${name || "Developer"} 👋
              </h2>

              <p style="margin:0 0 20px;color:#475569;font-size:15px;
                line-height:1.8;">
                You've successfully created your account on
                <strong style="color:#0f172a;">My Portfolio</strong>.
                We're really excited to have you here!
              </p>

              <p style="margin:0 0 28px;color:#475569;font-size:15px;line-height:1.8;">
                Your account is all set up and ready to go. You can now log in
                and explore your personal dashboard.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom:32px;">
                    <a href="https://my-portfolio-two-iota-99.vercel.app/login"
                      style="display:inline-block;background:linear-gradient(135deg,#22d3ee,#0891b2);
                      color:#ffffff;font-size:15px;font-weight:700;
                      text-decoration:none;padding:14px 36px;
                      border-radius:100px;letter-spacing:0.3px;">
                      Go to Dashboard →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0 0 28px;"/>

              <!-- Thank you box -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background:#f8fafc;border-left:4px solid #22d3ee;
                    border-radius:0 12px 12px 0;padding:18px 20px;">
                    <p style="margin:0 0 6px;color:#0f172a;font-size:15px;
                      font-weight:700;">
                      🙏 Thank You!
                    </p>
                    <p style="margin:0;color:#64748b;font-size:14px;line-height:1.7;">
                      Thank you for joining. Your support means a lot.
                      I built this portfolio with passion — I hope you enjoy exploring it!
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── WHAT'S NEXT ── -->
          <tr>
            <td style="padding:0 40px 36px;">
              <p style="margin:0 0 16px;color:#94a3b8;font-size:12px;
                text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">
                What you can do now
              </p>

              <!-- Feature list -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;font-size:20px;vertical-align:middle;">📄</td>
                        <td>
                          <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">
                            Download Resume
                          </p>
                          <p style="margin:2px 0 0;color:#94a3b8;font-size:12px;">
                            Access my latest resume from the dashboard
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;font-size:20px;vertical-align:middle;">🚀</td>
                        <td>
                          <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">
                            Explore Projects
                          </p>
                          <p style="margin:2px 0 0;color:#94a3b8;font-size:12px;">
                            Browse live demos and source code
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:12px;font-size:20px;vertical-align:middle;">💬</td>
                        <td>
                          <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">
                            Get In Touch
                          </p>
                          <p style="margin:2px 0 0;color:#94a3b8;font-size:12px;">
                            Reach out for collaborations or opportunities
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center"
              style="background:#f8fafc;border-top:1px solid #e2e8f0;
              padding:24px 40px;border-radius:0 0 20px 20px;">

              <p style="margin:0 0 8px;color:#0f172a;font-size:14px;font-weight:700;">
                ⚡ My Portfolio
              </p>
              <p style="margin:0 0 14px;color:#94a3b8;font-size:12px;line-height:1.6;">
                This email was sent because you signed up on my portfolio website.
                <br/>If this wasn't you, please ignore this email.
              </p>

              <!-- Social links -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 6px;">
                    <a href="https://github.com/aksinghdev" style="color:#22d3ee;font-size:12px;
                      text-decoration:none;font-weight:600;">GitHub</a>
                  </td>
                  <td style="color:#e2e8f0;font-size:12px;">|</td>
                  <td style="padding:0 6px;">
                    <a href="www.linkedin.com/in/abhishek-kumar-singh-dos" style="color:#22d3ee;font-size:12px;
                      text-decoration:none;font-weight:600;">LinkedIn</a>
                  </td>
                  <td style="color:#e2e8f0;font-size:12px;">|</td>
                  <td style="padding:0 6px;">
                    <a href="https://my-portfolio-two-iota-99.vercel.app/" style="color:#22d3ee;font-size:12px;
                      text-decoration:none;font-weight:600;">Portfolio</a>
                  </td>
                </tr>
              </table>

              <p style="margin:14px 0 0;color:#cbd5e1;font-size:11px;">
                © 2024 My Portfolio · Made with ❤️ in India
              </p>
            </td>
          </tr>

        </table>
        <!-- End Card -->

      </td>
    </tr>
  </table>

</body>
</html>
  `;
};