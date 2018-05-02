/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
<<<<<<< HEAD

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
=======
#import <React/RCTBundleURLProvider.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <React/RCTRootView.h>
#import <TwitterKit/TwitterKit.h>
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
<<<<<<< HEAD

=======
  
  
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"maskn"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

<<<<<<< HEAD
=======
  [[FBSDKApplicationDelegate sharedInstance] application:application
                           didFinishLaunchingWithOptions:launchOptions];

  
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}
<<<<<<< HEAD

=======
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  
  BOOL handled = [[FBSDKApplicationDelegate sharedInstance] application:application
                                                                openURL:url
                                                      sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey]
                                                             annotation:options[UIApplicationOpenURLOptionsAnnotationKey]
                  ] || [[Twitter sharedInstance] application:application openURL:url options:options];

  // Add any custom logic here.
  return handled;
}
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
@end
