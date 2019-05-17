//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import { Notification, SharedConstants } from '@bfemulator/app-shared';

import * as NotificationActions from '../data/action/notificationActions';
import { store } from '../data/store';
import { getGlobal } from '../utils';
import { Command } from '@bfemulator/sdk-shared';

const Commands = SharedConstants.Commands.Notifications;

/** Registers notification commands */
export class NotificationCommands {
  // ---------------------------------------------------------------------------
  // Adds a notification from the main side to the store / notification manager
  @Command(Commands.Add)
  protected addNotificationFromMain(notification: Notification) {
    if (!notification) {
      notification = getGlobal(SharedConstants.NOTIFICATION_FROM_MAIN);
    }

    store.dispatch(NotificationActions.beginAdd(notification));
  }

  // ---------------------------------------------------------------------------
  // Removes a notification from the store / notification manager
  @Command(Commands.Remove)
  protected removeNotificationFromStore(id: string) {
    store.dispatch(NotificationActions.beginRemove(id));
  }
}
