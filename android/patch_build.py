import os

# Remove cordova apply from capacitor.build.gradle
path1 = 'app/capacitor.build.gradle'
with open(path1) as f:
    c = f.read()
c = c.replace('apply from: "../capacitor-cordova-android-plugins/cordova.variables.gradle"', '')
with open(path1, 'w') as f:
    f.write(c)

# Remove cordova project from settings.gradle
path2 = 'settings.gradle'
with open(path2) as f:
    lines = f.readlines()
lines = [l for l in lines if 'capacitor-cordova-android-plugins' not in l]
with open(path2, 'w') as f:
    f.writelines(lines)

print("Patched successfully")
