/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart03 {
    fun tqdoavrvyearrgamecHefokoroseneObfV17ClampMod(n: Int, m: Int): Int {

  val span = (m % 37) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v18 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV18ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 162) and 38654
}
/* obfuscation-batch:v19 */
private fun HefokorosenePtqdoavrvyearrgamecart03ObfV19ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 3
  return (x xor 201) and 4858
}
/* obfuscation-batch:v20 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV20ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 80) and 21531
}

private fun tqdoavrvyearrgamecHefokorosenePart03ObfV20ByteFold(s: String): Int {

  var x = 65
  for (i in s.indices) x = (x + s[i].code * 26) xor 225
  return x and 21894
}

/* obfuscation-batch:v21 */
private fun HefokorosenePart03ObfV21tqdoavrvyearrgamecClampMod(n: Int, m: Int): Int {

  val span = (m % 34) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokotqdoavrvyearrgamecrosenePart03ObfV21ShiftXor(n: Int, k: Int): Int {



  val x = (n xor k) shl 2
  return (x xor 223) and 38427
}

private fun HefokorosenePart03ObfV21BtqdoavrvyearrgamecyteFold(s: String): Int {

  var x = 32
  for (i in s.indices) x = (x + s[i].code * 8) and 65535
  return x
}

private fun HefokorosetqdoavrvyearrgamecnePart03ObfV21HashMix(s: String): Int {

  var h = 72
  for (i in s.indices) h = (h xor (s[i].code * 34)) % 215
  return h
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecHefokorosenePart03SinkV21Boot = HefokorosenePart03ObfV21tqdoavrvyearrgamecClampMod(10, 66) xor HefokotqdoavrvyearrgamecrosenePart03ObfV21ShiftXor(37, 42) xor HefokorosenePart03ObfV21BtqdoavrvyearrgamecyteFold("fk") xor HefokorosetqdoavrvyearrgamecnePart03ObfV21HashMix("tf")

/* obfuscation-batch:v22 */
private fun HefokorosenePart0tqdoavrvyearrgamec3ObfV22ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 3
  return (x xor 152) and 59856
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecHefokorosenePart03SinkV22Boot = HefokorosenePart0tqdoavrvyearrgamec3ObfV22ShiftXor(83, 40)
/* obfuscation-batch:v23 */
private fun HefokorotqdoavrvyearrgamecsenePart03ObfV23HashMix(s: String): Int {

  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 9)) % 708
  return h
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecHefokorosenePart03SinkV23Boot = HefokorotqdoavrvyearrgamecsenePart03ObfV23HashMix("9v4b")
/* obfuscation-batch:v24 */
private fun HefokorosenePart03ObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 66) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokorosenePart03ObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 152) and 36790
}

private fun HefokorosenePart03ObfV24ByteFold(s: String): Int {

  var x = 4
  for (i in s.indices) x = (x + s[i].code * 8) and 10987
  return x
}

private fun HefokorosenePart03ObfV24HashMix(s: String): Int {

  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 43)) % 742
  return h
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecBootV24 = HefokorosenePart03ObfV24ClampMod(35, 60) xor HefokorosenePart03ObfV24ShiftXor(21, 71) xor HefokorosenePart03ObfV24ByteFold("9t") xor HefokorosenePart03ObfV24HashMix("v6sah")


/* obfuscation-batch:v25 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV25SumOdds(nums: IntArray): Int {

  var acc = 47
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 30) % 42
  }
  return acc
}

private fun tqdoavrvyearrgamecHefokorosenePart03ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 55) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun tqdoavrvyearrgamecHefokorosenePart03ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 61) and 25967
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecBootV25 = tqdoavrvyearrgamecHefokorosenePart03ObfV25SumOdds(intArrayOf(28, 9, 5)) xor tqdoavrvyearrgamecHefokorosenePart03ObfV25ClampMod(12, 42) xor tqdoavrvyearrgamecHefokorosenePart03ObfV25ShiftXor(8, 7)


/* obfuscation-batch:v26 */
private fun HefoktqdoavrvyearrgamecorosenePart03ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 48) + 13
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokorosenePart03ObfV2tqdoavrvyearrgamec6ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 3
  return (x xor 17) and 14287
}

private fun HefokorosenePart03ObftqdoavrvyearrgamecV26ByteFold(s: String): Int {

  var x = 47
  for (i in s.indices) x = (x + s[i].code * 46) and 23465
  return x
}

private fun HefokorosenePart03ObfV2tqdoavrvyearrgamec6HashMix(s: String): Int {

  var h = 50
  for (i in s.indices) h = (h xor (s[i].code * 38)) % 864
  return h
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 26) + 13
  val x = n % span
  return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 30) and 20013
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV28ByteFold(s: String): Int {
    var x = 28
    for (i in s.indices) x = (x + s[i].code * 3) and 12263
    return x
}
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV28HashMix(s: String): Int {
    var h = 73
    for (i in s.indices) h = (h xor (s[i].code * 11)) % 812
    return h
}
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV28SumOdds(nums: IntArray): Int {
    var acc = 87
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 848
    }
    return acc
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 45) + 8
    val x = ((n xor 161) shl 6) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecHefokorosenePart03ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 143) and 44316
}
