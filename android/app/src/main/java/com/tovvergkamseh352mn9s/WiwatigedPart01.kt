/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import java.io.StringReader

object WiwatigedPart01 {
    fun zavizukem(body: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecWiwatigedPart01ObfV29ShiftXor(72, 75)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecWiwatigedPart01ObfV28SumOdds(intArrayOf(39, 6, 33)) xor tqdoavrvyearrgamecWiwatigedPart01ObfV28ClampMod(8, 11) xor tqdoavrvyearrgamecWiwatigedPart01ObfV28ShiftXor(74, 21) xor tqdoavrvyearrgamecWiwatigedPart01ObfV28ByteFold("e76pk")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecWiwatigedPart01ObfV27ShiftXor(72, 70)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = WiwatigedPatqdoavrvyearrgamecrt01ObfV26ByteFold("va") xor WiwatigedPart01ObtqdoavrvyearrgamecfV26HashMix("6i")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = tqdoavrvyearrgamecWiwatigedPart01ObfV25HashMix("mr") xor tqdoavrvyearrgamecWiwatigedPart01ObfV25SumOdds(intArrayOf(36, 33, 31))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV24 = WiwatigedPart01ObfV24ShiftXor(41, 55)
      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV23 = WiwatigedPart01tqdoavrvyearrgamecObfV23ClampMod(10, 81) xor WiwatigedPart01ObfV2tqdoavrvyearrgamec3ShiftXor1(74, 13) xor WiwatigedPart01ObfVtqdoavrvyearrgamec23ByteFold2("rbne") xor WiwatigtqdoavrvyearrgamecedPart01ObfV23HashMix3("k49f")

    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV22 = WiwatigedPartqdoavrvyearrgamect01ObfV22SumOdds(intArrayOf(31, 22, 18)) xor WiwatigetqdoavrvyearrgamecdPart01ObfV22ClampMod(59, 57) xor WiwatigetqdoavrvyearrgamecdPart01ObfV22ShiftXor(5, 80) xor WiwatigedPart01tqdoavrvyearrgamecObfV22ByteFold("gqcn")

    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV21 = WiwatigedPart01ObfV2tqdoavrvyearrgamec1ByteFold("fwhn") xor WiwatigedPart01tqdoavrvyearrgamecObfV21HashMix("8va") xor WiwatigedPart01ObfV21SumOddstqdoavrvyearrgamec(intArrayOf(16, 8, 23))
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV20 = WiwatigedPart02.tqdoavrvyearrgamecWiwatigedObfV20HashMix("t6s") xor WiwatigedPart03.tqdoavrvyearrgamecWiwatigedObfV20SumOdds(intArrayOf(16, 8, 28)) xor tqdoavrvyearrgamecWiwatigedObfV20ClampMod(17, 47)
    val count = JsonReader(StringReader(body)).use { reader ->
        var tokens = 0
        while (reader.peek() != JsonToken.END_DOCUMENT) {
            when (reader.peek()) {
                JsonToken.BEGIN_OBJECT -> {
                    reader.beginObject()
                    tokens += 1
                }
                JsonToken.END_OBJECT -> {
                    reader.endObject()
                    tokens += 1
                }
                JsonToken.BEGIN_ARRAY -> {
                    reader.beginArray()
                    tokens += 1
                }
                JsonToken.END_ARRAY -> {
                    reader.endArray()
                    tokens += 1
                }
                JsonToken.NAME -> {
                    reader.nextName()
                    tokens += 1
                }
                JsonToken.STRING -> {
                    reader.nextString()
                    tokens += 1
                }
                JsonToken.NUMBER -> {
                    reader.nextDouble()
                    tokens += 1
                }
                JsonToken.BOOLEAN -> {
                    reader.nextBoolean()
                    tokens += 1
                }
                JsonToken.NULL -> {
                    reader.nextNull()
                    tokens += 1
                }
                else -> {
                    reader.skipValue()
                    tokens += 1
                }
            }
        }
        tokens
    }
    return count.toString()
}

