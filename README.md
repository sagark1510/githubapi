# Github User directory

### Steps to install

1. `$git clone git@github.com:sagark1510/githubapi.git`
2. `$cd githubapi`
3. `$npm install`
4. `$react-native run-ios`
5. `$react-native run-android`

### Not running on Android (troubleshoot):

npm package `react-native-oauth` is still using android `23.0.1` which is causing issue running app on android. We just need to twick `node_modules/react-native-oauth/android/build.gradle` and update line#17,18 respectively with `compileSdkVersion 26` and `buildToolsVersion "26.0.1"`.

There is pending merge for the same update, so this is only temporary fix while the PR gets merged.

### Packages used:

1. `react-native-elements`
2. `react-native-oauth`
3. `axios`
4. `react-native-vector-icons`
5. `react-navigation`
6. `redux`
7. `redux-saga`
8. `redux-persist`
