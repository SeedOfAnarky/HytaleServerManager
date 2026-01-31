




# HytaleManager

A local server control panel for running and managing Hytale server instances on your machine.

<img width="1205" height="839" alt="Dashbord" src="https://github.com/user-attachments/assets/14389537-f0dd-4541-be4e-7f61a699bd59" />


## Overview

HytaleManager is a comprehensive web-based control panel that simplifies the process of hosting and managing Hytale servers locally. Built with Blazor Server, it provides an intuitive interface for server administration, mod management, and player moderation.

## Features

###  Server Management
- **Easy Start/Stop/Restart** - Control your server with one click
- **Real-time Status Monitoring** - View connected players, loaded plugins, and server state
- **Automatic Port Management** - Smart port binding with fallback support
- **Instance-based Architecture** - Run multiple server configurations

###  Authentication & Security
- **OAuth Device Flow** - Seamless Hytale account authentication
- **Persistent Sessions** - Encrypted credential storage
- **Offline Mode Support** - Test without authentication

###  Plugin & Mod Management
<img width="1788" height="1063" alt="integrated mod manager" src="https://github.com/user-attachments/assets/13dc5fe9-95f7-4312-a1c4-52d26aa996a6" />


- **Browse & Install** - Integrated CurseTools mod browser
- **One-Click Installation** - Install mods directly from the catalog
- **Enable/Disable Toggles** - Manage active mods without deletion
- **Automatic Updates** - Keep track of mod versions

###  Player Management
<img width="1254" height="649" alt="player" src="https://github.com/user-attachments/assets/3546d205-b3c7-4e41-8f05-430ee3df00f3" />


- **Active Player List** - See who's connected in real-time
- **Moderation Tools** - Kick or ban players directly from the UI
- **Whitelist Management** - Control server access

###  Direct Connect Hosting
- **Automatic Port Forwarding** - UPnP/NAT-PMP support for automatic setup
- **Public IP Detection** - Shows connection info for external players
- **Status Indicators** - Clear feedback on hosting availability

###  Logging & Console
- **Dual Log System** - Separate server logs and application logs
- **Interactive Console** - Send commands directly to the server
- **Server Auth Helper** - Guided authentication setup

###  Instance Management
- **Template System** - Create instances from versioned templates
- **Backup & Restore** - Protect your configurations
- **Easy Cleanup** - Safe instance deletion

## Installation

### Prerequisites
- Windows (Linux/Mac support planned)
- Java Runtime Environment (for Hytale server)
- .NET 8.0 Runtime

### Quick Start

1. **Download** the latest release from the [Releases](https://github.com/yourusername/HytaleManager/releases) page

2. **Extract** the archive to your preferred location

3. **Run** the launcher:
   ```bash
   run-web.bat
   ```

4. **Open** your browser to the URL shown in the console (typically `http://localhost:5000`)

## Usage

### First-Time Setup

1. **Configure Runtime Root**
   - Navigate to the Dashboard
   - Set your runtime root path (where templates/instances will be stored)
   - Click "Apply" and "Rescan"

2. **Create Your First Instance**
   - Go to System → Instance Manager
   - Select a template version
   - Enter an instance name
   - Click "Create Instance"

3. **Start Your Server**
   - Return to the Dashboard
   - Select your instance from the dropdown
   - Choose authentication mode (Offline for testing, Online for production)
   - Click "Start Server"

### Authentication Setup

When starting in Online mode for the first time:

1. The server will request authentication
2. Navigate to Management → Logs
3. Use the **Server Auth** panel to initiate device flow
4. Click "Open verification URL" to authenticate in your browser
5. Enter the provided code
6. HytaleManager will automatically enable encrypted persistence

### Installing Mods

1. Navigate to Configuration → Plugins & Mods
2. Click "Browse" tab
3. Search for mods or browse by category
4. Click "INSTALL" on any mod
5. Mods appear in the "Installed Mods" panel
6. Toggle mods on/off as needed

### Direct Connect Hosting

For external players to connect:

1. Start your server
2. Check the "Direct Connect" panel on the Dashboard
3. **If automatic port mapping succeeded**: Share the displayed address
4. **If port not opened**: 
   - Enable UPnP/NAT-PMP on your router, OR
   - Manually forward UDP port 5520 to your PC

**Note**: CGNAT networks may prevent direct hosting. A relay solution is planned for future releases.

## File Structure

```
HytaleManager/
├── runtime/
│   ├── templates/           # Server templates by version
│   │   └── <version>/
│   │       ├── Assets.zip
│   │       └── Server/
│   └── instances/          # Your server instances
│       └── <instance-name>/
│           ├── Assets.zip
│           └── Server/
├── run-web.bat            # Windows launcher
├── hytale-manager.out.log # Application output
└── hytale-manager.err.log # Error logs
```

## Configuration

### Authentication Modes

- **Offline** - No authentication required (local testing only)
- **Online (OAuth Device)** - Full Hytale account authentication

### Runtime Root

The runtime root directory structure:
- `runtime/templates/<version>/` - Base server installations
- `runtime/instances/<name>/` - Your editable server instances

## Troubleshooting

**Check Direct Connect status:**
- If "router port not opened" → Enable UPnP or manually forward UDP port
- If CGNAT suspected → Direct hosting requires relay (coming soon)

### "Keeps asking me to authenticate"

1. Run `/auth login device` from the console
2. Complete verification at the provided URL
3. Ensure `/auth persistence Encrypted` was applied
4. Restart server to verify persistence

### "Server crashed on startup with AuthMode.ONLINE"

Use "Online (OAuth Device)" authentication mode instead.

### "No server tokens configured"

1. Navigate to Management → Logs
2. Use the Server Auth panel
3. Click "Open verification URL"
4. Complete authentication in your browser
5. HytaleManager will automatically configure persistence

## Auto-Shutdown Behavior

**Important**: Closing the browser tab will trigger a graceful shutdown of both HytaleManager and your server. This is intentional to prevent orphaned processes.

To keep the server running:
- Keep at least one browser tab open to HytaleManager
- Or modify the auto-shutdown behavior in settings (if available)

## Known Limitations

- **CGNAT Networks** - Direct hosting may not work; relay support planned
- **Router Compatibility** - UPnP/NAT-PMP not available on all networks
- **Platform** - Currently Windows-only; cross-platform support planned

## Development

### Running from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/HytaleManager.git
cd HytaleManager

# Run the development launcher
run-web.bat
```

### Logs

Application logs are written to:
- `hytale-manager.out.log` - Standard output
- `hytale-manager.err.log` - Error output

## Roadmap

- [ ] Universal hosting via relay/tunnel (rathole/frp/playit.gg)
- [ ] Cross-platform support (Linux, macOS)
- [ ] Advanced scheduling and automation
- [ ] Web-based backup management
- [ ] Player statistics and analytics
- [ ] Discord integration
- [ ] Custom theme support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


- Built with [Blazor Server](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)
- Mod catalog powered by [CurseTools](https://curse.tools)
- Uses CFWidget for mod installation


**Note**: HytaleManager is an unofficial tool and is not affiliated with Hypixel Studios or Hytale.
