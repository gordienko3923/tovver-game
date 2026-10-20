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

object RemipemubumeqPart01 {
    fun qumanozoreje(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecRemipemubumeqPart0ObfV2SumOdds(intArrayOf(29, 28, 31)) xor tqdoavrvyearrgamecRemipemubumeqPart0ObfV2ClampMod(54, 33)
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecRemipemubumeqObfV1ShiftXor(51, 26) xor tqdoavrvyearrgamecRemipemubumeqObfV1ByteFold("hm") xor tqdoavrvyearrgamecRemipemubumeqObfV1HashMix("k9mn4") xor tqdoavrvyearrgamecRemipemubumeqObfV1SumOdds(intArrayOf(4, 23, 14))
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun tqdoavrvyearrgamecRemipemubumeqObfV1HashMix(s: String): Int {
    var h = 12
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 181
    return h
}
}

/* obfuscation-batch:v2 */
private fun tqdoavrvyearrgamecRemipemubumeqPart0ObfV2SumOdds(nums: IntArray): Int {
    var acc = 88
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 401
    }
    return acc
}
private fun tqdoavrvyearrgamecRemipemubumeqPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 58) + 2
    val x = ((n xor 150) shl 6) % span
    return if (x < 0) x + span else x
}

private fun tqdoavrvyearrgamecRemipemubumeqObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 51) and 48011
}

private fun tqdoavrvyearrgamecRemipemubumeqObfV1ByteFold(s: String): Int {
    var x = 19
    for (i in s.indices) x = (x + s[i].code * 13) and 32749
    return x
}

private fun tqdoavrvyearrgamecRemipemubumeqObfV1SumOdds(nums: IntArray): Int {
    var acc = 14
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 9) % 311
    }
    return acc
}
