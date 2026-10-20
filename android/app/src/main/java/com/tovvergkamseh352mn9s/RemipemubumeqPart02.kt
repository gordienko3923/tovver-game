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

object RemipemubumeqPart02 {
    fun tqdoavrvyearrgamecRemipemubumeqObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 209) and 49379
}

    fun tqdoavrvyearrgamecRemipemubumeqObfV1SumOdds(nums: IntArray): Int {
    var acc = 32
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 14) % 506
    }
    return acc
}
}
