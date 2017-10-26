/*

    Copyright © 2016-2017 Dominique Climent, Florian Dubath

    This file is part of Monnaie-Leman Wallet.

    Monnaie-Leman Wallet is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Monnaie-Leman Wallet is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Monnaie-Leman Wallet.  If not, see <http://www.gnu.org/licenses/>.

*/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    channel = require('cordova/channel');


var Keyboard = function() {
};

Keyboard.hideKeyboardAccessoryBar = function(hide) {
    exec(null, null, "Keyboard", "hideKeyboardAccessoryBar", [hide]);
};

Keyboard.close = function() {
    exec(null, null, "Keyboard", "close", []);
};

Keyboard.show = function() {
    exec(null, null, "Keyboard", "show", []);
};

Keyboard.disableScroll = function(disable) {
    exec(null, null, "Keyboard", "disableScroll", [disable]);
};

/*
Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
};
*/

Keyboard.isVisible = false;

channel.onCordovaReady.subscribe(function() {
    exec(success, null, 'Keyboard', 'init', []);

    function success(msg) {
        var action = msg.charAt(0);
        if ( action === 'S' ) {
            var keyboardHeight = msg.substr(1);
            cordova.plugins.Keyboard.isVisible = true;
            cordova.fireWindowEvent('native.keyboardshow', { 'keyboardHeight': + keyboardHeight });

            //deprecated
            cordova.fireWindowEvent('native.showkeyboard', { 'keyboardHeight': + keyboardHeight });
        } else if ( action === 'H' ) {
            cordova.plugins.Keyboard.isVisible = false;
            cordova.fireWindowEvent('native.keyboardhide');

            //deprecated
            cordova.fireWindowEvent('native.hidekeyboard');
        }
    }
});

module.exports = Keyboard;



