# Customizing the Player CSS

The Player user interface (UI) is created using HTML and CSS, whichs means that you can edit the UI according to your needs; for example, change the color of the scrubber, change the text font family, change the control icons, and much more.

This [Demo](https://codepen.io/odedhutzler/pen/wNwRbm?editors=1100) is an example of how you can customzie the UI using the CSS.

And here are some of the classes you can override:
![Here is some of the classes you can override](images/css-class-override.png)

> **Important!**
>
> * The namespace for the default skin must be `pakhshkit`.
> * The Player uses the same font family in **all** of its components. You can override it in the general parent class (`.pakhshkit-player-gui`) or customize each component according to your preferences.

## Player Classes List

Here's a list of the Player classes you can customize:

**Buttons**

| Class Name                             | Description                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| .`pakhshkit-pre-playback-play-button`    | The background of the play button, before the Player begins playing                                                         |
| `.pakhshkit-icon-play`                   | The Player icon, which is used in the bottom controllers and on the Player itself                                           |
| `.pakhshkit-icon-start-over`             | Start-over icon, shown at the end of the video                                                                              |
| `.pakhshkit-control-button`              | This is a class that's attached to all of the buttons in the control container, so a change here will affect **all** of the buttons. |
| `.pakhshkit-icon-pause`                  | Pause icon                                                                                                                  |
| `.pakhshkit-icon-pakhshkit-icon-rewind-10` | Rewind icon                                                                                                                 |
| `.pakhshkit-icon-volume-base`            | The left side of the volume icon                                                                                            |
| `.pakhshkit-icon-volume-waves`           | Shown when not on mute                                                                                                      |
| `.pakhshkit-icon-volume-mute`            | Shown when the Player is muted                                                                                              |
| `.pakhshkit-icon-language`               | Languages selection icon                                                                                                    |
| `.pakhshkit-icon-settings`               | Settings icon                                                                                                               |
| `.pakhshkit-icon-maximize`               | Maximize icon                                                                                                               |
| `.pakhshkit-icon-minimize`               | Minimize icon                                                                                                               |

**Volume and Seek Bar**

| Class Name                                                                    | Description                                                                                                                                |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `.pakhshkit-volume-control-bar`                                                 | Placeholder for the volume level, use `transform: rotate(90deg);` for a horizontal volume bar. See [Demo](https://codepen.io/odedhutzler/pen/wNwRbm?editors=1100) for usage example.                                                                                                        |
| `.pakhshkit-volume-control-bar .pakhshkit-bar`                                    | The level background                                                                                                                |
| `.pakhshkit-volume-control-bar .pakhshkit-progress`                               | Indicates the audio level                                                                                                                  |
| `.pakhshkit-seek-bar`                                                           | Placeholder for the Player seek bar                                                                                                        |
| `.pakhshkit-seek-bar .pakhshkit-progress-bar`                                     | Placeholder for the actual progress bar                                                                                                    |
| `.pakhshkit-seek-bar .pakhshkit-progress-bar .pakhshkit-progress`                   | Indicates the progress of the video/audio                                                                                                  |
| `.pakhshkit-seek-bar .pakhshkit-progress-bar .pakhshkit-progress .pakhshkit-scrubber` | Indicates the end of the progress bar. When hovering over the seek bar, it will indicate the current position of the mouse on the seek bar |
| `.pakhshkit-seek-bar .pakhshkit-progress-bar .pakhshkit-virtual-progress`           | When hovering and seeking to a future part of the media, this will show the progress until this point                                      |
| `.pakhshkit-seek-bar .pakhshkit-progress-bar .pakhshkit-time-preview`               | When hovering on the seek bar, this will show the current mouse position time                                                                |

**Overlays**

| Class Name                                   | Description                                                      |
| -------------------------------------------- | ---------------------------------------------------------------- |
| `.pakhshkit-bottom-bar`                        | Placeholder of all the bottom controllers                        |
| `.pakhshkit-overlay .pakhshkit-overlay-contents` | Overlays container, for advanced captions settings (for example) |
| `.pakhshkit-overlay .pakhshkit-error-overlay`    | Overlay that pops up when there's an error                      |

**Spinner**

| Class name         | Description                                                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `.pakhshkit-spinner` | The spinner implementation, which consists of several span child elements that you can remove using: `.pakhshkit-spinner span{ display: none;}` |
