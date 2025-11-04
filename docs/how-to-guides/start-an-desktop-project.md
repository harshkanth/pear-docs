---
id: start-a-desktop-project
title: Start a Pear Desktop Project
sidebar_label: Start a Pear Desktop Project
sidebar_position: 1
---

# Star a Pear Desktop Project

This section shows how to generate, configure, and develop a Pear desktop project, in preparation for [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app).

Build with Pear - Episode 01: Developing with Pear

## Step 1. Initialization

Use `pear init` to create a new Pear project.

```
mkdir chat
cd chat
pear init --yes
```

This creates the base project structure.

* `package.json`. App configuration. Notice the `pear` property.
* `index.html`. App entrypoint.
* `app.js`. Main code.
* `test/index.test.js`. Test skeleton.

## Step 2. Verify Everything Works

Use `pear run` to verify everything works as expected.

```
pear run --dev .
```

> A directory or link needs to be specified with `pear run`, here `.` denotes the current Project directory.

The app should open in development mode. In this mode developer tools are also opened.

![Running pear run --dev .](https://1301247912-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjdab83NqbLtX0WX9qY2n%2Fuploads%2Fgit-blob-bb2ac638a4339d32c410b9f9d5b544e1484ae808%2Fchat-app-1.png?alt=media)

## Step 3. Automatic Reload

To enable automatic reloading, add the following lines to `app.js` :

```js
Pear.updates(() => Pear.reload())
```

Run the app again using:

```js
pear run --dev .
```

Now Pear watches project files. When they change, the app is automatically reloaded.

While keeping the `pear run --dev .` command running, open `index.html` in an editor.

Change `<h1>desktop</h1>` to `<h1>Hello world</h1>`.

The app should now show:

![Automatic reload](https://1301247912-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fjdab83NqbLtX0WX9qY2n%2Fuploads%2Fgit-blob-a8cf55dd030d06447d748c7ab6991f055f5c9453%2Fchat-app-2.png?alt=media)

> Live reload with hot-module reloading is possible by using the `pear.watch` configuration and the [`pear.updates`](https://docs.pears.com/pear-runtime/api#pear.updates-listener-less-than-async-function-or-function-greater-than-greater-than-streamx.readabl) API. The [pear-hotmods](https://github.com/holepunchto/pear-hotmods) convenience module can also be used.

## Step 4. Configuration

Application configuration is under the `pear` property in `package.json`

Open `package.json` and update it to:

```
{
  ...
  "pear": {
    "gui": {
      "height": 400,
      "width": 700
    }
  }
  ...
}
```

Close the app and re-run `pear run --dev .` to see the changes, the initial window size is different now.

See the [Configuration Documentation](https://docs.pears.com/pear-runtime/configuration) for all options.

## Next

* [Making a Pear Desktop Application](https://docs.pears.com/guides/making-a-pear-desktop-app)
