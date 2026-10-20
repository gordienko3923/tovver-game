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

object QokekowemidabiPart02 {
    fun tqdoavrvyearrgamecDoluqawodiObfV27ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 73) and 29110
}

    fun tqdoavrvyearrgamecDoluqawodiObfV27HashMix(s: String): Int {
    var h = 19
    for (i in s.indices) h = (h xor (s[i].code * 13)) % 251
    return h
}
}
