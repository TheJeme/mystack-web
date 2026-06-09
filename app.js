const iconBase = "assets/icons/";
const customOptionId = "custom";

const categories = [
  {
    id: "browser",
    name: "Browser",
    subtitle: "Where you spend most of the web.",
    options: [
      app("chrome", "Chrome", "mainstream", "google-chrome.png"),
      app("safari", "Safari", "mainstream", "safari.png"),
      app("firefox", "Firefox", "mainstream", "firefox-browser.png"),
      app("edge", "Edge", "mainstream", "microsoft-edge.png"),
      app("brave", "Brave", "privacy", "brave.png"),
      app("zen", "Zen Browser", "indie", "zen-browser.png"),
      app("vivaldi", "Vivaldi", "indie", "vivaldi.png"),
      app("librewolf", "LibreWolf", "privacy", "librewolf.png"),
      app("tor", "Tor Browser", "privacy", "tor-browser.png")
    ]
  },
  {
    id: "phoneos",
    name: "Phone OS",
    subtitle: "The mobile base layer.",
    options: [
      app("ios", "iOS", "mainstream", "ios.png"),
      app("android", "Android", "mainstream", "android.png"),
      app("grapheneos", "GrapheneOS", "privacy", "grapheneos.png"),
      app("calyxos", "CalyxOS", "privacy", "calyxos.png"),
      app("lineageos", "LineageOS", "indie", "lineageos.png"),
      app("eos", "/e/OS", "privacy", "e-os.png")
    ]
  },
  {
    id: "desktopos",
    name: "Desktop OS",
    subtitle: "Your main computer operating system.",
    options: [
      app("windows", "Windows", "mainstream", "windows.png"),
      app("macos", "macOS", "mainstream", "macos.png"),
      app("kakkuos", "KakkuOS", "indie", "kakkuos.png"),
      app("ubuntu", "Ubuntu", "mainstream", "ubuntu.png"),
      app("fedora", "Fedora", "indie", "fedora.png"),
      app("debian", "Debian", "indie", "debian.png"),
      app("linuxmint", "Linux Mint", "indie", "linux-mint.png"),
      app("chromeos", "ChromeOS", "mainstream", "chromeos.png")
    ]
  },
  {
    id: "appstore",
    name: "App Store",
    subtitle: "Where you get apps from.",
    options: [
      app("appleappstore", "App Store", "mainstream", "app-store.png"),
      app("googleplay", "Google Play", "mainstream", "google-play.png"),
      app("fdroid", "F-Droid", "privacy", "f-droid.png"),
      app("aurorastore", "Aurora Store", "privacy", "aurora-store.png"),
      app("obtainium", "Obtainium", "privacy", "obtainium.png"),
      app("microsoftstore", "Microsoft Store", "mainstream", "microsoft-store.png"),
      app("flathub", "Flathub", "indie", "flathub.png")
    ]
  },
  {
    id: "ai",
    name: "AI Assistant",
    subtitle: "The assistant you reach for first.",
    options: [
      app("chatgpt", "ChatGPT", "mainstream", "chatgpt.png"),
      app("claude", "Claude", "mainstream", "claude.png"),
      app("gemini", "Gemini", "mainstream", "gemini.png"),
      app("copilot", "Copilot", "mainstream", "copilot.png"),
      app("perplexity", "Perplexity", "mainstream", "perplexity.png"),
      app("grok", "Grok", "mainstream", "grok.png"),
      app("mistral", "Le Chat", "indie", "mistral.png"),
      app("duckai", "Duck.ai", "privacy", "duckduckgo.png")
    ]
  },
  {
    id: "calendar",
    name: "Calendar",
    subtitle: "Scheduling and reminders.",
    options: [
      app("googlecalendar", "Google Calendar", "mainstream", "google-calendar.png"),
      app("applecalendar", "Apple Calendar", "mainstream", "apple-calendar.png"),
      app("outlookcalendar", "Outlook Calendar", "mainstream", "outlook.png"),
      app("protoncalendar", "Proton Calendar", "privacy", "proton-calendar.png"),
      app("tutacalendar", "Tuta Calendar", "privacy", "tuta.png"),
      app("nextcloudcalendar", "Nextcloud Calendar", "privacy", "nextcloud.png"),
      app("notioncalendar", "Notion Calendar", "indie", "notion.png")
    ]
  },
  {
    id: "mail",
    name: "Mail",
    subtitle: "Your primary inbox.",
    options: [
      app("gmail", "Gmail", "mainstream", "gmail.png"),
      app("applemail", "Apple Mail", "mainstream", "apple-mail.png"),
      app("outlookmail", "Outlook", "mainstream", "outlook.png"),
      app("protonmail", "Proton Mail", "privacy", "proton-mail.png"),
      app("tutamail", "Tuta Mail", "privacy", "tuta.png"),
      app("fastmail", "Fastmail", "indie", "fastmail.png"),
      app("hey", "HEY", "indie", "hey.png"),
      app("mailbox", "Mailbox.org", "privacy", "mailbox-org.png")
    ]
  },
  {
    id: "search",
    name: "Search",
    subtitle: "Default search engine.",
    options: [
      app("google", "Google", "mainstream", "google.png"),
      app("bing", "Bing", "mainstream", "bing.png"),
      app("duckduckgo", "DuckDuckGo", "privacy", "duckduckgo.png"),
      app("bravesearch", "Brave Search", "privacy", "brave.png"),
      app("startpage", "Startpage", "privacy", "startpage.png"),
      app("kagi", "Kagi", "indie", "kagi.png"),
      app("ecosia", "Ecosia", "indie", "ecosia.png"),
      app("mojeek", "Mojeek", "indie", "mojeek.png")
    ]
  },
  {
    id: "passwords",
    name: "Passwords",
    subtitle: "Logins and passkeys.",
    options: [
      app("1password", "1Password", "mainstream", "1password.png"),
      app("bitwarden", "Bitwarden", "privacy", "bitwarden.png"),
      app("applepasswords", "Apple Passwords", "mainstream", "apple-passwords.png"),
      app("googlepasswords", "Google Password Manager", "mainstream", "google-password-manager.png"),
      app("protonpass", "Proton Pass", "privacy", "proton-pass.png"),
      app("keepassxc", "KeePassXC", "privacy", "keepassxc.png"),
      app("dashlane", "Dashlane", "mainstream", "dashlane.png")
    ]
  },
  {
    id: "authenticator",
    name: "Authenticator",
    subtitle: "Two-factor codes and login approvals.",
    options: [
      app("googleauthenticator", "Google Authenticator", "mainstream", "google-authenticator.png"),
      app("microsoftauthenticator", "Microsoft Authenticator", "mainstream", "microsoft-authenticator.png"),
      app("authy", "Authy", "mainstream", "authy.png"),
      app("twofas", "2FAS", "privacy", "2fas.png"),
      app("aegis", "Aegis", "privacy", "aegis.png"),
      app("enteauth", "Ente Auth", "privacy", "ente-auth.png"),
      app("bitwardenauth", "Bitwarden Authenticator", "privacy", "bitwarden.png")
    ]
  },
  {
    id: "notes",
    name: "Notes",
    subtitle: "Capture and organize ideas.",
    options: [
      app("applenotes", "Apple Notes", "mainstream", "apple-notes.png"),
      app("googlekeep", "Google Keep", "mainstream", "google-keep.png"),
      app("notion", "Notion", "mainstream", "notion.png"),
      app("obsidian", "Obsidian", "indie", "obsidian.png"),
      app("joplin", "Joplin", "privacy", "joplin.png"),
      app("standardnotes", "Standard Notes", "privacy", "standard-notes.png"),
      app("evernote", "Evernote", "mainstream", "evernote.png")
    ]
  },
  {
    id: "photos",
    name: "Photos",
    subtitle: "Photo library and sharing.",
    options: [
      app("applephotos", "Apple Photos", "mainstream", "apple-photos.png"),
      app("googlephotos", "Google Photos", "mainstream", "google-photos.png"),
      app("entephotos", "Ente Photos", "privacy", "ente-photos.png"),
      app("immich", "Immich", "privacy", "immich.png"),
      app("flickr", "Flickr", "mainstream", "flickr.png"),
      app("lightroom", "Lightroom", "mainstream", "lightroom.png"),
      app("protonphotos", "Proton Drive Photos", "privacy", "proton-drive.png")
    ]
  },
  {
    id: "contacts",
    name: "Contacts",
    subtitle: "Address book and contact sync.",
    options: [
      app("googlecontacts", "Google Contacts", "mainstream", "google-contacts.png"),
      app("icloudcontacts", "iCloud Contacts", "mainstream", "icloud.png"),
      app("outlookpeople", "Outlook People", "mainstream", "outlook.png"),
      app("protoncontacts", "Proton Contacts", "privacy", "proton-mail.png"),
      app("nextcloudcontacts", "Nextcloud Contacts", "privacy", "nextcloud.png"),
      app("fastmailcontacts", "Fastmail Contacts", "indie", "fastmail.png")
    ]
  },
  {
    id: "tasks",
    name: "Tasks",
    subtitle: "To-dos, reminders, and planning.",
    options: [
      app("todoist", "Todoist", "mainstream", "todoist.png"),
      app("things", "Things", "indie", "things.png"),
      app("applereminders", "Apple Reminders", "mainstream", "apple-reminders.png"),
      app("microsofttodo", "Microsoft To Do", "mainstream", "microsoft-todo.png"),
      app("ticktick", "TickTick", "mainstream", "ticktick.png"),
      app("googletasks", "Google Tasks", "mainstream", "google-tasks.png"),
      app("vikunja", "Vikunja", "privacy", "vikunja.png")
    ]
  },
  {
    id: "maps",
    name: "Maps",
    subtitle: "Navigation and places.",
    options: [
      app("googlemaps", "Google Maps", "mainstream", "google-maps.png"),
      app("applemaps", "Apple Maps", "mainstream", "apple-maps.png"),
      app("waze", "Waze", "mainstream", "waze.png"),
      app("organicmaps", "Organic Maps", "privacy", "organic-maps.png"),
      app("osmand", "OsmAnd", "privacy", "osmand.png"),
      app("herewego", "HERE WeGo", "indie", "here-wego.png")
    ]
  },
  {
    id: "cloud",
    name: "Cloud Storage",
    subtitle: "Files and backups.",
    options: [
      app("googledrive", "Google Drive", "mainstream", "google-drive.png"),
      app("icloud", "iCloud Drive", "mainstream", "icloud.png"),
      app("onedrive", "OneDrive", "mainstream", "onedrive.png"),
      app("dropbox", "Dropbox", "mainstream", "dropbox.png"),
      app("protondrive", "Proton Drive", "privacy", "proton-drive.png"),
      app("nextcloud", "Nextcloud", "privacy", "nextcloud.png"),
      app("tresorit", "Tresorit", "privacy", "tresorit.png")
    ]
  },
  {
    id: "officesuite",
    name: "Office Suite",
    subtitle: "Docs, sheets, and presentations.",
    options: [
      app("microsoft365", "Microsoft 365", "mainstream", "microsoft-365.png"),
      app("googleworkspace", "Google Workspace", "mainstream", "google-workspace.png"),
      app("iwork", "Apple iWork", "mainstream", "iwork.png"),
      app("libreoffice", "LibreOffice", "privacy", "libreoffice.png"),
      app("onlyoffice", "OnlyOffice", "privacy", "onlyoffice.png"),
      app("cryptpad", "CryptPad", "privacy", "cryptpad.png"),
      app("zoho", "Zoho Workplace", "indie", "zoho.png")
    ]
  },
  {
    id: "messaging",
    name: "Messaging",
    subtitle: "Chat with people and groups.",
    options: [
      app("whatsapp", "WhatsApp", "mainstream", "whatsapp.png"),
      app("imessage", "iMessage", "mainstream", "imessage.png"),
      app("telegram", "Telegram", "mainstream", "telegram.png"),
      app("signal", "Signal", "privacy", "signal.png"),
      app("discord", "Discord", "mainstream", "discord.png"),
      app("element", "Element", "privacy", "element.png"),
      app("threema", "Threema", "privacy", "threema.png")
    ]
  },
  {
    id: "videocalls",
    name: "Video Calls",
    subtitle: "Meetings and face-to-face calls.",
    options: [
      app("zoom", "Zoom", "mainstream", "zoom.png"),
      app("googlemeet", "Google Meet", "mainstream", "google-meet.png"),
      app("facetime", "FaceTime", "mainstream", "facetime.png"),
      app("teams", "Microsoft Teams", "mainstream", "microsoft-teams.png"),
      app("jitsi", "Jitsi Meet", "privacy", "jitsi.png"),
      app("signalcalls", "Signal", "privacy", "signal.png"),
      app("whereby", "Whereby", "indie", "whereby.png")
    ]
  },
  {
    id: "music",
    name: "Music",
    subtitle: "Streaming, libraries, and discovery.",
    options: [
      app("spotify", "Spotify", "mainstream", "spotify.png"),
      app("applemusic", "Apple Music", "mainstream", "apple-music.png"),
      app("youtubemusic", "YouTube Music", "mainstream", "youtube-music.png"),
      app("tidal", "Tidal", "mainstream", "tidal.png"),
      app("deezer", "Deezer", "mainstream", "deezer.png"),
      app("bandcamp", "Bandcamp", "indie", "bandcamp.png"),
      app("qobuz", "Qobuz", "indie", "qobuz.png")
    ]
  },
  {
    id: "gaming",
    name: "Gaming",
    subtitle: "Games, stores, and play services.",
    options: [
      app("steam", "Steam", "mainstream", "steam.png"),
      app("epicgames", "Epic Games", "mainstream", "epic-games.png"),
      app("xbox", "Xbox", "mainstream", "xbox.png"),
      app("playstation", "PlayStation", "mainstream", "playstation.png"),
      app("nintendo", "Nintendo", "mainstream", "nintendo.png"),
      app("gog", "GOG", "indie", "gog.png"),
      app("itchio", "itch.io", "indie", "itch-io.png"),
      app("geforcenow", "GeForce Now", "mainstream", "geforce-now.png")
    ]
  },
  {
    id: "podcasts",
    name: "Podcasts",
    subtitle: "Shows, queues, and subscriptions.",
    options: [
      app("applepodcasts", "Apple Podcasts", "mainstream", "apple-podcasts.png"),
      app("spotifypodcasts", "Spotify", "mainstream", "spotify.png"),
      app("pocketcasts", "Pocket Casts", "mainstream", "pocket-casts.png"),
      app("overcast", "Overcast", "indie", "overcast.png"),
      app("antennapod", "AntennaPod", "privacy", "antennapod.png"),
      app("podcastaddict", "Podcast Addict", "mainstream", "podcast-addict.png"),
      app("castbox", "Castbox", "mainstream", "castbox.png")
    ]
  },
  {
    id: "rss",
    name: "RSS Reader",
    subtitle: "Feeds and independent reading.",
    options: [
      app("feedly", "Feedly", "mainstream", "feedly.png"),
      app("inoreader", "Inoreader", "mainstream", "inoreader.png"),
      app("netnewswire", "NetNewsWire", "indie", "netnewswire.png"),
      app("freshrss", "FreshRSS", "privacy", "freshrss.png"),
      app("readwise", "Readwise Reader", "mainstream", "readwise.png"),
      app("newsblur", "NewsBlur", "indie", "newsblur.png"),
      app("miniflux", "Miniflux", "privacy", "miniflux.png")
    ]
  },
  {
    id: "readlater",
    name: "Read Later",
    subtitle: "Save articles and links for later.",
    options: [
      app("pocket", "Pocket", "mainstream", "pocket.png"),
      app("instapaper", "Instapaper", "mainstream", "instapaper.png"),
      app("raindrop", "Raindrop", "mainstream", "raindrop.png"),
      app("omnivore", "Omnivore", "privacy", "omnivore.png"),
      app("wallabag", "Wallabag", "privacy", "wallabag.png"),
      app("linkwarden", "Linkwarden", "privacy", "linkwarden.png"),
      app("readwisereader", "Readwise Reader", "mainstream", "readwise.png")
    ]
  },
  {
    id: "backups",
    name: "Backups",
    subtitle: "Device and file recovery.",
    options: [
      app("timemachine", "Time Machine", "mainstream", "time-machine.png"),
      app("backblaze", "Backblaze", "mainstream", "backblaze.png"),
      app("arq", "Arq", "indie", "arq.png"),
      app("borgbackup", "BorgBackup", "privacy", "borgbackup.png"),
      app("restic", "Restic", "privacy", "restic.png"),
      app("duplicati", "Duplicati", "privacy", "duplicati.png"),
      app("syncthing", "Syncthing", "privacy", "syncthing.png")
    ]
  },
  {
    id: "vpn",
    name: "VPN / DNS",
    subtitle: "Network privacy and filtering.",
    options: [
      app("protonvpn", "Proton VPN", "privacy", "proton-vpn.png"),
      app("mullvad", "Mullvad", "privacy", "mullvad.png"),
      app("nordvpn", "NordVPN", "mainstream", "nordvpn.png"),
      app("ivpn", "IVPN", "privacy", "ivpn.png"),
      app("warp", "Cloudflare WARP", "mainstream", "cloudflare.png"),
      app("nextdns", "NextDNS", "privacy", "nextdns.png"),
      app("adguarddns", "AdGuard DNS", "privacy", "adguard.png")
    ]
  },
  {
    id: "dnsblocking",
    name: "DNS / Ad Blocking",
    subtitle: "Block ads, trackers, and unwanted domains.",
    options: [
      app("nextdnsblock", "NextDNS", "privacy", "nextdns.png"),
      app("adguarddnsblock", "AdGuard DNS", "privacy", "adguard.png"),
      app("pihole", "Pi-hole", "privacy", "pi-hole.png"),
      app("controld", "Control D", "privacy", "control-d.png"),
      app("cloudflaredns", "Cloudflare", "mainstream", "cloudflare.png"),
      app("quad9", "Quad9", "privacy", "quad9.png"),
      app("rethinkdns", "RethinkDNS", "privacy", "rethinkdns.png")
    ]
  },
  {
    id: "payments",
    name: "Payments",
    subtitle: "Wallets, transfers, and checkout.",
    options: [
      app("applepay", "Apple Pay", "mainstream", "apple-pay.png"),
      app("googlewallet", "Google Wallet", "mainstream", "google-wallet.png"),
      app("paypal", "PayPal", "mainstream", "paypal.png"),
      app("venmo", "Venmo", "mainstream", "venmo.png"),
      app("cashapp", "Cash App", "mainstream", "cash-app.png"),
      app("wise", "Wise", "mainstream", "wise.png"),
      app("revolut", "Revolut", "mainstream", "revolut.png")
    ]
  },
  {
    id: "social",
    name: "Social Network",
    subtitle: "Public posts and communities.",
    options: [
      app("instagram", "Instagram", "mainstream", "instagram.png"),
      app("x", "X", "mainstream", "x.png"),
      app("bluesky", "Bluesky", "mainstream", "bluesky.png"),
      app("mastodon", "Mastodon", "privacy", "mastodon.png"),
      app("threads", "Threads", "mainstream", "threads.png"),
      app("reddit", "Reddit", "mainstream", "reddit.png"),
      app("linkedin", "LinkedIn", "mainstream", "linkedin.png"),
      app("tiktok", "TikTok", "mainstream", "tiktok.png")
    ]
  },
  {
    id: "smarthome",
    name: "Smart Home",
    subtitle: "Home devices, automations, and controls.",
    options: [
      app("applehome", "Apple Home", "mainstream", "apple-home.png"),
      app("googlehome", "Google Home", "mainstream", "google-home.png"),
      app("alexa", "Alexa", "mainstream", "alexa.png"),
      app("homeassistant", "Home Assistant", "privacy", "home-assistant.png"),
      app("smartthings", "SmartThings", "mainstream", "smartthings.png"),
      app("philipshue", "Philips Hue", "mainstream", "philips-hue.png"),
      app("hubitat", "Hubitat", "indie", "hubitat.png")
    ]
  },
  {
    id: "translation",
    name: "Translation",
    subtitle: "Translate text, sites, and speech.",
    options: [
      app("googletranslate", "Google Translate", "mainstream", "google-translate.png"),
      app("deepl", "DeepL", "mainstream", "deepl.png"),
      app("appletranslate", "Apple Translate", "mainstream", "apple-translate.png"),
      app("microsofttranslator", "Microsoft Translator", "mainstream", "microsoft-translator.png"),
      app("linguee", "Linguee", "mainstream", "linguee.png"),
      app("reverso", "Reverso", "mainstream", "reverso.png"),
      app("libretranslate", "LibreTranslate", "privacy", "libretranslate.png")
    ]
  },
  {
    id: "domain",
    name: "Domain",
    subtitle: "Domains, DNS, and site ownership.",
    options: [
      app("cloudflaredomain", "Cloudflare", "mainstream", "cloudflare.png"),
      app("namecheap", "Namecheap", "mainstream", "namecheap.png"),
      app("porkbun", "Porkbun", "indie", "porkbun.png"),
      app("godaddy", "GoDaddy", "mainstream", "godaddy.png"),
      app("squarespace", "Squarespace", "mainstream", "squarespace.png"),
      app("hover", "Hover", "indie", "hover.png"),
      app("wordpress", "WordPress.com", "mainstream", "wordpress.png")
    ]
  },
  {
    id: "editor",
    name: "Editor",
    subtitle: "Where you write and edit code.",
    options: [
      app("vscode", "VS Code", "mainstream", "vs-code.png"),
      app("cursor", "Cursor", "mainstream", "cursor.png"),
      app("zed", "Zed", "indie", "zed.png"),
      app("neovim", "Neovim", "privacy", "neovim.png"),
      app("jetbrains", "JetBrains", "mainstream", "jetbrains.png"),
      app("sublimetext", "Sublime Text", "indie", "sublime-text.png"),
      app("vim", "Vim", "privacy", "vim.png")
    ]
  },
  {
    id: "terminal",
    name: "Terminal",
    subtitle: "Command line and shell environment.",
    options: [
      app("windowsterminal", "Windows Terminal", "mainstream", "windows-terminal.png"),
      app("iterm2", "iTerm2", "indie", "iterm2.png"),
      app("alacritty", "Alacritty", "privacy", "alacritty.png"),
      app("wezterm", "WezTerm", "privacy", "wezterm.png"),
      app("ghostty", "Ghostty", "indie", "ghostty.png"),
      app("warpterminal", "Warp", "mainstream", "warp.png"),
      app("kitty", "Kitty", "privacy", "kitty.png")
    ]
  },
  {
    id: "githosting",
    name: "Git Hosting",
    subtitle: "Repositories, pull requests, and issues.",
    options: [
      app("github", "GitHub", "mainstream", "github.png"),
      app("gitlab", "GitLab", "mainstream", "gitlab.png"),
      app("codeberg", "Codeberg", "privacy", "codeberg.png"),
      app("bitbucket", "Bitbucket", "mainstream", "bitbucket.png"),
      app("sourcehut", "SourceHut", "indie", "sourcehut.png"),
      app("gitea", "Gitea", "privacy", "gitea.png"),
      app("forgejo", "Forgejo", "privacy", "forgejo.png")
    ]
  }
];

