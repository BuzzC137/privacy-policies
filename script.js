// Privacy policy content data
const policyData = {
    tornpanel: {
        title: "TornPanel Privacy Policy",
        content: `
            <div class="policy-section">
                <h2 class="section-title">Overview</h2>
                <p>TornPanel helps players manage faction chains, queues, alerts, dashboards, and related tools. This section explains how data is handled.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Torn API Usage</h2>
                <ul>
                    <li>We only use your Torn API key to fetch data from Torn</li>
                    <li>We never request or store your Torn account password</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Storage</h2>
                <ul>
                    <li>Your API key is stored locally in your browser</li>
                    <li>We do not store your API key on our servers</li>
                    <li>Stored locally in this browser. Not shared. You can revoke keys anytime in Torn</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Sharing</h2>
                <ul>
                    <li>Your API key is never shared with third parties</li>
                    <li>No personal data is sold or distributed</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Network Requests</h2>
                <p>When you perform actions such as queue updates, your username and action data may be sent to tornpanel.online and related subdomains to manage shared features.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Purpose of Use</h2>
                <p>Your data is used only for:</p>
                <ul>
                    <li>Faction management</li>
                    <li>Chain tracking</li>
                    <li>Dashboard features</li>
                    <li>Alerts and UI features</li>
                    <li>Analytics features tied to app functionality</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Key Access Level</h2>
                <p>Full Access API keys may be required for certain features. Users can review API usage inside Torn.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">User Control</h2>
                <p>You can remove your API key at any time by logging out, clearing local browser storage, or revoking the key in Torn.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Retention</h2>
                <p>We do not persist API keys. Operational logs may temporarily include usernames and request metadata for reliability, debugging, and abuse prevention.</p>
            </div>
        `
    },
    exonet: {
        title: "Exonet Privacy Policy",
        content: `
            <div class="policy-section">
                <h2 class="section-title">Overview</h2>
                <p>Exodus Network is an online game platform and interactive world experience. This section explains how data is handled within the game and related services.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data We Collect</h2>
                <ul>
                    <li>Basic account or session identifiers if applicable</li>
                    <li>Gameplay data such as location, actions, inventory, progression, and world interactions</li>
                    <li>Real-time interaction data needed for multiplayer systems and live services</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Storage</h2>
                <p>Game and session data may be stored on our servers to support persistent gameplay and platform functionality.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Sharing</h2>
                <p>We do not sell personal data to third parties.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Real-Time Systems</h2>
                <p>Game events may be transmitted between services such as the game server, API, and supporting web systems to power live features.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Purpose of Use</h2>
                <p>Data is used strictly to:</p>
                <ul>
                    <li>Run the game world</li>
                    <li>Maintain player state</li>
                    <li>Support progression and world interaction</li>
                    <li>Enable multiplayer and live systems</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Security</h2>
                <p>We take reasonable measures to protect game and session data.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">User Control</h2>
                <p>Users may delete all data in settings dashboard in game or contact us regarding data removal requests where applicable.</p>
            </div>
        `
    },
    'audiobook-hub': {
        title: "Audiobook Hub Privacy Policy",
        content: `
            <div class="policy-section">
                <h2 class="section-title">Overview</h2>
                <p>Audiobook Hub is a personal media application for managing and playing audiobook files.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data We Collect</h2>
                <ul>
                    <li>Local files the user chooses to load</li>
                    <li>Playback state such as position, speed, and preferences</li>
                    <li>Local library metadata as needed for app functionality</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Storage</h2>
                <p>All playback state, preferences, and library information are stored locally on the user's device unless explicitly stated otherwise.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Network Usage</h2>
                <p>If torrent-related features are used, data may be transferred peer-to-peer. We do not control third-party peers on torrent networks.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Data Sharing</h2>
                <p>We do not collect, sell, or share personal data for advertising or resale.</p>
            </div>

            <div class="policy-section">
                <h2 class="section-title">Purpose of Use</h2>
                <p>Data is used only to:</p>
                <ul>
                    <li>Play audiobooks</li>
                    <li>Save playback position</li>
                    <li>Manage the local library</li>
                    <li>Maintain user preferences</li>
                </ul>
            </div>

            <div class="policy-section">
                <h2 class="section-title">User Control</h2>
                <p>Users have full control over their files and can delete local data at any time.</p>
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

// DOM elements
const policyContent = document.getElementById('policy-content');
const projectPills = document.querySelectorAll('.project-pill');

// Initialize the application
function init() {
    // Load project from hash or default to tornpanel
    const hashProject = getProjectFromHash();
    loadPolicy(hashProject || 'tornpanel');
    
    // Set up event listeners
    setupEventListeners();
}

// Get project from URL hash
function getProjectFromHash() {
    const hash = window.location.hash.slice(1);
    return policyData[hash] ? hash : null;
}

// Load policy content for a specific project
function loadPolicy(projectId) {
    const policy = policyData[projectId];
    if (!policy) return;

    // Update active pill
    updateActivePill(projectId);
    
    // Update URL hash
    updateHash(projectId);
    
    // Update page title
    updatePageTitle(policy.title);
    
    // Load content with fade effect
    loadContentWithTransition(policy.content);
}

// Update active pill styling
function updateActivePill(projectId) {
    projectPills.forEach(pill => {
        if (pill.dataset.project === projectId) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
}

// Update URL hash
function updateHash(projectId) {
    if (window.history.pushState) {
        const newURL = window.location.pathname + '#' + projectId;
        window.history.pushState({ projectId }, '', newURL);
    }
}

// Update page title
function updatePageTitle(title) {
    document.title = `${title} - Lost Light Studios`;
}

// Load content with transition effect
function loadContentWithTransition(content) {
    // Fade out
    policyContent.style.opacity = '0';
    
    setTimeout(() => {
        policyContent.innerHTML = content;
        // Fade in
        policyContent.style.opacity = '1';
    }, 200);
}

// Set up event listeners
function setupEventListeners() {
    // Project pill clicks
    projectPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const projectId = pill.dataset.project;
            loadPolicy(projectId);
        });
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
        const projectId = event.state?.projectId || getProjectFromHash() || 'tornpanel';
        loadPolicy(projectId);
    });
    
    // Handle hash changes directly
    window.addEventListener('hashchange', () => {
        const projectId = getProjectFromHash() || 'tornpanel';
        loadPolicy(projectId);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