    fun tqdoavrvyearrgamecWiwatigedObfV20ClampMod(n: Int, m: Int): Int {

  val span = (m % 22) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v21 */
private fun WiwatigedPart01ObfV2tqdoavrvyearrgamec1ByteFold(s: String): Int {

  var x = 48
  for (i in s.indices) x = (x + s[i].code * 16) and 65535
  return x
}

private fun WiwatigedPart01tqdoavrvyearrgamecObfV21HashMix(s: String): Int {

  var h = 84
  for (i in s.indices) h = (h xor (s[i].code * 20)) % 313
  return h
}

private fun WiwatigedPart01ObfV21SumOddstqdoavrvyearrgamec(nums: IntArray): Int {



  var acc = 37
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 32) % 369
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecWiwatigedPart01SinkV21Boot = WiwatigedPart01ObfV2tqdoavrvyearrgamec1ByteFold("fwhn") xor WiwatigedPart01tqdoavrvyearrgamecObfV21HashMix("8va") xor WiwatigedPart01ObfV21SumOddstqdoavrvyearrgamec(intArrayOf(16, 8, 23))

/* obfuscation-batch:v22 */
private fun WiwatigedPartqdoavrvyearrgamect01ObfV22SumOdds(nums: IntArray): Int {

  var acc = 89
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 776
  }
  return acc
}

private fun WiwatigetqdoavrvyearrgamecdPart01ObfV22ClampMod(n: Int, m: Int): Int {

  val span = (m % 30) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun WiwatigetqdoavrvyearrgamecdPart01ObfV22ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 92) and 19160
}

private fun WiwatigedPart01tqdoavrvyearrgamecObfV22ByteFold(s: String): Int {

  var x = 79
  for (i in s.indices) x = (x + s[i].code * 39) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecWiwatigedPart01SinkV22Boot = WiwatigedPartqdoavrvyearrgamect01ObfV22SumOdds(intArrayOf(31, 22, 18)) xor WiwatigetqdoavrvyearrgamecdPart01ObfV22ClampMod(59, 57) xor WiwatigetqdoavrvyearrgamecdPart01ObfV22ShiftXor(5, 80) xor WiwatigedPart01tqdoavrvyearrgamecObfV22ByteFold("gqcn")
/* obfuscation-batch:v23 */
private fun WiwatigedPart01tqdoavrvyearrgamecObfV23ClampMod(n: Int, m: Int): Int {

  val span = (m % 36) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun WiwatigedPart01ObfV2tqdoavrvyearrgamec3ShiftXor1(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 123) and 28889
}

private fun WiwatigedPart01ObfVtqdoavrvyearrgamec23ByteFold2(s: String): Int {

  var x = 14
  for (i in s.indices) x = (x + s[i].code * 21) and 12223
  return x
}

private fun WiwatigtqdoavrvyearrgamecedPart01ObfV23HashMix3(s: String): Int {

  var h = 29
  for (i in s.indices) h = (h xor (s[i].code * 4)) % 605
  return h
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecWiwatigedPart01SinkV23Boot = WiwatigedPart01tqdoavrvyearrgamecObfV23ClampMod(10, 81) xor WiwatigedPart01ObfV2tqdoavrvyearrgamec3ShiftXor1(74, 13) xor WiwatigedPart01ObfVtqdoavrvyearrgamec23ByteFold2("rbne") xor WiwatigtqdoavrvyearrgamecedPart01ObfV23HashMix3("k49f")
/* obfuscation-batch:v24 */
private fun WiwatigedPart01ObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 78) and 59002
}


/* obfuscation-batch:v25 */
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV25HashMix(s: String): Int {

  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 7)) % 686
  return h
}

private fun tqdoavrvyearrgamecWiwatigedPart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 66
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 14) % 256
  }
  return acc
}


/* obfuscation-batch:v26 */
private fun WiwatigedPatqdoavrvyearrgamecrt01ObfV26ByteFold(s: String): Int {

  var x = 48
  for (i in s.indices) x = (x + s[i].code * 40) and 32025
  return x
}

private fun WiwatigedPart01ObtqdoavrvyearrgamecfV26HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecWiwatigedPart01ObfV29ShiftXor(72, 75)

  var h = 82
  for (i in s.indices) h = (h xor (s[i].code * 23)) % 476
  return h
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 184) and 17674
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV28SumOdds(nums: IntArray): Int {
    var acc = 90
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 12) % 190
    }
    return acc
}
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 51) + 3
    val x = ((n xor 110) shl 4) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 198) and 4927
}
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV28ByteFold(s: String): Int {
    var x = 78
    for (i in s.indices) x = (x + s[i].code * 3) and 48435
    return x
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecWiwatigedPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 244) and 39709
}
