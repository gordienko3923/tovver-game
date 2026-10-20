/* autosetup-decoy:v1 */
package com.tovvergkamseh352mn9s

object DtqdoavrvyearrgamecShard06 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 13578
    x = (x ushr 4) xor 415
    x = (x * 5) and 0xffff
    return x
  }
}
