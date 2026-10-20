/* cf-intake:v1 */
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

class Jesugosinula(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        return "Jesugosinula"
    }

    @ReactMethod
    fun cexosuhok(fields: ReadableArray, bodyPlain: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        try {
            promise.resolve(colatuxifime(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun guwupizigite(json: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        try {
            promise.resolve(wexorocoj(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun favawusamutizo(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        Thread {
            try {
                val connection = (URL(pebohalise(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "cir" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Gulu", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }

    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("pad", "pushToken", "appId", "app_version", "manufacturer", "referer", "network", "device_model")
    private val headerLayout = arrayOf("session_id", "pad", "adId", "oneLink", "pad", "event", "naming")
    private val dummyBodyKeys = arrayOf("xogom", "kuqikin")
    private val extraQuery = linkedMapOf("jiw" to "tiqok")
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "body", "adId" to "header", "pushToken" to "cookie", "referer" to "cookie", "oneLink" to "header", "naming" to "header", "userAgent" to "body", "app_version" to "cookie", "androidId" to "body", "event" to "header", "device_model" to "cookie", "manufacturer" to "cookie", "locale" to "body", "timezone" to "body", "network" to "cookie", "screen" to "body", "session_id" to "header", "play_integrity_token" to "body")

    private fun colatuxifime(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        val values = LinkedHashMap<String, String>()
        for (pair in qucuqolanomuw(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = kenehegimakig(cookieLayout, values)
        val header = kenehegimakig(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(hufurusewireqi(key) + "=" + hufurusewireqi(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(hufurusewireqi(key) + "=" + hufurusewireqi((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    private fun kenehegimakig(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    private fun qucuqolanomuw(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    private fun hufurusewireqi(value: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        return URLEncoder.encode(value, "UTF-8")
    }

    private fun pebohalise(base: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/mi" + if (params.isEmpty()) "" else "?" + params
    }

    private fun wexorocoj(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        val map = Arguments.createMap()
        zusucufaliwa(map, "redirectUrl", joketirihan(obj, "te", "redirectUrl"))
        zusucufaliwa(map, "redirectUrlInitial", joketirihan(obj, "wa", "redirectUrlInitial"))
        zusucufaliwa(map, "error", joketirihan(obj, "ged", "error"))
        map.putBoolean("blockUser", pirihureq(wekavodikufo(obj, "jag", "blockUser")))
        return map
    }

    private fun zusucufaliwa(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    private fun joketirihan(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        val raw = wekavodikufo(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    private fun wekavodikufo(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }

    private fun pirihureq(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecJesugosinulaObfV2ByteFold("fm1g") xor tqdoavrvyearrgamecJesugosinulaObfV2HashMix("6f8") xor tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(intArrayOf(22, 33, 40)) xor tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(75, 2)
        return when (value) {
        null -> false
        is Boolean -> value
        is Number -> value.toDouble() != 0.0
        is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
        else -> true
    }
    }

}

/* obfuscation-batch:v2 */
private fun tqdoavrvyearrgamecJesugosinulaObfV2ByteFold(s: String): Int {
    var x = 73
    for (i in s.indices) x = (x + s[i].code * 21) and 25129
    return x
}
private fun tqdoavrvyearrgamecJesugosinulaObfV2HashMix(s: String): Int {
    var h = 49
    for (i in s.indices) h = (h xor (s[i].code * 26)) % 489
    return h
}
private fun tqdoavrvyearrgamecJesugosinulaObfV2SumOdds(nums: IntArray): Int {
    var acc = 72
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 4) % 138
    }
    return acc
}
private fun tqdoavrvyearrgamecJesugosinulaObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 38) + 7
    val x = ((n xor 235) shl 3) % span
    return if (x < 0) x + span else x
}
