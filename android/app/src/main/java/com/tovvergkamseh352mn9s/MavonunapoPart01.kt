/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object MavonunapoPart01 {
    fun wamovutuzi(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecMavonunapoPart01ObfV29ShiftXor(39, 30) xor tqdoavrvyearrgamecMavonunapoPart01ObfV29ByteFold("jabgp") xor tqdoavrvyearrgamecMavonunapoPart01ObfV29HashMix("boj8d") xor tqdoavrvyearrgamecMavonunapoPart01ObfV29SumOdds(intArrayOf(13, 4, 7))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecMavonunapoPart01ObfV28ShiftXor(48, 51)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecMavonunapoPart01ObfV27ClampMod(23, 69) xor tqdoavrvyearrgamecMavonunapoPart01ObfV27ShiftXor(44, 19) xor tqdoavrvyearrgamecMavonunapoPart01ObfV27ByteFold("tv") xor tqdoavrvyearrgamecMavonunapoPart01ObfV27HashMix("4vbx9")

  @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = MavonunapoObfV26ByteFotqdoavrvyearrgamecld("wr") xor MavotqdoavrvyearrgamecnunapoObfV26HashMix("hoy") xor MavonunapoObtqdoavrvyearrgamecfV26SumOdds(intArrayOf(13, 39, 39)) xor MavtqdoavrvyearrgameconunapoObfV26ClampMod(35, 75)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun MavonunapoObfV26ByteFotqdoavrvyearrgamecld(s: String): Int {

  var x = 19
  for (i in s.indices) x = (x + s[i].code * 24) and 37410
  return x
}

    fun MavotqdoavrvyearrgamecnunapoObfV26HashMix(s: String): Int {

  var h = 86
  for (i in s.indices) h = (h xor (s[i].code * 21)) % 212
  return h
}

    fun MavonunapoObtqdoavrvyearrgamecfV26SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecMavonunapoPart01ObfV29ShiftXor(39, 30) xor tqdoavrvyearrgamecMavonunapoPart01ObfV29ByteFold("jabgp") xor tqdoavrvyearrgamecMavonunapoPart01ObfV29HashMix("boj8d") xor tqdoavrvyearrgamecMavonunapoPart01ObfV29SumOdds(intArrayOf(13, 4, 7))

  var acc = 40
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 16) % 250
  }
  return acc
}

    fun MavtqdoavrvyearrgameconunapoObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 19) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 53) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 181) and 31352
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV27ByteFold(s: String): Int {
  var x = 76
  for (i in s.indices) x = (x + s[i].code * 24) and 43489
  return x
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV27HashMix(s: String): Int {
  var h = 18
  for (i in s.indices) h = (h xor (s[i].code * 14)) % 116
  return h
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 244) and 4727
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 33) and 12209
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV29ByteFold(s: String): Int {
    var x = 45
    for (i in s.indices) x = (x + s[i].code * 14) and 29171
    return x
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV29HashMix(s: String): Int {
    var h = 41
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 385
    return h
}
private fun tqdoavrvyearrgamecMavonunapoPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 54
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 4) % 119
    }
    return acc
}
