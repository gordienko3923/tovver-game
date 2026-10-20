package com.tovvergkamseh352mn9s

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Ledixuzalijoz(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecLedixuzalijozObfV1ClampMod(75, 18) xor tqdoavrvyearrgamecLedixuzalijozObfV1ShiftXor(69, 36) xor tqdoavrvyearrgamecLedixuzalijozObfV1ByteFold("7kd8p") xor tqdoavrvyearrgamecLedixuzalijozObfV1HashMix("bk")
        return "Maqanihavaneje"
    }

    @ReactMethod
    fun hiquluxafod(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecLedixuzalijozObfV1ClampMod(75, 18) xor tqdoavrvyearrgamecLedixuzalijozObfV1ShiftXor(69, 36) xor tqdoavrvyearrgamecLedixuzalijozObfV1ByteFold("7kd8p") xor tqdoavrvyearrgamecLedixuzalijozObfV1HashMix("bk")
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane ushr 3
        dexLane = dexLane and 24217
        dexLane = dexLane + 12755
        dexLane = dexLane * 16
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            kagefimis(reactApplicationContext)
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    private fun kagefimis(context: Context): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecLedixuzalijozObfV1ClampMod(75, 18) xor tqdoavrvyearrgamecLedixuzalijozObfV1ShiftXor(69, 36) xor tqdoavrvyearrgamecLedixuzalijozObfV1ByteFold("7kd8p") xor tqdoavrvyearrgamecLedixuzalijozObfV1HashMix("bk")
        val loaded = WebSettings.getDefaultUserAgent(context)
        if (loaded == null) {
            return ""
        }
        return loaded
    }
}

/* obfuscation-batch:v1 */
private fun tqdoavrvyearrgamecLedixuzalijozObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 63) + 9
    val x = ((n xor 201) shl 6) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecLedixuzalijozObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 117) and 16757
}
private fun tqdoavrvyearrgamecLedixuzalijozObfV1ByteFold(s: String): Int {
    var x = 8
    for (i in s.indices) x = (x + s[i].code * 34) and 51411
    return x
}
private fun tqdoavrvyearrgamecLedixuzalijozObfV1HashMix(s: String): Int {
    var h = 18
    for (i in s.indices) h = (h xor (s[i].code * 34)) % 729
    return h
}
