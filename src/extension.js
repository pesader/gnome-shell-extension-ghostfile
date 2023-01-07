const {Gio, GLib} = imports.gi;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

const APP_ID = 'com.github.pesader.ghostfile';

function init(meta) {
    log(`initializing ${meta.metadata.name}`);
}

function enable() {
    log(`enabling ${Me.metadata.name}`);

    const filename = `${APP_ID}.desktop`;
    const data_dir = GLib.get_user_data_dir();

    // Desktop file in the extension directory (source)
    source_path = GLib.build_filenamev([data_dir, 'gnome-shell', 'extensions', Me.metadata.uuid, filename])
    log(`Install from: ${source_path}`);
    const source = Gio.File.new_for_path(source_path);

    // Desktop file in the user's local applications directory (target)
    target_path = GLib.build_filenamev([data_dir, 'applications', filename])
    log(`Install to: ${target_path}`);
    const target = Gio.File.new_for_path(target_path);

    // Synchronous, for now. Baby steps.
    source.copy(target, Gio.FileCopyFlags.NONE, null, null);
}


function disable() {
    log(`disabling ${Me.metadata.name}`);

    const filename = `${APP_ID}.desktop`;
    const data_dir = GLib.get_user_data_dir();

    // Desktop file in the user's local applications directory
    path = GLib.build_filenamev([data_dir, 'applications', filename])
    log(`Uninstall from: ${path}`);
    const file = Gio.File.new_for_path(path);

    // Synchronous, for now. Baby steps.
    file.delete(null);
}
