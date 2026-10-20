/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecFlux10 {
  fun tap(seed: Int): Int {
    val tag = "DtqdoavrvyearrgamecFlux10"
    var x = seed xor 18028
    for (ch in tag) {
      x = (x + ch.code * 71) and 0xffff
    }
    return x xor 2876
  }
}
