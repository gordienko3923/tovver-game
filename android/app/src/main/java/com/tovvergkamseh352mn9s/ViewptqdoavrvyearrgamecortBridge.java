package com.tovvergkamseh352mn9s;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.Message;
import android.provider.MediaStore;
// import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.webkit.WebSettingsCompat;
import androidx.webkit.WebViewFeature;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.tovvergkamseh352mn9s.linkkit.AppLitqdoavrvyearrgamecnk;
import bolts.Continuation;
import bolts.Task;
import com.tovvergkamseh352mn9s.linkkit.WebViewAppLinkResolvetqdoavrvyearrgamecr;

public final class ViewptqdoavrvyearrgamecortBridge {
    // private static final String TAG = "ViewptqdoavrvyearrgamecortBridge";
    private static final String GOOGLE_USER_AGENT =
            "Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";

    /** High request codes to avoid clashing with React Native / Firebase. */
    private static final int REQUEST_WEBVIEW_PERMISSIONS = 9821;
    private static final int REQUEST_FILE_CHOOSER = 9822;
    private static final int REQUEST_CAMERA_FOR_CAPTURE = 9823;

    private static FrameLayout root;
    private static WebView webView;
    private static WebView popupWebView;
    private static TextView popupCloseButton;
    private static String popupInitialUrl;
    private static ProgressBar progress;
    private static OnBackPressedCallback backPressedCallback;
    private static boolean isInGoogleAuthFlow = false;
    private static boolean googleUserAgentApplied = false;
    private static String lastLoadedUrl;

    private static Activity hostActivity;
    private static PermissionRequest pendingPermissionRequest;
    private static ValueCallback<Uri[]> pendingFilePathCallback;
    private static Uri cameraImageUri;
    private static boolean pendingCaptureAfterCameraPermission;