function app(id, name, kind, icon) {
  return { id, name, kind, icon: `${iconBase}${icon}` };
}

const state = {
  selected: createEmptySelection(),
  custom: createEmptyCustomSelection()
};

const elements = {
  categoryList: document.querySelector("#categoryList"),
  selectedList: document.querySelector("#selectedList"),
  canvas: document.querySelector("#stackCanvas"),
  selectionCount: document.querySelector("#selectionCount"),
  selectionProgressBar: document.querySelector("#selectionProgressBar"),
  share: document.querySelector("#shareButton"),
  copyImage: document.querySelector("#copyImageButton"),
  reset: document.querySelector("#resetButton"),
  status: document.querySelector("#statusMessage")
};

const imageCache = new Map();

function getSelectedItems() {
  return categories.map((category) => ({
    category,
    option: getSelectedOption(category)
  })).filter(({ option }) => option);
}

function createEmptySelection() {
  return Object.fromEntries(categories.map((category) => [category.id, null]));
}

function createEmptyCustomSelection() {
  return Object.fromEntries(categories.map((category) => [category.id, null]));
}

function getSelectedOption(category) {
  const selectedId = state.selected[category.id];
  if (!selectedId) {
    return null;
  }
  if (selectedId === customOptionId) {
    return state.custom[category.id];
  }
  return category.options.find((option) => option.id === selectedId) || null;
}

