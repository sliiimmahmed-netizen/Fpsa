# FPSA Doc
Option A (no Android Studio): create a GitHub repo, upload this folder, open Actions > "Build APK" > Run workflow, then download the "FPSA-Doc-apk" artifact (app-debug.apk).
Option B (local, needs Node 18+, JDK 17, Android Studio): npm install && npm run android && cd android && ./gradlew assembleDebug
APK: android/app/build/outputs/apk/debug/app-debug.apk
Quick test without building: npm install && npm run prep, then open www/index.html in Chrome.
