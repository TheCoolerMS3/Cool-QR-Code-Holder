# Cool QR-Code Holder
A Cool QR Code Holder for Fitbit OS 5

## What is this?
It holds QR codes. You know, for coupons and stuff.

There are many apps on the Fitbit Gallery that do this too - but they often include baggage like:
* Relying on Companion API
* Relying on Internet API
* Relying on KeizelPay

These "anti-features" make the app take longer to load! And thus, this super lightweight app is born!

To use it, you must build configure it yourself with your QR code, app icon, and app name. You can also easily change your app's colours in the index.js.

## Tutorial
**File Structure**
* Put your 80x80 app icon in /resources/icon.png
* Put your QR code image in /resources/qr.png
* Configure an app name in /package.json
* Configure custom colours in /app/index.js

**Building**

Build and sideload your app using the SDK for your supported device. That would would usually look like this:

* Install Node 14: (Depends on your system, make sure you install 14 and not a newer version though)
* On the watch, enable "Developer Bridge" in Settings
* If on Versa 4 or Sense 2, edit "package.json" to make use of those devices' SDKs (If you're on a Sense or Versa 3, skip!)
* Install Node Modules: `node install`
* Launch the Fitbit CLI: `npx fitbit`
* Build and Install: `bi`

## Screenies
![image](Screenshot 2025-01-29 at 18.42.49.png)
![image](Screenshot 2025-01-29 at 18.29.14.png)
