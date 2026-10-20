/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecRidge08 {
  fun tap(seed: Int): Int {
    var x = seed * 13
    x = x xor 18469
    x %= 2687
    if (x < 0) x += 2687
    return x
  }
}