    private ViewptqdoavrvyearrgamecortBridge() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
    }

    public static void ciqoduzeq(final Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        // WebView overlay is intentionally not closable from JS or system back.
    }

    public static boolean onActivityResult(int requestCode, int resultCode, Intent data) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (requestCode != REQUEST_FILE_CHOOSER) {
            return false;
        }

        ValueCallback<Uri[]> callback = pendingFilePathCallback;
        pendingFilePathCallback = null;

        if (callback == null) {
            cameraImageUri = null;
            return true;
        }

        Uri[] results = null;
        if (resultCode == Activity.RESULT_OK) {
            boolean hasPickerData = data != null
                    && (data.getData() != null || data.getClipData() != null);
            if (hasPickerData) {
                results = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
            } else if (cameraImageUri != null) {
                results = new Uri[]{cameraImageUri};
            }
        }

        cameraImageUri = null;
        callback.onReceiveValue(results);
        return true;
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (requestCode == REQUEST_WEBVIEW_PERMISSIONS) {
            PermissionRequest request = pendingPermissionRequest;
            pendingPermissionRequest = null;
            if (request == null) {
                return;
            }
            grantWebResourcesIfAllowedtqdoavrvyearrgamec(hostActivity, request);
            return;
        }

        if (requestCode == REQUEST_CAMERA_FOR_CAPTURE) {
            boolean granted = grantResults != null
                    && grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED;
            if (granted && pendingCaptureAfterCameraPermission && hostActivity != null) {
                pendingCaptureAfterCameraPermission = false;
                lautqdoavrvyearrgamecnchCameraCapture(hostActivity);
            } else {
                pendingCaptureAfterCameraPermission = false;
                ctqdoavrvyearrgamecancelPendingFileChooser();
            }
        }
    }

    private static boolean itqdoavrvyearrgamecsOverlayShowingSameUrl(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        return webView != null
                && root != null
                && lastLoadedUrl != null
                && lastLoadedUrl.equals(url);
    }

    private static boolean isHttpOrHtqdoavrvyearrgamecttps(Uri uri) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (uri == null) {
            return false;
        }
        String scheme = uri.getScheme();
        if (scheme == null) {
            return false;
        }
        String lower = scheme.toLowerCase();
        return "http".equals(lower) || "https".equals(lower);
    }

    public static void naguqunajug(final Activity activity, final String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        if (itqdoavrvyearrgamecsOverlayShowingSameUrl(url)) {
            // Log.d(TAG, "overlay already showing same url, skip naguqunajug");
            return;
        }

        final Uri destination = Uri.parse(url);

        // Landing/trusted http(s): do not AppLitqdoavrvyearrgamecnk-resolve (HttpURLConnection Dalvik UA + hidden WebView).
        // Open a single visible overlay WebView directly.
        if (isHttpOrHtqdoavrvyearrgamecttps(destination)) {
            // Log.d(TAG, "http(s) url, skip AppLitqdoavrvyearrgamecnk resolve -> open overlay directly");
            openNatitqdoavrvyearrgamecveWebView(activity, url);
            return;
        }

        final WebViewAppLinkResolvetqdoavrvyearrgamecr resolver = new WebViewAppLinkResolvetqdoavrvyearrgamecr(activity);

        resolver
                .getAppLinkFromUrtqdoavrvyearrgameclInBackground(destination)
                .continueWith(new Continuation<AppLitqdoavrvyearrgamecnk, Void>() {
                    @Override
                    public Void then(Task<AppLitqdoavrvyearrgamecnk> task) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

                      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
                      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                            
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                        if (task.isFaulted()) {
                            // Exception error = task.getError();
                            // Log.w(TAG, "resolve faulted, opening native webview: " + (error != null ? error.getMessage() : "unknown"));
                            openNatitqdoavrvyearrgamecveWebView(activity, url);
                            return null;
                        }

                        if (task.isCancelled()) {
                            // Log.w(TAG, "resolve cancelled, opening native webview");
                            openNatitqdoavrvyearrgamecveWebView(activity, url);
                            return null;
                        }

                        AppLitqdoavrvyearrgamecnk appLink = task.getResult();
                        if (openInstaltqdoavrvyearrgamecledTarget(activity, appLink)) {
                            // Log.d(TAG, "opened installed app target");
                        } else {
                            Uri fallback = appLink != null && appLink.gettqdoavrvyearrgamecWebUrl() != null ? appLink.gettqdoavrvyearrgamecWebUrl() : destination;
                            // Log.d(TAG, "opening native webview fallback: " + fallback);
                            openNatitqdoavrvyearrgamecveWebView(activity, fallback.toString());
                        }

                        return null;
                    }
                }, Task.UI_THREAD_EXECUTOR);
    }

    private static boolean openInstaltqdoavrvyearrgamecledTarget(Activity activity, AppLitqdoavrvyearrgamecnk appLink) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || appLink == null) {
            return false;
        }

        PackageManager packageManager = activity.getPackageManager();
        for (AppLitqdoavrvyearrgamecnk.Target target : appLink.gettqdoavrvyearrgamecTargets()) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(target.getUrltqdoavrvyearrgamec() != null ? target.getUrltqdoavrvyearrgamec() : appLink.getSoutqdoavrvyearrgamecrceUrl());

            if (target.safakisijeje() != null) {
                intent.setPackage(target.safakisijeje());
            }

            if (target.getCtqdoavrvyearrgameclassName() != null && target.safakisijeje() != null) {
                intent.setClassName(target.safakisijeje(), target.getCtqdoavrvyearrgameclassName());
            }

            ResolveInfo resolved = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolved != null) {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(intent);
                return true;
            }
        }

        return false;
    }

    private static void openNatitqdoavrvyearrgamecveWebView(final Activity activity, final String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        activity.runOnUiThread(new Runnable() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public void run() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (itqdoavrvyearrgamecsOverlayShowingSameUrl(url)) {
                    // Log.d(TAG, "overlay already showing same url, skip recreate");
                    return;
                }

                ctqdoavrvyearrgameclosePopupWebView();
                isInGoogleAuthFlow = false;
                googleUserAgentApplied = false;

                // Overlay already up (e.g. sendId append / concurrent navigate): reuse WebView.
                if (webView != null && root != null) {
                    // Log.d(TAG, "overlay already open, loadUrl without recreate");
                    lastLoadedUrl = url;
                    if (needsChromeUtqdoavrvyearrgameca(url)) {
                        applyGotqdoavrvyearrgamecogleUserAgent(webView);
                    }
                    webView.loadUrl(url);
                    return;
                }

                creatqdoavrvyearrgamecteNativeWebView(activity);
                lastLoadedUrl = url;
                if (needsChromeUtqdoavrvyearrgameca(url)) {
                    applyGotqdoavrvyearrgamecogleUserAgent(webView);
                }
                webView.loadUrl(url);
            }
        });
    }

    private static void creatqdoavrvyearrgamecteNativeWebView(final Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        hostActivity = activity;

        root = new FrameLayout(activity);
        root.setBackgroundColor(Color.BLACK);
        root.setFocusableInTouchMode(true);
        root.requestFocus();

        webView = new WebView(activity);
        webView.setBackgroundColor(Color.BLACK);
        configuretqdoavrvyearrgamecWebView(activity, webView);

        progress = new ProgressBar(activity, null, android.R.attr.progressBarStyleHorizontal);
        progress.setMax(100);
        progress.setProgress(0);

        FrameLayout.LayoutParams webViewParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        webViewParams.topMargin = dp(activity, 50);
        webViewParams.bottomMargin = dp(activity, 20);
        webViewParams.leftMargin = dp(activity, 5);
        webViewParams.rightMargin = dp(activity, 5);
        root.addView(webView, webViewParams);

        FrameLayout.LayoutParams progressParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                dp(activity, 3),
                Gravity.TOP
        );
        progressParams.topMargin = dp(activity, 20);
        progressParams.leftMargin = dp(activity, 5);
        progressParams.rightMargin = dp(activity, 5);
        root.addView(progress, progressParams);

        registertqdoavrvyearrgamecBackPressedHandler(activity);

        activity.addContentView(root, new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
    }

    private static void applyWebViewSettingstqdoavrvyearrgamec(WebView view, boolean useGoogleUserAgent) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        WebSettings settings = view.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);

        if (useGoogleUserAgent) {
            settings.setUserAgentString(GOOGLE_USER_AGENT);
        }

        // Google Pay Payment Request API is disabled in WebView by default.
        if (WebViewFeature.isFeatureSupported(WebViewFeature.PAYMENT_REQUEST)) {
            WebSettingsCompat.setPaymentRequestEnabled(settings, true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            CookieManager.getInstance().setAcceptThirdPartyCookies(view, true);
        }

        CookieManager.getInstance().setAcceptCookie(true);
    }

    private static void configuretqdoavrvyearrgamecWebView(final Activity activity, final WebView view) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        applyWebViewSettingstqdoavrvyearrgamec(view, false);
        view.setWebChromeClient(createWebChromeClietqdoavrvyearrgamecnt(activity));
        view.setWebViewClient(createWebViewClienttqdoavrvyearrgamec(activity));
    }

    private static WebChromeClient createWebChromeClietqdoavrvyearrgamecnt(final Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        return new WebChromeClient() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (progress == null) {
                    return;
                }

                progress.setProgress(newProgress);
                progress.setVisibility(newProgress >= 100 ? View.GONE : View.VISIBLE);
            }

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (request == null) {
                    return;
                }
                activity.runOnUiThread(new Runnable() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                        
                    @Override
                    public void run() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

                      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
                      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                        handlePermisstqdoavrvyearrgamecionRequest(activity, request);
                    }
                });
            }

            @Override
            public boolean onCreateWindow(
                    WebView view,
                    boolean isDialog,
                    boolean isUserGesture,
                    Message resultMsg
            ) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                // Log.d(TAG, "onCreateWindow isDialog=" + isDialog
                //         + " isUserGesture=" + isUserGesture
                //         + " resultMsg=" + (resultMsg != null));
                return createPopupWebtqdoavrvyearrgamecView(activity, resultMsg);
            }

            @Override
            public void onCloseWindow(WebView window) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (window == popupWebView) {
                    ctqdoavrvyearrgameclosePopupWebView();
                }
            }

            @Override
            public void onPermissionRequestCanceled(PermissionRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (pendingPermissionRequest == request) {
                    pendingPermissionRequest = null;
                }
            }

            @Override
            public boolean onShowFileChooser(
                    WebView webView,
                    ValueCallback<Uri[]> filePathCallback,
                    FileChooserParams fileChooserParams
            ) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (pendingFilePathCallback != null) {
                    pendingFilePathCallback.onReceiveValue(null);
                    pendingFilePathCallback = null;
                }

                pendingFilePathCallback = filePathCallback;
                cameraImageUri = null;
                pendingCaptureAfterCameraPermission = false;

                boolean capture = fileChooserParams != null && fileChooserParams.isCaptureEnabled();
                if (capture) {
                    if (htqdoavrvyearrgamecasPermission(activity, Manifest.permission.CAMERA)) {
                        return lautqdoavrvyearrgamecnchCameraCapture(activity);
                    }
                    pendingCaptureAfterCameraPermission = true;
                    ActivityCompat.requestPermissions(
                            activity,
                            new String[]{Manifest.permission.CAMERA},
                            REQUEST_CAMERA_FOR_CAPTURE
                    );
                    return true;
                }

                return launchFileCtqdoavrvyearrgamechooser(activity, fileChooserParams);
            }
        };
    }

    private static WebViewClient createWebViewClienttqdoavrvyearrgamec(final Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        return new WebViewClient() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                if (request.isForMainFrame() && needsChromeUtqdoavrvyearrgameca(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGotqdoavrvyearrgamecogleUserAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExternalIfNtqdoavrvyearrgameceeded(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (needsChromeUtqdoavrvyearrgameca(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGotqdoavrvyearrgamecogleUserAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExternalIfNtqdoavrvyearrgameceeded(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (istqdoavrvyearrgamecGoogleAuthFlowUrl(url)) {
                    isInGoogleAuthFlow = true;
                    // Log.d(TAG, "Google auth/pay flow detected: " + url);
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (googleUserAgentApplied && !istqdoavrvyearrgamecGoogleAuthFlowUrl(url) && !needsChromeUtqdoavrvyearrgameca(url)) {
                    // Log.d(TAG, "Google auth/pay seems finished -> restore default UA");
                    resttqdoavrvyearrgamecoreDefaultUserAgent(view, activity);
                }
            }
        };
    }

    private static boolean createPopupWebtqdoavrvyearrgamecView(final Activity activity, Message resultMsg) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || root == null
                || resultMsg == null || !(resultMsg.obj instanceof WebView.WebViewTransport)) {
            // Log.w(TAG, "onCreateWindow aborted: missing activity/root/transport");
            return false;
        }

        ctqdoavrvyearrgameclosePopupWebView();

        final WebView popup = new WebView(activity);
        popup.setBackgroundColor(Color.WHITE);
        applyWebViewSettingstqdoavrvyearrgamec(popup, true);

        popup.setWebChromeClient(new WebChromeClient() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public void onCloseWindow(WebView window) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                ctqdoavrvyearrgameclosePopupWebView();
            }
        });

        popup.setWebViewClient(new WebViewClient() {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                return shouldOverridePopupUtqdoavrvyearrgamecrl(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                return shouldOverridePopupUtqdoavrvyearrgamecrl(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (popupInitialUrl == null && url != null && url.length() > 0
                        && !url.equals("about:blank")) {
                    popupInitialUrl = url;
                }
                maybeHatqdoavrvyearrgamecndOffMerchantReturnUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                maybeHatqdoavrvyearrgamecndOffMerchantReturnUrl(url);
            }
        });

        FrameLayout.LayoutParams popupParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        popupParams.topMargin = dp(activity, 50);
        popupParams.bottomMargin = dp(activity, 20);
        popupParams.leftMargin = dp(activity, 5);
        popupParams.rightMargin = dp(activity, 5);
        root.addView(popup, popupParams);
        popupWebView = popup;

        popupCloseButton = new TextView(activity);
        popupCloseButton.setText("Close");
        popupCloseButton.setTextColor(Color.WHITE);
        popupCloseButton.setTypeface(Typeface.DEFAULT_BOLD);
        popupCloseButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        popupCloseButton.setPadding(dp(activity, 12), dp(activity, 8), dp(activity, 12), dp(activity, 8));
        popupCloseButton.setOnClickListener(new View.OnClickListener() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public void onClick(View v) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                ctqdoavrvyearrgameclosePopupWebView();
            }
        });
        FrameLayout.LayoutParams closeParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
                Gravity.TOP | Gravity.END
        );
        closeParams.topMargin = dp(activity, 8);
        closeParams.rightMargin = dp(activity, 8);
        root.addView(popupCloseButton, closeParams);

        WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
        transport.setWebView(popup);
        resultMsg.sendToTarget();
        // Log.d(TAG, "onCreateWindow: popup WebView attached for Google Pay window.open");
        return true;
    }

    /**
     * After Google Pay finishes it redirects to merchant returnUrl —
     * move that into the main WebView and close the popup.
     */
    private static void maybeHatqdoavrvyearrgamecndOffMerchantReturnUrl(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (url == null || url.length() == 0 || webView == null || popupWebView == null) {
            return;
        }

        String lower = url.toLowerCase();
        if (!lower.startsWith("http://") && !lower.startsWith("https://")) {
            return;
        }

        if (needsChromeUtqdoavrvyearrgameca(url) || istqdoavrvyearrgamecGoogleAuthFlowUrl(url)) {
            return;
        }

        if (popupInitialUrl != null && url.equals(popupInitialUrl)) {
            return;
        }

        // Log.d(TAG, "popup left Google Pay -> hand off returnUrl to main WebView: " + url);
        lastLoadedUrl = url;
        webView.loadUrl(url);
        ctqdoavrvyearrgameclosePopupWebView();
    }

    private static boolean shouldOverridePopupUtqdoavrvyearrgamecrl(Activity activity, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep Google Pay and all http(s) navigation inside the popup WebView
        // (merchant return is handed off via maybeHatqdoavrvyearrgamecndOffMerchantReturnUrl).
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewInttqdoavrvyearrgamecent(activity, url);
                return true;
            }
            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIntenttqdoavrvyearrgamecUrl(activity, url);
            }
            openViewInttqdoavrvyearrgamecent(activity, url);
            return true;
        }

        openViewInttqdoavrvyearrgamecent(activity, url);
        return true;
    }

    private static void ctqdoavrvyearrgameclosePopupWebView() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (popupCloseButton != null) {
            try {
                if (root != null) {
                    root.removeView(popupCloseButton);
                }
            } catch (Exception ignored) {
            }
            popupCloseButton = null;
        }

        if (popupWebView == null) {
            popupInitialUrl = null;
            return;
        }

        WebView popup = popupWebView;
        popupWebView = null;
        popupInitialUrl = null;

        try {
            if (root != null) {
                root.removeView(popup);
            }
        } catch (Exception ignored) {
        }

        try {
            popup.stopLoading();
            popup.loadUrl("about:blank");
            popup.clearHistory();
            popup.destroy();
        } catch (Exception ignored) {
        }

        // Log.d(TAG, "popup WebView closed");
    }

    private static void handlePermisstqdoavrvyearrgamecionRequest(Activity activity, PermissionRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || request == null) {
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> missingAndroidPermissions = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (!htqdoavrvyearrgamecasPermission(activity, Manifest.permission.CAMERA)
                        && !missingAndroidPermissions.contains(Manifest.permission.CAMERA)) {
                    missingAndroidPermissions.add(Manifest.permission.CAMERA);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (!htqdoavrvyearrgamecasPermission(activity, Manifest.permission.RECORD_AUDIO)
                        && !missingAndroidPermissions.contains(Manifest.permission.RECORD_AUDIO)) {
                    missingAndroidPermissions.add(Manifest.permission.RECORD_AUDIO);
                }
            }
        }

        if (missingAndroidPermissions.isEmpty()) {
            grantWebResourcesIfAllowedtqdoavrvyearrgamec(activity, request);
            return;
        }

        pendingPermissionRequest = request;
        ActivityCompat.requestPermissions(
                activity,
                missingAndroidPermissions.toArray(new String[0]),
                REQUEST_WEBVIEW_PERMISSIONS
        );
    }

    private static void grantWebResourcesIfAllowedtqdoavrvyearrgamec(Activity activity, PermissionRequest request) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (request == null) {
            return;
        }
        if (activity == null) {
            request.deny();
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> granted = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (htqdoavrvyearrgamecasPermission(activity, Manifest.permission.CAMERA)) {
                    granted.add(resource);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (htqdoavrvyearrgamecasPermission(activity, Manifest.permission.RECORD_AUDIO)) {
                    granted.add(resource);
                }
            }
        }

        if (granted.isEmpty()) {
            request.deny();
        } else {
            request.grant(granted.toArray(new String[0]));
        }
    }

    private static boolean htqdoavrvyearrgamecasPermission(Activity activity, String permission) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        return activity != null
                && ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED;
    }

    private static boolean launchFileCtqdoavrvyearrgamechooser(Activity activity, WebChromeClient.FileChooserParams fileChooserParams) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || fileChooserParams == null) {
            ctqdoavrvyearrgamecancelPendingFileChooser();
            return true;
        }

        Intent intent;
        try {
            intent = fileChooserParams.createIntent();
        } catch (Exception e) {
            // Log.w(TAG, "createIntent failed", e);
            ctqdoavrvyearrgamecancelPendingFileChooser();
            return true;
        }

        Intent chooser = Intent.createChooser(intent, null);

        if (htqdoavrvyearrgamecasPermission(activity, Manifest.permission.CAMERA)) {
            Intent cameraIntent = createCameraInttqdoavrvyearrgamecent(activity);
            if (cameraIntent != null) {
                chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{cameraIntent});
            }
        }

        try {
            activity.startActivityForResult(chooser, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No activity for file chooser", e);
            ctqdoavrvyearrgamecancelPendingFileChooser();
            return true;
        }
    }

    private static boolean lautqdoavrvyearrgamecnchCameraCapture(Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        Intent cameraIntent = createCameraInttqdoavrvyearrgamecent(activity);
        if (cameraIntent == null) {
            ctqdoavrvyearrgamecancelPendingFileChooser();
            return true;
        }

        try {
            activity.startActivityForResult(cameraIntent, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No camera activity", e);
            ctqdoavrvyearrgamecancelPendingFileChooser();
            return true;
        }
    }

    private static Intent createCameraInttqdoavrvyearrgamecent(Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null) {
            return null;
        }

        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(activity.getPackageManager()) == null) {
            return null;
        }

        File photoFile;
        try {
            photoFile = createImagtqdoavrvyearrgameceFile(activity);
        } catch (IOException e) {
            // Log.w(TAG, "Failed to create capture file", e);
            return null;
        }

        Uri photoUri = FileProvider.getUriForFile(
                activity,
                activity.getPackageName() + ".webview.fileprovider",
                photoFile
        );
        cameraImageUri = photoUri;

        takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
        takePictureIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);

        List<ResolveInfo> resolved = activity.getPackageManager()
                .queryIntentActivities(takePictureIntent, PackageManager.MATCH_DEFAULT_ONLY);
        for (ResolveInfo resolveInfo : resolved) {
            String packageName = resolveInfo.activityInfo.packageName;
            activity.grantUriPermission(
                    packageName,
                    photoUri,
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION
            );
        }

        return takePictureIntent;
    }

    private static File createImagtqdoavrvyearrgameceFile(Activity activity) throws IOException {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
        String imageFileName = "WV_" + timeStamp + "_";
        File storageDir = new File(activity.getCacheDir(), "webview_captures");
        if (!storageDir.exists() && !storageDir.mkdirs()) {
            throw new IOException("Cannot create webview_captures dir");
        }
        return File.createTempFile(imageFileName, ".jpg", storageDir);
    }

    private static void ctqdoavrvyearrgamecancelPendingFileChooser() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        cameraImageUri = null;
        pendingCaptureAfterCameraPermission = false;
        if (pendingFilePathCallback != null) {
            pendingFilePathCallback.onReceiveValue(null);
            pendingFilePathCallback = null;
        }
    }

    private static void applyGotqdoavrvyearrgamecogleUserAgent(WebView view) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        isInGoogleAuthFlow = true;
        googleUserAgentApplied = true;
        view.getSettings().setUserAgentString(GOOGLE_USER_AGENT);
    }

    private static void resttqdoavrvyearrgamecoreDefaultUserAgent(WebView view, Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        view.getSettings().setUserAgentString(WebSettings.getDefaultUserAgent(activity));
    }

    private static boolean isGotqdoavrvyearrgamecogleAuthUrl(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("google.com/o/oauth2")
                || lower.contains("oauth2.googleapis.com")
                || lower.contains("accounts.youtube.com")
                || lower.startsWith("https://accounts.google.")
                || lower.startsWith("http://accounts.google.");
    }

    private static boolean itqdoavrvyearrgamecsGooglePayUrl(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("google.com/pay")
                || lower.startsWith("https://pay.google.")
                || lower.startsWith("http://pay.google.")
                || lower.startsWith("https://payments.google.")
                || lower.startsWith("http://payments.google.");
    }

    private static boolean needsChromeUtqdoavrvyearrgameca(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        return isGotqdoavrvyearrgamecogleAuthUrl(url) || itqdoavrvyearrgamecsGooglePayUrl(url);
    }

    private static boolean istqdoavrvyearrgamecGoogleAuthFlowUrl(String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("accounts.google.")
                || lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("googleusercontent.com")
                || lower.contains("gstatic.com")
                || lower.contains("oauth");
    }

    private static boolean openExternalIfNtqdoavrvyearrgameceeded(Activity activity, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (activity == null || url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep pay.google.com / https returnUrl inside WebView — only diia/tg/known prefixes go external.
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewInttqdoavrvyearrgamecent(activity, url);
                return true;
            }

            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIntenttqdoavrvyearrgamecUrl(activity, url);
            }
            openViewInttqdoavrvyearrgamecent(activity, url);
            return true;
        }

        openViewInttqdoavrvyearrgamecent(activity, url);
        return true;
    }

    private static boolean openIntenttqdoavrvyearrgamecUrl(Activity activity, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        try {
            Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.removeExtra("browser_fallback_url");

            if (intent.resolveActivity(activity.getPackageManager()) != null) {
                activity.startActivity(intent);
                return true;
            }

            String fallback = intent.getStringExtra("browser_fallback_url");
            if (fallback != null && fallback.length() > 0) {
                openNatitqdoavrvyearrgamecveWebView(activity, fallback);
                return true;
            }
        } catch (Exception ignored) {
        }

        return true;
    }

    private static void openViewInttqdoavrvyearrgamecent(Activity activity, String url) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(intent);
        } catch (ActivityNotFoundException ignored) {
        } catch (Exception ignored) {
        }
    }

    private static void registertqdoavrvyearrgamecBackPressedHandler(final Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (!(activity instanceof ComponentActivity)) {
            return;
        }

        ComponentActivity componentActivity = (ComponentActivity) activity;
        if (backPressedCallback != null) {
            backPressedCallback.remove();
        }

        backPressedCallback = new OnBackPressedCallback(true) {
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                
            @Override
            public void handleOnBackPressed() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

                    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
                    
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
                @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
                if (popupWebView != null) {
                    if (popupWebView.canGoBack()) {
                        popupWebView.goBack();
                    } else {
                        ctqdoavrvyearrgameclosePopupWebView();
                    }
                    return;
                }

                if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                }
            }
        };
        componentActivity.getOnBackPressedDispatcher().addCallback(componentActivity, backPressedCallback);
    }

    private static void unregisterBackPressedtqdoavrvyearrgamecHandler() {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        if (backPressedCallback != null) {
            backPressedCallback.remove();
            backPressedCallback = null;
        }
    }

    private static void closeNativtqdoavrvyearrgameceWebView(Activity activity) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        lastLoadedUrl = null;

        ctqdoavrvyearrgameclosePopupWebView();

        if (pendingPermissionRequest != null) {
            try {
                pendingPermissionRequest.deny();
            } catch (Exception ignored) {
            }
            pendingPermissionRequest = null;
        }
        ctqdoavrvyearrgamecancelPendingFileChooser();
        hostActivity = null;

        if (webView != null) {
            try {
                webView.stopLoading();
                webView.loadUrl("about:blank");
                webView.clearHistory();
                webView.destroy();
            } catch (Exception ignored) {
            }
            webView = null;
        }

        if (root != null) {
            try {
                ViewGroup parent = (ViewGroup) root.getParent();
                if (parent != null) {
                    parent.removeView(root);
                }
            } catch (Exception ignored) {
            }
            root = null;
        }

        progress = null;
        unregisterBackPressedtqdoavrvyearrgamecHandler();
    }

    private static int dp(Activity activity, int value) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV27 = ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(35, 76) ^ ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(55, 72) ^ ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV26 = ViewtqdoavrvyearrgamecportBridgeObfV26HashMix("ohyjh") ^ ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(new int[]{13, 27, 27}) ^ ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(41, 37) ^ VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV25 = ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold("nv") ^ VietqdoavrvyearrgamecwportBridgeObfV25HashMix("yprs") ^ ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(42, 43);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV24 = ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld("gxn") ^ ViewportqdoavrvyearrgamectBridgeObfV24HashMix("br") ^ ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV23 = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV22 = ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(64, 44) ^ ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(88, 51) ^ ViewportqdoavrvyearrgamectBridgeObfV22ByteFold("57");

            @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV21 = VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(22, 64) ^ ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold("wvam") ^ ViewportBridgeObfV21HashMixtqdoavrvyearrgamec("vn9");
            
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV20 = ViewportBritqdoavrvyearrgamecdgeObfV20HashMix("7v25") ^ VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV19 = ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int tqdoavrvyearrgamecSinkV18 = ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(37, 28) ^ ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(65, 15) ^ ViewportBridgeObfV18BytetqdoavrvyearrgamecFold("sw") ^ ViewportBridgeObfV18HashMitqdoavrvyearrgamecx("76");
        @SuppressWarnings("Jotivomesuxi") final int tqdoavrvyearrgamecSinkV17 = ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(30, 41);
        float density = activity.getResources().getDisplayMetrics().density;
        return Math.round(value * density);
    }

