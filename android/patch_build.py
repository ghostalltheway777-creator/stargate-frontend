import os

def remove_cordova(path, is_lines=False):
    with open(path) as f:
        content = f.read()
    content = content.replace('apply from: "../capacitor-cordova-android-plugins/cordova.variables.gradle"', '')
    lines = [l for l in content.splitlines(keepends=True) if 'capacitor-cordova-android-plugins' not in l]
    with open(path, 'w') as f:
        f.writelines(lines)
    print(f"Patched {path}")

remove_cordova('app/capacitor.build.gradle')
remove_cordova('app/build.gradle')
remove_cordova('settings.gradle')
print("All patches applied")
