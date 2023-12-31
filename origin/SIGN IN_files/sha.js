(function () {
  var w = 8,
    G = "",
    C = 0,
    x = function (K, J) {
      this.highOrder = K;
      this.lowOrder = J;
    },
    E = function (L) {
      var J = [],
        K = (1 << w) - 1,
        N = L.length * w,
        M;
      for (M = 0; M < N; M += w) {
        J[M >> 5] |= (L.charCodeAt(M / w) & K) << (32 - w - (M % 32));
      }
      return J;
    },
    a = function (K) {
      var J = [],
        N = K.length,
        M,
        L;
      for (M = 0; M < N; M += 2) {
        L = parseInt(K.substr(M, 2), 16);
        if (!isNaN(L)) {
          J[M >> 3] |= L << (24 - 4 * (M % 8));
        } else {
          return "INVALID HEX STRING";
        }
      }
      return J;
    },
    n = function (K) {
      var J = C ? "0123456789ABCDEF" : "0123456789abcdef",
        O = "",
        N = K.length * 4,
        M,
        L;
      for (M = 0; M < N; M += 1) {
        L = K[M >> 2] >> ((3 - (M % 4)) * 8);
        O += J.charAt((L >> 4) & 15) + J.charAt(L & 15);
      }
      return O;
    },
    o = function (K) {
      var J =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        P = "",
        N = K.length * 4,
        M,
        L,
        O;
      for (M = 0; M < N; M += 3) {
        O =
          (((K[M >> 2] >> (8 * (3 - (M % 4)))) & 255) << 16) |
          (((K[(M + 1) >> 2] >> (8 * (3 - ((M + 1) % 4)))) & 255) << 8) |
          ((K[(M + 2) >> 2] >> (8 * (3 - ((M + 2) % 4)))) & 255);
        for (L = 0; L < 4; L += 1) {
          if (M * 8 + L * 6 <= K.length * 32) {
            P += J.charAt((O >> (6 * (3 - L))) & 63);
          } else {
            P += G;
          }
        }
      }
      return P;
    },
    i = function (J, K) {
      return (J << K) | (J >>> (32 - K));
    },
    g = function (J, K) {
      return (J >>> K) | (J << (32 - K));
    },
    f = function (J, K) {
      if (K <= 32) {
        return new x(
          (J.highOrder >>> K) | (J.lowOrder << (32 - K)),
          (J.lowOrder >>> K) | (J.highOrder << (32 - K)),
        );
      } else {
        return new x(
          (J.lowOrder >>> K) | (J.highOrder << (32 - K)),
          (J.highOrder >>> K) | (J.lowOrder << (32 - K)),
        );
      }
    },
    d = function (J, K) {
      return J >>> K;
    },
    b = function (J, K) {
      if (K <= 32) {
        return new x(
          J.highOrder >>> K,
          (J.lowOrder >>> K) | (J.highOrder << (32 - K)),
        );
      } else {
        return new x(0, J.highOrder << (32 - K));
      }
    },
    v = function (J, L, K) {
      return J ^ L ^ K;
    },
    m = function (J, L, K) {
      return (J & L) ^ (~J & K);
    },
    l = function (J, L, K) {
      return new x(
        (J.highOrder & L.highOrder) ^ (~J.highOrder & K.highOrder),
        (J.lowOrder & L.lowOrder) ^ (~J.lowOrder & K.lowOrder),
      );
    },
    F = function (J, L, K) {
      return (J & L) ^ (J & K) ^ (L & K);
    },
    D = function (J, L, K) {
      return new x(
        (J.highOrder & L.highOrder) ^
          (J.highOrder & K.highOrder) ^
          (L.highOrder & K.highOrder),
        (J.lowOrder & L.lowOrder) ^
          (J.lowOrder & K.lowOrder) ^
          (L.lowOrder & K.lowOrder),
      );
    },
    B = function (J) {
      return g(J, 2) ^ g(J, 13) ^ g(J, 22);
    },
    z = function (J) {
      var K = f(J, 28),
        M = f(J, 34),
        L = f(J, 39);
      return new x(
        K.highOrder ^ M.highOrder ^ L.highOrder,
        K.lowOrder ^ M.lowOrder ^ L.lowOrder,
      );
    },
    I = function (J) {
      return g(J, 6) ^ g(J, 11) ^ g(J, 25);
    },
    H = function (K) {
      var L = f(K, 14),
        J = f(K, 18),
        M = f(K, 41);
      return new x(
        L.highOrder ^ J.highOrder ^ M.highOrder,
        L.lowOrder ^ J.lowOrder ^ M.lowOrder,
      );
    },
    u = function (J) {
      return g(J, 7) ^ g(J, 18) ^ d(J, 3);
    },
    t = function (J) {
      var K = f(J, 1),
        L = f(J, 8),
        M = b(J, 7);
      return new x(
        K.highOrder ^ L.highOrder ^ M.highOrder,
        K.lowOrder ^ L.lowOrder ^ M.lowOrder,
      );
    },
    A = function (J) {
      return g(J, 17) ^ g(J, 19) ^ d(J, 10);
    },
    y = function (J) {
      var K = f(J, 19),
        M = f(J, 61),
        L = b(J, 6);
      return new x(
        K.highOrder ^ M.highOrder ^ L.highOrder,
        K.lowOrder ^ M.lowOrder ^ L.lowOrder,
      );
    },
    s = function (J, M) {
      var K = (J & 65535) + (M & 65535),
        L = (J >>> 16) + (M >>> 16) + (K >>> 16);
      return ((L & 65535) << 16) | (K & 65535);
    },
    r = function (K, J, O, N) {
      var M = (K & 65535) + (J & 65535) + (O & 65535) + (N & 65535),
        L = (K >>> 16) + (J >>> 16) + (O >>> 16) + (N >>> 16) + (M >>> 16);
      return ((L & 65535) << 16) | (M & 65535);
    },
    q = function (K, J, P, O, N) {
      var M =
          (K & 65535) + (J & 65535) + (P & 65535) + (O & 65535) + (N & 65535),
        L =
          (K >>> 16) +
          (J >>> 16) +
          (P >>> 16) +
          (O >>> 16) +
          (N >>> 16) +
          (M >>> 16);
      return ((L & 65535) << 16) | (M & 65535);
    },
    h = function (J, O) {
      var K, L, N, M;
      K = (J.lowOrder & 65535) + (O.lowOrder & 65535);
      L = (J.lowOrder >>> 16) + (O.lowOrder >>> 16) + (K >>> 16);
      N = ((L & 65535) << 16) | (K & 65535);
      K = (J.highOrder & 65535) + (O.highOrder & 65535) + (L >>> 16);
      L = (J.highOrder >>> 16) + (O.highOrder >>> 16) + (K >>> 16);
      M = ((L & 65535) << 16) | (K & 65535);
      return new x(M, N);
    },
    e = function (K, J, Q, P) {
      var N, L, O, M;
      N =
        (K.lowOrder & 65535) +
        (J.lowOrder & 65535) +
        (Q.lowOrder & 65535) +
        (P.lowOrder & 65535);
      L =
        (K.lowOrder >>> 16) +
        (J.lowOrder >>> 16) +
        (Q.lowOrder >>> 16) +
        (P.lowOrder >>> 16) +
        (N >>> 16);
      O = ((L & 65535) << 16) | (N & 65535);
      N =
        (K.highOrder & 65535) +
        (J.highOrder & 65535) +
        (Q.highOrder & 65535) +
        (P.highOrder & 65535) +
        (L >>> 16);
      L =
        (K.highOrder >>> 16) +
        (J.highOrder >>> 16) +
        (Q.highOrder >>> 16) +
        (P.highOrder >>> 16) +
        (N >>> 16);
      M = ((L & 65535) << 16) | (N & 65535);
      return new x(M, O);
    },
    c = function (Q, P, O, N, M) {
      var L, K, J, R;
      L =
        (Q.lowOrder & 65535) +
        (P.lowOrder & 65535) +
        (O.lowOrder & 65535) +
        (N.lowOrder & 65535) +
        (M.lowOrder & 65535);
      K =
        (Q.lowOrder >>> 16) +
        (P.lowOrder >>> 16) +
        (O.lowOrder >>> 16) +
        (N.lowOrder >>> 16) +
        (M.lowOrder >>> 16) +
        (L >>> 16);
      J = ((K & 65535) << 16) | (L & 65535);
      L =
        (Q.highOrder & 65535) +
        (P.highOrder & 65535) +
        (O.highOrder & 65535) +
        (N.highOrder & 65535) +
        (M.highOrder & 65535) +
        (K >>> 16);
      K =
        (Q.highOrder >>> 16) +
        (P.highOrder >>> 16) +
        (O.highOrder >>> 16) +
        (N.highOrder >>> 16) +
        (M.highOrder >>> 16) +
        (L >>> 16);
      R = ((K & 65535) << 16) | (L & 65535);
      return new x(R, J);
    },
    k = function (aa, Z) {
      var N = [],
        af,
        ae,
        ad,
        ac,
        ab,
        O,
        R = m,
        V = v,
        L = F,
        X = i,
        M = s,
        Y,
        S,
        J = q,
        U,
        Q = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        P = [
          1518500249, 1518500249, 1518500249, 1518500249, 1518500249,
          1518500249, 1518500249, 1518500249, 1518500249, 1518500249,
          1518500249, 1518500249, 1518500249, 1518500249, 1518500249,
          1518500249, 1518500249, 1518500249, 1518500249, 1518500249,
          1859775393, 1859775393, 1859775393, 1859775393, 1859775393,
          1859775393, 1859775393, 1859775393, 1859775393, 1859775393,
          1859775393, 1859775393, 1859775393, 1859775393, 1859775393,
          1859775393, 1859775393, 1859775393, 1859775393, 1859775393,
          2400959708, 2400959708, 2400959708, 2400959708, 2400959708,
          2400959708, 2400959708, 2400959708, 2400959708, 2400959708,
          2400959708, 2400959708, 2400959708, 2400959708, 2400959708,
          2400959708, 2400959708, 2400959708, 2400959708, 2400959708,
          3395469782, 3395469782, 3395469782, 3395469782, 3395469782,
          3395469782, 3395469782, 3395469782, 3395469782, 3395469782,
          3395469782, 3395469782, 3395469782, 3395469782, 3395469782,
          3395469782, 3395469782, 3395469782, 3395469782, 3395469782,
        ];
      aa[Z >> 5] |= 128 << (24 - (Z % 32));
      aa[(((Z + 65) >> 9) << 4) + 15] = Z;
      U = aa.length;
      for (Y = 0; Y < U; Y += 16) {
        af = Q[0];
        ae = Q[1];
        ad = Q[2];
        ac = Q[3];
        ab = Q[4];
        for (S = 0; S < 80; S += 1) {
          if (S < 16) {
            N[S] = aa[S + Y];
          } else {
            N[S] = X(N[S - 3] ^ N[S - 8] ^ N[S - 14] ^ N[S - 16], 1);
          }
          if (S < 20) {
            O = J(X(af, 5), R(ae, ad, ac), ab, P[S], N[S]);
          } else {
            if (S < 40) {
              O = J(X(af, 5), V(ae, ad, ac), ab, P[S], N[S]);
            } else {
              if (S < 60) {
                O = J(X(af, 5), L(ae, ad, ac), ab, P[S], N[S]);
              } else {
                O = J(X(af, 5), V(ae, ad, ac), ab, P[S], N[S]);
              }
            }
          }
          ab = ac;
          ac = ad;
          ad = X(ae, 30);
          ae = af;
          af = O;
        }
        Q[0] = M(af, Q[0]);
        Q[1] = M(ae, Q[1]);
        Q[2] = M(ad, Q[2]);
        Q[3] = M(ac, Q[3]);
        Q[4] = M(ab, Q[4]);
      }
      return Q;
    },
    j = function (af, ae, ad) {
      var ap,
        ao,
        an,
        am,
        al,
        ak,
        aj,
        ah,
        ab,
        X,
        S,
        ac,
        ai,
        ag,
        V,
        P,
        aa,
        N,
        M,
        J,
        ar,
        aq,
        Z,
        U,
        T,
        L,
        Q,
        R,
        O = [],
        Y;
      if (ad === "SHA-224" || ad === "SHA-256") {
        ac = 64;
        ai = (((ae + 65) >> 9) << 4) + 15;
        P = 16;
        aa = 1;
        Q = Number;
        N = s;
        M = r;
        J = q;
        ar = u;
        aq = A;
        Z = B;
        U = I;
        L = F;
        T = m;
        R = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
        if (ad === "SHA-224") {
          S = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ];
        } else {
          S = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ];
        }
      } else {
        if (ad === "SHA-384" || ad === "SHA-512") {
          ac = 80;
          ai = (((ae + 128) >> 10) << 5) + 31;
          P = 32;
          aa = 2;
          Q = x;
          N = h;
          M = e;
          J = c;
          ar = t;
          aq = y;
          Z = z;
          U = H;
          L = D;
          T = l;
          R = [
            new Q(1116352408, 3609767458),
            new Q(1899447441, 602891725),
            new Q(3049323471, 3964484399),
            new Q(3921009573, 2173295548),
            new Q(961987163, 4081628472),
            new Q(1508970993, 3053834265),
            new Q(2453635748, 2937671579),
            new Q(2870763221, 3664609560),
            new Q(3624381080, 2734883394),
            new Q(310598401, 1164996542),
            new Q(607225278, 1323610764),
            new Q(1426881987, 3590304994),
            new Q(1925078388, 4068182383),
            new Q(2162078206, 991336113),
            new Q(2614888103, 633803317),
            new Q(3248222580, 3479774868),
            new Q(3835390401, 2666613458),
            new Q(4022224774, 944711139),
            new Q(264347078, 2341262773),
            new Q(604807628, 2007800933),
            new Q(770255983, 1495990901),
            new Q(1249150122, 1856431235),
            new Q(1555081692, 3175218132),
            new Q(1996064986, 2198950837),
            new Q(2554220882, 3999719339),
            new Q(2821834349, 766784016),
            new Q(2952996808, 2566594879),
            new Q(3210313671, 3203337956),
            new Q(3336571891, 1034457026),
            new Q(3584528711, 2466948901),
            new Q(113926993, 3758326383),
            new Q(338241895, 168717936),
            new Q(666307205, 1188179964),
            new Q(773529912, 1546045734),
            new Q(1294757372, 1522805485),
            new Q(1396182291, 2643833823),
            new Q(1695183700, 2343527390),
            new Q(1986661051, 1014477480),
            new Q(2177026350, 1206759142),
            new Q(2456956037, 344077627),
            new Q(2730485921, 1290863460),
            new Q(2820302411, 3158454273),
            new Q(3259730800, 3505952657),
            new Q(3345764771, 106217008),
            new Q(3516065817, 3606008344),
            new Q(3600352804, 1432725776),
            new Q(4094571909, 1467031594),
            new Q(275423344, 851169720),
            new Q(430227734, 3100823752),
            new Q(506948616, 1363258195),
            new Q(659060556, 3750685593),
            new Q(883997877, 3785050280),
            new Q(958139571, 3318307427),
            new Q(1322822218, 3812723403),
            new Q(1537002063, 2003034995),
            new Q(1747873779, 3602036899),
            new Q(1955562222, 1575990012),
            new Q(2024104815, 1125592928),
            new Q(2227730452, 2716904306),
            new Q(2361852424, 442776044),
            new Q(2428436474, 593698344),
            new Q(2756734187, 3733110249),
            new Q(3204031479, 2999351573),
            new Q(3329325298, 3815920427),
            new Q(3391569614, 3928383900),
            new Q(3515267271, 566280711),
            new Q(3940187606, 3454069534),
            new Q(4118630271, 4000239992),
            new Q(116418474, 1914138554),
            new Q(174292421, 2731055270),
            new Q(289380356, 3203993006),
            new Q(460393269, 320620315),
            new Q(685471733, 587496836),
            new Q(852142971, 1086792851),
            new Q(1017036298, 365543100),
            new Q(1126000580, 2618297676),
            new Q(1288033470, 3409855158),
            new Q(1501505948, 4234509866),
            new Q(1607167915, 987167468),
            new Q(1816402316, 1246189591),
          ];
          if (ad === "SHA-384") {
            S = [
              new Q(3418070365, 3238371032),
              new Q(1654270250, 914150663),
              new Q(2438529370, 812702999),
              new Q(355462360, 4144912697),
              new Q(1731405415, 4290775857),
              new Q(41048885895, 1750603025),
              new Q(3675008525, 1694076839),
              new Q(1203062813, 3204075428),
            ];
          } else {
            S = [
              new Q(1779033703, 4089235720),
              new Q(3144134277, 2227873595),
              new Q(1013904242, 4271175723),
              new Q(2773480762, 1595750129),
              new Q(1359893119, 2917565137),
              new Q(2600822924, 725511199),
              new Q(528734635, 4215389547),
              new Q(1541459225, 327033209),
            ];
          }
        }
      }
      af[ae >> 5] |= 128 << (24 - (ae % 32));
      af[ai] = ae;
      Y = af.length;
      for (ag = 0; ag < Y; ag += P) {
        ap = S[0];
        ao = S[1];
        an = S[2];
        am = S[3];
        al = S[4];
        ak = S[5];
        aj = S[6];
        ah = S[7];
        for (V = 0; V < ac; V += 1) {
          if (V < 16) {
            O[V] = new Q(af[V * aa + ag], af[V * aa + ag + 1]);
          } else {
            O[V] = M(aq(O[V - 2]), O[V - 7], ar(O[V - 15]), O[V - 16]);
          }
          ab = J(ah, U(al), T(al, ak, aj), R[V], O[V]);
          X = N(Z(ap), L(ap, ao, an));
          ah = aj;
          aj = ak;
          ak = al;
          al = N(am, ab);
          am = an;
          an = ao;
          ao = ap;
          ap = N(ab, X);
        }
        S[0] = N(ap, S[0]);
        S[1] = N(ao, S[1]);
        S[2] = N(an, S[2]);
        S[3] = N(am, S[3]);
        S[4] = N(al, S[4]);
        S[5] = N(ak, S[5]);
        S[6] = N(aj, S[6]);
        S[7] = N(ah, S[7]);
      }
      switch (ad) {
        case "SHA-224":
          return [S[0], S[1], S[2], S[3], S[4], S[5], S[6]];
        case "SHA-256":
          return S;
        case "SHA-384":
          return [
            S[0].highOrder,
            S[0].lowOrder,
            S[1].highOrder,
            S[1].lowOrder,
            S[2].highOrder,
            S[2].lowOrder,
            S[3].highOrder,
            S[3].lowOrder,
            S[4].highOrder,
            S[4].lowOrder,
            S[5].highOrder,
            S[5].lowOrder,
          ];
        case "SHA-512":
          return [
            S[0].highOrder,
            S[0].lowOrder,
            S[1].highOrder,
            S[1].lowOrder,
            S[2].highOrder,
            S[2].lowOrder,
            S[3].highOrder,
            S[3].lowOrder,
            S[4].highOrder,
            S[4].lowOrder,
            S[5].highOrder,
            S[5].lowOrder,
            S[6].highOrder,
            S[6].lowOrder,
            S[7].highOrder,
            S[7].lowOrder,
          ];
        default:
          return [];
      }
    },
    p = function (K, J) {
      this.sha1 = null;
      this.sha224 = null;
      this.sha256 = null;
      this.sha384 = null;
      this.sha512 = null;
      this.strBinLen = null;
      this.strToHash = null;
      if ("HEX" === J) {
        if (0 !== K.length % 2) {
          return "TEXT MUST BE IN BYTE INCREMENTS";
        }
        this.strBinLen = K.length * 4;
        this.strToHash = a(K);
      } else {
        if ("ASCII" === J || "undefined" === typeof J) {
          this.strBinLen = K.length * w;
          this.strToHash = E(K);
        } else {
          return "UNKNOWN TEXT INPUT TYPE";
        }
      }
    };
  p.prototype = {
    getHash: function (K, J) {
      var M = null,
        L = this.strToHash.slice();
      switch (J) {
        case "HEX":
          M = n;
          break;
        case "B64":
          M = o;
          break;
        default:
          return "FORMAT NOT RECOGNIZED";
      }
      switch (K) {
        case "SHA-1":
          if (null === this.sha1) {
            this.sha1 = k(L, this.strBinLen);
          }
          return M(this.sha1);
        case "SHA-224":
          if (null === this.sha224) {
            this.sha224 = j(L, this.strBinLen, K);
          }
          return M(this.sha224);
        case "SHA-256":
          if (null === this.sha256) {
            this.sha256 = j(L, this.strBinLen, K);
          }
          return M(this.sha256);
        case "SHA-384":
          if (null === this.sha384) {
            this.sha384 = j(L, this.strBinLen, K);
          }
          return M(this.sha384);
        case "SHA-512":
          if (null === this.sha512) {
            this.sha512 = j(L, this.strBinLen, K);
          }
          return M(this.sha512);
        default:
          return "HASH NOT RECOGNIZED";
      }
    },
    getHMAC: function (S, R, Q, O) {
      var N,
        M,
        V,
        W,
        L,
        J,
        U,
        P,
        X,
        T = [],
        K = [];
      switch (O) {
        case "HEX":
          N = n;
          break;
        case "B64":
          N = o;
          break;
        default:
          return "FORMAT NOT RECOGNIZED";
      }
      switch (Q) {
        case "SHA-1":
          V = 64;
          X = 160;
          break;
        case "SHA-224":
          V = 64;
          X = 224;
          break;
        case "SHA-256":
          V = 64;
          X = 256;
          break;
        case "SHA-384":
          V = 128;
          X = 384;
          break;
        case "SHA-512":
          V = 128;
          X = 512;
          break;
        default:
          return "HASH NOT RECOGNIZED";
      }
      if ("HEX" === R) {
        if (0 !== S.length % 2) {
          return "KEY MUST BE IN BYTE INCREMENTS";
        }
        M = a(S);
        P = S.length * 4;
      } else {
        if ("ASCII" === R) {
          M = E(S);
          P = S.length * w;
        } else {
          return "UNKNOWN KEY INPUT TYPE";
        }
      }
      W = V * 8;
      U = V / 4 - 1;
      if (V < P / 8) {
        if ("SHA-1" === Q) {
          M = k(M, P);
        } else {
          M = j(M, P, Q);
        }
        M[U] &= 4294967040;
      } else {
        if (V > P / 8) {
          M[U] &= 4294967040;
        }
      }
      for (L = 0; L <= U; L += 1) {
        T[L] = M[L] ^ 909522486;
        K[L] = M[L] ^ 1549556828;
      }
      if ("SHA-1" === Q) {
        J = k(T.concat(this.strToHash), W + this.strBinLen);
        J = k(K.concat(J), W + X);
      } else {
        J = j(T.concat(this.strToHash), W + this.strBinLen, Q);
        J = j(K.concat(J), W + X, Q);
      }
      return N(J);
    },
  };
  window.jsSHA = p;
})();
