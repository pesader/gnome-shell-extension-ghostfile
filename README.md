# Ghostfile

This is a GNOME Shell extension that I created to help me debug a [contribution](https://github.com/pesader/gnome-shell-extension-ddterm/commit/12cd338a355d7a2b468d22d0c158c26f08b63483) to another extension. The only two things that this extension is supposed to do are:

1. Install a desktop file on the user's local applications directory (typically `$HOME/.local/share/applications/`) when it is enabled.
2. Remove that same desktop file when it is disabled

However, I can't get it working somehow. I followed the [GJS documentation](https://gjs.guide/guides/gio/file-operations.html#copying-and-moving-files) closely, but something is missing and I haven't been able to figure it out on my own. Its main file, `extension.js` has only 28 lines of code, and any help would be truly appreciated :)

# How to install

```bash
git clone https://github.com/pesader/gnome-shell-extension-ghostfile
cd gnome-shell-extension-ghostfile
gnome-extensions pack
gnome-extensions install ghostfile@pesader.github.com.shell-extension.zip
```

# How to debug

```bash
journalctl -f -o cat GNOME_SHELL_EXTENSION_UUID=ghostfile@pesader.github.com
```
