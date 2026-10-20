/* autosetup-split:v1 */
package com.tovvergkamseh352mn9s

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCiptqdoavrvyearrgamecherPart01 {
    private val keyBytes = "NJkHLBHqmbU5z9TynPGmmc8q3XFT".toByteArray(StandardCharsets.UTF_8)
    private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
    private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
    private val MU_LENS = intArrayOf(61, 37)

    fun loqoworuwi(data: ByteArray): ByteArray {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold("4jm7m")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30HashMix("p070") xor tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30SumOdds(intArrayOf(36, 23, 14))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Mix(3, 15) xor tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Mix(16, 28) xor tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CCiphtqdoavrvyearrgamecerPart01ObfV27ByteFold("p4nw") xor CCipherPart01ObfV27tqdoavrvyearrgamecHashMix("u627b")

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CCipherPart01OtqdoavrvyearrgamecbfV26ShiftXor(11, 67) xor CCiphtqdoavrvyearrgamecerPart01ObfV26ByteFold("evan")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CCipherPart01ObfVtqdoavrvyearrgamec25ShiftXor(4, 22) xor CCtqdoavrvyearrgamecipherPart01ObfV25ByteFold("7b")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV24 = CCipherPart01ObfV24SumtqdoavrvyearrgamecOdds(intArrayOf(11, 13, 43)) xor CCitqdoavrvyearrgamecpherPart01ObfV24ClampMod(71, 48)
      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV23 = CCipherPart01ObfV2tqdoavrvyearrgamec3ClampMod(81, 15) xor CCipherPatqdoavrvyearrgamecrt01ObfV23ShiftXor1(15, 69)

    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV22 = CCtqdoavrvyearrgamecipherPart01ObfV22ByteFold("vpm")

        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV20 = CCipherPart0tqdoavrvyearrgamec1ObfV20ByteFold("bv") xor CCipherPart01OtqdoavrvyearrgamecbfV20HashMix("k983") xor CCipherPart01ObfV20StqdoavrvyearrgamecumOdds(intArrayOf(7, 14, 10)) xor CCitqdoavrvyearrgamecpherPart01ObfV20ClampMod(67, 21)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV19 = CCipherPart01ObftqdoavrvyearrgamecV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val tqdoavrvyearrgamecSinkV18 = CCipherPart01ObfV1tqdoavrvyearrgamec8ShiftXor(71, 22)
        @Suppress("Zovuwebaxa") val tqdoavrvyearrgamecSinkV17 = CCipherPatqdoavrvyearrgamecrt01ObfV17SumOdds(intArrayOf(7, 21, 2)) xor CtqdoavrvyearrgamecCipherPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObfV17ShiftXotqdoavrvyearrgamecr(27, 21) xor CCipherPart01ObfV17ByteFtqdoavrvyearrgamecold("hnm")
    val st = intArrayOf(CCipherPartqdoavrvyearrgamect02.bekebusiz(keyBytes))
    val chi = CHI_LENS.map { wenivewarog(st, it) }
    val psi = PSI_LENS.map { wenivewarog(st, it) }
    val mu = MU_LENS.map { wenivewarog(st, it) }
    val out = ByteArray(data.size)
    for (i in data.indices) {
        var chiB = 0
        var psiB = 0
        for (b in 0 until 8) {
            chiB = chiB or (chi[b].pins[chi[b].pos] shl b)
            psiB = psiB or (psi[b].pins[psi[b].pos] shl b)
        }
        out[i] = (data[i].toInt() xor chiB xor psiB).toByte()
        for (b in 0 until 8) {
            chi[b].pos = (chi[b].pos + 1) % chi[b].len
        }
        val mu0 = mu[0].pins[mu[0].pos]
        mu[0].pos = (mu[0].pos + 1) % mu[0].len
        if (mu0 != 0) {
            mu[1].pos = (mu[1].pos + 1) % mu[1].len
        }
        if (mu[1].pins[mu[1].pos] != 0) {
            for (b in 0 until 8) {
                psi[b].pos = (psi[b].pos + 1) % psi[b].len
            }
        }
    }
    return out
}

    fun wenivewarog(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold("4jm7m")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30HashMix("p070") xor tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30SumOdds(intArrayOf(36, 23, 14))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Mix(3, 15) xor tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Mix(16, 28) xor tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CCiphtqdoavrvyearrgamecerPart01ObfV27ByteFold("p4nw") xor CCipherPart01ObfV27tqdoavrvyearrgamecHashMix("u627b")

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CCipherPart01OtqdoavrvyearrgamecbfV26ShiftXor(11, 67) xor CCiphtqdoavrvyearrgamecerPart01ObfV26ByteFold("evan")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CCipherPart01ObfVtqdoavrvyearrgamec25ShiftXor(4, 22) xor CCtqdoavrvyearrgamecipherPart01ObfV25ByteFold("7b")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV24 = CCipherPart01ObfV24SumtqdoavrvyearrgamecOdds(intArrayOf(11, 13, 43)) xor CCitqdoavrvyearrgamecpherPart01ObfV24ClampMod(71, 48)
      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV23 = CCipherPart01ObfV2tqdoavrvyearrgamec3ClampMod(81, 15) xor CCipherPatqdoavrvyearrgamecrt01ObfV23ShiftXor1(15, 69)

    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV22 = CCtqdoavrvyearrgamecipherPart01ObfV22ByteFold("vpm")

        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV20 = CCipherPart0tqdoavrvyearrgamec1ObfV20ByteFold("bv") xor CCipherPart01OtqdoavrvyearrgamecbfV20HashMix("k983") xor CCipherPart01ObfV20StqdoavrvyearrgamecumOdds(intArrayOf(7, 14, 10)) xor CCitqdoavrvyearrgamecpherPart01ObfV20ClampMod(67, 21)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV19 = CCipherPart01ObftqdoavrvyearrgamecV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val tqdoavrvyearrgamecSinkV18 = CCipherPart01ObfV1tqdoavrvyearrgamec8ShiftXor(71, 22)
        @Suppress("Zovuwebaxa") val tqdoavrvyearrgamecSinkV17 = CCipherPatqdoavrvyearrgamecrt01ObfV17SumOdds(intArrayOf(7, 21, 2)) xor CtqdoavrvyearrgamecCipherPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObfV17ShiftXotqdoavrvyearrgamecr(27, 21) xor CCipherPart01ObfV17ByteFtqdoavrvyearrgamecold("hnm")
    val pins = IntArray(len)
    var ones = 0
    for (i in 0 until len) {
        pins[i] = CCipherPartqdoavrvyearrgamect02.nextU32(st) and 1
        ones += pins[i]
    }
    if (ones == 0) pins[0] = 1
    if (ones == len) pins[0] = 0
    val pos = CCipherPartqdoavrvyearrgamect02.u32Mod(CCipherPartqdoavrvyearrgamect02.nextU32(st), len)
    return Wheel(pins, pos)
}

    fun kisezofaqozuxo(bytes: ByteArray): String {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold("4jm7m")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV30 = tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30HashMix("p070") xor tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30SumOdds(intArrayOf(36, 23, 14))
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV29 = tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Mix(3, 15) xor tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkAutoV28 = tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Mix(16, 28) xor tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Fold("cciphe")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV27 = CCiphtqdoavrvyearrgamecerPart01ObfV27ByteFold("p4nw") xor CCipherPart01ObfV27tqdoavrvyearrgamecHashMix("u627b")

      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV26 = CCipherPart01OtqdoavrvyearrgamecbfV26ShiftXor(11, 67) xor CCiphtqdoavrvyearrgamecerPart01ObfV26ByteFold("evan")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV25 = CCipherPart01ObfVtqdoavrvyearrgamec25ShiftXor(4, 22) xor CCtqdoavrvyearrgamecipherPart01ObfV25ByteFold("7b")
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV24 = CCipherPart01ObfV24SumtqdoavrvyearrgamecOdds(intArrayOf(11, 13, 43)) xor CCitqdoavrvyearrgamecpherPart01ObfV24ClampMod(71, 48)
      @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV23 = CCipherPart01ObfV2tqdoavrvyearrgamec3ClampMod(81, 15) xor CCipherPatqdoavrvyearrgamecrt01ObfV23ShiftXor1(15, 69)

    @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV22 = CCtqdoavrvyearrgamecipherPart01ObfV22ByteFold("vpm")

        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV20 = CCipherPart0tqdoavrvyearrgamec1ObfV20ByteFold("bv") xor CCipherPart01OtqdoavrvyearrgamecbfV20HashMix("k983") xor CCipherPart01ObfV20StqdoavrvyearrgamecumOdds(intArrayOf(7, 14, 10)) xor CCitqdoavrvyearrgamecpherPart01ObfV20ClampMod(67, 21)
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV19 = CCipherPart01ObftqdoavrvyearrgamecV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val tqdoavrvyearrgamecSinkV18 = CCipherPart01ObfV1tqdoavrvyearrgamec8ShiftXor(71, 22)
        @Suppress("Zovuwebaxa") val tqdoavrvyearrgamecSinkV17 = CCipherPatqdoavrvyearrgamecrt01ObfV17SumOdds(intArrayOf(7, 21, 2)) xor CtqdoavrvyearrgamecCipherPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObfV17ShiftXotqdoavrvyearrgamecr(27, 21) xor CCipherPart01ObfV17ByteFtqdoavrvyearrgamecold("hnm")
    val hex = "0123456789ABCDEF"
    val chars = CharArray(bytes.size * 2)
    for (i in bytes.indices) {
        val v = bytes[i].toInt() and 0xFF
        chars[i * 2] = hex[v ushr 4]
        chars[i * 2 + 1] = hex[v and 0x0F]
    }
    return String(chars)
}
}
/* obfuscation-batch:v17 */
private fun CCipherPatqdoavrvyearrgamecrt01ObfV17SumOdds(nums: IntArray): Int {

  var acc = 25
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 640
  }
  return acc
}