function renderCategories() {
  elements.categoryList.innerHTML = categories.map((category) => {
    const customOption = state.custom[category.id];
    const options = customOption ? [...category.options, customOption] : category.options;

    return `
      <article class="category-block">
        <div>
          <h3 class="category-title">${escapeHtml(category.name)}</h3>
        </div>
        <div>
          <div class="option-grid" role="radiogroup" aria-label="${escapeHtml(category.name)}">
            ${options.map((option) => renderOption(category, option)).join("")}
          </div>
          <form class="custom-form" data-category="${category.id}">
            <input
              type="text"
              name="customName"
              maxlength="32"
              value="${escapeHtml(customOption?.name || "")}"
              placeholder="Custom app"
              aria-label="Custom ${escapeHtml(category.name)} app"
            >
            <button type="submit">Use</button>
          </form>
        </div>
      </article>
    `;
  }).join("");
}

function renderOption(category, option) {
  const selected = state.selected[category.id] === option.id;
  return `
    <button
      class="option-card ${selected ? "is-selected" : ""}"
      type="button"
      role="radio"
      aria-checked="${selected}"
      data-category="${category.id}"
      data-option="${option.id}"
    >
      ${renderIcon(option, "option-icon")}
      <span>
        <span class="option-name">${escapeHtml(option.name)}</span>
      </span>
    </button>
  `;
}

