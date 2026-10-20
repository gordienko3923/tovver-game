/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecLattice07 {
  fun tap(seed: Int): Int {
    var x = seed * 95
    x = x xor 60548
    x %= 786
    if (x < 0) x += 786
    return x
  }
}
