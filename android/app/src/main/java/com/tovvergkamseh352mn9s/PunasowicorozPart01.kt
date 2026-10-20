/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

object PunasowicorozPart01 {
    fun PunasowicorozObfV21ByttqdoavrvyearrgameceFold(s: String): Int {



  var x = 22
  for (i in s.indices) x = (x + s[i].code * 12) and 65535
  return x
}

    fun tqdoavrvyearrgamecQonewozucuvonObfV20HashMix(s: String): Int {

  var h = 41
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 641
  return h
}

    fun PexazavaluObfVtqdoavrvyearrgamec19HashMix(s: String): Int {

  var h = 27
  for (i in s.indices) h = (h xor (s[i].code * 23)) % 583
  return h
}
}

/* obfuscation-batch:v22 */
private fun PunasowicorozPart0tqdoavrvyearrgamec1ObfV22ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 84) and 17092
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecPunasowicorozPart01SinkV22Boot = PunasowicorozPart0tqdoavrvyearrgamec1ObfV22ShiftXor(41, 44)
/* obfuscation-batch:v23 */
private fun PunasowicorotqdoavrvyearrgameczPart01ObfV23SumOdds(nums: IntArray): Int {

  var acc = 57
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 28) % 625
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecPunasowicorozPart01SinkV23Boot = PunasowicorotqdoavrvyearrgameczPart01ObfV23SumOdds(intArrayOf(19, 5, 31))
/* obfuscation-batch:v24 */
private fun PunasowicorozPart01ObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 238) and 24895
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecBootV24 = PunasowicorozPart01ObfV24ShiftXor(11, 44)


/* obfuscation-batch:v25 */
private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV25ByteFold(s: String): Int {

  var x = 82
  for (i in s.indices) x = (x + s[i].code * 34) and 34912
  return x
}

private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV25HashMix(s: String): Int {

  var h = 81
  for (i in s.indices) h = (h xor (s[i].code * 27)) % 829
  return h
}

private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 30
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 744
  }
  return acc
}

private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 19) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecBootV25 = tqdoavrvyearrgamecPunasowicorozPart01ObfV25ByteFold("w2") xor tqdoavrvyearrgamecPunasowicorozPart01ObfV25HashMix("r8") xor tqdoavrvyearrgamecPunasowicorozPart01ObfV25SumOdds(intArrayOf(3, 8, 8)) xor tqdoavrvyearrgamecPunasowicorozPart01ObfV25ClampMod(41, 8)


/* obfuscation-batch:v26 */
private fun PunasowictqdoavrvyearrgamecorozPart01ObfV26HashMix(s: String): Int {

  var h = 44
  for (i in s.indices) h = (h xor (s[i].code * 13)) % 122
  return h
}

private fun PunasowicorozPart01ObfV26SumtqdoavrvyearrgamecOdds(nums: IntArray): Int {

  var acc = 56
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 9) % 682
  }
  return acc
}

private fun PunasowicortqdoavrvyearrgamecozPart01ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 45) + 11
  val x = n % span
  return if (x < 0) x + span else x
}

private fun PunasowicorozPart01tqdoavrvyearrgamecObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 89) and 21083
}
@Suppress("UNUSED_VARIABLE")
private val tqdoavrvyearrgamecBootV26 = PunasowictqdoavrvyearrgamecorozPart01ObfV26HashMix("4vb") xor PunasowicorozPart01ObfV26SumtqdoavrvyearrgamecOdds(intArrayOf(33, 15, 15)) xor PunasowicortqdoavrvyearrgamecozPart01ObfV26ClampMod(46, 11) xor PunasowicorozPart01tqdoavrvyearrgamecObfV26ShiftXor(88, 54)


/* obfuscation-batch:v27 */
private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 74
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 21) % 121
  }
  return acc
}
private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 25) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 202) and 15964
}
private fun tqdoavrvyearrgamecPunasowicorozPart01ObfV27ByteFold(s: String): Int {
  var x = 43
  for (i in s.indices) x = (x + s[i].code * 18) and 14930
  return x
}

/* obfuscation-batch:v28 */
private fun tqdoavrvyearrgamecPunasowicorozPart0ObfV28SumOdds(nums: IntArray): Int {
    var acc = 85
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 39) % 301
    }
    return acc
}
private fun tqdoavrvyearrgamecPunasowicorozPart0ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 58) + 9
    val x = ((n xor 45) shl 4) % span
    return if (x < 0) x + span else x
}
private fun tqdoavrvyearrgamecPunasowicorozPart0ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 77) and 45598
}

/* obfuscation-batch:v29 */
private fun tqdoavrvyearrgamecPunasowicorozPart0ObfV29ByteFold(s: String): Int {
    var x = 20
    for (i in s.indices) x = (x + s[i].code * 16) and 31700
    return x
}
private fun tqdoavrvyearrgamecPunasowicorozPart0ObfV29HashMix(s: String): Int {
    var h = 57
    for (i in s.indices) h = (h xor (s[i].code * 9)) % 349
    return h
}
