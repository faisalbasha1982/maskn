package com.maskn;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
=======
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.goldenowl.twittersignin.TwitterSigninPackage;
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

<<<<<<< HEAD
=======

>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
<<<<<<< HEAD
          new MainReactPackage()
=======
          new MainReactPackage(),
            new FBSDKPackage(),
            new TwitterSigninPackage()
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
