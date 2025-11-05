[![HTML Lint](https://img.shields.io/github/actions/workflow/status/usecallmanagernz/usecallmanagernz.github.io/tidy.yml?branch=master&label=html%20lint)](https://github.com/usecallmanagernz/usecallmanagernz.github.io/actions/workflows/tidy.yml) [![Licence](https://img.shields.io/github/license/usecallmanagernz/usecallmanagernz.github.io?color=red)](LICENSE)

# USECALLMANAGER.nz Website

This repository contains the content needed for the website at
[usecallmanager.nz](https://usecallmanager.nz).

## Content Pages

Documentation for specific features or changes is located in the following
pages.

* **application-dial-rules.html**: Transformation patterns for received numbers.
* **as-feature-events.html)**: How to enable feature events for non-Cisco
  phones.
* **background-images.html**: How to specify a custom background image on the
  phone.
* **call-parking.html**: Example call parking configuration.
* **certificate-enrollment.html**: How to install and configure the Certificate
  Authentication Proxy Function (CAPF).
* **cgi-execute.html**: How to remotely execute features on the phone.
* **change-log.html**: Changes made for the patch to Asterisk version 22+.
* **command-line.html**: Additional information provided in the Asterisk CLI.
* **device-security.html**: How to set the initial list of certificates trusted
  by the phone.
* **dhcp-options.html**: Example `isc-dhcpd` configuration for assigning IP
  addresses to the phone.
* **dialplan-extensions.html**: Example additional dial-plan extensions needed
  to use phone features.
* **dial-template.html**: Number patterns that may be dialed from the phone.
* **documentation-overview.html**: Overview of all the documentation on the
  site.
* **feature-policy.html**: Alternative to soft keys for 9900 series phones.
* **freepbx-integration.html**: External documentation on how to use `FreePBX`
  with the patch.
* **http-provisioning.html**: Example `Apache` configuration for files that the
  phone downloads via HTTP.
* **line-keys.html**: How to specify what line keys appear on the phone.
* **load-information.html**: How to download new firmware for the phone.
* **network-locale.html**: How to download the network locale (inband network
  tones).
* **patching-asterisk.html**: How to apply the patch and build the Asterisk from
  source.
* **phone-services.html**: How to specify external service URLs.
* **ring-tones.html**: How to specify custom ring-tones for the phone.
* **rtp-streaming.html**: How to play audio on the phone outside of a call.
* **sepmac-cnf-xml.html**: Main configuration file for the phone.
* **sip-notify-commands.html**: Cisco-specific `sip notify` commands.
* **sip-peer-options.html**: Options added to the `SIPPEER` dialplan function.
* **soft-keys.html**: How to specify what soft keys appear on the phone.
* **tftp-provisioning.html**: Example `tftpd-hpa` configuration for files that
  the phone downloads via TFTP.
* **trust-verification**: How to install and configure the Trust Verification
  Service (TVS).
* **user-locale.html**: How to download the user locale (user interface
  language).
* **vpn-connection.html**: How to install and configure the VPN server
  `OpenConnect`.

## Redirect Pages

When a page is renamed a redirect page needs to be created so that external
links continue to work.

Use the following template when creating a redirect page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Redirect</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta http-equiv="Refresh" content="0; url=$NEW_PAGE_NAME.html">
    <link rel="canonical" href="$NEW_PAGE_NAME.html">
    <link rel="shortcut icon" href="images/logo.svg">
  </head>
  <body></body>
</html>
```

These are the current redirect pages:

| From                           | To                             |
| :---                           | :---                           |
| apache-conf.html               | http-provisioning.html         |
| app-dial-rules.html            | application-dial-rules.html    |
| cgi-execute-xml.html           | cgi-execute.html               |
| dhcpd-conf.html                | dhcp-options.html              |
| dial-templates-xml.html        | dial-template.html             |
| extensions-conf.html           | dialplan-extensions.html       |
| feature-policy-xml.html        | feature-policy.html            |
| image-list-xml.html            | background-images.html         |
| itl-file-tlv.html              | device-security.html           |
| line-keys-xml.html             | line-keys.html                 |
| phone-services-xml.html        | phone-services.html            |
| res-parking-conf.html          | call-parking.html              |
| ring-list-xml.html             | ring-tones.html                |
| sip-conf.html                  | sip-peers.html                 |
| sip-notify-conf.html           | sip-notify-commands.html       |
| sippeer-options.html           | sip-peer-options.html          |
| soft-keys-xml.html             | soft-keys.html                 |
| tftpd-conf.html                | tftp-provisioning.html         |
| vpn-group.html                 | vpn-connection.html            |
