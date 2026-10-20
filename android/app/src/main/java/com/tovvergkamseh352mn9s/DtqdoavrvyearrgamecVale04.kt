/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecVale04 {
  fun tap(seed: Int): Int {
    var x = seed * 3
    x = x xor 33813
    x %= 1834
    if (x < 0) x += 1834
    return x
  }
}
