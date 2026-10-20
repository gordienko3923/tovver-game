/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecCrest01 {
  fun tap(seed: Int): Int {
    var x = seed * 51
    x = x xor 10443
    x %= 726
    if (x < 0) x += 726
    return x
  }
}
