#!/bin/bash

# 🚀 Quick APK Build Script for "Open When... A Box of Us"
# This script automates the APK building process

set -e  # Exit on any error

echo "🌸 Building 'Open When... A Box of Us' Android APK 🌸"
echo "================================================="

# Check if we're in the frontend directory
if [ ! -f "capacitor.config.json" ]; then
    echo "❌ Error: Please run this script from the frontend directory"
    echo "📁 Expected to find capacitor.config.json in current directory"
    exit 1
fi

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
if command -v yarn &> /dev/null; then
    yarn install
else
    npm install
fi

# Step 2: Build web assets
echo "🔨 Building web assets..."
if command -v yarn &> /dev/null; then
    yarn build
else
    npm run build
fi

# Step 3: Sync with Capacitor
echo "🔄 Syncing Capacitor..."
npx cap sync android

# Step 4: Check for Android SDK
if [ -z "$ANDROID_HOME" ]; then
    echo "⚠️  Warning: ANDROID_HOME not set"
    echo "🔧 Please install Android Studio and set ANDROID_HOME environment variable"
    echo "📖 See BUILD_APK_GUIDE.md for detailed instructions"
fi

# Step 5: Build options
echo ""
echo "🏗️  Choose build option:"
echo "1) Open in Android Studio (recommended for first-time setup)"
echo "2) Build Debug APK via command line"
echo "3) Build Release APK via command line (requires keystore)"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🚀 Opening Android Studio..."
        npx cap open android
        echo "✅ Android Studio should now be open with your project"
        echo "📝 Follow the BUILD_APK_GUIDE.md for next steps"
        ;;
    2)
        echo "🔨 Building Debug APK..."
        cd android
        if ./gradlew assembleDebug; then
            echo "✅ Debug APK built successfully!"
            echo "📁 Location: android/app/build/outputs/apk/debug/app-debug.apk"
        else
            echo "❌ Build failed. Check the error messages above."
            exit 1
        fi
        ;;
    3)
        echo "🔨 Building Release APK..."
        echo "⚠️  Note: This requires a signing keystore"
        cd android
        if ./gradlew assembleRelease; then
            echo "✅ Release APK built successfully!"
            echo "📁 Location: android/app/build/outputs/apk/release/app-release-unsigned.apk"
            echo "🔐 Note: This APK is unsigned. Use Android Studio to sign it for distribution."
        else
            echo "❌ Build failed. Check the error messages above."
            exit 1
        fi
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Build process completed!"
echo "📖 For detailed testing checklist, see BUILD_APK_GUIDE.md"
echo "💌 Your romantic 'Open When...' app is ready for Android! 💌"