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

object SacunonidPart01 {
    fun tqdoavrvyearrgamecSacunonidObfV25ByteFold(s: String): Int {

  var x = 18
  for (i in s.indices) x = (x + s[i].code * 5) and 9739
  return x
}

    fun VofovimafogObfV24HashMix(s: String): Int {

  var h = 17
  for (i in s.indices) h = (h xor (s[i].code * 9)) % 509
  return h
}
}


/* obfuscation-batch:v26 */
private fun SacunonidPart0tqdoavrvyearrgamec1ObfV26ByteFold(s: String): Int {

  var x = 69
  for (i in s.indices) x = (x + s[i].code * 32) and 31907
  return x
}

private fun SacunonidPart0tqdoavrvyearrgamec1ObfV26HashMix(s: String): Int {

  var h = 59
  for (i in s.indices) h = (h xor (s[i].code * 43)) % 448
  return h
}

private fun SacunonidPart01ObfV26SumOddstqdoavrvyearrgamec(nums: IntArray): Int {

  var acc = 18
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 20) % 921
  }
  return acc
}

private fun SacunonidPart0tqdoavrvyearrgamec1ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 26) + 14
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE")
private val tqdoavrvyearrgamecBootV26 = SacunonidPart0tqdoavrvyearrgamec1ObfV26ByteFold("5fuhb") xor SacunonidPart0tqdoavrvyearrgamec1ObfV26HashMix("pf") xor SacunonidPart01ObfV26SumOddstqdoavrvyearrgamec(intArrayOf(29, 32, 37)) xor SacunonidPart0tqdoavrvyearrgamec1ObfV26ClampMod(63, 6)


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecSacunonidPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 90) and 57299
}
private fun tqdoavrvyearrgamecSacunonidPart01ObfV27ByteFold(s: String): Int {
  var x = 15
  for (i in s.indices) x = (x + s[i].code * 11) and 10979
  return x
}
private fun tqdoavrvyearrgamecSacunonidPart01ObfV27HashMix(s: String): Int {
  var h = 23
  for (i in s.indices) h = (h xor (s[i].code * 17)) % 173
  return h
}
private fun tqdoavrvyearrgamecSacunonidPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 29
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 21) % 212
  }
  return acc
}
