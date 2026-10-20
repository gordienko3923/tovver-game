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

object SodosubizuwPart01 {
    fun dilowuzowugu(): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV29 = tqdoavrvyearrgamecSodosubizuwPart01ObfV29ClampMod(47, 54) xor tqdoavrvyearrgamecSodosubizuwPart01ObfV29ShiftXor(25, 72) xor tqdoavrvyearrgamecSodosubizuwPart01ObfV29ByteFold("ja1m3g") xor tqdoavrvyearrgamecSodosubizuwPart01ObfV29HashMix("an")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV28 = tqdoavrvyearrgamecSodosubizuwPart01ObfV28ShiftXor(56, 43)
    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = tqdoavrvyearrgamecSodosubizuwObfV27ShiftXor(34, 53)

    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

private fun tqdoavrvyearrgamecSodosubizuwObfV27ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 41) and 31827
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecSodosubizuwPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 92) and 49142
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecSodosubizuwPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 57) + 6
    val x = ((n xor 95) shl 1) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecSodosubizuwPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 61) and 17643
}
private fun tqdoavrvyearrgamecSodosubizuwPart01ObfV29ByteFold(s: String): Int {
    var x = 22
    for (i in s.indices) x = (x + s[i].code * 16) and 7666
    return x
}
private fun tqdoavrvyearrgamecSodosubizuwPart01ObfV29HashMix(s: String): Int {
    var h = 32
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 784
    return h
}
