export const policyContents = {
  ethereum: {
    title: 'Ethereum Gas Tracker Privacy Policy',
    lastUpdated: 'July 29, 2026',
    content: `
      <p><strong>Effective date:</strong> July 29, 2026</p>
      <p>Ethereum Gas Tracker provides gas-price information, alerts, watched-wallet activity, pending-transaction notifications, analytics, and optional premium features. This policy describes the information processed by the mobile application and its backend.</p>

      <h2>Information we process</h2>
      <ul>
        <li>An anonymous Firebase user identifier is used to associate preferences, alarms, watched wallets, devices, and premium access. The app does not require a name, email address, or phone number.</li>
        <li>A Firebase Cloud Messaging registration token and device platform are stored when notification access is granted. They are used only to deliver requested alerts and summaries.</li>
        <li>Wallet addresses, transaction hashes, optional wallet labels, alarm thresholds, and notification preferences are stored when a user enables the corresponding feature. Blockchain addresses and transactions are public on their respective networks.</li>
        <li>Feedback submitted through the app, together with the app version and platform, is stored so requests and problems can be reviewed.</li>
        <li>Premium entitlement state and related product/event identifiers are processed through RevenueCat when purchases are enabled. Payment card details are handled by Apple or Google and are not received by this application.</li>
        <li>Product interaction events and technical diagnostics may be processed through Firebase Analytics and Sentry to understand feature usage and diagnose failures. The app does not use this information for cross-app advertising tracking.</li>
      </ul>

      <h2>How information is used</h2>
      <p>Information is used to provide the app, authenticate anonymous sessions, calculate and deliver alerts, synchronize preferences, restore premium access, prevent abuse, diagnose reliability problems, and improve product behavior.</p>

      <h2>Service providers</h2>
      <p>The app relies on Firebase Authentication, Firebase Cloud Messaging, Firebase Analytics, Sentry, RevenueCat, MongoDB hosting, Etherscan, and public blockchain or fee-data providers. These providers process information under their own terms and privacy policies where applicable.</p>

      <h2>Retention and deletion</h2>
      <p>Operational records are retained while they are needed to provide enabled features and maintain service reliability. Permanently invalid notification tokens are removed automatically. A user can disable weekly summaries and individual monitoring features in the app.</p>
      <p>To request deletion of anonymous account data, use the in-app feedback form and include the request in the message. When an authenticated anonymous session is available, its Firebase user identifier is attached to the request by the backend so the related records can be located. An optional email can be supplied for follow-up. Do not include private keys or seed phrases.</p>

      <h2>Security</h2>
      <p>Data is transmitted over HTTPS. No system can guarantee absolute security, but access to backend data and service credentials is restricted and monitored.</p>

      <h2>Children</h2>
      <p>The app is not directed to children and does not knowingly request names, contact details, or other identifying profile information from children.</p>

      <h2>Changes and contact</h2>
      <p>This policy may be updated when product behavior or service providers change. The effective date above will be updated. Questions and deletion requests can be submitted through <strong>Settings → Feedback</strong> in the app.</p>
    `
  },
  biometric: {
    title: 'Biometric Password Protection Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Biometric Password Protection app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect, store, or transmit any personal information. All biometric data remains on your device and is managed by your device's operating system.</p>
      <h3>Security</h3>
      <p>Your passwords and biometric data are stored securely on your device using industry-standard encryption.</p>
    `
  },
  twas: {
    title: 'Twas Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Twas app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information from users of this application.</p>
    `
  },
  stickers: {
    title: 'Stickers for WhatsApp Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Stickers for WhatsApp app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information. All sticker data is stored locally on your device.</p>
    `
  },
  animals_stickers: {
    title: 'Happy Animals Sticker Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Happy Animals Sticker app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information. All sticker data is stored locally on your device.</p>
    `
  },
  decimal_converter: {
    title: 'Decimal Converter Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Decimal Converter app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information from users of this application.</p>
    `
  },
  motolorji_sticker: {
    title: 'Motolorji Sticker Packs Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the Motolorji Sticker Packs app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information. All sticker data is stored locally on your device.</p>
    `
  },
  pdf_viewer: {
    title: 'PDF Viewer Privacy Policy',
    content: `
      <h2>Privacy Policy</h2>
      <p>This privacy policy applies to the PDF Viewer app.</p>
      <h3>Information Collection and Use</h3>
      <p>We do not collect any personal information. All PDF files are stored and viewed locally on your device.</p>
    `
  }
};