/* obfuscation-batch:v17 */
    private static int ViewportBridgeObfV17ShiftXotqdoavrvyearrgamecr(int n, int k) {
        int x = (n ^ k) << 3;
        return (x ^ 146) & 897;
    }

/* obfuscation-batch:v18 */
    private static int ViewportBridgetqdoavrvyearrgamecObfV18ClampMod(int n, int m) {
        int span = (m % 40) + 3;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBrtqdoavrvyearrgamecidgeObfV18ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 233) & 24193;
    }

    private static int ViewportBridgeObfV18BytetqdoavrvyearrgamecFold(String s) {

        int x = 42;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 26) ^ 85;
        return x & 24084;
    }

    private static int ViewportBridgeObfV18HashMitqdoavrvyearrgamecx(String s) {
        int h = 64;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 15)) % 771;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int ViewportBridgeObfV1tqdoavrvyearrgamec9ShiftXor(int n, int k) {
        int x = (n ^ k) << 4;
        return (x ^ 79) & 13297;
    }

/* obfuscation-batch:v20 */
    private static int ViewportBritqdoavrvyearrgamecdgeObfV20HashMix(String s) {

        int h = 58;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 150;
        return h;
    }

    private static int VitqdoavrvyearrgamecewportBridgeObfV20SumOdds(int[] nums) {
        int acc = 72;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 770;
        }
        return acc;
    }

    private static int VitqdoavrvyearrgamecewportBridgeObfV20ClampMod(int n, int m) {
        int span = (m % 21) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v21 */
    private static int VietqdoavrvyearrgamecwportBridgeObfV21ClampMod(int n, int m) {
        int span = (m % 60) + 7;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBridgeObfV21ShiftXtqdoavrvyearrgamecor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 123) & 49798;
    }

    private static int ViewportBridgeObfVtqdoavrvyearrgamec21ByteFold(String s) {
        int x = 19;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 65535;
        return x;
    }

    private static int ViewportBridgeObfV21HashMixtqdoavrvyearrgamec(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 325;
        return h;
    }

