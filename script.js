// =============================================================================
// PRODUCT CONFIGURATION
// To add a new product:
//   1. Add an entry to PRODUCTS below (key = data-project value in HTML)
//   2. Choose one of two content modes:
//      a) File-based: set _documentFiles with paths to .txt files in legal/<product>/
//      b) Inline: set content directly as an HTML string
//   3. Add a <button class="project-pill" data-project="<key>"> in index.html
// =============================================================================

const PRODUCTS = {

    // -------------------------------------------------------------------------
    // FILE-BASED PRODUCTS  (loads legal docs from /legal/<folder>/*.txt)
    // -------------------------------------------------------------------------

    'audiobook-hub': {
        title: "Audiobook Hub Legal Documents",
        _documentFiles: {
            tos:     'legal/audiobookhub/tos.txt',
            privacy: 'legal/audiobookhub/privacypolicy.txt',
            eula:    'legal/audiobookhub/eula.txt'
        }
    },

    exonet: {
        title: "Exonet.site Legal Documents",
        _documentFiles: {
            tos:     'legal/exonet/tos.txt',
            privacy: 'legal/exonet/privacypolicy.txt',
            eula:    'legal/exonet/eula.txt'
        }
    },

    // -------------------------------------------------------------------------
    // INLINE PRODUCTS  (content defined directly as HTML strings below)
    // -------------------------------------------------------------------------

    tornpanel: {
        title: "TornPanel Privacy Policy",
        content: `
            <div class="policy-section">
                <h2 class="section-title">1. Overview</h2>
                <p>TornPanel (tornpanel.online) is a browser-based toolkit for Torn players and faction officers. It provides faction dashboards, chain management, war tools, member tracking, organized crime coordination, and related utilities.</p>
                <p>This policy explains what data TornPanel collects, how it is used, and what rights you have. TornPanel is operated by Lost Light Studios.</p>
                <p>Last updated: April 2026</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">2. Torn API Usage</h2>
                <p>TornPanel uses the Torn API to fetch game data on your behalf. How this works:</p>
                <ul>
                    <li>You provide your Torn API key. TornPanel uses it to make requests to Torn's official API endpoints.</li>
                    <li>TornPanel never requests your Torn account password. Only API keys should be provided.</li>
                    <li>If you are asked for a password anywhere in TornPanel, do not enter it. That is not intended behavior.</li>
                    <li>API usage follows Torn's API Terms of Service and rate limiting requirements.</li>
                    <li>You control which API key you provide and at what access level.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">3. Torn API Compliance</h2>
                <p>The following table reflects how TornPanel handles Torn API data in accordance with Torn's API requirements.</p>
                <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:0.9em;">
                    <thead>
                        <tr style="border-bottom:1px solid #444;">
                            <th style="text-align:left;padding:8px 12px;color:#a1a1aa;">Category</th>
                            <th style="text-align:left;padding:8px 12px;color:#a1a1aa;">TornPanel Behavior</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #333;">
                            <td style="padding:8px 12px;font-weight:500;">Data Storage</td>
                            <td style="padding:8px 12px;">API keys and fetched game data are stored only locally in your browser unless a specific shared-faction feature explicitly requires temporary remote processing. No personal Torn data is centrally stored beyond what operational features require.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #333;">
                            <td style="padding:8px 12px;font-weight:500;">Data Sharing</td>
                            <td style="padding:8px 12px;">Your data is not shared with third parties for profit. Shared faction features (such as chain queues or coordinated alerts) may transmit limited operational data such as your Torn username and action metadata to TornPanel services so that faction members can coordinate. This is disclosed in this policy and within those features.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #333;">
                            <td style="padding:8px 12px;font-weight:500;">Purpose of Use</td>
                            <td style="padding:8px 12px;">Faction tools, dashboards, war analytics, chain management, member tracking, organized crime coordination, alerts, and app analytics tied to functionality. No advertising use.</td>
                        </tr>
                        <tr style="border-bottom:1px solid #333;">
                            <td style="padding:8px 12px;font-weight:500;">Key Storage and Sharing</td>
                            <td style="padding:8px 12px;">Your API key is stored locally in your browser. It is not shared with third parties. It is not stored on TornPanel servers. In features that involve automation or shared-faction queue actions, the key may be used locally to authorize requests but is never transmitted to TornPanel servers.</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 12px;font-weight:500;">Key Access Level</td>
                            <td style="padding:8px 12px;">Different features require different access levels. Minimal or Limited access keys are sufficient for read-only dashboards. Full access keys may be needed for features that perform actions on your behalf. Grant only the minimum access level required for the features you use. You can review and revoke keys in Torn at any time.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="policy-section">
                <h2 class="section-title">4. Data Storage</h2>
                <p>The following data is stored locally in your browser only:</p>
                <ul>
                    <li>Your Torn API key</li>
                    <li>Fetched Torn game data (cached for performance)</li>
                    <li>UI preferences and settings</li>
                    <li>Your analytics consent choice</li>
                </ul>
                <p>Certain features that involve shared faction coordination (such as queue management, alerts, or revive tracking) may send limited operational data to TornPanel servers or subdomains. This data may include your Torn username and action metadata. It is used only to enable those shared features and is not retained beyond what is needed for operational purposes.</p>
                <p>Operational server logs may temporarily include usernames, request metadata, and timestamps for reliability, debugging, and abuse prevention. These logs are not sold or shared.</p>
                <p>You can clear locally stored data at any time by logging out, clearing your browser's local storage, or revoking your API key in Torn.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">5. Data Sharing</h2>
                <ul>
                    <li>Your API key is never sold or shared with third parties.</li>
                    <li>No personal data is sold for advertising or marketing purposes.</li>
                    <li>Shared faction features (for example, chain queues or coordinated alerts) may make your Torn username and action data visible to other authorized faction participants using the same feature. This is the intended behavior of those collaboration tools.</li>
                    <li>Analytics tools (Firebase Analytics, Microsoft Clarity) may receive anonymized usage data in regions where you have consented to tracking. See Section 7 for details.</li>
                    <li>Error monitoring (Sentry) processes technical error data to support app stability.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">6. Network Requests and Shared Features</h2>
                <p>TornPanel communicates with the following external endpoints:</p>
                <ul>
                    <li><strong>api.torn.com</strong> - Torn's official API. Requests include your API key and are made directly from your browser.</li>
                    <li><strong>api.tornpanel.online</strong> - TornPanel's own API, used for shared faction features such as chain queues, revive coordination, and shared alerts. Requests to this endpoint may include your Torn username and action metadata. No API key is transmitted to this endpoint.</li>
                    <li><strong>Supabase (hosted database)</strong> - Used for certain shared faction features that require persistent state across faction members. Only the data necessary for those features is stored.</li>
                    <li><strong>Third-party analytics services</strong> - Firebase Analytics and Microsoft Clarity receive anonymized usage data in regions where consent has been given. See Section 7.</li>
                    <li><strong>Sentry</strong> - Receives error and crash data for stability monitoring. See Section 7.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">7. Cookies and Tracking Technologies</h2>
                <p>TornPanel uses the following tracking tools. In regions where consent is required (EU/EEA, UK, Switzerland, and unknown regions), Firebase Analytics and Microsoft Clarity are not activated until you accept the consent banner.</p>

                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Firebase Analytics (Google)</h3>
                <ul>
                    <li>Purpose: Understand how users navigate the app, which features are used, and how the app performs.</li>
                    <li>Data: Anonymized usage events, page views, session counts, general browser/device category. No personally identifying information is collected by TornPanel through this tool.</li>
                    <li>Consent gating: Not loaded before consent in strict regions.</li>
                    <li>Provider policy: <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">firebase.google.com/support/privacy</a></li>
                </ul>

                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Microsoft Clarity</h3>
                <ul>
                    <li>Purpose: Session recording and heatmaps to understand usability and identify UX issues.</li>
                    <li>Data: Mouse movements, clicks, scroll behavior, and general navigation patterns. Sensitive inputs such as API keys are masked.</li>
                    <li>Consent gating: Not loaded before consent in strict regions.</li>
                    <li>Provider policy: <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">privacy.microsoft.com</a></li>
                </ul>

                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Sentry</h3>
                <ul>
                    <li>Purpose: Error monitoring and crash reporting to maintain app stability. This tool is necessary for service reliability.</li>
                    <li>Data: JavaScript errors, stack traces, browser version, and general session context. No Torn game data or API keys are included in error reports.</li>
                    <li>Consent gating: Sentry remains active regardless of analytics consent as it is necessary for stability, not tracking.</li>
                    <li>Provider policy: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">sentry.io/privacy</a></li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">8. Third-Party Services</h2>
                <p>TornPanel relies on the following third-party services. Each operates under its own privacy policy and terms.</p>
                <ul>
                    <li><strong>Torn (torn.com)</strong> - Game data API. Your API key is used to make requests directly to Torn.</li>
                    <li><strong>Google Firebase</strong> - Analytics and performance monitoring.</li>
                    <li><strong>Microsoft Clarity</strong> - Session analytics and heatmaps.</li>
                    <li><strong>Sentry</strong> - Error and crash monitoring.</li>
                    <li><strong>Supabase</strong> - Database infrastructure for shared faction features.</li>
                    <li><strong>Vercel</strong> - Hosting and deployment infrastructure for tornpanel.online.</li>
                </ul>
                <p>TornPanel is not responsible for the data practices of these third-party providers.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">9. International Users</h2>
                <p>TornPanel serves users globally. If you are located in the EU, EEA, United Kingdom, or Switzerland, the following rights apply to you under GDPR, UK GDPR, or Swiss privacy law:</p>
                <ul>
                    <li><strong>Right of access</strong> - You may request information about what data is held about you.</li>
                    <li><strong>Right to deletion</strong> - You may request deletion of your data where it is held by TornPanel systems.</li>
                    <li><strong>Right to restriction</strong> - You may request that processing of your data be restricted.</li>
                    <li><strong>Right to object</strong> - You may object to processing based on legitimate interest.</li>
                    <li><strong>Right to withdraw consent</strong> - If you accepted analytics tracking, you can change your choice at any time using the Privacy Settings link in the app.</li>
                </ul>
                <p>For requests, contact: <a href="mailto:llsdevsteam@gmail.com" style="color:#6ee7b7;">llsdevsteam@gmail.com</a></p>
                <p>Because most data is stored locally in your browser, the most direct way to manage your data is to clear your browser's local storage or revoke your API key in Torn.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">10. California Privacy Rights (CCPA)</h2>
                <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act:</p>
                <ul>
                    <li><strong>Right to know</strong> - You may request disclosure of the categories and specific pieces of personal information collected about you.</li>
                    <li><strong>Right to delete</strong> - You may request deletion of personal information we have collected from you.</li>
                    <li><strong>Right to opt out</strong> - You may opt out of the sale of personal information. TornPanel does not sell personal information.</li>
                </ul>
                <p>To exercise these rights, contact: <a href="mailto:llsdevsteam@gmail.com" style="color:#6ee7b7;">llsdevsteam@gmail.com</a></p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">11. Consent and Tracking Control</h2>
                <p>Users in regions that require consent under GDPR, UK GDPR, Swiss privacy law, or equivalent legislation will see a consent banner on first visit. This includes all EU/EEA countries, the United Kingdom, Switzerland, and any region that cannot be determined.</p>
                <ul>
                    <li>If you accept, Firebase Analytics and Microsoft Clarity are initialized and will collect anonymized usage data.</li>
                    <li>If you decline, those tools are not loaded. Sentry remains active as it is necessary for app stability.</li>
                    <li>You can reopen your privacy settings and change your choice at any time using the Privacy Settings link displayed in the app.</li>
                    <li>Users in non-strict regions have analytics initialized by default, consistent with applicable law.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">12. User Control</h2>
                <p>You have the following controls available at any time:</p>
                <ul>
                    <li><strong>Revoke your API key</strong> - Log into Torn and revoke or rotate any API key you have provided to TornPanel. This immediately stops further API requests.</li>
                    <li><strong>Log out</strong> - Removes your session data from TornPanel.</li>
                    <li><strong>Clear local storage</strong> - Removes all locally stored data including your API key, cached Torn data, and preferences.</li>
                    <li><strong>Change analytics consent</strong> - Use the Privacy Settings link in the app to reopen the consent prompt and change your choice.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">13. Contact</h2>
                <p>For questions, data requests, or concerns about this policy:</p>
                <ul>
                    <li>Email: <a href="mailto:llsdevsteam@gmail.com" style="color:#6ee7b7;">llsdevsteam@gmail.com</a></li>
                    <li>Discord: <a href="https://discord.com/users/546372358902906910" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">discord.com/users/546372358902906910</a></li>
                </ul>
            </div>
        `
    },

    lostlight: {
        title: "Lost Light Privacy Policy",
        content: `
            <div class="policy-section">
                <h2 class="section-title">Overview</h2>
                <p>Lost Light is a dashboard and platform for managing game sessions, maps, live data, and connected services.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data We Collect</h2>
                <ul>
                    <li>Authentication data through supported providers such as Discord where applicable</li>
                    <li>Session data such as selected guild, preferences, and active UI state</li>
                    <li>Real-time event and player status data needed for live features</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Storage</h2>
                <p>Some data may be stored temporarily in databases, caches, or supporting systems to enable live dashboards and connected platform features.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Third-Party Services</h2>
                <p>This platform may rely on third-party infrastructure or authentication providers such as Discord and hosting providers.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Sharing</h2>
                <p>We do not sell user data. Data is used only as necessary to operate platform features and connected services.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Purpose of Use</h2>
                <p>Data is used to:</p>
                <ul>
                    <li>Provide dashboards and live tools</li>
                    <li>Sync game events</li>
                    <li>Maintain sessions and connected features</li>
                    <li>Improve platform usability</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">User Control</h2>
                <p>Users may disconnect integrations, self delete their data or contact us regarding data removal requests where applicable.</p>
            </div>
        `
    }

};

