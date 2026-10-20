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
import com.google.gson.JsonParser

object SoxojujotifoqPart01 {
    fun gevezumekemur(body: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecSoxojujotifoqPart0ObfV2HashMix("pon27") xor tqdoavrvyearrgamecSoxojujotifoqPart0ObfV2SumOdds(intArrayOf(27, 26, 13))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecSoxojujotifoqPart0ObfV1ClampMod(32, 67)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}

/* obfuscation-batch:v1 */
private fun tqdoavrvyearrgamecSoxojujotifoqPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 25) + 5
    val x = ((n xor 58) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun tqdoavrvyearrgamecSoxojujotifoqPart0ObfV2HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 19)) % 255
    return h
}
private fun tqdoavrvyearrgamecSoxojujotifoqPart0ObfV2SumOdds(nums: IntArray): Int {
    var acc = 43
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 17) % 520
    }
    return acc
}