function renderSelectedList() {
  const selectedItems = getSelectedItems();
  const progress = Math.round((selectedItems.length / categories.length) * 100);
  elements.selectionCount.textContent = `${selectedItems.length} / ${categories.length} selected`;
  elements.selectionProgressBar.style.width = `${progress}%`;

  if (!selectedItems.length) {
    elements.selectedList.innerHTML = `<p class="empty-selection">Nothing selected yet.</p>`;
    return;
  }

  elements.selectedList.innerHTML = selectedItems.map(({ category, option }) => `
    <div class="selected-item">
      ${renderIcon(option, "selected-icon")}
      <span>
        <span class="selected-category">${escapeHtml(category.name)}</span>
        <span class="selected-name">${escapeHtml(option.name)}</span>
      </span>
    </div>
  `).join("");
}

async function renderCanvas() {
  const canvas = elements.canvas;
  const selectedItems = getSelectedItems();
  const poster = selectedItems.length > 18;
  const nextHeight = poster ? 1600 : 1200;
  if (canvas.width !== 1200) {
    canvas.width = 1200;
  }
  if (canvas.height !== nextHeight) {
    canvas.height = nextHeight;
  }
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f6f6f3";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#171717";
  ctx.font = "760 72px system-ui, sans-serif";
  ctx.fillText("MyStack", 78, 124);

  ctx.fillStyle = "#64645f";
  ctx.font = "600 26px system-ui, sans-serif";
  ctx.fillText("Personal digital stack", 82, 170);

  drawCanvasLink(ctx, width);

  if (!selectedItems.length) {
    ctx.fillStyle = "#ffffff";
    roundedRect(ctx, 78, 250, 1044, 560, 18);
    ctx.fill();

    ctx.strokeStyle = "#d9d9d2";
    ctx.lineWidth = 2;
    roundedRect(ctx, 78, 250, 1044, 560, 18);
    ctx.stroke();

    ctx.fillStyle = "#171717";
    ctx.font = "720 44px system-ui, sans-serif";
    ctx.fillText("No apps selected yet", 150, 492);

    ctx.fillStyle = "#64645f";
    ctx.font = "600 28px system-ui, sans-serif";
    ctx.fillText("Choose an app in any category to start.", 150, 548);

    return;
  }

  const contentY = 220;
  const contentHeight = height - 340;
  ctx.fillStyle = "#ffffff";
  roundedRect(ctx, 78, contentY, 1044, contentHeight, 18);
  ctx.fill();

  ctx.strokeStyle = "#d9d9d2";
  ctx.lineWidth = 2;
  roundedRect(ctx, 78, contentY, 1044, contentHeight, 18);
  ctx.stroke();

  const columns = poster ? 4 : 3;
  const rows = Math.ceil(selectedItems.length / columns);
  const gap = poster ? 10 : 14;
  const cardWidth = (1044 - gap * (columns + 1)) / columns;
  const cardHeight = (contentHeight - gap * (rows + 1)) / rows;
  const startX = 78 + gap;
  const startY = contentY + gap;
  const compact = poster;
  const iconSize = compact ? 36 : 58;
  const iconXOffset = compact ? 14 : 22;
  const iconYOffset = compact ? 18 : 28;
  const textXOffset = compact ? 60 : 94;
  const categorySize = compact ? 12 : 18;
  const nameSize = compact ? 19 : 28;

  for (let index = 0; index < selectedItems.length; index += 1) {
    const { category, option } = selectedItems[index];
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = startX + col * (cardWidth + gap);
    const y = startY + row * (cardHeight + gap);

    ctx.fillStyle = "#fbfbf8";
    roundedRect(ctx, x, y, cardWidth, cardHeight, 10);
    ctx.fill();

    ctx.strokeStyle = "#d9d9d2";
    ctx.lineWidth = 2;
    roundedRect(ctx, x, y, cardWidth, cardHeight, 10);
    ctx.stroke();

    await drawIcon(ctx, option, x + iconXOffset, y + iconYOffset, iconSize);

    ctx.fillStyle = "#64645f";
    ctx.font = `700 ${categorySize}px system-ui, sans-serif`;
    ctx.fillText(category.name.toUpperCase(), x + textXOffset, y + (compact ? 35 : 56));

    ctx.fillStyle = "#171717";
    ctx.font = `720 ${nameSize}px system-ui, sans-serif`;
    drawFittedText(ctx, option.name, x + textXOffset, y + (compact ? 63 : 96), cardWidth - textXOffset - 16, nameSize);
  }

}