// =============================================================================
// Shared document-tab shell used by all file-based products.
// Produces the same tab chrome as Audiobook Hub — consistent across all
// products that load their docs from .txt files.
// =============================================================================
function buildDocumentShell() {
    return `
        <div class="policy-section">
            <h2 class="section-title">Legal Documents</h2>
            <p>Please select a document below to read the full text.</p>

            <div class="document-tabs">
                <button class="document-tab active" data-document="tos">Terms of Use</button>
                <button class="document-tab" data-document="privacy">Privacy Policy</button>
                <button class="document-tab" data-document="eula">EULA</button>
            </div>

            <div class="document-content" id="document-display">
                <!-- Document content loaded dynamically -->
            </div>
        </div>
    `;
}

// =============================================================================
// DOM REFERENCES
// =============================================================================
const policyContent = document.getElementById('policy-content');
const projectPills  = document.querySelectorAll('.project-pill');

let currentProject = 'tornpanel';

// =============================================================================
// INIT
// =============================================================================
function init() {
    const hashProject = getProjectFromHash();
    loadPolicy(hashProject || 'tornpanel');
    setupEventListeners();
}

// =============================================================================
// HASH HELPERS
// =============================================================================
function getProjectFromHash() {
    const hash = window.location.hash.slice(1);
    return PRODUCTS[hash] ? hash : null;
}

