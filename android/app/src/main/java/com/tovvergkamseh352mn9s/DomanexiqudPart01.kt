/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object DomanexiqudPart01 {
    fun dirimazacavef(body: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecDomanexiqudPart01ObfV29ShiftXor(28, 31)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecDomanexiqudPart01ObfV28ClampMod(3, 26) xor tqdoavrvyearrgamecDomanexiqudPart01ObfV28ShiftXor(77, 76) xor tqdoavrvyearrgamecDomanexiqudPart01ObfV28ByteFold("helm") xor tqdoavrvyearrgamecDomanexiqudPart01ObfV28HashMix("cf2")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecDomanexiqudPart01ObfV27ByteFold("2xw7") xor tqdoavrvyearrgamecDomanexiqudPart01ObfV27HashMix("c9v")

  @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = DomanexiqudObfV26ClamptqdoavrvyearrgamecMod(33, 57) xor DomanexiqudObfV26ShiftXortqdoavrvyearrgamec(7, 66) xor DomanexiqutqdoavrvyearrgamecdObfV26ByteFold("y1mn") xor DomatqdoavrvyearrgamecnexiqudObfV26HashMix("hm95e")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun DomanexiqudObfV26ClamptqdoavrvyearrgamecMod(n: Int, m: Int): Int {

  val span = (m % 53) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

    fun DomanexiqudObfV26ShiftXortqdoavrvyearrgamec(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 221) and 3154
}

    fun DomanexiqutqdoavrvyearrgamecdObfV26ByteFold(s: String): Int {

  var x = 14
  for (i in s.indices) x = (x + s[i].code * 20) and 34409
  return x
}

    fun DomatqdoavrvyearrgamecnexiqudObfV26HashMix(s: String): Int {

  var h = 41
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 635
  return h
}
}


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV27ByteFold(s: String): Int {
  var x = 31
  for (i in s.indices) x = (x + s[i].code * 28) and 35023
  return x
}
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV27HashMix(s: String): Int {
  var h = 61
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 372
  return h
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 7
    val x = ((n xor 235) shl 4) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 201) and 5889
}
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV28ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 17) and 31116
    return x
}
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV28HashMix(s: String): Int {
    var h = 71
    for (i in s.indices) h = (h xor (s[i].code * 5)) % 208
    return h
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecDomanexiqudPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 120) and 31322
}
