# 📱 Android APK Build Guide for "Open When... A Box of Us"

## 🎯 Prerequisites
Before building the APK, you'll need to install the following on your local machine:

### 1. Install Android Studio
- Download from: https://developer.android.com/studio
- Install with default settings
- Launch Android Studio and complete the setup wizard

### 2. Install Java Development Kit (JDK)
- Install JDK 11 or newer
- Android Studio usually includes this, but verify:
  ```bash
  java -version
  javac -version
  ```

### 3. Set Environment Variables
Add these to your system PATH:
```bash
# Add to ~/.bashrc, ~/.zshrc, or system environment
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 📦 Building the APK

### Step 1: Download the Project
1. Download/copy the entire `/app/frontend` folder to your local machine
2. Ensure all files are present, especially the `android/` directory

### Step 2: Install Dependencies
```bash
cd path/to/your/frontend/folder
npm install
# or
yarn install
```

### Step 3: Build the Web Assets
```bash
npm run build
# or
yarn build
```

### Step 4: Sync Capacitor
```bash
npx cap sync android
```

### Step 5: Open in Android Studio
```bash
npx cap open android
```
This opens the Android project in Android Studio.

### Step 6: Build APK in Android Studio

#### For Development/Testing (Debug APK):
1. In Android Studio, go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for build to complete
3. APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

#### For Production (Release APK):
1. Go to **Build** → **Generate Signed Bundle / APK**
2. Choose **APK**
3. Create a new keystore or use existing:
   - **Key store path**: Choose location for new keystore
   - **Password**: Create strong password
   - **Key alias**: `openwhen-key`
   - **Key password**: Create password
   - **Validity**: 25 years
   - **Certificate info**: Fill in your details
4. Choose **release** build variant
5. APK location: `android/app/build/outputs/apk/release/app-release.apk`

## 🔧 Alternative Command Line Build

If you prefer command line (after Android Studio setup):

### Debug APK:
```bash
cd android
./gradlew assembleDebug
```
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK (unsigned):
```bash
cd android
./gradlew assembleRelease
```
Output: `android/app/build/outputs/apk/release/app-release-unsigned.apk`

## 📱 Testing Checklist

### Installation Test:
- ✅ APK installs without errors
- ✅ App icon appears with correct name "Open When"
- ✅ No parsing errors during installation

### Launch Test:
- ✅ App opens without crashes
- ✅ Romantic background with lily imagery loads
- ✅ Navigation buttons (Letters/Moments) work
- ✅ Music toggle appears in top-right

### Core Features Test:
- ✅ Envelope grid displays all 20 letters
- ✅ Envelope opening animations work smoothly
- ✅ Letters open with correct content and "dev" signature
- ✅ Letter close button works
- ✅ Moments gallery displays poetic snippets
- ✅ Lily decorations appear throughout
- ✅ Background music toggle functions
- ✅ App works completely offline

### Device Compatibility:
- ✅ Test on Android 8+ (API level 26+)
- ✅ Test on different screen sizes
- ✅ Test app reopening from home screen
- ✅ Verify app remains stable after phone sleep/wake

## 🎨 App Icon Setup

To add a custom app icon:
1. Create icon files: 48x48, 72x72, 96x96, 144x144, 192x192 pixels
2. Name them: `ic_launcher.png`
3. Place in respective density folders:
   - `android/app/src/main/res/mipmap-mdpi/` (48x48)
   - `android/app/src/main/res/mipmap-hdpi/` (72x72)
   - `android/app/src/main/res/mipmap-xhdpi/` (96x96)
   - `android/app/src/main/res/mipmap-xxhdpi/` (144x144)
   - `android/app/src/main/res/mipmap-xxxhdpi/` (192x192)

## 🚀 Distribution

### For Personal Use:
- Use the signed release APK
- Share via file transfer, cloud storage, or messaging

### For Play Store (Future):
- Create Android App Bundle (.aab) instead of APK
- Use: `./gradlew bundleRelease`
- Follow Google Play Console publishing guidelines

## 🛠️ Troubleshooting

### Common Issues:

**Build Fails:**
- Ensure Java 11+ is installed
- Clean and rebuild: `./gradlew clean` then `./gradlew assembleRelease`
- Update Android Gradle Plugin if needed

**App Crashes on Launch:**
- Check Android Studio Logcat for errors
- Ensure all web assets are built correctly
- Verify capacitor.config.json is correct

**Music Not Playing:**
- Android requires user interaction for audio
- Test the music toggle manually after app opens

**White Screen on Launch:**
- Run `npx cap sync android` after any changes
- Ensure build folder contains all assets

## 📞 Support

If you encounter issues during the APK build process:
1. Check Android Studio's build console for specific errors
2. Ensure all prerequisites are properly installed
3. Try cleaning and rebuilding the project
4. Verify your local environment matches the requirements

The app is fully configured and ready for Android deployment! 🎉