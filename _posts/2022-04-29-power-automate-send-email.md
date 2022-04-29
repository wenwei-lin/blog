---
layout: single
title:  "Automatically send event details to attendees—Power Automate"
categories: "Power Platform"
---

As a Microsoft Learn Student Ambassador, I have to send hundred of emails when marketing my events—after attendees finishing register form, before I start the event, and after I hosted the event. I try to ease my job and, thankfully, I found Power Automate.

## What is Power Automate ?

Power Automate is a trigger service, just like the trigger in database. It will be triggered by event, by schedule, or others, and then perform some action.

Power Automate integrate well with popular services, like Gmail, Outlook, and Microsoft Form. If provided service not satisfying your need, you can event create new connector.

## Power Automate + Microsoft Form =  ?

Power Automate can be trigger by each response from Microsoft Form. It's magic!

Imagine that you automatically trigger a series of effect after finishing the form, it's incredible right?

For marketing event, I can send attendees meeting link and detail information after they finishing the register form. When the event is ended, I can trigger a flow to send email to those attended. Really amazing!

## Update calender event

When using power automate to add attendee to the event, the only way to do it is to use *update event*. But this will cause side effect—every attendees will receive email (because the event has been updated).

Until now, there is no action to only add attendees, may be we can write an Azure Function to do it.

## Embed image when sending email

Use either url or base64. Get file content first form SharePoint or online storage like OneDrive first, and then use `dataUri()` get base64 string.

But I found that Gmail doesn't support data URI. Other email like Outlook, 163, and QQ support this feature.

[More details](https://docs.microsoft.com/en-us/troubleshoot/power-platform/power-automate/how-to-send-email-with-embedded-image)

## Embed calender event

just add .ics file as an attachment.