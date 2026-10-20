/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCipherPartqdoavrvyearrgamect03 {
    fun nextU32(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV3 = tqdoavrvyearrgamecCCipherPartqdoavrvObfV3HashMix("d0bi5") xor tqdoavrvyearrgamecCCipherPartqdoavrvObfV3SumOdds(intArrayOf(15, 38, 1))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV1 = tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    var x = state[0]
    x = x xor (x shl 13)
    x = x xor (x ushr 17)
    x = x xor (x shl 5)
    state[0] = x
    return x
}

    fun gasahupux(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV3 = tqdoavrvyearrgamecCCipherPartqdoavrvObfV3HashMix("d0bi5") xor tqdoavrvyearrgamecCCipherPartqdoavrvObfV3SumOdds(intArrayOf(15, 38, 1))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV2 = tqdoavrvyearrgamecCCipherParpmvqkrmwObfV2ClampMod(72, 59)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV1 = tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Mix(14, 9) xor tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Fold("cciphe")
    val out = ByteArray(hex.length / 2)
    var i = 0
    while (i < out.size) {
        val at = i * 2
        out[i] = hex.substring(at, at + 2).toInt(16).toByte()
        i += 1
    }
    return out
}
}

private fun tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Mix(a: Int, b: Int): Int {
    val base = 64
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun tqdoavrvyearrgamecCCipherPardgpnrismgemgalleryObfV1Fold(text: String): Int {
    var acc = 64
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v2 */
private fun tqdoavrvyearrgamecCCipherParpmvqkrmwObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 53) + 12
    val x = ((n xor 164) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v3 */
private fun tqdoavrvyearrgamecCCipherPartqdoavrvObfV3HashMix(s: String): Int {
    var h = 64
    for (i in s.indices) h = (h xor (s[i].code * 36)) % 128
    return h
}
private fun tqdoavrvyearrgamecCCipherPartqdoavrvObfV3SumOdds(nums: IntArray): Int {
    var acc = 2
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 29) % 487
    }
    return acc
}
