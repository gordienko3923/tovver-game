/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.android.volley.DefaultRetryPolicy
import com.android.volley.ExecutorDelivery
import com.android.volley.Request as VolleyRequest
import com.android.volley.RequestQueue
import com.android.volley.toolbox.BasicNetwork
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.NoCache
import com.android.volley.toolbox.StringRequest
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import java.io.StringReader

object VawacadamejofPart01 {
    fun kerovacihif(body: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecVawacadamejofPart0ObfV29HashMix("pm7") xor tqdoavrvyearrgamecVawacadamejofPart0ObfV29SumOdds(intArrayOf(23, 6, 1)) xor tqdoavrvyearrgamecVawacadamejofPart0ObfV29ClampMod(56, 59) xor tqdoavrvyearrgamecVawacadamejofPart0ObfV29ShiftXor(74, 5)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecVawacadamejofPart0ObfV28ClampMod(28, 31)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecVawacadamejofPart01ObfV27ByteFold("z4jt")

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = VawacatqdoavrvyearrgamecdamejofPart01ObfV26SumOdds(intArrayOf(35, 39, 25)) xor VawacadtqdoavrvyearrgamecamejofPart01ObfV26ClampMod(23, 35) xor VawacadamejoftqdoavrvyearrgamecPart01ObfV26ShiftXor(64, 27) xor VtqdoavrvyearrgamecawacadamejofPart01ObfV26ByteFold("si3")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = tqdoavrvyearrgamecVawacadamejofPart01ObfV25ShiftXor(51, 58) xor tqdoavrvyearrgamecVawacadamejofPart01ObfV25ByteFold("m6as")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV24 = VawacadamejofPart01ObfV24ByteFold("85nfq") xor VawacadamejofPart01ObfV24HashMix("3zjd") xor VawacadamejofPart01ObfV24SumOdds(intArrayOf(21, 33, 61))
  @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV23 = VawacadamejofPart02.VawacadamejofObfV23SumOddtqdoavrvyearrgamecs(intArrayOf(23, 28, 18)) xor VawacadamejofObfV23CltqdoavrvyearrgamecampMod1(79, 9) xor VawacadamejofPart02.VawacadamejofObfVtqdoavrvyearrgamec23ShiftXor2(69, 64)

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

    fun VawacadamejofObfV23CltqdoavrvyearrgamecampMod1(n: Int, m: Int): Int {

  val span = (m % 25) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v24 */
private fun VawacadamejofPart01ObfV24ByteFold(s: String): Int {

  var x = 43
  for (i in s.indices) x = (x + s[i].code * 21) and 35503
  return x
}

private fun VawacadamejofPart01ObfV24HashMix(s: String): Int {

  var h = 29
  for (i in s.indices) h = (h + (s[i].code * 38)) % 131
  return h
}

private fun VawacadamejofPart01ObfV24SumOdds(nums: IntArray): Int {

  var acc = 12
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 41) % 521
  }
  return acc
}


/* obfuscation-batch:v25 */
private fun tqdoavrvyearrgamecVawacadamejofPart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 109) and 34152
}

private fun tqdoavrvyearrgamecVawacadamejofPart01ObfV25ByteFold(s: String): Int {

  var x = 33
  for (i in s.indices) x = (x + s[i].code * 11) and 41020
  return x
}


/* obfuscation-batch:v26 */
private fun VawacatqdoavrvyearrgamecdamejofPart01ObfV26SumOdds(nums: IntArray): Int {

  var acc = 64
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 41) % 175
  }
  return acc
}

private fun VawacadtqdoavrvyearrgamecamejofPart01ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 63) + 15
  val x = n % span
  return if (x < 0) x + span else x
}

private fun VawacadamejoftqdoavrvyearrgamecPart01ObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 54) and 20068
}

private fun VtqdoavrvyearrgamecawacadamejofPart01ObfV26ByteFold(s: String): Int {

  var x = 39
  for (i in s.indices) x = (x + s[i].code * 43) and 14506
  return x
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecVawacadamejofPart01ObfV27ByteFold(s: String): Int {
  var x = 43
  for (i in s.indices) x = (x + s[i].code * 5) and 29364
  return x
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecVawacadamejofPart0ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 3
    val x = ((n xor 218) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecVawacadamejofPart0ObfV29HashMix(s: String): Int {
    var h = 66
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 830
    return h
}
private fun tqdoavrvyearrgamecVawacadamejofPart0ObfV29SumOdds(nums: IntArray): Int {
    var acc = 50
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 10) % 116
    }
    return acc
}
private fun tqdoavrvyearrgamecVawacadamejofPart0ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 50) + 9
    val x = ((n xor 160) shl 3) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecVawacadamejofPart0ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 230) and 17400
}