async function drawIcon(ctx, option, x, y, size) {
  const img = option.icon ? await loadImage(option.icon) : null;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  roundedRect(ctx, x, y, size, size, 10);
  ctx.fill();

  if (img) {
    ctx.drawImage(img, x + 10, y + 10, size - 20, size - 20);
  } else {
    ctx.fillStyle = colorFromString(option.name);
    roundedRect(ctx, x + 10, y + 10, size - 20, size - 20, 10);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "720 24px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(option.name.slice(0, 1).toUpperCase(), x + size / 2, y + size / 2);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
  }

  ctx.restore();
}

function drawCanvasLink(ctx, width) {
  const text = "mystack.jeme.app";
  ctx.save();
  ctx.fillStyle = "#0d6b4f";
  ctx.font = "700 27px system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(text, width - 78, 124);
  ctx.restore();
}

function renderIcon(option, className) {
  if (option.icon) {
    return `<img class="${className}" src="${option.icon}" alt="" loading="lazy">`;
  }
  return `<span class="${className} custom-icon" aria-hidden="true">${escapeHtml(getInitials(option.name))}</span>`;
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "?";
}

function loadImage(src) {
  if (imageCache.has(src)) {
    return imageCache.get(src);
  }

  const promise = new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

function drawFittedText(ctx, text, x, y, maxWidth, baseSize) {
  let size = baseSize;
  const minSize = baseSize < 22 ? 11 : 18;
  while (ctx.measureText(text).width > maxWidth && size > minSize) {
    size -= 1;
    ctx.font = `720 ${size}px system-ui, sans-serif`;
  }
  ctx.fillText(text, x, y);
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function colorFromString(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = text.charCodeAt(index) + ((hash << 5) - hash);
  }
  const colors = ["#1e7a58", "#b6572b", "#2c6f9f", "#7f4c99", "#98752d"];
  return colors[Math.abs(hash) % colors.length];
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function normalizeCustomName(value) {
  return value.trim().replace(/\s+/g, " ").slice(0, 32);
}

function hydrateFromQueryParams() {
  const params = new URLSearchParams(window.location.search);

  categories.forEach((category) => {
    const value = params.get(category.id);
    if (!value) {
      return;
    }

    if (value.startsWith(`${customOptionId}:`)) {
      const customName = normalizeCustomName(value.slice(customOptionId.length + 1));
      if (!customName) {
        return;
      }

      state.custom[category.id] = {
        id: customOptionId,
        name: customName,
        kind: "custom",
        icon: null,
        isCustom: true
      };
      state.selected[category.id] = customOptionId;
      return;
    }

    if (category.options.some((option) => option.id === value)) {
      state.selected[category.id] = value;
    }
  });
}

function updateQueryParams() {
  const params = new URLSearchParams();

  categories.forEach((category) => {
    const selectedId = state.selected[category.id];
    if (!selectedId) {
      return;
    }

    if (selectedId === customOptionId) {
      const customName = state.custom[category.id]?.name;
      if (customName) {
        params.set(category.id, `${customOptionId}:${customName}`);
      }
      return;
    }

    params.set(category.id, selectedId);
  });

  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
  window.history.replaceState(null, "", nextUrl);
}

function update({ syncUrl = true } = {}) {
  renderCategories();
  renderSelectedList();
  renderCanvas();
  if (syncUrl) {
    updateQueryParams();
  }
}

function resetStack() {
  state.selected = createEmptySelection();
  state.custom = createEmptyCustomSelection();
  update();
  setStatus("Stack reset.");
}

function getShareUrl() {
  updateQueryParams();
  return window.location.href;
}

async function shareStack() {
  const url = getShareUrl();
  const shareData = {
    title: "MyStack",
    text: "My personal digital stack",
    url
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      setStatus("Share sheet opened.");
      return;
    }

    await copyText(url);
    setStatus("Share link copied.");
  } catch (error) {
    setStatus("Share cancelled or unavailable.");
  }
}

async function copyImage() {
  try {
    await renderCanvas();
    const blob = await canvasToBlob(elements.canvas);

    if (!navigator.clipboard || !window.ClipboardItem) {
      setStatus("Image copy is not supported in this browser.");
      return;
    }

    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob })
    ]);
    setStatus("Image copied.");
  } catch (error) {
    setStatus("Could not copy image.");
  }
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
        return;
      }
      reject(new Error("Canvas export failed"));
    }, "image/png");
  });
}