private fun CtqdoavrvyearrgamecCipherPart01ObfV17ClampMod(n: Int, m: Int): Int {

  val span = (m % 60) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPart01ObfV17ShiftXotqdoavrvyearrgamecr(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 16) and 41478
}

private fun CCipherPart01ObfV17ByteFtqdoavrvyearrgamecold(s: String): Int {

  var x = 11
  for (i in s.indices) x = (x + s[i].code * 35) xor 157
  return x and 32953
}
/* obfuscation-batch:v18 */
private fun CCipherPart01ObfV1tqdoavrvyearrgamec8ShiftXor(n: Int, k: Int): Int {



  val x = (n xor k) shl 5
  return (x xor 100) and 64451
}
/* obfuscation-batch:v19 */
private fun CCipherPart01ObftqdoavrvyearrgamecV19ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 152) and 57453
}
/* obfuscation-batch:v20 */
private fun CCipherPart0tqdoavrvyearrgamec1ObfV20ByteFold(s: String): Int {



  var x = 65
  for (i in s.indices) x = (x + s[i].code * 15) xor 198
  return x and 33256
}

private fun CCipherPart01OtqdoavrvyearrgamecbfV20HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold("4jm7m")

  var h = 53
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 572
  return h
}

private fun CCipherPart01ObfV20StqdoavrvyearrgamecumOdds(nums: IntArray): Int {

  var acc = 9
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 321
  }
  return acc
}

