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

class Belutuvunufe(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(11, 34) xor tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(37, 36) xor tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold("da1ob") xor tqdoavrvyearrgamecBelutuvunufeObfV1HashMix("fk5")
        return "Qapaqexove"
    }

    @ReactMethod
    fun qajaropufizaxu(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(11, 34) xor tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(37, 36) xor tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold("da1ob") xor tqdoavrvyearrgamecBelutuvunufeObfV1HashMix("fk5")
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane + 11943
        dexLane = dexLane and 29900
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 51
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(11, 34) xor tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(37, 36) xor tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold("da1ob") xor tqdoavrvyearrgamecBelutuvunufeObfV1HashMix("fk5")
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = try {
            tegohidida { value -> finish(value) }
            true
        } catch (e: Exception) {
            false
        }
        if (!started) finish("")
    }

    private fun tegohidida(finish: (String) -> Unit) {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(11, 34) xor tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(37, 36) xor tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold("da1ob") xor tqdoavrvyearrgamecBelutuvunufeObfV1HashMix("fk5")
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(julibarutovuxi())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun julibarutovuxi(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(11, 34) xor tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(37, 36) xor tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold("da1ob") xor tqdoavrvyearrgamecBelutuvunufeObfV1HashMix("fk5")
        val alphabet = "0123456789abcdef"
        val rng = java.security.SecureRandom()
        val chars = CharArray(32)
        for (i in chars.indices) {
            chars[i] = alphabet[rng.nextInt(alphabet.length)]
        }
        return String(chars)
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v1 */
private fun tqdoavrvyearrgamecBelutuvunufeObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 4
    val x = ((n xor 59) shl 3) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecBelutuvunufeObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 229) and 12668
}
private fun tqdoavrvyearrgamecBelutuvunufeObfV1ByteFold(s: String): Int {
    var x = 16
    for (i in s.indices) x = (x + s[i].code * 19) and 52512
    return x
}
private fun tqdoavrvyearrgamecBelutuvunufeObfV1HashMix(s: String): Int {
    var h = 41
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 756
    return h
}
