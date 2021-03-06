/**
 * Copyright 2020, Sourcepole AG.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const SHOW_IFRAME_DIALOG = 'SHOW_IFRAME_DIALOG';
const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const CLOSE_WINDOW = 'CLOSE_WINDOW';
const CLOSE_ALL_WINDOWS = 'CLOSE_ALL_WINDOWS';


function showIframeDialog(name, url, options)
{
    return {
        type: SHOW_IFRAME_DIALOG,
        name: name,
        url: url,
        options: options
    };
}

function showNotification(name, text)
{
    return {
        type: SHOW_NOTIFICATION,
        name: name,
        text: text
    };
}

function closeWindow(name)
{
    return {
        type: CLOSE_WINDOW,
        name: name
    };
}

function closeAllWindows()
{
    return {
        type: CLOSE_ALL_WINDOWS
    };
}

module.exports = {
    SHOW_IFRAME_DIALOG,
    SHOW_NOTIFICATION,
    CLOSE_WINDOW,
    CLOSE_ALL_WINDOWS,
    showIframeDialog,
    showNotification,
    closeWindow,
    closeAllWindows
}