private fun CCitqdoavrvyearrgamecpherPart01ObfV20ClampMod(n: Int, m: Int): Int {



  val span = (m % 57) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun CCipherPart01ObfV2tqdoavrvyearrgamec1HashMix(s: String): Int {

  var h = 22
  for (i in s.indices) h = (h xor (s[i].code * 40)) % 450
  return h
}

private fun CCtqdoavrvyearrgamecipherPart01ObfV21SumOdds(nums: IntArray): Int {

  var acc = 35
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 22) % 321
  }
  return acc
}

private fun CtqdoavrvyearrgamecCipherPart01ObfV21ClampMod(n: Int, m: Int): Int {

  val span = (m % 36) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPart01ObfV21ShiftqdoavrvyearrgamectXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 38) and 12973
}
@Suppress("UNUSED_VARIABLE") private val CCipherPatqdoavrvyearrgamecrt01SinkV21Boot = CCipherPart01ObfV2tqdoavrvyearrgamec1HashMix("6f8") xor CCtqdoavrvyearrgamecipherPart01ObfV21SumOdds(intArrayOf(28, 21, 13)) xor CtqdoavrvyearrgamecCipherPart01ObfV21ClampMod(12, 52) xor CCipherPart01ObfV21ShiftqdoavrvyearrgamectXor(46, 13)

