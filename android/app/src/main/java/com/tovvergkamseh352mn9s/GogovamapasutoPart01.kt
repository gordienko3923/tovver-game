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

object GogovamapasutoPart01 {
    fun GogovamaptqdoavrvyearrgamecasutoObfV26SumOdds(nums: IntArray): Int {

  var acc = 53
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 6) % 391
  }
  return acc
}
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecGogovamapasutoPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 239
  }
  return acc
}
private fun tqdoavrvyearrgamecGogovamapasutoPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 14
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28SumOdds(nums: IntArray): Int {
    var acc = 90
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 657
    }
    return acc
}
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 27) + 11
    val x = ((n xor 37) shl 1) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecGogovamapasutoPartObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 25) and 936
}
