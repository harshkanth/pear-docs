---
id: reload
title: Automatic Reload (Updated)
sidebar_label: Automatic Reload (Updated)
sidebar_position: 3
---

## Automatic Reload

To enable automatic reloading, perform the following steps:

1. Add the following lines to `app.js` :

    ```js
    Pear.updates(() => Pear.reload())
    ```

2. Run the app again using:

    ```js
    pear run --dev .
    ```

    Now Pear observes project files, and after they change, the app is automatically reloaded.

3. While keeping the `pear run --dev .` command running, open `index.html` in an editor.

4. Change `<h1>desktop</h1>` to `<h1>Hello world</h1>`.

The app should now show:

![Automatic reload](https://1301247912-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjdab83NqbLtX0WX9qY2n%2Fuploads%2Fgit-blob-a8cf55dd030d06447d748c7ab6991f055f5c9453%2Fchat-app-2.png?alt=media)

> Live reload with hot-module reloading is possible by using the `pear.watch` configuration and the [`pear.updates`](https://docs.pears.com/pear-runtime/api#pear.updates-listener-less-than-async-function-or-function-greater-than-greater-than-streamx.readabl) API. The [pear-hotmods](https://github.com/holepunchto/pear-hotmods) convenience module can also be used.
