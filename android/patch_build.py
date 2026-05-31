import os

def remove_cordova(path):
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

# Fix invalid AGP version in cordova plugins build.gradle
p = 'capacitor-cordova-android-plugins/build.gradle'
with open(p) as f:
    c = f.read()
c = c.replace('com.android.tools.build:gradle:8.13.0', 'com.android.tools.build:gradle:8.2.2')
c = c.replace('compileSdk = project.hasProperty', '// compileSdk = project.hasProperty')
c = c.replace('JavaVersion.VERSION_21', 'JavaVersion.VERSION_17')
c = c.replace("targetSdkVersion project.hasProperty('targetSdkVersion') ? rootProject.ext.targetSdkVersion : 36", "targetSdkVersion 34")
with open(p, 'w') as f:
    f.write(c)
print(f"Patched {p}")

# Create required flatDir directories
os.makedirs('capacitor-cordova-android-plugins/src/main/libs', exist_ok=True)
os.makedirs('capacitor-cordova-android-plugins/libs', exist_ok=True)

print("All patches applied")