/* obfuscation-batch:v22 */
    private static int ViewportBridgeObtqdoavrvyearrgamecfV22ClampMod(int n, int m) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        int span = (m % 11) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBridgeObtqdoavrvyearrgamecfV22ShiftXor(int n, int k) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        int x = (n ^ k) << 5;
        return (x ^ 207) & 33243;
    }

    private static int ViewportqdoavrvyearrgamectBridgeObfV22ByteFold(String s) {
        int x = 25;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) & 65535;
        return x;
    }

    /* obfuscation-batch:v23 */
    private static int ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold(String s) {
        int x = 76;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 3) & 1869;
        return x;
    }

    private static int ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1(String s) {
        @SuppressWarnings("unused") final int tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(41, 24) ^ tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(51, 10);
        int h = 29;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 18)) % 566;
        return h;
    }

    private static int ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(int[] nums) {

        int acc = 45;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 32) % 447;
        }
        return acc;
    }
    @SuppressWarnings("unused") private static final int tqdoavrvyearrgamecViewportBridgeSinkV23Boot = ViewportBtqdoavrvyearrgamecridgeObfV23ByteFold("zrr2") ^ ViewportBridgeObtqdoavrvyearrgamecfV23HashMix1("hn") ^ ViewportBritqdoavrvyearrgamecdgeObfV23SumOdds2(new int[]{25, 26, 16});

