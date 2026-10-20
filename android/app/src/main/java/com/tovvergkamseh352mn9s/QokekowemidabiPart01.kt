/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

object QokekowemidabiPart01 {
    fun tqdoavrvyearrgamecDoluqawodiObfV27ClampMod(n: Int, m: Int): Int {
    val span = (m % 17) + 3
    val x = ((n xor 26) shl 1) % span
    return if (x < 0) x + span else x
}

    fun tqdoavrvyearrgamecDoluqawodiObfV27ByteFold(s: String): Int {
    var x = 11
    for (i in s.indices) x = (x + s[i].code * 9) and 22017
    return x
}

    fun tqdoavrvyearrgamecQokekowemidabiObfV28HashMix(s: String): Int {
    var h = 54
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 177
    return h
}
}