// =============================================================================
// POLICY LOADING
// =============================================================================
function loadPolicy(projectId) {
    const product = PRODUCTS[projectId];
    if (!product) return;

    currentProject = projectId;
    updateActivePill(projectId);
    updateHash(projectId);
    updatePageTitle(product.title);

    // File-based products get the shared document-tab shell.
    // Inline products use their own HTML content directly.
    const contentHTML = product._documentFiles
        ? buildDocumentShell()
        : product.content;

    loadContentWithTransition(contentHTML, product._documentFiles ? 'tos' : null);
}

function updateActivePill(projectId) {
    projectPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.project === projectId);
    });
}

function updateHash(projectId) {
    if (window.history.pushState) {
        window.history.pushState({ projectId }, '', window.location.pathname + '#' + projectId);
    }
}

function updatePageTitle(title) {
    document.title = `${title} - Lost Light Studios`;
}

// =============================================================================
// CONTENT TRANSITION
// =============================================================================
function loadContentWithTransition(html, defaultDocument) {
    policyContent.style.opacity = '0';

    setTimeout(() => {
        policyContent.innerHTML = html;
        policyContent.style.opacity = '1';
        setupDocumentTabs();

        // Auto-load the default tab for file-based products
        if (defaultDocument) {
            loadDocument(defaultDocument);
        }
    }, 200);
}