/* obfuscation-batch:v22 */
private fun CCtqdoavrvyearrgamecipherPart01ObfV22ByteFold(s: String): Int {

  var x = 89
  for (i in s.indices) x = (x + s[i].code * 34) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecCCipherPart01SinkV22Boot = CCtqdoavrvyearrgamecipherPart01ObfV22ByteFold("vpm")
/* obfuscation-batch:v23 */
private fun CCipherPart01ObfV2tqdoavrvyearrgamec3ClampMod(n: Int, m: Int): Int {

  val span = (m % 50) + 5
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPatqdoavrvyearrgamecrt01ObfV23ShiftXor1(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 130) and 61110
}
@Suppress("UNUSED_VARIABLE") private val tqdoavrvyearrgamecCCipherPart01SinkV23Boot = CCipherPart01ObfV2tqdoavrvyearrgamec3ClampMod(81, 15) xor CCipherPatqdoavrvyearrgamecrt01ObfV23ShiftXor1(15, 69)
/* obfuscation-batch:v24 */
private fun CCipherPart01ObfV24SumtqdoavrvyearrgamecOdds(nums: IntArray): Int {

  var acc = 39
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 31) % 323
  }
  return acc
}

private fun CCitqdoavrvyearrgamecpherPart01ObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 56) + 5
  val x = n % span
  return if (x < 0) x + span else x
}


/* obfuscation-batch:v25 */
private fun CCipherPart01ObfVtqdoavrvyearrgamec25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 206) and 50659
}

private fun CCtqdoavrvyearrgamecipherPart01ObfV25ByteFold(s: String): Int {

  var x = 29
  for (i in s.indices) x = (x + s[i].code * 15) and 31162
  return x
}


/* obfuscation-batch:v26 */
private fun CCipherPart01OtqdoavrvyearrgamecbfV26ShiftXor(n: Int, k: Int): Int {
        @Suppress("UNUSED_VARIABLE") val tqdoavrvyearrgamecSinkV31 = tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold("4jm7m")

  val x = (n xor k) shl 4
  return (x xor 202) and 57485
}

private fun CCiphtqdoavrvyearrgamecerPart01ObfV26ByteFold(s: String): Int {

  var x = 51
  for (i in s.indices) x = (x + s[i].code * 30) and 32512
  return x
}


/* obfuscation-batch:v27 */
private fun CCiphtqdoavrvyearrgamecerPart01ObfV27ByteFold(s: String): Int {
  var x = 36
  for (i in s.indices) x = (x + s[i].code * 32) and 33196
  return x
}
private fun CCipherPart01ObfV27tqdoavrvyearrgamecHashMix(s: String): Int {
  var h = 13
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 375
  return h
}

private fun tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Mix(a: Int, b: Int): Int {
    val base = 83
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun tqdoavrvyearrgamecCCipherPartprissmgecmsgallieObfV28Fold(text: String): Int {
    var acc = 83
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Mix(a: Int, b: Int): Int {
    val base = 70
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun tqdoavrvyearrgamecCCipherPartpzurisymgeqmgallsObfV29Fold(text: String): Int {
    var acc = 70
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v30 */
private fun tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30HashMix(s: String): Int {
    var h = 39
    for (i in s.indices) h = (h xor (s[i].code * 8)) % 135
    return h
}
private fun tqdoavrvyearrgamecCCippmvqkrmwismgemObfV30SumOdds(nums: IntArray): Int {
    var acc = 81
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 729
    }
    return acc
}

/* obfuscation-batch:v31 */
private fun tqdoavrvyearrgamecCCiptqdoavrvyearrgObfV31ByteFold(s: String): Int {
    var x = 2
    for (i in s.indices) x = (x + s[i].code * 21) and 2929
    return x
}
