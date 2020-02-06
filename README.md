# Helicopter Shark

How hard is it to create an automated misinformation detector? Let's find out!

## The goal

MVP: A fully fledged webapp that can detect whether an uploaded image is the infamous [Helicopter Shark](https://en.wikipedia.org/wiki/Helicopter_Shark) image:

![Helicopter shark](https://upload.wikimedia.org/wikipedia/en/8/84/Helicopter_Shark_Thumb.jpg)

After that, it is relatively trivial* to expand this to an app that all misinformation that has ever been distributed.

&ast; *Note: may not be that trivial*

## A rough timeline of goals

  1. Get a frontend up and running with mock interface, upload & calls
  2. An API that carries out the upload and mock calls
  3. Database of images
  4. Pipeline for running ML tasks on the images
  5. Update frontend to get actual result from pipeline output
  6. Generalise backend for other misinformation images
  7. Other stuff (mobile app?)

