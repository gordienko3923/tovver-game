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

object GogovamapasutoPart02 {
    fun GogovamapasutoOtqdoavrvyearrgamecbfV26ClampMod(n: Int, m: Int): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecGogovamapasutoPartObfV28HashMix("ghmh0d") xor tqdoavrvyearrgamecGogovamapasutoPartObfV28SumOdds(intArrayOf(15, 38, 9)) xor tqdoavrvyearrgamecGogovamapasutoPartObfV28ClampMod(40, 11)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecGogovamapasutoPart02ObfV27ByteFold("nxf") xor tqdoavrvyearrgamecGogovamapasutoPart02ObfV27HashMix("4z") xor tqdoavrvyearrgamecGogovamapasutoPart02ObfV27SumOdds(intArrayOf(32, 8, 2))

  val span = (m % 23) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecGogovamapasutoPart02ObfV27ByteFold(s: String): Int {
  var x = 42
  for (i in s.indices) x = (x + s[i].code * 25) and 17921
  return x
}
private fun tqdoavrvyearrgamecGogovamapasutoPart02ObfV27HashMix(s: String): Int {
  var h = 76
  for (i in s.indices) h = (h xor (s[i].code * 12)) % 424
  return h
}
private fun tqdoavrvyearrgamecGogovamapasutoPart02ObfV27SumOdds(nums: IntArray): Int {
  var acc = 3
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 29) % 105
  }
  return acc
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28HashMix(s: String): Int {
    var h = 78
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 254
    return h
}
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28SumOdds(nums: IntArray): Int {
    var acc = 69
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 4) % 433
    }
    return acc
}
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 4
    val x = ((n xor 104) shl 4) % span
    return if (x < 0) x + span else x
}
