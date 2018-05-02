package com.maskn;

import com.facebook.react.ReactActivity;
<<<<<<< HEAD

public class MainActivity extends ReactActivity {
=======
import com.facebook.CallbackManager;


public class MainActivity extends ReactActivity {
    CallbackManager mCallbackManager;
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "maskn";
    }
}
