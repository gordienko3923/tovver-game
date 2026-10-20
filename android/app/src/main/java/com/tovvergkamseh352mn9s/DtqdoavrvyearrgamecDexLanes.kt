/* dex-lanes:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane and 31092
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 1924
        }
        val laneNums = intArrayOf(191, 148, 72)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 29308
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        val laneWord = "oogk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 9252
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 26
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3394
            1 -> dexLane + 2316
            else -> dexLane + 959
        }
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 32787
        dexLane = dexLane.inv()
        dexLane = dexLane * 18
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 3905
        }
        dexLane = dexLane ushr 7
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 17669
        dexLane = dexLane and 15578
        val laneWord = "mkme"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 34
        dexLane = dexLane + 19349
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 719
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 2270
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(93, 27, 102)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "lfln"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 10806
        dexLane = dexLane ushr 6
        dexLane = dexLane + 12472
        val laneWord = "pide"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 35
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 23742
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 20363
        dexLane = dexLane ushr 10
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2009
            1 -> dexLane + 399
            else -> dexLane + 2838
        }
        dexLane = dexLane and 9229
        dexLane = dexLane ushr 11
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 12739
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1547
            1 -> dexLane + 675
            else -> dexLane + 405
        }
        dexLane = dexLane and 28539
        dexLane = dexLane or 15564
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 3003
        }
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 13
        dexLane = dexLane + 8780
        dexLane = dexLane.inv()
        dexLane = dexLane and 3674
        dexLane = dexLane ushr 5
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(93, 173, 86)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 33201
        dexLane = dexLane * 40
        dexLane = dexLane xor 17332
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 21951
        dexLane = dexLane * 33
        dexLane = dexLane and 15799
        dexLane = dexLane or 29729
        dexLane = dexLane ushr 1
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 9543
        val laneNums = intArrayOf(106, 116, 165)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 16
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1248
            1 -> dexLane + 1577
            else -> dexLane + 1881
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 2484
        }
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 24727
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(165, 4, 187)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 37
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(5, 187, 118)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 5796
        dexLane = dexLane % 12
        dexLane = dexLane or 16618
        val laneWord = "lnek"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 336
            1 -> dexLane + 1622
            else -> dexLane + 2641
        }
        dexLane = dexLane * 32
        dexLane = dexLane % 17
        dexLane = dexLane xor 7995
        if ((dexLane and 3) == 0) {
            dexLane = dexLane + 2364
        }
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        val laneWord = "npmm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 8
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 3039
        }
        dexLane = dexLane shl 5
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2680
            1 -> dexLane + 1797
            else -> dexLane + 271
        }
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 4
        dexLane = dexLane % 82
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 3474
        }
        dexLane = dexLane shl 8
        val laneWord = "edkd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 43463
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 782
        }
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(70, 88, 115)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 36995
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 4
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 2224
        }
        dexLane = dexLane.inv()
        dexLane = dexLane + 28395
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 4194
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3192
            1 -> dexLane + 1385
            else -> dexLane + 3577
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 10
        val laneNums = intArrayOf(54, 54, 124)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 10
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 3196
        }
        dexLane = dexLane and 2583
        val laneWord = "ekpa"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 104
            1 -> dexLane + 2016
            else -> dexLane + 3564
        }
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3814
            1 -> dexLane + 323
            else -> dexLane + 2860
        }
        dexLane = dexLane shl 5
        dexLane = dexLane.inv()
        val laneWord = "aknk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 19814
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 2134
        }
        dexLane = dexLane.inv()
        dexLane = dexLane % 38
        dexLane = dexLane ushr 12
        dexLane = dexLane + 34009
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 40
        dexLane = dexLane ushr 6
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 3703
        }
        dexLane = dexLane + 14412
        dexLane = dexLane % 47
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 26
        dexLane = dexLane xor 49350
        dexLane = dexLane * 10
        dexLane = dexLane.inv()
        dexLane = dexLane or 56184
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 31718
        dexLane = dexLane xor 26722
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "ggop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 2923
        dexLane = dexLane * 12
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 2
        dexLane = dexLane + 13072
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 5636
        dexLane = dexLane or 7084
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 39
        }
        dexLane = dexLane ushr 9
        dexLane = dexLane shl 12
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 7
        dexLane = dexLane * 16
        val laneWord = "lded"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 8
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1184
            1 -> dexLane + 1495
            else -> dexLane + 3091
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 12
        dexLane = dexLane % 65
        val laneNums = intArrayOf(43, 139, 131)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        val laneNums = intArrayOf(144, 73, 29)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 27359
        if ((dexLane and 12) == 0) {
            dexLane = dexLane + 3467
        }
        dexLane = dexLane + 14732
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 455
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2864
            1 -> dexLane + 283
            else -> dexLane + 2521
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 7
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 1991
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 41940
        dexLane = dexLane shl 3
        dexLane = dexLane and 15428
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 13980
        dexLane = dexLane * 38
        dexLane = dexLane % 24
        dexLane = dexLane + 14471
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 27) == 0) {
            dexLane = dexLane + 1409
        }
        dexLane = dexLane ushr 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2169
            1 -> dexLane + 3602
            else -> dexLane + 2228
        }
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        val laneWord = "hpin"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 1
        dexLane = dexLane + 7888
        dexLane = dexLane or 53424
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(113, 66, 154)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 2122
        }
        dexLane = dexLane ushr 3
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 34708
        dexLane = dexLane * 30
        val laneNums = intArrayOf(19, 153, 180)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 19458
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 22064
        dexLane = dexLane shl 8
        dexLane = dexLane ushr 10
        dexLane = dexLane and 27229
        dexLane = dexLane % 4
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 33859
        dexLane = dexLane and 1157
        dexLane = dexLane % 36
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 47733
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 48040
        dexLane = dexLane and 7935
        dexLane = dexLane ushr 4
        dexLane = dexLane * 18
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 50360
        if ((dexLane and 8) == 0) {
            dexLane = dexLane + 917
        }
        dexLane = dexLane.inv()
        dexLane = dexLane * 25
        dexLane = dexLane or 24801
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 1
        dexLane = dexLane * 32
        dexLane = dexLane + 6893
        val laneNums = intArrayOf(16, 201, 40)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 7970
        dexLane = dexLane xor 2158
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 2054
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1505
            1 -> dexLane + 3678
            else -> dexLane + 1705
        }
        dexLane = dexLane % 15
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 21385
        dexLane = dexLane % 3
        dexLane = dexLane.inv()
        val laneWord = "pbng"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane and 19585
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 5810
        dexLane = dexLane * 20
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 60
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 15
        dexLane = dexLane + 17758
        if ((dexLane and 24) == 0) {
            dexLane = dexLane + 59
        }
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        val laneWord = "gdek"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3253
            1 -> dexLane + 561
            else -> dexLane + 3258
        }
        dexLane = dexLane and 365
        if ((dexLane and 3) == 0) {
            dexLane = dexLane + 2995
        }
        dexLane = dexLane or 51153
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 1980
        dexLane = dexLane shl 3
        dexLane = dexLane % 16
        dexLane = dexLane xor 32068
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 30474
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "deip"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 44
        dexLane = dexLane + 57303
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(12, 34, 98)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 30844
        val laneWord = "dmam"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane * 38
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 44797
        dexLane = dexLane shl 2
        val laneNums = intArrayOf(33, 17, 182)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 34578
        dexLane = dexLane * 24
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2244
            1 -> dexLane + 852
            else -> dexLane + 3929
        }
        dexLane = dexLane or 20099
        dexLane = dexLane * 39
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(149, 83, 47)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 22452
        dexLane = dexLane xor 52160
        dexLane = dexLane % 54
        dexLane = dexLane or 41989
        val laneWord = "biki"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        dexLane = dexLane.inv()
        dexLane = dexLane xor 5360
        val laneWord = "kicj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 1815
        }
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        val laneWord = "gbaf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(53, 39, 192)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 18470
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3126
            1 -> dexLane + 3524
            else -> dexLane + 2784
        }
        dexLane = dexLane xor 33426
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        val laneWord = "iggb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 29547
        dexLane = dexLane * 36
        dexLane = dexLane shl 12
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 28195
        dexLane = dexLane * 29
        dexLane = dexLane or 38840
        dexLane = dexLane.inv()
        dexLane = dexLane % 24
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 2696
        }
        dexLane = dexLane and 17563
        dexLane = dexLane xor 683
        val laneNums = intArrayOf(96, 118, 88)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 9
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kban"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 1715
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 7
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 273
            1 -> dexLane + 3903
            else -> dexLane + 3957
        }
        dexLane = dexLane + 34907
        dexLane = dexLane.inv()
        dexLane = dexLane * 27
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 2784
        }
        dexLane = dexLane ushr 9
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneNums = intArrayOf(37, 136, 171)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "apaf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1192
            1 -> dexLane + 3764
            else -> dexLane + 3099
        }
        dexLane = dexLane ushr 12
        dexLane = dexLane xor 31911
        val laneWord = "pejm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 18828
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ljka"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane % 7
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 289
        }
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(19, 28, 42)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "hloc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 46490
        dexLane = dexLane shl 7
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3571
            1 -> dexLane + 1115
            else -> dexLane + 698
        }
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(108, 109, 168)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 129
        }
        dexLane = dexLane * 16
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 22402
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane + 32129
        dexLane = dexLane * 13
        dexLane = dexLane xor 50611
        val laneWord = "njll"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 30385
        dexLane = dexLane xor 51236
        dexLane = dexLane % 40
        val laneWord = "hpjd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 27
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 9
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1255
            1 -> dexLane + 3494
            else -> dexLane + 2374
        }
        dexLane = dexLane xor 21086
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 76
        dexLane = dexLane and 31016
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 58522
        dexLane = dexLane xor 57530
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 42
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 12
        dexLane = dexLane % 5
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 59609
        dexLane = dexLane ushr 3
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 1033
        }
        dexLane = dexLane * 8
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3594
            1 -> dexLane + 3359
            else -> dexLane + 3843
        }
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 542
        }
        dexLane = dexLane.inv()
        val laneWord = "hdbn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane shl 12
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 4
        dexLane = dexLane * 29
        if ((dexLane and 14) == 0) {
            dexLane = dexLane + 2301
        }
        dexLane = dexLane and 12299
        dexLane = dexLane ushr 2
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(202, 92, 97)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 39
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2337
            1 -> dexLane + 1932
            else -> dexLane + 3792
        }
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane shl 1
        val laneNums = intArrayOf(105, 17, 114)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 10) == 0) {
            dexLane = dexLane + 1294
        }
        dexLane = dexLane * 3
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 7159
        dexLane = dexLane.inv()
        dexLane = dexLane + 49554
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 29
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3009
            1 -> dexLane + 2077
            else -> dexLane + 1663
        }
        dexLane = dexLane * 36
        if ((dexLane and 17) == 0) {
            dexLane = dexLane + 2330
        }
        dexLane = dexLane or 55234
        dexLane = dexLane xor 36055
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 31
        dexLane = dexLane shl 11
        dexLane = dexLane.inv()
        dexLane = dexLane or 26314
        dexLane = dexLane * 15
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(98, 26, 93)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "gokk"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 23600
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 37
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 38
        dexLane = dexLane and 7095
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1122
            1 -> dexLane + 3263
            else -> dexLane + 862
        }
        val laneWord = "neme"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(161, 93, 202)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 35
        dexLane = dexLane or 29903
        val laneWord = "cdld"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 34689
        dexLane = dexLane and 2386
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3246
            1 -> dexLane + 3474
            else -> dexLane + 3523
        }
        dexLane = dexLane or 38785
        dexLane = dexLane xor 48712
        val laneNums = intArrayOf(170, 180, 67)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 29
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 12
        dexLane = dexLane % 34
        dexLane = dexLane ushr 6
        dexLane = dexLane or 17723
        dexLane = dexLane xor 37501
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 7115
        dexLane = dexLane % 19
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1235
            1 -> dexLane + 2701
            else -> dexLane + 3494
        }
        dexLane = dexLane ushr 7
        dexLane = dexLane and 26849
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 45508
        dexLane = dexLane shl 2
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 21368
        val laneNums = intArrayOf(113, 122, 195)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 48
        dexLane = dexLane.inv()
        dexLane = dexLane and 27733
        dexLane = dexLane ushr 6
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 11047
        val laneWord = "mkpn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 30401
        dexLane = dexLane + 38089
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 24756
        dexLane = dexLane + 3284
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 56327
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3282
            1 -> dexLane + 3763
            else -> dexLane + 1786
        }
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane or 39439
        dexLane = dexLane shl 7
        dexLane = dexLane ushr 7
        val laneWord = "iahl"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 1
        val laneWord = "ndfh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 625
            1 -> dexLane + 2700
            else -> dexLane + 1194
        }
        dexLane = dexLane * 42
        dexLane = dexLane % 82
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane xor 557
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3231
            1 -> dexLane + 1358
            else -> dexLane + 3515
        }
        dexLane = dexLane and 10883
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 50014
        dexLane = dexLane xor 23369
        val laneWord = "dmbj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 43618
        val laneNums = intArrayOf(186, 112, 122)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 46643
        dexLane = dexLane and 4426
        dexLane = dexLane xor 15213
        val laneNums = intArrayOf(178, 167, 11)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "oghi"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 11
        if ((dexLane and 6) == 0) {
            dexLane = dexLane + 389
        }
        dexLane = dexLane xor 33742
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2970
            1 -> dexLane + 2361
            else -> dexLane + 2515
        }
        dexLane = dexLane * 30
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("DtqdoavrvyearrgamecDexLanes", "lane")
        }
    }
}
