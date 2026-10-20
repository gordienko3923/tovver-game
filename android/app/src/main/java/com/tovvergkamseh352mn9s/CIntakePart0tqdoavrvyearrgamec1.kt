/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

object CIntakePart0tqdoavrvyearrgamec1 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("appId", "naming", "pad", "androidId", "pad", "app_version", "timezone", "oneLink", "manufacturer", "referer", "deviceID", "pad", "screen", "pad", "event")
    private val headerLayout = arrayOf("pad", "pushToken", "session_id", "device_model", "network")
    private val dummyBodyKeys = arrayOf("zojobu", "cakoguh", "digi")
    internal val extraQuery = linkedMapOf<String, String>()
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "cookie", "adId" to "body", "pushToken" to "header", "referer" to "cookie", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "body", "app_version" to "cookie", "androidId" to "cookie", "event" to "cookie", "device_model" to "header", "manufacturer" to "cookie", "locale" to "body", "timezone" to "cookie", "network" to "header", "screen" to "cookie", "session_id" to "header", "play_integrity_token" to "body")

    fun piqinixizohuci(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV32 = tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(18, 77) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(20, 7) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold("076jm")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV30 = tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = CIntakePObfV2tqdoavrvyearrgamec8Mix(1, 8) xor CIntatqdoavrvyearrgameckePObfV28Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold("2fu") xor CIntatqdoavrvyearrgameckePart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(51, 38)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(75, 29) xor CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold("vcu") xor CIntakePartqdoavrvyearrgamect01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(60, 62) xor CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(46, 5)
    val values = LinkedHashMap<String, String>()
    for (pair in fidegoqeh(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CIntaketqdoavrvyearrgamecPart02.kenehegimakig(cookieLayout, values)
    val header = CIntaketqdoavrvyearrgamecPart02.kenehegimakig(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CIntaketqdoavrvyearrgamecPart02.enc(key) + "=" + CIntaketqdoavrvyearrgamecPart02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CIntaketqdoavrvyearrgamecPart02.enc(key) + "=" + CIntaketqdoavrvyearrgamecPart02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun fidegoqeh(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV32 = tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(18, 77) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(20, 7) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold("076jm")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV30 = tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = CIntakePObfV2tqdoavrvyearrgamec8Mix(1, 8) xor CIntatqdoavrvyearrgameckePObfV28Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold("2fu") xor CIntatqdoavrvyearrgameckePart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(51, 38)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(75, 29) xor CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold("vcu") xor CIntakePartqdoavrvyearrgamect01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(60, 62) xor CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(46, 5)
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun hiqugobicemeru(base: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV32 = tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(18, 77) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(20, 7) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold("076jm")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV30 = tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = CIntakePObfV2tqdoavrvyearrgamec8Mix(1, 8) xor CIntatqdoavrvyearrgameckePObfV28Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold("2fu") xor CIntatqdoavrvyearrgameckePart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(51, 38)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(75, 29) xor CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold("vcu") xor CIntakePartqdoavrvyearrgamect01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(60, 62) xor CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(46, 5)
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/xo" + if (params.isEmpty()) "" else "?" + params
}

    fun negejesexa(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV32 = tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(18, 77) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(20, 7) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold("076jm")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV30 = tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = CIntakePObfV2tqdoavrvyearrgamec8Mix(1, 8) xor CIntatqdoavrvyearrgameckePObfV28Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold("2fu") xor CIntatqdoavrvyearrgameckePart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(51, 38)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(75, 29) xor CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold("vcu") xor CIntakePartqdoavrvyearrgamect01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(60, 62) xor CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(46, 5)
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV32 = tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(18, 77) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(20, 7) xor tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold("076jm")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV30 = tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = CIntakePObfV2tqdoavrvyearrgamec8Mix(1, 8) xor CIntatqdoavrvyearrgameckePObfV28Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold("2fu") xor CIntatqdoavrvyearrgameckePart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(intArrayOf(22, 12, 19)) xor CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(51, 38)

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(75, 29) xor CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold("vcu") xor CIntakePartqdoavrvyearrgamect01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(60, 62) xor CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(46, 5)
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}


/* obfuscation-batch:v25 */
private fun CIntakePart01ObfV25ClamptqdoavrvyearrgamecMod(n: Int, m: Int): Int {

  val span = (m % 10) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CtqdoavrvyearrgamecIntakePart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 125) and 16302
}


/* obfuscation-batch:v26 */
private fun CIntakePart01ObfV26ShiftqdoavrvyearrgamectXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 214) and 56254
}

private fun CIntaketqdoavrvyearrgamecPart01ObfV26ByteFold(s: String): Int {

  var x = 24
  for (i in s.indices) x = (x + s[i].code * 11) and 9283
  return x
}

private fun CIntakePartqdoavrvyearrgamect01ObfV26HashMix(s: String): Int {

  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 211
  return h
}


/* obfuscation-batch:v27 */
private fun CIntakePatqdoavrvyearrgamecrt01ObfV27ByteFold(s: String): Int {
  var x = 78
  for (i in s.indices) x = (x + s[i].code * 27) and 41952
  return x
}
private fun CIntatqdoavrvyearrgameckePart01ObfV27HashMix(s: String): Int {
  var h = 57
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 398
  return h
}
private fun CIntakePart01ObfV27SumOddstqdoavrvyearrgamec(nums: IntArray): Int {
  var acc = 38
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 74
  }
  return acc
}
private fun CIntakePart01ObfV27ClampMotqdoavrvyearrgamecd(n: Int, m: Int): Int {
  val span = (m % 59) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePObfV2tqdoavrvyearrgamec8Mix(a: Int, b: Int): Int {
    val base = 34
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun CIntatqdoavrvyearrgameckePObfV28Fold(text: String): Int {
    var acc = 34
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Mix(a: Int, b: Int): Int {
    val base = 44
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun tqdoavrvyearrgamecCIntakePapzurisymgeqmgallsefObfV29Fold(text: String): Int {
    var acc = 44
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Mix(a: Int, b: Int): Int {
    val base = 74
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun tqdoavrvyearrgamecCIntakePart0dgpnrismgemgalleObfV30Fold(text: String): Int {
    var acc = 74
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v31 */
private fun tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31SumOdds(nums: IntArray): Int {
    var acc = 63
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 27) % 326
    }
    return acc
}
private fun tqdoavrvyearrgamecCIntakePart0pmvqkrObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 6
    val x = ((n xor 76) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v32 */
private fun tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 11
    val x = ((n xor 54) shl 1) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 228) and 39687
}
private fun tqdoavrvyearrgamecCIntakePart0tqdoavObfV32ByteFold(s: String): Int {
    var x = 14
    for (i in s.indices) x = (x + s[i].code * 15) and 52717
    return x
}