// =============================================================================
// DOCUMENT TABS
// =============================================================================
function setupDocumentTabs() {
    const tabs = document.querySelectorAll('.document-tab');
    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadDocument(tab.dataset.document);
        });
    });
}

// Fetches a legal document from its .txt file and renders it.
function loadDocument(documentType) {
    const display = document.getElementById('document-display');
    if (!display) return;

    const product = PRODUCTS[currentProject];
    if (!product || !product._documentFiles) return;

    const filePath = product._documentFiles[documentType];
    if (!filePath) return;

    // Show loading state
    display.style.opacity = '0';
    setTimeout(() => {
        display.innerHTML = '<p class="document-paragraph" style="color:#a1a1aa;">Loading document...</p>';
        display.style.opacity = '1';
    }, 150);

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error('Not found: ' + filePath);
            return response.text();
        })
        .then(text => {
            const html = formatDocumentText(text);
            display.style.opacity = '0';
            setTimeout(() => {
                display.innerHTML = html;
                display.style.opacity = '1';
            }, 150);
        })
        .catch(() => {
            display.style.opacity = '0';
            setTimeout(() => {
                display.innerHTML = '<p class="document-paragraph" style="color:#f87171;">Unable to load document. Please try again later.</p>';
                display.style.opacity = '1';
            }, 150);
        });
}

