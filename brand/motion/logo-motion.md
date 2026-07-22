# Logo Motion

Motion should feel precise, not decorative.

Allowed:

- subtle opacity reveal
- short highlight pass on a UI container, not on the core logo
- small scale entrance for splash/loading
- controlled morph only when supported by clean vector geometry

Avoid:

- endless glow loops
- noisy shine on raster logos
- elastic bounce
- heavy blur

Preferred timing:

- 420-680 ms
- cubic-bezier(0.22, 1, 0.36, 1)
- respect reduced motion
