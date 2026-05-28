import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Keystone Schools</title>
        <meta name="description" content="Privacy Policy for Keystone Schools" />
      </Head>

      {/* Nav bar */}
      <header className="bg-secondary text-white py-4 px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Keystone Schools" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <p className="text-base font-bold text-primary tracking-wide">KEYSTONE</p>
            <p className="text-xs font-bold text-primary tracking-widest">SCHOOLS</p>
          </div>
        </Link>
        <Link href="/" className="text-sm text-gray-300 hover:text-primary transition">
          ← Back to Home
        </Link>
      </header>

      {/* Content */}
      <main className="w-full px-8 sm:px-16 lg:px-24 py-12">
        <h1 className="text-4xl font-bold text-secondary mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2025</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">1. Introduction</h2>
            <p>
              Keystone Schools ("we", "our", or "us") is committed to protecting the privacy of
              students, parents, guardians, and visitors who interact with our website and services.
              This Privacy Policy explains what information we collect, how we use it, and the steps
              we take to keep it safe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Personal identification information</strong> — full name, date of birth, gender, and national ID details of the student.</li>
              <li><strong>Parent or guardian details</strong> — name, email address, phone number, and relationship to the student.</li>
              <li><strong>Contact information</strong> — home address, city, and postal code.</li>
              <li><strong>Academic information</strong> — current school attended, previous results, and the form level applied for.</li>
              <li><strong>Technical data</strong> — IP address, browser type, and pages visited, collected automatically when you browse our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">The information we collect is used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Process and review student registration applications.</li>
              <li>Communicate with parents and guardians regarding admission status, school events, and important updates.</li>
              <li>Maintain accurate student records and academic files.</li>
              <li>Send newsletters and school announcements to those who have opted in.</li>
              <li>Improve our website and the quality of our services.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell, trade, or rent personal information to third parties. We may share
              information with trusted service providers who assist us in operating the school and
              website, provided they agree to keep this information confidential. We may also
              disclose information where required by law or to protect the safety of students
              and staff.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">5. Data Security</h2>
            <p>
              We implement appropriate administrative, technical, and physical security measures to
              protect your personal information against unauthorised access, alteration, disclosure,
              or destruction. All registration data submitted through our website is transmitted
              securely. However, no method of internet transmission is 100% secure and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">6. Retention of Data</h2>
            <p>
              We retain personal information for as long as necessary to fulfil the purposes
              outlined in this policy, or as required by applicable laws and regulations.
              Student records are kept for the duration of enrolment and for a reasonable period
              thereafter in accordance with educational record-keeping requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Access the personal information we hold about you or your child.</li>
              <li>Request correction of any inaccurate or incomplete information.</li>
              <li>Request deletion of personal data where it is no longer necessary.</li>
              <li>Withdraw consent for newsletters or marketing communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@keystoneschools.co.zw" className="text-primary hover:underline">
                info@keystoneschools.co.zw
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">8. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are small
              files stored on your device that help us understand how visitors use our site.
              You can choose to disable cookies through your browser settings, although this may
              affect certain features of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">9. Children's Privacy</h2>
            <p>
              We recognise the importance of protecting the privacy of children. Any personal
              information relating to students under the age of 18 is collected only with the
              knowledge and consent of a parent or guardian. We do not knowingly collect personal
              data from minors without parental authorisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. We will notify users of any significant changes by
              posting the updated policy on this page with a revised date. We encourage you to
              review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Keystone Schools</strong></p>
              <p>123 Education Boulevard, Harare, Zimbabwe</p>
              <p>Email: <a href="mailto:info@keystoneschools.co.zw" className="text-primary hover:underline">info@keystoneschools.co.zw</a></p>
              <p>Phone: +263 773 000 000</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Keystone Schools. All rights reserved.
      </footer>
    </>
  );
}