/* obfuscation-batch:v24 */
private static int ViewportBridgeObfV24ByteFotqdoavrvyearrgamecld(String s) {
  int x = 49;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 10323;
  return x;
}

private static int ViewportqdoavrvyearrgamectBridgeObfV24HashMix(String s) {
  int h = 45;
  for (int i = 0; i < s.length(); i++) h = (h + (s.charAt(i) * 27)) % 245;
  return h;
}

private static int ViewportBridtqdoavrvyearrgamecgeObfV24SumOdds(int[] nums) {
  int acc = 82;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 43) % 182;
  }
  return acc;
}


/* obfuscation-batch:v25 */
private static int ViewptqdoavrvyearrgamecortBridgeObfV25ByteFold(String s) {

  int x = 14;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 41) & 5073;
  return x;
}

private static int VietqdoavrvyearrgamecwportBridgeObfV25HashMix(String s) {
  int h = 56;
  for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 29)) % 713;
  return h;
}

private static int ViewptqdoavrvyearrgamecortBridgeObfV25SumOdds(int[] nums) {

  int acc = 56;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 22) % 643;
  }
  return acc;
}

private static int ViewportBridgeObfV25ClatqdoavrvyearrgamecmpMod(int n, int m) {
  int span = (m % 21) + 2;
  int x = n % span;
  return x < 0 ? x + span : x;
}


