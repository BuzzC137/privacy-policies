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
                <p>TornPanel (tornpanel.online) is a browser-based toolkit for Torn players and faction officers. It provides personal dashboards, faction member management, war payouts, chain tools, organized crime coordination, market intelligence, and related utilities. TornPanel is operated by Lost Light Studios.</p>
                <p>This policy explains what data TornPanel collects, where it is stored, who can access it, and what rights you have. It is updated whenever the app's data practices change.</p>
                <p>Last updated: April 2026</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">2. Torn API Usage</h2>
                <p>TornPanel uses the Torn API to fetch game data on your behalf. Key points:</p>
                <ul>
                    <li>You provide your Torn API key at login. TornPanel uses it to make read-only requests to Torn's official API.</li>
                    <li>TornPanel never requests your Torn password and performs no actions on your account.</li>
                    <li>Your key is stored only in your browser's localStorage and is never written to TornPanel servers.</li>
                    <li>API usage complies with Torn's API Terms of Service and rate limiting rules.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">3. Torn API Compliance Disclosure Tables</h2>
                <p>Torn's API Terms of Service require any service using the Torn API to clearly disclose how keys and data are handled. TornPanel operates under three distinct data-handling contexts. Each has its own disclosure table below.</p>

                <h3 style="margin-top:16px;margin-bottom:8px;font-size:1em;color:#d4d4d8;">3a — Base Application (all users)</h3>
                <p style="font-size:0.85em;color:#71717a;margin-bottom:8px;">Applies the moment you log in, before enabling any optional features.</p>
                <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85em;min-width:600px;">
                    <thead>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Storage</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Purpose of Use</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Storage &amp; Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Access Level</th>
                        </tr>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the data be stored for any purpose?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Who can access the data besides the end user?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What is the stored data being used for?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the API key be stored securely and who can access it?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What key access level or specific selections are required?</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Only locally — your browser's localStorage. Nothing is written to any server.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Nobody. No Torn data or API responses are shared with third parties.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Public community tools — personal dashboards, faction member views, war payouts, market intel, and analytics.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Stored locally / Not shared. The key is only transmitted to Torn's API and this app's read-only Supabase proxy. It is never logged or persisted on any server.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;">Full Access — required to read battle stats, attacks, faction data, and financial summaries. The app is strictly read-only.</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h3 style="margin-top:20px;margin-bottom:8px;font-size:1em;color:#d4d4d8;">3b — Opt-In Storage Features (leave requests, officer tools)</h3>
                <p style="font-size:0.85em;color:#71717a;margin-bottom:8px;">Applies only if you explicitly enable storage from the Settings page or when prompted.</p>
                <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85em;min-width:600px;">
                    <thead>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Storage</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Purpose of Use</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Storage &amp; Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Access Level</th>
                        </tr>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the data be stored for any purpose?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Who can access the data besides the end user?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What is the stored data being used for?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the API key be stored securely and who can access it?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What key access level or specific selections are required?</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Persistent — until account deletion or opt-out. Stored in Supabase (a third-party cloud database) on your explicit opt-in: your Torn user ID, display name, faction ID, leave requests, and activity log events.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Faction officers and co-leaders — leave requests and member status are visible to faction officers within the same faction. Service owners have read-only access for support and maintenance only.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Public community tools — coordinated faction leave management, officer visibility, and activity logging for faction management workflows.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Not stored. Your API key remains in your browser only. A short-lived session JWT (12-hour expiry) is issued server-side and stored in localStorage; it contains only identity claims, not the raw key.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;">Limited Access — faction member data and basic profile are required. Full Access is used for additional dashboard features.</td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <h3 style="margin-top:20px;margin-bottom:8px;font-size:1em;color:#d4d4d8;">3c — Discord Notifications — Faction Alerts <span style="display:inline-block;border:1px solid #92400e;background:#1c0d00;color:#f59e0b;font-size:0.8em;padding:1px 8px;border-radius:999px;vertical-align:middle;margin-left:6px;">Backend not yet deployed</span></h3>
                <p style="font-size:0.85em;color:#71717a;margin-bottom:8px;">Applies when you configure a Discord webhook in the Notifications panel. The backend delivery infrastructure is not yet live — no alerts are currently sent.</p>
                <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85em;min-width:600px;">
                    <thead>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Storage</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Data Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Purpose of Use</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Storage &amp; Sharing</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;font-weight:600;">Key Access Level</th>
                        </tr>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the data be stored for any purpose?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Who can access the data besides the end user?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What is the stored data being used for?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">Will the API key be stored securely and who can access it?</td>
                            <td style="padding:4px 10px 8px;color:#71717a;font-size:0.9em;font-style:italic;">What key access level or specific selections are required?</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Persistent — until you remove the webhook or delete your account. The Discord webhook URL is stored encrypted on the server. Alert preferences are stored locally in your browser. Torn-derived event data used to trigger alerts is not persisted beyond the delivery attempt.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Nobody directly. Faction alert messages are sent to the Discord channel you configure; visibility is governed by that channel's own permissions, which you control.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Public community tools / competitive advantage — automated alerts about faction chain status, OC activity, ranked war starts, and similar time-sensitive faction events.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;border-right:1px solid #27272a;">Stored remotely / Used only for automation. Your Torn API key is transmitted to a server-side edge function to query live event data for notification delivery. It is not persisted. The Discord webhook URL is stored server-side only and is never returned to or visible in the frontend.</td>
                            <td style="padding:10px;vertical-align:top;color:#d4d4d8;">Full Access — required to read chain timers, member status, and faction organized crime data used by active alerts.</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="policy-section">
                <h2 class="section-title">4. What We Collect and Why</h2>
                <p>Most data fetched from the Torn API is used to render your dashboard in-session and is discarded when you navigate away — it is not persisted. The following categories may be stored persistently if you opt into storage features:</p>
                <ul>
                    <li>Your Torn user ID, display name, and faction ID — needed to associate records with you.</li>
                    <li>Leave requests you submit — dates, reason, and status.</li>
                    <li>Activity log events generated when you change storage settings or take leave actions.</li>
                    <li>Personal stat snapshots — battle stats and networth history — for progression tracking.</li>
                    <li>Faction organized crime sync data — historical OC records for officer-level analytics.</li>
                </ul>
                <p><strong>What is never stored on our servers:</strong> your raw Torn API key, your Torn password, financial transaction data, private messages, or any data you have not explicitly opted into storing.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">5. Where Data Is Stored</h2>
                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Your browser (localStorage)</h3>
                <p>Your Torn API key, session JWT, notification preferences, analytics consent choice, and storage opt-in flag are held in your browser's localStorage. This data does not leave your device unless explicitly transmitted to Torn's API or TornPanel's Supabase proxy for the purpose of fetching data.</p>

                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Supabase (opt-in, cloud database)</h3>
                <p>If you enable storage features, certain records are written to <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">Supabase</a>, a third-party cloud database provider. TornPanel uses Supabase's row-level security so each user's data can only be read by that user and their faction's officers. Service-role access is limited to server-side edge functions and is not exposed to any user.</p>

                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Server-side encrypted storage (planned — notifications)</h3>
                <p>When Discord notification delivery is enabled, your webhook URL will be stored encrypted in a server-side secrets store. It will never be returned to or held in the frontend. This infrastructure is not yet deployed.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">6. Who Can Access Your Data</h2>
                <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85em;min-width:500px;">
                    <thead>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Data type</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">You</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Faction officers</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Service owners</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Third parties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">API key</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (browser only)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Session JWT</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (browser only)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Live Torn API data</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (in-session)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Leave requests</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (same faction)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Read-only for support</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Activity log events</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (same faction)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Read-only for support</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Personal stat snapshots</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Read-only for support</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">OC sync cache</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓ (officers)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✓</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Read-only for support</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Discord webhook URL</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗ (server-only)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Encrypted only</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Analytics (Firebase / Clarity)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Aggregate only</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Aggregate only</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Firebase / Microsoft</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Error data (Sentry)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">✗</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Error details only</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Sentry (Functional Software)</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <p style="margin-top:10px;">Human access by service owners is limited to support and maintenance only. We do not sell, rent, or share your data with advertisers or unrelated third parties.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">7. How Long Data Is Kept</h2>
                <ul>
                    <li><strong>API key and session JWT</strong> — held in your browser until you log out. Never retained server-side.</li>
                    <li><strong>Live API data</strong> — held in-memory for the current session only. Not persisted.</li>
                    <li><strong>Supabase opt-in records</strong> (user profile, leave requests, activity log) — retained until you request deletion.</li>
                    <li><strong>Personal stat snapshots</strong> — retained until you request deletion.</li>
                    <li><strong>Faction OC sync cache</strong> — retained for the faction until removed on request.</li>
                    <li><strong>Notification preferences</strong> — stored locally in your browser until you clear them or log out.</li>
                    <li><strong>Discord webhook URL (when deployed)</strong> — retained until you remove it or delete your account data.</li>
                    <li><strong>Analytics and error data</strong> — subject to retention policies of Firebase, Microsoft Clarity, and Sentry respectively.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">8. Requesting Deletion</h2>
                <p>You can delete all TornPanel-stored data at any time. Go to <strong>Settings → Danger Zone → Delete My Data</strong>. This will:</p>
                <ul>
                    <li>Delete your user profile row from Supabase.</li>
                    <li>Delete all leave requests associated with your user ID.</li>
                    <li>Delete your activity log events.</li>
                    <li>Delete personal stat snapshots tied to your user ID.</li>
                    <li>Clear your local storage opt-in flag.</li>
                </ul>
                <p>Deletion is verified server-side using your Torn API key. No other user can delete your data. After deletion, features that depend on stored data will not function until you opt in again.</p>
                <p>To request deletion of data not covered by the in-app tool, contact us via the details in Section 13.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">9. Third-Party Services</h2>
                <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;font-size:0.85em;min-width:500px;">
                    <thead>
                        <tr style="border-bottom:1px solid #3f3f46;background:#18181b;">
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Service</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Purpose</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">What it receives</th>
                            <th style="text-align:left;padding:8px 10px;color:#a1a1aa;">Consent gated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Torn API</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Data source</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Your API key (per request)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">No — required to use the app</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Supabase</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Cloud database</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Opted-in user / faction records</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Yes — opt-in required</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Firebase Analytics</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Usage analytics</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Anonymized page / feature events</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Yes — consent required in EU/EEA/UK/CH</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Microsoft Clarity</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Session behaviour analytics</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Page interactions (inputs masked)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Yes — consent required in EU/EEA/UK/CH</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Sentry</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Error monitoring</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">JavaScript error details</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">No — always active, no PII sent intentionally</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">FFScouter</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Fair-fight stats enrichment</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Torn player IDs (no API key)</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">No — used only for enrichment</td>
                        </tr>
                        <tr style="border-bottom:1px solid #27272a;">
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Discord</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Notification delivery</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Faction alert message content</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Yes — opt-in when webhook is configured</td>
                        </tr>
                        <tr>
                            <td style="padding:8px 10px;color:#d4d4d8;font-weight:500;">Vercel</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Hosting and deployment</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">Standard web request metadata</td>
                            <td style="padding:8px 10px;color:#a1a1aa;">No — infrastructure provider</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="policy-section">
                <h2 class="section-title">10. Discord Notifications</h2>
                <p>The Notifications panel lets you configure alerts for faction events (chain timer warnings, OC idleness, ranked war starts) delivered via Discord webhook.</p>
                <p><strong>Current state:</strong> Notification preferences are stored only in your browser. The backend delivery infrastructure is not yet live. No alerts are sent and no remote storage of webhook URLs is occurring. The in-app panel reflects this clearly.</p>
                <p><strong>When the backend is deployed:</strong></p>
                <ul>
                    <li>Your Discord webhook URL will be stored server-side, encrypted at rest, and will not be accessible from the frontend after submission.</li>
                    <li>Your Torn API key will be used server-side to query event data and will not be persisted.</li>
                    <li>Alert messages sent to your Discord channel will contain Torn-derived faction data visible to all members of that channel. You are responsible for configuring channel access appropriately.</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">11. Analytics and Monitoring</h2>
                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Firebase Analytics (consent-gated)</h3>
                <p>Used to understand aggregate feature usage. No Torn data, API keys, or personally identifiable information is intentionally included in these events. Disabled by default in EU/EEA/UK/CH regions until you consent. Toggle via <strong>Settings → Privacy &amp; Analytics</strong>.</p>
                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Microsoft Clarity (consent-gated)</h3>
                <p>Records session interactions to identify UX friction. Sensitive input fields are masked. Gated behind consent in protected regions and can be disabled in Settings.</p>
                <h3 style="margin-top:12px;font-size:1em;color:#d4d4d8;">Sentry (always active)</h3>
                <p>Captures unhandled JavaScript exceptions for stability monitoring. Not consent-gated because it is a reliability tool, not a tracking tool. API keys and Torn user data are not intentionally included in error payloads.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">12. Security</h2>
                <ul>
                    <li>Supabase row-level security restricts each user's data to that user and their faction's officers.</li>
                    <li>Session JWTs are short-lived (12 hours), signed with a server secret, and contain only identity claims — never raw API keys.</li>
                    <li>API keys are transmitted over HTTPS only and are never logged server-side.</li>
                    <li>Discord webhook URLs (when deployed) will be stored encrypted and never returned to the frontend.</li>
                    <li>The Supabase service role key is only available inside server-side edge functions and is not exposed to clients.</li>
                </ul>
                <p>No system is perfectly secure. We cannot guarantee absolute security of data in transit or at rest.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">13. Your Rights</h2>
                <ul>
                    <li><strong>Right to know</strong> — This policy and the disclosure tables above document what is collected and how it is used.</li>
                    <li><strong>Right to erasure</strong> — Delete all stored data via Settings → Danger Zone → Delete My Data.</li>
                    <li><strong>Right to object</strong> — Opt out of analytics at any time via Settings → Privacy &amp; Analytics. Opt out of Supabase storage via Settings → Storage.</li>
                    <li><strong>Right to complain</strong> — If you believe your data is being mishandled, you can report concerns to Torn staff: <a href="https://www.torn.com/profiles.php?XID=IceBlueFire" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">IceBlueFire</a> (Torn Script Moderation Officer) or <a href="https://www.torn.com/profiles.php?XID=Bogie" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">Bogie</a> (Torn Community Manager).</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">14. Changes to This Policy</h2>
                <p>We may update this policy when new features are added or existing data practices change. The date at the top reflects the most recent revision. Continued use of TornPanel after an update constitutes acceptance of the revised terms.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">15. Contact</h2>
                <p>For questions, data requests, or concerns about this policy:</p>
                <ul>
                    <li>Email: <a href="mailto:llsdevsteam@gmail.com" style="color:#6ee7b7;">llsdevsteam@gmail.com</a></li>
                    <li>Discord: <a href="https://discord.com/users/546372358902906910" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">discord.com/users/546372358902906910</a></li>
                    <li>Torn: <a href="https://www.torn.com/profiles.php?XID=3468036" target="_blank" rel="noopener noreferrer" style="color:#6ee7b7;">Torn Profile</a></li>
                </ul>
                <p style="color:#71717a;font-size:0.85em;">Lost Light Studios · tornpanel.online</p>
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
