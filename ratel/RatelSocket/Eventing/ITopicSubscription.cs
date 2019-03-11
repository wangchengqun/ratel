﻿// Copyright (c) Petabridge <https://petabridge.com/>. All rights reserved.
// Licensed under the Apache 2.0 license. See LICENSE file in the project root for full license information.
// See ThirdPartyNotices.txt for references to third party code used inside Helios.

using System;

namespace Helios.Eventing
{
    /// <summary>
    ///     A subscription object - exists primarily to make subscription callbacks
    ///     refactorable in the future
    /// </summary>
    public interface ITopicSubscription
    {
        void Invoke();

        void Invoke(object sender, EventArgs e);
    }
}