async function copyText(value) {
  if (!navigator.clipboard) {
    throw new Error("Clipboard unavailable");
  }
  await navigator.clipboard.writeText(value);
}

function setStatus(message) {
  elements.status.textContent = message;
  window.clearTimeout(setStatus.timeout);
  setStatus.timeout = window.setTimeout(() => {
    elements.status.textContent = "";
  }, 2600);
}

elements.categoryList.addEventListener("click", (event) => {
  const button = event.target.closest(".option-card");
  if (!button) {
    return;
  }

  const categoryId = button.dataset.category;
  const optionId = button.dataset.option;
  state.selected[categoryId] = state.selected[categoryId] === optionId ? null : optionId;
  update();
});

elements.categoryList.addEventListener("submit", (event) => {
  const form = event.target.closest(".custom-form");
  if (!form) {
    return;
  }

  event.preventDefault();
  const categoryId = form.dataset.category;
  const input = form.elements.customName;
  const customName = normalizeCustomName(input.value);
  if (!customName) {
    input.focus();
    return;
  }

  state.custom[categoryId] = {
    id: customOptionId,
    name: customName,
    kind: "custom",
    icon: null,
    isCustom: true
  };
  state.selected[categoryId] = customOptionId;
  update();
});

elements.share.addEventListener("click", shareStack);
elements.copyImage.addEventListener("click", copyImage);
elements.reset.addEventListener("click", resetStack);

hydrateFromQueryParams();
update({ syncUrl: false });
