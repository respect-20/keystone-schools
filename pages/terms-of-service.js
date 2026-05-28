import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service — Keystone Schools</title>
        <meta name="description" content="Terms of Service for Keystone Schools" />
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
        <h1 className="text-4xl font-bold text-secondary mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2025</p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Keystone Schools website and submitting a registration
              application, you confirm that you have read, understood, and agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, please
              do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">2. Use of the Website</h2>
            <p className="mb-3">You agree to use this website only for lawful purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Submit false, misleading, or fraudulent information in any registration form.</li>
              <li>Attempt to gain unauthorised access to any part of the website or its systems.</li>
              <li>Use the website in any way that could damage, disable, or impair its functionality.</li>
              <li>Reproduce, copy, or distribute any content from this website without our written permission.</li>
              <li>Use the website to transmit spam, malware, or any harmful content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">3. Registration Applications</h2>
            <p>
              Submitting a registration application through our website does not guarantee
              admission to Keystone Schools. All applications are subject to review by our
              admissions team, availability of places, and the fulfilment of our entry
              requirements. We reserve the right to accept or decline any application at
              our discretion.
            </p>
            <p className="mt-3">
              Applicants are responsible for ensuring that all information submitted is accurate
              and complete. Providing false or misleading information may result in immediate
              disqualification of the application or termination of enrolment if discovered
              after admission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">4. Fees and Payments</h2>
            <p>
              School fees and any associated charges are communicated upon successful admission.
              Fees are subject to change and will be communicated to parents and guardians in
              advance. Non-payment of fees may result in suspension of a student's enrolment.
              All fees paid are non-refundable unless otherwise stated in writing by the school
              administration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">5. Student Code of Conduct</h2>
            <p>
              All enrolled students are expected to adhere to the Keystone Schools Code of
              Conduct. This includes respecting fellow students, staff, and school property,
              attending classes regularly, and upholding the values and reputation of the
              institution. Violations of the Code of Conduct may result in disciplinary action,
              including suspension or expulsion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, images, logos,
              graphics, and design elements, is the property of Keystone Schools and is
              protected by applicable intellectual property laws. Unauthorised use, reproduction,
              or distribution of any content is strictly prohibited without prior written consent
              from the school.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites for your convenience.
              These links do not imply endorsement by Keystone Schools, and we are not
              responsible for the content, privacy practices, or accuracy of information
              on any external websites. We encourage you to review the terms and privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">8. Limitation of Liability</h2>
            <p>
              Keystone Schools shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from your use of this website or our services,
              including but not limited to loss of data, interruption of service, or errors
              in information provided. The website is provided on an "as is" basis without
              warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">9. Privacy</h2>
            <p>
              Your use of our website and services is also governed by our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms of Service by reference. Please review
              the Privacy Policy to understand our practices regarding the collection and use
              of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">10. Modifications to Terms</h2>
            <p>
              Keystone Schools reserves the right to update or modify these Terms of Service
              at any time. Changes will be posted on this page with an updated effective date.
              Continued use of our website or services after any changes constitutes your
              acceptance of the revised terms. We recommend reviewing these terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws
              of Zimbabwe. Any disputes arising from the use of this website or our services
              shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">12. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please reach out to us:</p>
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
