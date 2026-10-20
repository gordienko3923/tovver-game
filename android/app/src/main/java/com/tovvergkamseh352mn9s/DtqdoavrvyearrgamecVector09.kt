/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecVector09 {
  fun tap(seed: Int): Int {
    var x = seed * 19
    x = x xor 42402
    x %= 1827
    if (x < 0) x += 1827
    return x
  }
}