// =============================================================================
// TEXT FORMATTER
// Turns a plain-text legal document into styled HTML.
// =============================================================================
function formatDocumentText(text) {
    const sections = text.split(/\n\s*\n/);
    let html = '<div class="document-text">';

    sections.forEach(section => {
        const trimmed = section.trim();
        if (!trimmed) return;

        // Lines that start with a number+dot are treated as headings
        if (/^\d+\./.test(trimmed)) {
            html += `<h3 class="document-heading">${trimmed.replace(/\n/g, '<br>')}</h3>`;
        } else {
            html += `<p class="document-paragraph">${trimmed.replace(/\n/g, '<br>')}</p>`;
        }
    });

    html += '</div>';
    return html;
}

// =============================================================================
// EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
    projectPills.forEach(pill => {
        pill.addEventListener('click', () => loadPolicy(pill.dataset.project));
    });

    window.addEventListener('popstate', (event) => {
        const projectId = event.state?.projectId || getProjectFromHash() || 'tornpanel';
        loadPolicy(projectId);
    });

    window.addEventListener('hashchange', () => {
        const projectId = getProjectFromHash() || 'tornpanel';
        loadPolicy(projectId);
    });
}

// =============================================================================
// BOOTSTRAP
// =============================================================================
document.addEventListener('DOMContentLoaded', init);