/* obfuscation-batch:v26 */
private static int ViewtqdoavrvyearrgamecportBridgeObfV26HashMix(String s) {
    int h = 55;
    for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 30)) % 520;
    return h;
}

private static int ViewporttqdoavrvyearrgamecBridgeObfV26SumOdds(int[] nums) {
    int acc = 12;
    for (int n : nums) {
        if ((n & 1) == 0) continue;
        acc = (acc + n * 21) % 685;
    }
    return acc;
}

private static int ViewtqdoavrvyearrgamecportBridgeObfV26ClampMod(int n, int m) {

    int span = (m % 44) + 12;
    int x = n % span;
    return x < 0 ? x + span : x;
}

private static int VitqdoavrvyearrgamecewportBridgeObfV26ShiftXor(int n, int k) {
    int x = (n ^ k) << 1;
    return (x ^ 164) & 36121;
}

  /* obfuscation-batch:v27 */
  private static int ViewportBrtqdoavrvyearrgamecidgeObfV27SumOdds(int[] nums) {
      int acc = 16;
      for (int n : nums) {
        if ((n & 1) == 0) continue;
        acc = (acc + n * 6) % 262;
      }
      return acc;
    }
  private static int ViewportBridgeObfVtqdoavrvyearrgamec27ClampMod(int n, int m) {
      int span = (m % 57) + 15;
      int x = n % span;
      return x < 0 ? x + span : x;
    }
  private static int ViewptqdoavrvyearrgamecortBridgeObfV27ShiftXor(int n, int k) {
      int x = (n ^ k) << 6;
      return (x ^ 216) & 22058;
    }
  private static int ViewporttqdoavrvyearrgamecBridgeObfV27ByteFold(String s) {
      int x = 53;
      for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 10) & 23780;
      return x;
    }

    private static int tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Mix(int a, int b) {
        int base = 65;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int tqdoavrvyearrgamecViewportBridgeprissmgecmsgalObfV28Fold(String text) {
        int acc = 65;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Mix(int a, int b) {
        int base = 14;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int tqdoavrvyearrgamecViewportpzurisymgeqmgallsefrObfV29Fold(String text) {
        int acc = 14;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    /* obfuscation-batch:v30 */
    @SuppressWarnings("unused")
    private static int tqdoavrvyearrgamecViewportBrpmvqkrmwObfV30ClampMod(int n, int m) {
        int span = (m % 58) + 8;
        int x = ((n ^ 28) << 4) % span;
        return x < 0 ? x + span : x;
    }

    /* obfuscation-batch:v31 */
    @SuppressWarnings("unused")
    private static int tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ClampMod(int n, int m) {
        int span = (m % 57) + 7;
        int x = ((n ^ 89) << 1) % span;
        return x < 0 ? x + span : x;
    }

    @SuppressWarnings("unused")
    private static int tqdoavrvyearrgamecViewptqdoavrvyearrObfV31ShiftXor(int n, int k) {
        int x = (n ^ k) << 6;
        return (x ^ 57) & 30356;
    }
}