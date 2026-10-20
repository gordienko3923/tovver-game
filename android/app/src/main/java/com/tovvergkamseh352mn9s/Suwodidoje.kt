/* net-stack:v1 volley+gson */
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

class Suwodidoje(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecSuwodidojeObfV1ClampMod(38, 49) xor tqdoavrvyearrgamecSuwodidojeObfV1ShiftXor(8, 43) xor tqdoavrvyearrgamecSuwodidojeObfV1ByteFold("4lm")
        return "Johitixusenuco"
    }

    @ReactMethod
    fun jozezugozo(url: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecSuwodidojeObfV1ClampMod(38, 49) xor tqdoavrvyearrgamecSuwodidojeObfV1ShiftXor(8, 43) xor tqdoavrvyearrgamecSuwodidojeObfV1ByteFold("4lm")
        val callbackExecutor = Executors.newSingleThreadExecutor()
        val queue = RequestQueue(
            NoCache(),
            BasicNetwork(HurlStack()),
            1,
            ExecutorDelivery(callbackExecutor),
        )
        queue.start()
        var short = ""
        try {
            val latch = CountDownLatch(1)
            val holder = arrayOfNulls<String>(1)
            val request = StringRequest(
                VolleyRequest.Method.GET,
                url,
                { body ->
                    holder[0] = body
                    latch.countDown()
                },
                { _ ->
                    latch.countDown()
                },
            )
            request.setShouldCache(false)
            request.retryPolicy = DefaultRetryPolicy(8000, 0, 1f)
            queue.add(request)
            if (latch.await(8, TimeUnit.SECONDS)) {
                val body = holder[0]
                if (body != null) short = tazidebonesew(body)
            } else {
                request.cancel()
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            queue.stop()
            callbackExecutor.shutdownNow()
        }
        promise.resolve(short)
    }

    private fun tazidebonesew(body: String): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecSuwodidojeObfV1ClampMod(38, 49) xor tqdoavrvyearrgamecSuwodidojeObfV1ShiftXor(8, 43) xor tqdoavrvyearrgamecSuwodidojeObfV1ByteFold("4lm")
        val element = JsonParser.parseString(body)
        return element.toString().length.toString()
    }
}

/* obfuscation-batch:v1 */
private fun tqdoavrvyearrgamecSuwodidojeObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 12
    val x = ((n xor 246) shl 1) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecSuwodidojeObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 22) and 47225
}
private fun tqdoavrvyearrgamecSuwodidojeObfV1ByteFold(s: String): Int {
    var x = 70
    for (i in s.indices) x = (x + s[i].code * 6) and 29693
    return x
}
