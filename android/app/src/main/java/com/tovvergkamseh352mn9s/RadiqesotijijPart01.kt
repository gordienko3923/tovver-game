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

object RadiqesotijijPart01 {
    fun suwobupobok(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ClampMod(51, 42) xor tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ShiftXor(13, 44) xor tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ByteFold("ho3") xor tqdoavrvyearrgamecRadiqesotijijPart0ObfV2HashMix("1m9g3")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV1 = tqdoavrvyearrgamecRadiqesotijijPart0ObfV1HashMix("il") xor tqdoavrvyearrgamecRadiqesotijijPart0ObfV1SumOdds(intArrayOf(39, 14, 25)) xor tqdoavrvyearrgamecRadiqesotijijPart0ObfV1ClampMod(40, 59)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

/* obfuscation-batch:v1 */
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV1HashMix(s: String): Int {
    var h = 72
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 544
    return h
}
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV1SumOdds(nums: IntArray): Int {
    var acc = 88
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 292
    }
    return acc
}
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 24) + 5
    val x = ((n xor 18) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 41) + 8
    val x = ((n xor 233) shl 3) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 155) and 14490
}
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV2ByteFold(s: String): Int {
    var x = 74
    for (i in s.indices) x = (x + s[i].code * 22) and 49798
    return x
}
private fun tqdoavrvyearrgamecRadiqesotijijPart0ObfV2HashMix(s: String): Int {
    var h = 89
    for (i in s.indices) h = (h xor (s[i].code * 13)) % 228
    return h
}
